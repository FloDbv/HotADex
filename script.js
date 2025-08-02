document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const heroes = heroesData;
    const skills = skillsData;
    const skillProbs = skillProbabilities;
    const classes = classesData;
    const moveData = movementData;
    const allCreatures = creaturesData;
    const allSpells = spellsData;
    const allArtifacts = artifactsData;
    const creatureBanks = creatureBanksData;
    const grailInfo = grailData;
    const tavernTips = tavernTipsData; 

    // --- DOM Elements (Core UI) ---
    const navButtons = document.querySelectorAll('.nav-button');
    const views = document.querySelectorAll('.view');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const mobileDropdownContainer = document.getElementById('mobile-dropdown-container');

    // Desktop Search Elements
    const searchContainerDesktop = document.getElementById('search-container-desktop');
    const searchIconDesktop = document.getElementById('search-icon-desktop');
    const searchBarDesktop = document.getElementById('search-bar-desktop');
    const searchSuggestionsDesktop = document.getElementById('search-suggestions-desktop');

    // Mobile Search Elements
    const searchButtonMobile = document.getElementById('search-button-mobile');
    const searchModalMobile = document.getElementById('search-modal-mobile');
    const searchModalClose = document.getElementById('search-modal-close');
    const searchBarMobile = document.getElementById('search-bar-mobile');
    const searchSuggestionsMobile = document.getElementById('search-suggestions-mobile');

    // --- State Variables ---
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let searchIndex = [];

    // --- Initialization ---
    function init() {
        buildSearchIndex();
        setupEventListeners();
        if (isMobile) {
            renderClassView(Object.keys(classes)[0]);
            renderCreatureView('All');
            renderSpellView('Air');
            renderArtifactsView('All');
            renderMapObjectsView('Creature Banks');
            renderTavernTipsView('All');
            showView('heroes-view');
        } else {
            populateClassSidebar();
            renderClassView(Object.keys(classes)[0]);
            populateFactionSidebar();
            renderCreatureView('All');
            populateSchoolSidebar();
            renderSpellView('Air');
            populateArtifactsSidebar();
            renderArtifactsView('All');
            populateMapObjectsSidebar();
            renderMapObjectsView('Creature Banks');
            populateTavernTipsSidebar();
            renderTavernTipsView('All');
        }
    }

    // --- View Management ---
    function showView(viewId) {
        views.forEach(view => view.classList.add('view-hidden'));
        document.getElementById(viewId)?.classList.remove('view-hidden');
        navButtons.forEach(button => {
            if(button.dataset.view) { 
                button.classList.toggle('active', button.dataset.view === viewId);
            }
        });

        if (isMobile) {
            mobileDropdownContainer.innerHTML = ''; 
            switch (viewId) {
                case 'heroes-view': populateClassDropdown_Mobile(); break;
                case 'creatures-view': populateFactionDropdown_Mobile(); break;
                case 'spells-view': populateSchoolDropdown_Mobile(); break;
                case 'artifacts-view': populateArtifactsDropdown_Mobile(); break;
                case 'map-objects-view': populateMapObjectsDropdown_Mobile(); break;
                case 'taverntips-view': populateTavernTipsDropdown_Mobile(); break;
                default: mobileDropdownContainer.innerHTML = ''; break;
            }
        }
    }

    // --- Custom Mobile Dropdown Logic ---
    function setupCustomSelectEventListeners(container, renderCallback) {
        const button = container.querySelector('.custom-select-button');
        const valueSpan = container.querySelector('.custom-select-value');
        const optionsPanel = container.querySelector('.custom-select-options');
        const options = container.querySelectorAll('.custom-select-option');
        const arrow = container.querySelector('.custom-select-arrow');

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentlyOpen = document.querySelector('.custom-select-options:not(.hidden)');
            if (currentlyOpen && currentlyOpen !== optionsPanel) {
                currentlyOpen.classList.add('hidden');
                const otherArrow = currentlyOpen.parentElement.querySelector('.custom-select-arrow');
                if (otherArrow) otherArrow.classList.remove('up');
            }
            optionsPanel.classList.toggle('hidden');
            arrow.classList.toggle('up');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const selectedValue = option.dataset.value;
                valueSpan.textContent = option.textContent;
                optionsPanel.classList.add('hidden');
                arrow.classList.remove('up');
                if(renderCallback) renderCallback(selectedValue);
            });
        });
    }

    function createCustomSelect(optionsConfig, initialValue, initialText, renderCallback) {
        mobileDropdownContainer.innerHTML = '';
        const container = document.createElement('div');
        container.className = 'custom-select-container';
        const button = document.createElement('button');
        button.className = 'custom-select-button';
        button.innerHTML = `<span class="custom-select-value">${initialText}</span><span class="custom-select-arrow">▼</span>`;
        const optionsPanel = document.createElement('div');
        optionsPanel.className = 'custom-select-options hidden';

        if (optionsConfig.groups) {
            for (const groupName in optionsConfig.groups) {
                const optgroupDiv = document.createElement('div');
                optgroupDiv.className = 'custom-select-optgroup';
                optgroupDiv.textContent = groupName;
                optionsPanel.appendChild(optgroupDiv);
                optionsConfig.groups[groupName].forEach(item => {
                    const optionDiv = document.createElement('div');
                    optionDiv.className = 'custom-select-option';
                    optionDiv.dataset.value = item.value;
                    optionDiv.textContent = item.text;
                    optionsPanel.appendChild(optionDiv);
                });
            }
        } else {
            optionsConfig.items.forEach(item => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'custom-select-option';
                optionDiv.dataset.value = item.value;
                optionDiv.textContent = item.text;
                optionsPanel.appendChild(optionDiv);
            });
        }

        container.appendChild(button);
        container.appendChild(optionsPanel);
        mobileDropdownContainer.appendChild(container);
        setupCustomSelectEventListeners(container, renderCallback);
    }

    function populateClassDropdown_Mobile() {
        const factions = {};
        for (const className in classes) {
            const faction = classes[className].faction;
            if (!factions[faction]) factions[faction] = [];
            factions[faction].push({ value: className, text: className });
        }
        const sortedFactions = Object.keys(factions).sort();
        const groupedOptions = {};
        sortedFactions.forEach(faction => {
            groupedOptions[faction] = factions[faction];
        });
        createCustomSelect({ groups: groupedOptions }, Object.keys(classes)[0], Object.keys(classes)[0], renderClassView);
    }

    function populateFactionDropdown_Mobile() {
        const factions = ["All", ...[...new Set(allCreatures.map(c => c.faction))].sort()];
        const options = {
            groups: {
                "Factions": factions.map(f => ({ value: f, text: f === 'All' ? 'All Creatures' : f })),
                "Comparisons": [{ value: 'Compare Creatures', text: 'Compare Creatures' }]
            }
        };
        createCustomSelect(options, 'All', 'All Creatures', renderCreatureView);
    }

    function populateSchoolDropdown_Mobile() {
        const schools = ["Air", "Earth", "Fire", "Water"];
        const options = { items: schools.map(s => ({ value: s, text: `${s} Magic` })) };
        createCustomSelect(options, 'Air', 'Air Magic', renderSpellView);
    }

    function populateArtifactsDropdown_Mobile() {
        const classes = ["Treasure", "Minor", "Major", "Relic", "Combination"];
        const slots = ["Helmet", "Necklace", "Torso", "Weapon", "Shield", "Ring", "Cape", "Feet", "Misc."];
        const options = {
            groups: {
                "General": [{ value: "All", text: "All Artifacts" }],
                "By Class": classes.map(c => ({ value: `class-${c}`, text: c })),
                "By Slot": slots.map(s => ({ value: `slot-${s}`, text: s })),
                "Special": [{ value: "Grail", text: "Grail" }]
            }
        };
        createCustomSelect(options, 'All', 'All Artifacts', renderArtifactsView);
    }

    function populateMapObjectsDropdown_Mobile() {
        const options = { items: [{ value: 'Creature Banks', text: 'Creature Banks' }] };
        createCustomSelect(options, 'Creature Banks', 'Creature Banks', renderMapObjectsView);
    }

    function populateTavernTipsDropdown_Mobile() {
        const categories = ["All", "Hero Trade Screen", "Hero Management Screen", "Adventure Screen", "Combat Screen", "Town Screen"];
        const options = {
            groups: {
                "Keybinds": categories.map(c => ({ value: c, text: c }))
            }
        };
        createCustomSelect(options, 'All', 'All', renderTavernTipsView);
    }

    // --- Helper Functions ---
    function formatCost(cost) {
        if (typeof cost === 'object' && cost !== null) {
            return `${cost.gold} + ${cost.resource_amount}${cost.resource_type}`;
        }
        return cost;
    }

    function formatSpecial(special) {
        if (!special) return '–';
        if (typeof special === 'object' && special.description) {
            return `<span class="clickable" data-special-name="${special.name}" data-special-desc="${special.description}">${special.name}</span>`;
        }
        if (typeof special === 'string') {
            return special;
        }
        return special.name || '–';
    }

    function generateItemId(type, name) {
        return `${type.toLowerCase()}-${name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;
    }

    // --- Search Indexing and Execution ---
    function buildSearchIndex() {
        const getKeywords = (...args) => args.join(' ').toLowerCase().replace(/<[^>]*>/g, ' ').split(/[\s,()/]+/).filter(k => k && k.length > 1);
        searchIndex = []; // Clear index before building
        heroes.forEach(h => searchIndex.push({ keywords: getKeywords(h.name, h.specialty, h.faction, 'hero', h.class), displayText: h.name, type: 'Hero', action: 'navigate', view: 'heroes-view', filter: h.class, targetId: generateItemId('hero', h.name) }));
        allCreatures.forEach(c => searchIndex.push({ keywords: getKeywords(c.name, c.faction, 'creature', c.special?.name, c.special?.description, c.lore, c.gameplay_analysis), displayText: c.name, type: 'Creature', action: 'navigate', view: 'creatures-view', filter: c.faction, targetId: generateItemId('creature', c.name) }));
        Object.values(allSpells).forEach(s => searchIndex.push({ keywords: getKeywords(s.name, s.school, 'spell', s.effect.summary, s.general_info), displayText: s.name, type: 'Spell', action: 'navigate', view: 'spells-view', filter: s.school, targetId: generateItemId('spell', s.name) }));
        allArtifacts.forEach(a => searchIndex.push({ keywords: getKeywords(a.name, 'artifact', a.effect, a.class, a.slot), displayText: a.name, type: 'Artifact', action: 'navigate', view: 'artifacts-view', filter: `class-${a.class}`, targetId: generateItemId('artifact', a.name) }));
        Object.entries(skills).forEach(([skillName, skillData]) => searchIndex.push({ keywords: getKeywords(skillName, 'skill', skillData.description.Basic, skillData.gameplay_analysis), displayText: skillName, type: 'Skill', action: 'modal', name: skillName }));
        creatureBanks.forEach(b => searchIndex.push({ keywords: getKeywords(b.name, 'map object', 'creature bank', b.guards), displayText: b.name, type: 'Map Object', action: 'navigate', view: 'map-objects-view', filter: 'Creature Banks', targetId: generateItemId('map-object', b.name) }));
        const factions = [...new Set(allCreatures.map(c => c.faction))].filter(f => f !== 'Neutral');
        factions.forEach(faction => {
            searchIndex.push({ keywords: getKeywords(faction, 'creatures'), displayText: `${faction} (Creatures)`, type: 'Faction', action: 'navigate', view: 'creatures-view', filter: faction });
            const heroClass = Object.entries(classes).find(([_,d]) => d.faction === faction)?.[0];
            if (heroClass) {
                searchIndex.push({ keywords: getKeywords(faction, 'heroes'), displayText: `${faction} (Heroes)`, type: 'Faction', action: 'navigate', view: 'heroes-view', filter: heroClass });
            }
        });
        searchIndex.push({ keywords: getKeywords("Primary Skills"), displayText: 'Primary Skills', type: 'UI Section', action: 'navigate', view: 'heroes-view', filter: 'Knight' });
        searchIndex.push({ keywords: getKeywords("Movement Points"), displayText: 'Movement Points', type: 'UI Section', action: 'navigate', view: 'heroes-view', filter: 'Knight' });
        searchIndex.push({ keywords: getKeywords("Magic & Wisdom"), displayText: 'Magic & Wisdom', type: 'UI Section', action: 'navigate', view: 'heroes-view', filter: 'Knight' });
        const primarySkills = ['Attack', 'Defense', 'Spell Power', 'Knowledge'];
        primarySkills.forEach(ps => {
            searchIndex.push({ keywords: getKeywords(ps, 'primary skill'), displayText: ps, type: 'Primary Skill', action: 'modal', name: ps.toLowerCase().replace(' ', '') });
        });
        const magicSchools = ['Air Magic', 'Earth Magic', 'Fire Magic', 'Water Magic'];
        magicSchools.forEach(ms => {
            searchIndex.push({ keywords: getKeywords(ms, 'magic school'), displayText: ms, type: 'Spell School', action: 'navigate', view: 'spells-view', filter: ms.split(' ')[0] });
        });
        searchIndex.push({ keywords: getKeywords('grail', 'holy grail'), displayText: 'Grail', type: 'Building', action: 'navigate', view: 'artifacts-view', filter: 'Grail' });
        const keybindCategories = ["Hero Trade Screen", "Hero Management Screen", "Adventure Screen", "Combat Screen", "Town Screen"];
        keybindCategories.forEach(cat => searchIndex.push({ keywords: getKeywords(cat, 'keybinds', 'hotkeys'), displayText: `${cat} (Keybinds)`, type: 'Keybinds', action: 'navigate', view: 'taverntips-view', filter: cat }));
        searchIndex.push({ keywords: getKeywords('keybinds', 'hotkeys'), displayText: 'Keybinds (All)', type: 'Keybinds', action: 'navigate', view: 'taverntips-view', filter: 'All' });
    }

    function performSearch(query) {
        const lowerCaseQuery = query.toLowerCase();
        const results = searchIndex.map(item => {
            let score = 0;
            const lowerCaseDisplayText = item.displayText.toLowerCase();
            if (lowerCaseDisplayText === lowerCaseQuery) score = 100;
            else if (lowerCaseDisplayText.startsWith(lowerCaseQuery)) score = 50;
            else if (item.keywords.some(keyword => keyword.includes(lowerCaseQuery))) score = 10;
            return { ...item, score };
        }).filter(item => item.score > 0).sort((a, b) => b.score - a.score);

        if (isMobile) {
            displaySuggestions(results, searchSuggestionsMobile);
        } else {
            displaySuggestions(results, searchSuggestionsDesktop);
        }
    }

    function displaySuggestions(results, container) {
        if (results.length === 0) {
            hideSuggestions(false);
            return;
        }
        const suggestionsHTML = results.slice(0, 15).map(result => `
            <div class="suggestion-item" data-name="${result.name || result.displayText}" data-type="${result.type}" data-action="${result.action}" data-view="${result.view || ''}" data-filter="${result.filter || ''}" data-target-id="${result.targetId || ''}">
                <span class="suggestion-name">${result.displayText}</span>
                <span class="suggestion-type">${result.type}</span>
            </div>`).join('');
        container.innerHTML = suggestionsHTML;
        container.classList.remove('search-hidden');
        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const { name, type, action, view, filter, targetId } = item.dataset;
                if (action === 'navigate') {
                    showView(view);
                    switch (view) {
                        case 'heroes-view': renderClassView(filter); break;
                        case 'creatures-view': renderCreatureView(filter); break;
                        case 'spells-view': renderSpellView(filter); break;
                        case 'artifacts-view': renderArtifactsView(filter); break;
                        case 'map-objects-view': renderMapObjectsView(filter); break;
                        case 'taverntips-view': renderTavernTipsView(filter); break;
                    }

                    if (targetId) {
                        setTimeout(() => {
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                targetElement.classList.add('highlight-flash');
                                setTimeout(() => targetElement.classList.remove('highlight-flash'), 1500);
                            }
                        }, 100);
                    }

                } else {
                    switch (type) {
                        case 'Skill': displaySkillDetails(name); break;
                        case 'Primary Skill': displayPrimarySkillDetails(name); break;
                    }
                }
                hideSuggestions(true);
            });
        });
    }

    function hideSuggestions(hideAll = true) {
        searchSuggestionsDesktop.classList.add('search-hidden');
        searchSuggestionsDesktop.innerHTML = '';
        if (hideAll) {
            searchBarDesktop.value = '';
            searchBarDesktop.classList.add('search-bar-collapsed');
        }
        if (isMobile) {
            searchBarMobile.value = '';
            searchSuggestionsMobile.innerHTML = '';
            searchModalMobile.classList.add('modal-hidden');
        }
    }

    // --- Heroes View Functions ---
    function populateClassSidebar() {
        const classSidebar = document.getElementById('class-sidebar');
        if (!classSidebar) return;
        classSidebar.innerHTML = '';
        const factions = {};
        for (const className in classes) {
            const faction = classes[className].faction;
            if (!factions[faction]) factions[faction] = [];
            factions[faction].push(className);
        }
        const sortedFactions = Object.keys(factions).sort();
        for (const factionName of sortedFactions) {
            const factionTab = document.createElement('div');
            factionTab.className = 'faction-tab';
            const factionButton = document.createElement('button');
            factionButton.className = 'faction-tab-button';
            factionButton.dataset.faction = factionName;
            factionButton.textContent = factionName;
            const classSubTabs = document.createElement('div');
            classSubTabs.className = 'class-sub-tabs hidden';
            const classesInFaction = factions[factionName];
            classesInFaction.forEach(className => {
                const classButton = document.createElement('button');
                classButton.className = 'sidebar-button';
                classButton.dataset.className = className;
                classButton.textContent = className;
                classButton.addEventListener('click', () => renderClassView(className));
                classSubTabs.appendChild(classButton);
            });
            factionButton.addEventListener('click', () => {
                if (classesInFaction.length > 0) renderClassView(classesInFaction[0]);
            });
            factionTab.appendChild(factionButton);
            factionTab.appendChild(classSubTabs);
            classSidebar.appendChild(factionTab);
        }
    }

    function renderClassView(className) {
        const classData = classes[className];
        const heroesOfClass = heroes.filter(h => h.class === className);
        if (isMobile) {
            renderClassView_Mobile(className, classData, heroesOfClass);
        } else {
            renderClassView_Desktop(className, classData, heroesOfClass);
        }
        attachMainContentListeners();
    }

    function renderClassView_Desktop(className, classData, heroesOfClass) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        const selectedFactionName = classData.faction;
        document.querySelectorAll('#class-sidebar .faction-tab-button').forEach(btn => btn.classList.toggle('active', btn.dataset.faction === selectedFactionName));
        document.querySelectorAll('#class-sidebar .class-sub-tabs').forEach(container => container.classList.add('hidden'));
        const activeFactionButton = document.querySelector(`.faction-tab-button[data-faction="${selectedFactionName}"]`);
        if (activeFactionButton) activeFactionButton.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll('#class-sidebar .sidebar-button').forEach(btn => btn.classList.toggle('active', btn.dataset.className === className));
        const classSkillProbs = skillProbabilities[className];
        const processTerrain = (terrainString) => terrainString.split(', ').map(terrain => moveData.nativeTerrains[terrain] ? `<span class="clickable" data-terrain-name="${terrain}">${terrain}</span>` : terrain).join(', ');

        mainContent.innerHTML = `
            <div class="page-grid">
                <div id="class-primary-skills-panel" class="panel"><h2>${className} Primary Skills (%)</h2><table class="stats-grid-table"><thead><tr><th></th><th class="clickable" data-primary-skill="attack">A</th><th class="clickable" data-primary-skill="defense">D</th><th class="clickable" data-primary-skill="power">SP</th><th class="clickable" data-primary-skill="knowledge">K</th></tr></thead><tbody><tr><td>Lvl 1</td><td>${classData.primary_skills.attack}</td><td>${classData.primary_skills.defense}</td><td>${classData.primary_skills.power}</td><td>${classData.primary_skills.knowledge}</td></tr><tr><td>Lvl 2-9</td><td>${classData.primary_skill_chance.levels_2_9.attack}</td><td>${classData.primary_skill_chance.levels_2_9.defense}</td><td>${classData.primary_skill_chance.levels_2_9.power}</td><td>${classData.primary_skill_chance.levels_2_9.knowledge}</td></tr><tr><td>Lvl 10+</td><td>${classData.primary_skill_chance.levels_10_plus.attack}</td><td>${classData.primary_skill_chance.levels_10_plus.defense}</td><td>${classData.primary_skill_chance.levels_10_plus.power}</td><td>${classData.primary_skill_chance.levels_10_plus.knowledge}</td></tr></tbody></table></div>
                <div id="movement-panel" class="panel"><h2>Movement Points</h2><table class="movement-table"><thead><tr><th>Unit Spd</th><th>Mvt Pts</th></tr></thead><tbody>${moveData.speedToBase.map(row => `<tr><td>${row.speed}</td><td>${row.points}</td></tr>`).join('')}</tbody></table><table class="movement-table"><thead><tr><th>Terrain</th><th>Cost (S/D)</th></tr></thead><tbody>${moveData.groundCost.map(row => `<tr><td>${processTerrain(row.terrain)}</td><td>${row.straight} / ${row.diagonal}</td></tr>`).join('')}</tbody></table><div class="movement-links"><span class="clickable" data-modal-type="flying">Flying Movement Points</span><br><span class="clickable" data-modal-type="diagonal">Diagonal Move Exception</span></div></div>
                <div id="magic-chance-panel" class="panel"><h2>Magic & Wisdom %</h2><div class="magic-chance-grid"><div class="school-name clickable" data-school-name="Air">Air</div><div class="school-name clickable" data-school-name="Earth">Earth</div><div class="school-name clickable" data-school-name="Fire">Fire</div><div class="school-name clickable" data-school-name="Water">Water</div><div class="school-chance">${classData.magic_roll_chance.air}%</div><div class="school-chance">${classData.magic_roll_chance.earth}%</div><div class="school-chance">${classData.magic_roll_chance.fire}%</div><div class="school-chance">${classData.magic_roll_chance.water}%</div></div><div class="guaranteed-skill-info"><div>Choice of a Magic School guaranteed every ${classData.guaranteed_magic_school} lvl</div><div>Choice of Wisdom guaranteed every ${classData.guaranteed_wisdom} lvl</div></div></div>
                <div id="secondary-skills-panel" class="panel"><h2>Sec. Skills %</h2><table class="info-table">${Object.entries(classSkillProbs).sort((a, b) => b[1] - a[1]).map(([skill, chance]) => `<tr class="clickable" data-skill-name="${skill}"><td>${skill}</td><td>${chance}</td></tr>`).join('')}</table></div>
                <div id="heroes-panel" class="panel"><h2>Heroes</h2><table class="hero-table"><thead><tr><th>Hero</th><th>Specialty</th><th>Starting skill(s)</th><th>Army</th><th>Spell</th></tr></thead><tbody>${heroesOfClass.map(hero => `<tr id="${generateItemId('hero', hero.name)}"><td><div class="hero-name-cell clickable" data-hero-name="${hero.name}"><img class="hero-portrait" src="https://heroes.thelazy.net/images/thumb/e/e4/Hero_${hero.name.replace(/\s/g, '_')}.png/28px-Hero_${hero.name.replace(/\s/g, '_')}.png" alt="${hero.name}" onerror="this.style.display='none'"><strong>${hero.name}</strong></div></td><td class="clickable" data-specialty-name="${hero.specialty}" data-specialty-desc="${hero.specialty_description}">${hero.specialty}</td><td>${hero.skills.map(skill => `<div class="clickable" data-skill-name="${skill.replace(/^(Basic|Advanced|Expert)\s/, '')}">${skill}</div>`).join('')}</td><td>${hero.army.map(u => `${u.quantity} ${u.creature}`).join('<br>')}</td><td>${hero.spell || '–'}</td></tr>`).join('')}</tbody></table></div>
            </div>`;
    }

    function renderClassView_Mobile(className, classData, heroesOfClass) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        const classSkillProbs = skillProbabilities[className];
        const processTerrain = (terrainString) => terrainString.split(', ').map(terrain => moveData.nativeTerrains[terrain] ? `<span class="clickable" data-terrain-name="${terrain}">${terrain}</span>` : terrain).join(', ');
        const heroesHTML = heroesOfClass.map(hero => `
            <div id="${generateItemId('hero', hero.name)}" class="mobile-card hero-card clickable" data-hero-name="${hero.name}">
                <div class="card-header">
                    <div class="hero-info">
                        <img class="hero-portrait" src="https://heroes.thelazy.net/images/thumb/e/e4/Hero_${hero.name.replace(/\s/g, '_')}.png/32px-Hero_${hero.name.replace(/\s/g, '_')}.png" alt="${hero.name}" onerror="this.style.display='none'">
                        <div>
                            <div class="hero-name">${hero.name}</div>
                            <div class="hero-specialty clickable" data-specialty-name="${hero.specialty}" data-specialty-desc="${hero.specialty_description}">${hero.specialty}</div>
                        </div>
                    </div>
                </div>
                <div class="card-body hero-details">
                    <p><span class="label">Skills:</span> ${hero.skills.map(skill => `<span class="clickable" data-skill-name="${skill.replace(/^(Basic|Advanced|Expert)\s/, '')}">${skill}</span>`).join(', ')}</p>
                    <p><span class="label">Army:</span> ${hero.army.map(u => `${u.quantity} ${u.creature}`).join(', ')}</p>
                    ${hero.spell ? `<p><span class="label">Spell:</span> ${hero.spell}</p>` : ''}
                </div>
            </div>`).join('');

        mainContent.innerHTML = `
            <div class="mobile-accordion">
                <details>
                    <summary>Primary Skills</summary>
                    <div class="panel-content"><table class="stats-grid-table"><thead><tr><th></th><th class="clickable" data-primary-skill="attack">A</th><th class="clickable" data-primary-skill="defense">D</th><th class="clickable" data-primary-skill="power">SP</th><th class="clickable" data-primary-skill="knowledge">K</th></tr></thead><tbody><tr><td>Lvl 1</td><td>${classData.primary_skills.attack}</td><td>${classData.primary_skills.defense}</td><td>${classData.primary_skills.power}</td><td>${classData.primary_skills.knowledge}</td></tr><tr><td>Lvl 2-9</td><td>${classData.primary_skill_chance.levels_2_9.attack}</td><td>${classData.primary_skill_chance.levels_2_9.defense}</td><td>${classData.primary_skill_chance.levels_2_9.power}</td><td>${classData.primary_skill_chance.levels_2_9.knowledge}</td></tr><tr><td>Lvl 10+</td><td>${classData.primary_skill_chance.levels_10_plus.attack}</td><td>${classData.primary_skill_chance.levels_10_plus.defense}</td><td>${classData.primary_skill_chance.levels_10_plus.power}</td><td>${classData.primary_skill_chance.levels_10_plus.knowledge}</td></tr></tbody></table></div>
                </details>
                <details>
                    <summary>Secondary Skills %</summary>
                    <div class="panel-content"><table class="info-table">${Object.entries(classSkillProbs).sort((a, b) => b[1] - a[1]).map(([skill, chance]) => `<tr class="clickable" data-skill-name="${skill}"><td>${skill}</td><td>${chance}</td></tr>`).join('')}</table></div>
                </details>
                <details>
                    <summary>Magic & Wisdom %</summary>
                    <div class="panel-content"><div class="magic-chance-grid"><div class="school-name clickable" data-school-name="Air">Air</div><div class="school-name clickable" data-school-name="Earth">Earth</div><div class="school-name clickable" data-school-name="Fire">Fire</div><div class="school-name clickable" data-school-name="Water">Water</div><div class="school-chance">${classData.magic_roll_chance.air}%</div><div class="school-chance">${classData.magic_roll_chance.earth}%</div><div class="school-chance">${classData.magic_roll_chance.fire}%</div><div class="school-chance">${classData.magic_roll_chance.water}%</div></div><div class="guaranteed-skill-info"><div>Magic School guaranteed every ${classData.guaranteed_magic_school} lvl</div><div>Wisdom guaranteed every ${classData.guaranteed_wisdom} lvl</div></div></div>
                </details>
                 <details>
                    <summary>Movement</summary>
                    <div class="panel-content"><table class="movement-table"><thead><tr><th>Unit Spd</th><th>Mvt Pts</th></tr></thead><tbody>${moveData.speedToBase.map(row => `<tr><td>${row.speed}</td><td>${row.points}</td></tr>`).join('')}</tbody></table><table class="movement-table"><thead><tr><th>Terrain</th><th>Cost (S/D)</th></tr></thead><tbody>${moveData.groundCost.map(row => `<tr><td>${processTerrain(row.terrain)}</td><td>${row.straight} / ${row.diagonal}</td></tr>`).join('')}</tbody></table><div class="movement-links"><span class="clickable" data-modal-type="flying">Flying Movement</span><br><span class="clickable" data-modal-type="diagonal">Diagonal Exception</span></div></div>
                </details>
            </div>
            <div class="panel" style="margin-top: 0.75rem;"><h2>Heroes</h2><div class="mobile-card-list">${heroesHTML}</div></div>`;
    }

    // --- Creatures View Functions ---
    function populateFactionSidebar() {
        const factionSidebar = document.getElementById('faction-sidebar');
        if (!factionSidebar) return;
        const factions = ["All", ...[...new Set(allCreatures.map(c => c.faction))].sort()];
        factionSidebar.innerHTML = `<button class="sidebar-button active" data-faction="All">All Creatures</button>`;
        factions.slice(1).forEach(faction => {
            const button = document.createElement('button');
            button.className = 'sidebar-button';
            button.dataset.faction = faction;
            button.textContent = faction;
            factionSidebar.appendChild(button);
        });
        factionSidebar.innerHTML += `<div class="sidebar-divider"></div><button class="sidebar-button" data-faction="Compare Creatures">Compare Creatures</button>`;
        factionSidebar.querySelectorAll('.sidebar-button').forEach(button => {
            button.addEventListener('click', () => renderCreatureView(button.dataset.faction));
        });
    }

    function renderCreatureView(faction) {
        if (isMobile) {
            renderCreatureView_Mobile(faction);
        } else {
            renderCreatureView_Desktop(faction);
        }
        attachCreatureContentListeners();
    }

    function renderCreatureView_Desktop(faction) {
        const creatureContent = document.getElementById('creature-content');
        if (!creatureContent) return;
        document.querySelectorAll('#faction-sidebar .sidebar-button').forEach(btn => btn.classList.toggle('active', btn.dataset.faction === faction));
        if (faction === "Compare Creatures") {
            renderCreatureComparisonView();
            return;
        }
        let nativeTerrainInfo = '';
        const factionsWithTerrain = ["Castle", "Rampart", "Tower", "Inferno", "Necropolis", "Dungeon", "Stronghold", "Fortress", "Conflux", "Cove", "Factory"];
        if (factionsWithTerrain.includes(faction)) {
            let terrainName = '', associatedFactions = [];
            for (const [terrain, factionList] of Object.entries(moveData.nativeTerrains)) {
                if (factionList.includes(faction)) {
                    terrainName = terrain;
                    associatedFactions = factionList;
                    break;
                }
            }
            if (terrainName) {
                const combatBonus = "+1 A / D / Spd";
                const movementBonus = `No ${terrainName} terrain movement penalty if all units in the hero army are ${associatedFactions.join(' / ')} ones`;
                nativeTerrainInfo = `<p class="native-terrain-info"><strong>Native terrain:</strong> ${terrainName} &rarr; ${combatBonus} ${terrainName !== 'Grass' ? `- ${movementBonus}` : ''}</p>`;
            }
        }
        const filteredCreatures = faction === 'All' ? allCreatures : allCreatures.filter(c => c.faction === faction);
        creatureContent.innerHTML = `<div class="panel"><h2>${faction} Creatures</h2>${nativeTerrainInfo}<table class="creature-table"><thead><tr><th>Lvl</th><th>Creature</th><th>Att</th><th>Def</th><th>Dmg</th><th>HP</th><th>Spd</th><th>Grw</th><th>AI</th><th>Cost</th><th>Special</th></tr></thead><tbody>${filteredCreatures.map(c => `<tr id="${generateItemId('creature', c.name)}" class="${c.upgraded ? 'upgraded-row' : ''}"><td>${c.level}${c.upgraded ? '+' : ''}</td><td class="creature-name clickable" data-creature-name="${c.name}">${c.name}</td><td>${c.att}</td><td>${c.def}</td><td>${c.dmg_min}-${c.dmg_max}</td><td>${c.hp}</td><td>${c.spd}</td><td>${c.grw}</td><td>${c.ai_val}</td><td>${formatCost(c.cost)}</td><td>${formatSpecial(c.special)}</td></tr>`).join('')}</tbody></table></div>`;
    }

    function renderCreatureView_Mobile(faction) {
        const creatureContent = document.getElementById('creature-content');
        if (!creatureContent) return;
        if (faction === "Compare Creatures") {
            renderCreatureComparisonView();
            return;
        }
        const filteredCreatures = faction === 'All' ? allCreatures : allCreatures.filter(c => c.faction === faction);
        const cardsHTML = filteredCreatures.map(c => `
            <div id="${generateItemId('creature', c.name)}" class="mobile-card creature-card clickable ${c.upgraded ? 'upgraded' : ''}" data-creature-name="${c.name}">
                <div class="card-header">
                    <span class="card-title">${c.name}</span>
                    <span class="card-subtitle">Lvl ${c.level}${c.upgraded ? '+' : ''}</span>
                </div>
                <div class="card-body">
                    <div class="card-stats">
                        <div class="stat-item"><span class="label">Attack</span><span class="stat-value">${c.att}</span></div>
                        <div class="stat-item"><span class="label">Defense</span><span class="stat-value">${c.def}</span></div>
                        <div class="stat-item"><span class="label">Damage</span><span class="stat-value">${c.dmg_min}-${c.dmg_max}</span></div>
                        <div class="stat-item"><span class="label">Health</span><span class="stat-value">${c.hp}</span></div>
                        <div class="stat-item"><span class="label">Speed</span><span class="stat-value">${c.spd}</span></div>
                        <div class="stat-item"><span class="label">Growth</span><span class="stat-value">${c.grw}</span></div>
                    </div>
                    ${c.special ? `<div class="card-special"><span class="label">Special:</span> ${formatSpecial(c.special)}</div>` : ''}
                </div>
            </div>
        `).join('');
        creatureContent.innerHTML = `<div class="mobile-card-list">${cardsHTML}</div>`;
    }

    // --- Spells View Functions ---
    function populateSchoolSidebar() {
        const schoolSidebar = document.getElementById('school-sidebar');
        if (!schoolSidebar) return;
        const schools = ["Air", "Earth", "Fire", "Water"];
        schoolSidebar.innerHTML = '';
        schools.forEach(school => {
            const button = document.createElement('button');
            button.className = 'sidebar-button';
            button.dataset.school = school;
            button.textContent = `${school} Magic`;
            schoolSidebar.appendChild(button);
        });
        schoolSidebar.querySelectorAll('.sidebar-button').forEach(button => {
            button.addEventListener('click', () => renderSpellView(button.dataset.school));
        });
    }

    function renderSpellView(school) {
        if (isMobile) {
            renderSpellView_Mobile(school);
        } else {
            renderSpellView_Desktop(school);
        }
        attachSpellContentListeners();
    }

    function renderSpellView_Desktop(school) {
        const spellContent = document.getElementById('spell-content');
        if (!spellContent) return;
        document.querySelectorAll('#school-sidebar .sidebar-button').forEach(btn => btn.classList.toggle('active', btn.dataset.school === school));
        const spellsToDisplay = [...Object.values(allSpells).filter(s => s.school === "All"), ...Object.values(allSpells).filter(s => s.school === school)].sort((a,b) => a.level - b.level);
        const spellsByLevel = {};
        spellsToDisplay.forEach(spell => {
            if (!spellsByLevel[spell.level]) spellsByLevel[spell.level] = [];
            spellsByLevel[spell.level].push(spell);
        });
        let contentHTML = `<div class="panel"><h2>${school} Magic Spells</h2>`;
        for (const level in spellsByLevel) {
            contentHTML += `<h3>Level ${level}</h3><table class="spell-list-table"><thead><tr><th>Spell</th><th>Cost (w/o / with skill)</th><th>Duration</th><th>Effect</th></tr></thead><tbody>`;
            spellsByLevel[level].forEach(spell => {
                contentHTML += `<tr id="${generateItemId('spell', spell.name)}"><td class="clickable spell-name" data-spell-name="${spell.name}">${spell.name}</td><td>${spell.cost}</td><td>${spell.duration}</td><td>${spell.effect.summary}</td></tr>`;
            });
            contentHTML += `</tbody></table>`;
        }
        contentHTML += `</div>`;
        spellContent.innerHTML = contentHTML;
    }

    function renderSpellView_Mobile(school) {
        const spellContent = document.getElementById('spell-content');
        if (!spellContent) return;
        const spellsToDisplay = [...Object.values(allSpells).filter(s => s.school === "All"), ...Object.values(allSpells).filter(s => s.school === school)].sort((a,b) => a.level - b.level);
        const cardsHTML = spellsToDisplay.map(spell => `
            <div id="${generateItemId('spell', spell.name)}" class="mobile-card spell-card clickable" data-spell-name="${spell.name}">
                <div class="card-header">
                    <span class="card-title">${spell.name}</span>
                    <span class="card-subtitle">Lvl ${spell.level} / ${spell.cost} MP</span>
                </div>
                <div class="card-body">
                    <p>${spell.effect.summary}</p>
                </div>
            </div>
        `).join('');
        spellContent.innerHTML = `<div class="mobile-card-list">${cardsHTML}</div>`;
    }

    // --- Artifacts View Functions ---
    function populateArtifactsSidebar() {
        const artifactsSidebar = document.getElementById('artifacts-sidebar');
        if (!artifactsSidebar) return;
        const classes = ["Treasure", "Minor", "Major", "Relic", "Combination"];
        const slots = ["Helmet", "Necklace", "Torso", "Weapon", "Shield", "Ring", "Cape", "Feet", "Misc."];
        let sidebarHTML = `<button class="sidebar-button active" data-artifact-filter="All">All Artifacts</button><div class="sidebar-divider"></div>`;
        sidebarHTML += `<div class="faction-tab"><button class="faction-tab-button" data-artifact-filter="class">By Class</button><div class="class-sub-tabs hidden">`;
        classes.forEach(c => sidebarHTML += `<button class="sidebar-button" data-artifact-filter="class-${c}">${c}</button>`);
        sidebarHTML += `</div></div>`;
        sidebarHTML += `<div class="faction-tab"><button class="faction-tab-button" data-artifact-filter="slot">By Slot</button><div class="class-sub-tabs hidden">`;
        slots.forEach(s => sidebarHTML += `<button class="sidebar-button" data-artifact-filter="slot-${s}">${s}</button>`);
        sidebarHTML += `</div></div>`;
        sidebarHTML += `<div class="sidebar-divider"></div><button class="sidebar-button" data-artifact-filter="Grail">Grail</button>`;
        artifactsSidebar.innerHTML = sidebarHTML;
        artifactsSidebar.querySelectorAll('.sidebar-button').forEach(button => button.addEventListener('click', (e) => renderArtifactsView(e.currentTarget.dataset.artifactFilter)));
        artifactsSidebar.querySelectorAll('.faction-tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const subTabs = e.currentTarget.nextElementSibling;
                const wasOpen = !subTabs.classList.contains('hidden');
                artifactsSidebar.querySelectorAll('.class-sub-tabs').forEach(s => s.classList.add('hidden'));
                if (!wasOpen) subTabs.classList.remove('hidden');
            });
        });
    }

    function renderArtifactsView(filter) {
        if (isMobile) {
            renderArtifactsView_Mobile(filter);
        } else {
            renderArtifactsView_Desktop(filter);
        }
        attachArtifactsContentListeners();
    }

    function renderArtifactsView_Desktop(filter) {
        const artifactsContent = document.getElementById('artifacts-content');
        if (!artifactsContent) return;
        document.querySelectorAll('#artifacts-sidebar .sidebar-button, #artifacts-sidebar .faction-tab-button').forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`#artifacts-sidebar [data-artifact-filter="${filter}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
            if (activeButton.parentElement.classList.contains('class-sub-tabs')) {
                activeButton.parentElement.previousElementSibling.classList.add('active');
            }
        }
        if (filter === 'Grail') {
            renderGrailView();
            return;
        }
        let filteredArtifacts = [...allArtifacts];
        let tableHTML = '', title = 'All Artifacts';
        if (filter.startsWith('class-')) {
            const artifactClass = filter.split('-')[1];
            title = `${artifactClass} Artifacts`;
            filteredArtifacts = allArtifacts.filter(a => a.class === artifactClass);
            tableHTML = `<table class="artifacts-table"><thead><tr><th>Name</th><th>Effect</th><th>Slot</th></tr></thead><tbody>${filteredArtifacts.sort((a, b) => a.name.localeCompare(b.name)).map(a => `<tr id="${generateItemId('artifact', a.name)}" class="clickable" data-artifact-name="${a.name}"><td>${a.name}</td><td>${a.effect || '–'}</td><td>${a.slot || '–'}</td></tr>`).join('')}</tbody></table>`;
        } else if (filter.startsWith('slot-')) {
            const artifactSlot = filter.split('-')[1];
            title = `Artifacts by Slot: ${artifactSlot}`;
            filteredArtifacts = allArtifacts.filter(a => a.slot && a.slot.includes(artifactSlot) && a.class !== 'Combination');
            tableHTML = `<table class="artifacts-table"><thead><tr><th>Name</th><th>Class</th><th>Effect</th></tr></thead><tbody>${filteredArtifacts.sort((a, b) => a.name.localeCompare(b.name)).map(a => `<tr id="${generateItemId('artifact', a.name)}" class="clickable" data-artifact-name="${a.name}"><td>${a.name}</td><td>${a.class || '–'}</td><td>${a.effect || '–'}</td></tr>`).join('')}</tbody></table>`;
        } else {
            tableHTML = `<table class="artifacts-table"><thead><tr><th>Name</th><th>Class</th><th>Effect</th><th>Slot</th></tr></thead><tbody>${filteredArtifacts.sort((a, b) => a.name.localeCompare(b.name)).map(a => `<tr id="${generateItemId('artifact', a.name)}" class="clickable" data-artifact-name="${a.name}"><td>${a.name}</td><td>${a.class || '–'}</td><td>${a.effect || '–'}</td><td>${a.slot || '–'}</td></tr>`).join('')}</tbody></table>`;
        }
        artifactsContent.innerHTML = `<div class="panel"><h2>${title}</h2>${tableHTML}</div>`;
    }

    function renderArtifactsView_Mobile(filter) {
        const artifactsContent = document.getElementById('artifacts-content');
        if (!artifactsContent) return;
        if (filter === 'Grail') {
            renderGrailView();
            return;
        }
        let filteredArtifacts = [...allArtifacts];
        if (filter.startsWith('class-')) {
            const artifactClass = filter.split('-')[1];
            filteredArtifacts = allArtifacts.filter(a => a.class === artifactClass);
        } else if (filter.startsWith('slot-')) {
            const artifactSlot = filter.split('-')[1];
            filteredArtifacts = allArtifacts.filter(a => a.slot && a.slot.includes(artifactSlot) && a.class !== 'Combination');
        }
        const cardsHTML = filteredArtifacts.sort((a, b) => a.name.localeCompare(b.name)).map(a => `
            <div id="${generateItemId('artifact', a.name)}" class="mobile-card artifact-card clickable" data-artifact-name="${a.name}">
                <div class="card-header">
                    <span class="card-title">${a.name}</span>
                    <span class="card-subtitle">${a.class || ''} / ${a.slot || ''}</span>
                </div>
                <div class="card-body">
                    <p>${a.effect || '–'}</p>
                </div>
            </div>
        `).join('');
        artifactsContent.innerHTML = `<div class="mobile-card-list">${cardsHTML}</div>`;
    }

    function renderGrailView() {
        const artifactsContent = document.getElementById('artifacts-content');
        if (!artifactsContent) return;

        if (isMobile) {
            let grailHTML = `<div class="panel"><h2>Grail</h2>`;
            grailHTML += `<h3>General Effects</h3>`;
            grailHTML += `<p><strong>Gold:</strong> ${grailInfo.general.gold}</p>`;
            grailHTML += `<p><strong>Creature Growth:</strong> ${grailInfo.general.growth}</p></div>`;

            grailHTML += `<h3>Faction-Specific Effects</h3>`;
            grailHTML += `<div class="mobile-card-list" style="margin-top: 0.75rem;">`;
            grailHTML += grailInfo.factions.map(f => `
                <div class="mobile-card artifact-card">
                    <div class="card-header">
                        <span class="card-title" style="text-decoration: none;">${f.name}</span>
                    </div>
                    <div class="card-body">
                        <p><span class="label">Building:</span> ${f.building}</p>
                        <p><span class="label">Effect:</span> ${f.effect}</p>
                    </div>
                </div>
            `).join('');
            grailHTML += `</div>`;
            artifactsContent.innerHTML = grailHTML;
        } else {
            let grailHTML = `<div class="panel"><h2>Grail</h2>`;
            grailHTML += `<h3>General Effects</h3>`;
            grailHTML += `<p><strong>Gold:</strong> ${grailInfo.general.gold}</p>`;
            grailHTML += `<p><strong>Creature Growth:</strong> ${grailInfo.general.growth}</p>`;
            grailHTML += `<h3>Faction-Specific Effects</h3>`;
            grailHTML += `<table class="artifacts-table"><thead><tr><th>Faction</th><th>Building</th><th>Effect</th></tr></thead><tbody>`;
            grailHTML += grailInfo.factions.map(f => `<tr><td>${f.name}</td><td>${f.building}</td><td>${f.effect}</td></tr>`).join('');
            grailHTML += `</tbody></table></div>`;
            artifactsContent.innerHTML = grailHTML;
        }
    }

    // --- Map Objects View Functions ---
    function populateMapObjectsSidebar() {
        const mapObjectsSidebar = document.getElementById('map-objects-sidebar');
        if (!mapObjectsSidebar) return;
        mapObjectsSidebar.innerHTML = `<button class="sidebar-button active" data-object-type="Creature Banks">Creature Banks</button>`;
    }

    function renderMapObjectsView(type) {
        if (isMobile) {
            renderMapObjectsView_Mobile(type);
        } else {
            renderMapObjectsView_Desktop(type);
        }
        attachMapObjectsContentListeners();
    }

    function renderMapObjectsView_Desktop(type) {
        const mapObjectsContent = document.getElementById('map-objects-content');
        if (!mapObjectsContent) return;
        const rewardsHTML = (rewards) => {
            let listItems = '';
            if (rewards.creatures) listItems += `<li><span class="reward-label">Creatures:</span>${rewards.creatures}</li>`;
            if (rewards.artifacts) listItems += `<li><span class="reward-label">Artifacts:</span>${rewards.artifacts}</li>`;
            if (rewards.gold) listItems += `<li><span class="reward-label">Gold:</span>${rewards.gold}</li>`;
            if (rewards.resources) listItems += `<li><span class="reward-label">Resources:</span>${rewards.resources}</li>`;
            if (rewards.experience) listItems += `<li><span class="reward-label">Experience:</span>${rewards.experience}</li>`;
            return listItems ? `<ul class="rewards-list">${listItems}</ul>` : '–';
        };
        const rewardsDataAttr = (rewards) => {
            let rewardsText = [];
            if (rewards.creatures) rewardsText.push(`Creatures: ${rewards.creatures}`);
            if (rewards.artifacts) rewardsText.push(`Artifacts: ${rewards.artifacts}`);
            if (rewards.gold) rewardsText.push(`Gold: ${rewards.gold}`);
            if (rewards.resources) rewardsText.push(`Resources: ${rewards.resources}`);
            if (rewards.experience) rewardsText.push(`Experience: ${rewards.experience}`);
            return rewardsText.join('\n');
        };
        mapObjectsContent.innerHTML = `
            <div class="panel">
                <h2>Creature Banks</h2>
                <h4 class="panel-subtitle clickable" data-modal-type="creature-bank-battle-info">Battle Information</h4>
                <table class="map-objects-table"><thead><tr><th>Name</th><th>Guards</th><th>Rewards</th></tr></thead>
                    <tbody>${creatureBanks.map(bank => `<tr id="${generateItemId('map-object', bank.name)}" class="clickable" data-bank-name="${bank.name}"><td>${bank.name}</td><td data-rewards="${rewardsDataAttr(bank.rewards)}">${bank.guards}</td><td>${rewardsHTML(bank.rewards)}</td></tr>`).join('')}</tbody>
                </table>
            </div>`;
    }

    function renderMapObjectsView_Mobile(type) {
        const mapObjectsContent = document.getElementById('map-objects-content');
        if (!mapObjectsContent) return;
        const rewardsHTML = (rewards) => {
            let listItems = '';
            if (rewards.creatures) listItems += `<li><span class="label">Creatures:</span> ${rewards.creatures}</li>`;
            if (rewards.artifacts) listItems += `<li><span class="label">Artifacts:</span> ${rewards.artifacts}</li>`;
            if (rewards.gold) listItems += `<li><span class="label">Gold:</span> ${rewards.gold}</li>`;
            if (rewards.resources) listItems += `<li><span class="label">Resources:</span> ${rewards.resources}</li>`;
            if (rewards.experience) listItems += `<li><span class="label">Experience:</span> ${rewards.experience}</li>`;
            return listItems ? `<ul class="rewards-list">${listItems}</ul>` : '<p>No specific rewards.</p>';
        };
        const cardsHTML = creatureBanks.map(bank => `
            <div id="${generateItemId('map-object', bank.name)}" class="mobile-card map-object-card clickable" data-bank-name="${bank.name}">
                <div class="card-header">
                    <span class="card-title">${bank.name}</span>
                </div>
                <div class="card-body">
                    <p><span class="label">Guards:</span> ${bank.guards}</p>
                    ${rewardsHTML(bank.rewards)}
                </div>
            </div>
        `).join('');
        mapObjectsContent.innerHTML = `<h4 class="panel-subtitle clickable" data-modal-type="creature-bank-battle-info">Battle Information</h4><div class="mobile-card-list">${cardsHTML}</div>`;
    }

    // --- Tavern Tips View Functions ---
    function populateTavernTipsSidebar() {
        const tavernTipsSidebar = document.getElementById('taverntips-sidebar');
        if (!tavernTipsSidebar) return;
        tavernTipsSidebar.innerHTML = '';
        const keybindsTab = document.createElement('div');
        keybindsTab.className = 'faction-tab';
        const keybindsButton = document.createElement('button');
        keybindsButton.className = 'faction-tab-button';
        keybindsButton.textContent = 'Keybinds';
        keybindsButton.dataset.category = 'Keybinds';
        const subTabs = document.createElement('div');
        subTabs.className = 'class-sub-tabs'; 
        const categories = ["All", "Hero Trade Screen", "Hero Management Screen", "Adventure Screen", "Combat Screen", "Town Screen"];
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'sidebar-button';
            button.dataset.category = category;
            button.textContent = category;
            button.addEventListener('click', () => renderTavernTipsView(category));
            subTabs.appendChild(button);
        });
        keybindsButton.addEventListener('click', () => renderTavernTipsView('All'));
        keybindsTab.appendChild(keybindsButton);
        keybindsTab.appendChild(subTabs);
        tavernTipsSidebar.appendChild(keybindsTab);
    }

    function renderTavernTipsView(category) {
        const tavernTipsContent = document.getElementById('taverntips-content');
        if (!tavernTipsContent) return;
        if (!isMobile) {
            document.querySelectorAll('#taverntips-sidebar .sidebar-button').forEach(btn => btn.classList.remove('active'));
            const activeButton = document.querySelector(`#taverntips-sidebar .sidebar-button[data-category="${category}"]`);
            if (activeButton) activeButton.classList.add('active');
            const mainButton = document.querySelector('#taverntips-sidebar .faction-tab-button');
            if (mainButton) mainButton.classList.add('active');
        }
        const renderCategoryHTML = (title, keybindsArray) => {
            if (!keybindsArray || keybindsArray.length === 0) return '';
            let tableRows = keybindsArray.map(kb => `<tr><td>${kb.key}</td><td>${kb.action}</td></tr>`).join('');
            return `<h3>${title}</h3><table class="keybinds-table"><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>${tableRows}</tbody></table>`;
        };
        let contentHTML = '<div class="panel">';
        const categoryOrder = ["Hero Trade Screen", "Hero Management Screen", "Adventure Screen", "Combat Screen", "Town Screen"];
        if (category === 'All') {
            categoryOrder.forEach(catName => {
                contentHTML += renderCategoryHTML(catName, tavernTips.keybinds[catName]);
            });
        } else {
            contentHTML += renderCategoryHTML(category, tavernTips.keybinds[category]);
        }
        contentHTML += '</div>';
        tavernTipsContent.innerHTML = contentHTML;
    }


    // --- Comparison View Functions ---
    function renderCreatureComparisonView() {
        const creatureContent = document.getElementById('creature-content');
        if (!creatureContent) return;
        creatureContent.innerHTML = `<div class="panel"><h2>Compare Creatures</h2><div id="creature-selectors" style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;"></div><div id="creature-comparison-table"></div></div>`;
        const selectorsContainer = document.getElementById('creature-selectors');
        const tableContainer = document.getElementById('creature-comparison-table');
        const creatureOptions = allCreatures.map(c => `<option value="${c.name}">${c.name} (${c.faction.slice(0, 3)})</option>`).join('');
        for (let i = 1; i <= 4; i++) {
            selectorsContainer.innerHTML += `<select id="creature-select-${i}" data-index="${i}" style="flex: 1; min-width: 150px; padding: 8px; background-color: var(--bg-color); color: var(--text-color); border: 1px solid var(--border-color);"><option value="">Select Creature ${i}</option>${creatureOptions}</select>`;
        }
        const updateCreatureComparison = () => {
            const selectedCreatures = [];
            for (let i = 1; i <= 4; i++) {
                const select = document.getElementById(`creature-select-${i}`);
                if (select.value) {
                    selectedCreatures.push(allCreatures.find(c => c.name === select.value));
                }
            }
            if (selectedCreatures.length === 0) {
                tableContainer.innerHTML = '';
                return;
            }
            const stats = ['Att', 'Def', 'Dmg', 'HP', 'Spd', 'Grw', 'AI', 'Cost', 'Special'];
            tableContainer.innerHTML = `<table class="creature-table" style="display: table;"><thead><tr><th>Stat</th>${selectedCreatures.map(c => `<th>${c.name}</th>`).join('')}</tr></thead><tbody>${stats.map(stat => `<tr><td class="creature-name">${stat}</td>${selectedCreatures.map(c => { let val; if (stat === 'Dmg') { val = `${c.dmg_min}-${c.dmg_max}`; } else if (stat === 'Special') { val = c.special ? c.special.name : '–'; } else if (stat === 'Cost') { val = formatCost(c.cost); } else if (stat === 'AI') { val = c.ai_val; } else { val = c[stat.toLowerCase()]; } return `<td>${val}</td>`; }).join('')}</tr>`).join('')}</tbody></table>`;
        };
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`creature-select-${i}`).addEventListener('change', updateCreatureComparison);
        }
    }

    // --- Modal & Event Listener Logic ---
    function showModal() { modal.classList.remove('modal-hidden'); }
    function hideModal() { modal.classList.add('modal-hidden'); modalBody.innerHTML = ''; }

    function displayHeroDetails(heroName) {
        const hero = heroes.find(h => h.name === heroName);
        if (!hero) return;
        const biographyHTML = hero.biography ? `<details><summary>Biography</summary><div class="details-content"><p>${hero.biography}</p></div></details>` : '';
        const analysisHTML = (hero.gameplay_analysis && hero.gameplay_analysis.trim() !== "") ? `<details><summary>Gameplay Analysis</summary><div class="details-content">${hero.gameplay_analysis}</div></details>` : '';
        modalBody.innerHTML = `<h3>${hero.name}</h3>${biographyHTML}${analysisHTML}`;
        showModal();
    }

    function displaySkillDetails(skillName) {
        const skill = skills[skillName];
        if (!skill) return;
        const descriptionHTML = `<ul><li><strong>Basic:</strong> ${skill.description.Basic}</li><li><strong>Advanced:</strong> ${skill.description.Advanced}</li><li><strong>Expert:</strong> ${skill.description.Expert}</li></ul>`;
        const hotaDetailsHTML = skill.hota_changes ? `<details class="hota-details"><summary>HotA Specific Changes</summary><div class="details-content">${skill.hota_changes}</div></details>` : '';
        const gameplayAnalysisHTML = skill.gameplay_analysis ? `<details class="hota-details"><summary>Gameplay Analysis</summary><div class="details-content">${skill.gameplay_analysis}</div></details>` : '';
        modalBody.innerHTML = `<h3>${skillName}</h3>${descriptionHTML}${hotaDetailsHTML}${gameplayAnalysisHTML}`;
        showModal();
    }

    function displayCreatureDetails(creatureName) {
        const creature = allCreatures.find(c => c.name === creatureName);
        if (!creature) return;
        const analysisHTML = creature.gameplay_analysis ? `<details class="hota-details"><summary>Gameplay Analysis</summary><div class="details-content"><p>${creature.gameplay_analysis}</p></div></details>` : '';
        const loreHTML = creature.lore ? `<details class="hota-details"><summary>Lore</summary><div class="details-content">${creature.lore.replace(/\n/g, '<br><br>')}</div></details>` : '';
        modalBody.innerHTML = `<h3>${creature.name}</h3>${analysisHTML}${loreHTML}`;
        showModal();
    }

    function displaySpellDetails(spellName) {
        const spell = allSpells[spellName];
        if (!spell) return;
        let modalHTML = `<h3>${spell.name}</h3>`;
        const createDetailSection = (title, content) => {
            if (!content || (Array.isArray(content) && content.length === 0)) return '';
            return `<details class="hota-details"><summary>${title}</summary><div class="details-content">${content}</div></details>`;
        };
        if (spell.effect.breakdown) {
            const effectContent = `<ul><li><strong>Basic:</strong> ${spell.effect.breakdown.Basic}</li><li><strong>Advanced:</strong> ${spell.effect.breakdown.Advanced}</li><li><strong>Expert:</strong> ${spell.effect.breakdown.Expert}</li></ul>`;
            modalHTML += createDetailSection("Spell Effect by Expertise", effectContent);
        }
        modalHTML += createDetailSection("General Information", spell.general_info);
        if (spell.probabilities) {
            const probContent = `<table class="modal-table"><thead><tr><th>Faction</th><th>Chance</th></tr></thead><tbody>${Object.entries(spell.probabilities).map(([faction, chance]) => `<tr><td>${faction}</td><td>${chance}</td></tr>`).join('')}</tbody></table>`;
            modalHTML += createDetailSection("Probability of Occurrence", probContent);
        }
        modalHTML += createDetailSection("Hero(es) starting with this spell", spell.starting_heroes?.join(', '));
        modalHTML += createDetailSection("Hero(es) specializing in this spell", spell.specializing_heroes?.join(', '));
        modalHTML += createDetailSection("Creature(s) immune to this spell", spell.immune_creatures?.join(', '));
        modalHTML += createDetailSection("Creature(s) capable of casting this spell", spell.casting_creatures?.join(', '));
        modalHTML += createDetailSection("Damage Increased With", spell.damage_increases?.join('<br>'));
        modalHTML += createDetailSection("Damage Decreased With", spell.damage_decreases?.join('<br>'));
        modalHTML += createDetailSection("HotA Modifications", spell.hota_modifications);
        modalHTML += createDetailSection("Trivia", spell.trivia);
        modalHTML += createDetailSection("Gameplay Analysis", spell.gameplay_analysis);
        modalHTML += createDetailSection("In-depth Mechanics", spell.in_depth_mechanics);
        modalBody.innerHTML = modalHTML;
        showModal();
    }

    function displayArtifactDetails(artifactName) {
        const artifact = allArtifacts.find(a => a.name === artifactName);
        if (!artifact) return;
        let modalHTML = `<h3>${artifact.name}</h3>`;
        const createDetailSection = (title, content) => {
            if (!content) return '';
            return `<details class="hota-details"><summary>${title}</summary><div class="details-content"><p>${content}</p></div></details>`;
        };
        modalHTML += createDetailSection("Component of", artifact.component_of ? `Component of the ${artifact.component_of}` : null);
        modalHTML += createDetailSection("How it works", artifact.how_it_works);
        modalHTML += createDetailSection("Gameplay Analysis", artifact.gameplay_analysis);
        modalHTML += createDetailSection("Cost", artifact.cost);
        modalHTML += createDetailSection("Related Artifacts", artifact.related_artifacts);
        modalHTML += createDetailSection("Event description", artifact.event_description);
        modalBody.innerHTML = modalHTML;
        showModal();
    }

    function displaySpecialtyDetails(specialtyName, specialtyDesc) {
        modalBody.innerHTML = `<h3>${specialtyName} (Specialty)</h3><p>${specialtyDesc}</p>`;
        showModal();
    }

    function displayMovementDetails(type) {
        let title = '', content = '';
        if (type === 'flying') {
            title = 'Flying Movement Costs';
            content = `<p>Flying movement cost is determined by the terrain being flown over and the hero's Pathfinding skill. The costs below are Straight / Diagonal.</p><table class="modal-table"><thead><tr><th>Terrain</th><th>Basic Pathfinding</th><th>Advanced Pathfinding</th><th>Expert Pathfinding</th></tr></thead><tbody><tr><td>Impassable, Water, Swamp, Sand, Snow</td><td>140 / 197</td><td>120 / 169</td><td>100 / 141</td></tr><tr><td>Rough, Wasteland</td><td>125 / 176</td><td>100 / 141</td><td>100 / 141</td></tr><tr><td>All other non-road terrains</td><td colspan="3">100 / 141</td></tr><tr><td>Roads</td><td colspan="3">Same as ground movement</td></tr></tbody></table>`;
        } else if (type === 'diagonal') {
            title = 'Diagonal Move Exception';
            content = `<p>${moveData.diagonalMoveException}</p>`;
        }
        modalBody.innerHTML = `<h3>${title}</h3>${content}`;
        showModal();
    }

    function displayPrimarySkillDetails(skill) {
        const skillInfo = {
            attack: { title: "Attack Skill (A)", description: "A hero's attack skill value is added to each creature's attack rating, increasing the amount of damage they can inflict in combat. For each point of Attack advantage over the defender's Defense, damage is increased by 5% (up to a maximum of 300%)." },
            defense: { title: "Defense Skill (D)", description: "A hero's defense skill is added to the defense rating of each creature in their army, decreasing the amount of damage they take from enemy attacks. For each point of Defense advantage over the attacker's Attack, the received damage is reduced by 2.5% (up to a maximum of 70%)." },
            power: { title: "Spell Power (SP)", description: "Spell Power is the main factor for the duration of many spells (1 point of Power typically equals 1 round), the amount of damage dealt by magical attacks, and the number of hit points restored by healing spells." },
            knowledge: { title: "Knowledge (K)", description: "Knowledge determines the maximum amount of spell points a hero can have. The total is calculated by multiplying the hero's knowledge skill by 10. For example, a hero with 12 Knowledge will have 120 spell points." }
        };
        const info = skillInfo[skill];
        if (!info) return;
        modalBody.innerHTML = `<h3>${info.title}</h3><p>${info.description}</p>`;
        showModal();
    }

    function displayTerrainDetails(terrainName) {
        const terrainData = moveData.nativeTerrains[terrainName];
        if (!terrainData) return;
        const movementBonus = `No movement penalty on this terrain for armies consisting entirely of units from its native faction(s).`;
        const combatBonus = `All native units receive +1 Attack, +1 Defense, and +1 Speed when fighting on this terrain.`;
        modalBody.innerHTML = `<h3>${terrainName} (Native Terrain)</h3><p><strong>Native Factions:</strong> ${terrainData.join(', ')}</p><p>${combatBonus}</p>${terrainName !== 'Grass' ? `<p>${movementBonus}</p>` : ''}`;
        showModal();
    }

    function displayMagicSchoolDetails(schoolName) {
        const schoolData = spellsBySchool[schoolName];
        if (!schoolData) return;
        let combatSpellsHTML = '';
        for (const level in schoolData['Combat Spells']) combatSpellsHTML += `<h4>${level}</h4><p>${schoolData['Combat Spells'][level].join(', ')}</p>`;
        let adventureSpellsHTML = '';
        if (Object.keys(schoolData['Adventure Spells']).length > 0) {
            adventureSpellsHTML = '<h3>Adventure Spells</h3>';
            for (const level in schoolData['Adventure Spells']) adventureSpellsHTML += `<h4>${level}</h4><p>${schoolData['Adventure Spells'][level].join(', ')}</p>`;
        }
        modalBody.innerHTML = `<h2>${schoolName} Magic Spells</h2><h3>Combat Spells</h3>${combatSpellsHTML}${adventureSpellsHTML}`;
        showModal();
    }

    function displayCreatureBankDetails(bankName) {
        const bank = creatureBanks.find(b => b.name === bankName);
        if (!bank) return;
        let levelsHTML = '';
        if (bank.levels) {
            const levelsContent = `<table class="modal-table"><thead><tr><th>Level (Chance)</th><th>Guards</th><th>Rewards</th><th>XP</th></tr></thead><tbody>${bank.levels.map(l => `<tr><td>${l.level} (${l.level === 4 ? '10%' : '30%'})</td><td>${l.guards}</td><td>${l.rewards}</td><td>${l.experience}</td></tr>`).join('')}</tbody></table>`;
            levelsHTML = `<details class="hota-details"><summary>${bank.name} Levels</summary><div class="details-content">${levelsContent}</div></details>`;
        }
        const terrainHTML = `<p><strong>Terrain:</strong> ${bank.terrain}</p>`;
        const valueHTML = `<p><strong>Value:</strong> ${bank.value}</p>`;
        const additionalInfoHTML = bank.additional_info ? `<p><strong>Notes:</strong> ${bank.additional_info}</p>` : '';
        modalBody.innerHTML = `<h3>${bank.name}</h3>${levelsHTML}${terrainHTML}${valueHTML}${additionalInfoHTML}`;
        showModal();
    }

    function displayCreatureBankBattleInfo() {
        const title = 'Creature Bank Battle Information';
        const content = `<img src="CreatureBankBattle.gif" alt="Creature Bank Battlefield Layout" class="battlefield-image"><p>In all Creature Banks except Black Towers, the guards are divided into five stacks of (red hexes). When there is an upstack, it will be in the lower left corner (C). All the guard stacks of the same speed attack in alphabetic order: from A to E. In Horn of the Abyss, the object's level can be preset by a map-maker, and the upgraded stack option may be toggled on or off.</p><p>The hero's troops are located in blue hexes 1-7 (a tail hex for two-hexed creatures) according to stack positioning in the army slots 1-7. But if the hero has less than 7 stacks, e.g. 3, they will be placed in hexes 1-3 no matter how they were placed in the army slots.</p><p>Though war machines are not present on the battlefield, they still provide their passive bonuses (i.e. the infinite shots effect from Ammo Cart and the First Aid/First Aid Tent health boost ).</p><p>Slain enemies do not respawn (should the hero retreat or be defeated). The damaged stack's losses will not be redistributed among the others. If a stack was destroyed, it changes the guards disposition. Its place on the battlefield will be taken by the next one in the attacking order. (E.g.: If A stack was destroyed, B stack takes its place, C stack takes the freshly vacated place of B and so on).</p>`;
        modalBody.innerHTML = `<h3>${title}</h3>${content}`;
        showModal();
    }

    function attachMainContentListeners() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        mainContent.querySelectorAll('.clickable[data-hero-name]').forEach(el => el.addEventListener('click', (e) => displayHeroDetails(e.currentTarget.dataset.heroName)));
        mainContent.querySelectorAll('.clickable[data-skill-name]').forEach(el => el.addEventListener('click', (e) => {
            e.stopPropagation();
            displaySkillDetails(e.currentTarget.dataset.skillName);
        }));
        mainContent.querySelectorAll('.clickable[data-specialty-name]').forEach(el => el.addEventListener('click', (e) => {
            e.stopPropagation();
            displaySpecialtyDetails(e.currentTarget.dataset.specialtyName, e.currentTarget.dataset.specialtyDesc);
        }));
        mainContent.querySelectorAll('.clickable[data-modal-type]').forEach(el => el.addEventListener('click', (e) => displayMovementDetails(e.currentTarget.dataset.modalType)));
        mainContent.querySelectorAll('.clickable[data-primary-skill]').forEach(el => el.addEventListener('click', (e) => displayPrimarySkillDetails(e.currentTarget.dataset.primarySkill)));
        mainContent.querySelectorAll('.clickable[data-terrain-name]').forEach(el => el.addEventListener('click', (e) => displayTerrainDetails(e.currentTarget.dataset.terrainName)));
        mainContent.querySelectorAll('.clickable[data-school-name]').forEach(el => el.addEventListener('click', (e) => displayMagicSchoolDetails(e.currentTarget.dataset.schoolName)));
    }

    function attachCreatureContentListeners() {
        const creatureContent = document.getElementById('creature-content');
        if (!creatureContent) return;
        creatureContent.querySelectorAll('.clickable[data-creature-name]').forEach(el => el.addEventListener('click', (e) => displayCreatureDetails(e.currentTarget.dataset.creatureName)));
        creatureContent.querySelectorAll('.clickable[data-special-name]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const specialName = e.currentTarget.dataset.specialName;
                const specialDesc = e.currentTarget.dataset.specialDesc;
                modalBody.innerHTML = `<h3>${specialName} (Special Ability)</h3><p>${specialDesc}</p>`;
                showModal();
            });
        });
    }

    function attachSpellContentListeners() {
        const spellContent = document.getElementById('spell-content');
        if (!spellContent) return;
        spellContent.querySelectorAll('.clickable[data-spell-name]').forEach(el => el.addEventListener('click', (e) => displaySpellDetails(e.currentTarget.dataset.spellName)));
    }

    function attachArtifactsContentListeners() {
        const artifactsContent = document.getElementById('artifacts-content');
        if (!artifactsContent) return;
        artifactsContent.querySelectorAll('.clickable[data-artifact-name]').forEach(el => el.addEventListener('click', (e) => displayArtifactDetails(e.currentTarget.dataset.artifactName)));
    }

    function attachMapObjectsContentListeners() {
        const mapObjectsContent = document.getElementById('map-objects-content');
        if (!mapObjectsContent) return;
        mapObjectsContent.querySelectorAll('.clickable[data-bank-name]').forEach(el => el.addEventListener('click', (e) => displayCreatureBankDetails(e.currentTarget.dataset.bankName)));
        mapObjectsContent.querySelector('.clickable[data-modal-type="creature-bank-battle-info"]')?.addEventListener('click', displayCreatureBankBattleInfo);
    }

    function setupEventListeners() {
        // General Modal Listeners
        modalClose.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });

        // Navigation Button Listeners
        navButtons.forEach(button => {
            if (button.dataset.view) {
                button.addEventListener('click', () => {
                    showView(button.dataset.view);
                });
            }
        });

        // Desktop Search Listeners
        searchIconDesktop.addEventListener('click', () => {
            searchBarDesktop.classList.toggle('search-bar-collapsed');
            if (!searchBarDesktop.classList.contains('search-bar-collapsed')) {
                searchBarDesktop.focus();
            } else {
                hideSuggestions(true);
            }
        });

        searchBarDesktop.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 1) {
                performSearch(query);
            } else {
                hideSuggestions(false);
            }
        });

        // Mobile Search Listeners
        searchButtonMobile.addEventListener('click', () => {
            searchModalMobile.classList.remove('modal-hidden');
            searchBarMobile.focus();
        });

        searchModalClose.addEventListener('click', () => hideSuggestions(true));

        searchBarMobile.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 1) {
                performSearch(query);
            } else {
                searchSuggestionsMobile.innerHTML = '';
            }
        });

        // Global listener to hide pop-ups when clicking away
        document.addEventListener('click', (e) => {
            // This desktop-specific listener closes the search bar when clicking away.
            // It's disabled on mobile to prevent it from interfering with the mobile search button.
            if (!isMobile && searchContainerDesktop && !searchContainerDesktop.contains(e.target)) {
                hideSuggestions(true);
            }

            // For mobile custom dropdown
            const openSelect = document.querySelector('.custom-select-options:not(.hidden)');
            if (openSelect && !openSelect.parentElement.contains(e.target)) {
                openSelect.classList.add('hidden');
                const arrow = openSelect.parentElement.querySelector('.custom-select-arrow');
                if (arrow) arrow.classList.remove('up');
            }
        });
    }

    // --- Start the App ---
    init();
});
