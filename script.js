
// --- BRIDGE: structures unified dataset ---
window.structuresData = window.structuresData || [];
window.creatureBanksData = window.structuresData.filter(o => Array.isArray(o.categories) && o.categories.includes("Creature Banks"));

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

    // [removed old map objects renderer]
);

/* ------------------- Unified Structures View (new) ------------------- */

const STRUCTURE_CATEGORIES = ["All","Army Strength","Creature Banks","Economy","Hero Strength","Mobility / Intel"];

function getStructuresForCategory(cat){
  const all = window.structuresData || [];
  if(cat==="All") return all;
  return all.filter(it => Array.isArray(it.categories) && it.categories.includes(cat));
}

function ensureModal(){
  let modal = document.getElementById("structure-modal");
  if(modal) return modal;
  modal = document.createElement("div");
  modal.id = "structure-modal";
  modal.className = "modal-root";
  modal.innerHTML = `
    <div class="modal-backdrop" data-close="1"></div>
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="structure-modal-title">
      <div class="modal-header">
        <div class="modal-title" id="structure-modal-title"></div>
        <button class="modal-close" aria-label="Close" data-close="1">&times;</button>
      </div>
      <div class="modal-body"></div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener("click", (e)=>{ if(e.target.dataset.close==="1") modal.classList.remove("open"); });
  if(!document.getElementById("modal-default-style")){
    const s=document.createElement("style"); s.id="modal-default-style";
    s.textContent=`
      .modal-root{position:fixed;inset:0;display:none;z-index:1000}
      .modal-root.open{display:block}
      .modal-backdrop{position:absolute;inset:0;background:#0008}
      .modal-card{position:relative;margin:48px auto;max-width:900px;background:#2a2a2a;color:#eee;border-radius:8px;box-shadow:0 10px 40px #000a}
      .modal-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #444}
      .modal-title{font-weight:700;color:#ffcc33}
      .modal-close{background:none;border:0;color:#bbb;font-size:24px;cursor:pointer}
      .modal-body{padding:16px}
      .badge{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;background:#444;color:#ddd;margin-bottom:8px}
      .levels-table{width:100%;border-collapse:collapse;margin:8px 0 12px 0}
      .levels-table th,.levels-table td{border:1px solid #444;padding:8px;text-align:left}
      .levels-header{font-weight:600;margin-top:6px;margin-bottom:4px}`;
    document.head.appendChild(s);
  }
  return modal;
}

function openStructureModal(item){
  const modal = ensureModal();
  const title = modal.querySelector(".modal-title");
  const body = modal.querySelector(".modal-body");
  title.textContent = item.name;
  let html = "";
  if(item.overlaySubtype){
    html += `<div class="badge">${item.overlaySubtype}</div>`;
  }
  if(Array.isArray(item.levels) && item.levels.length){
    html += `<div class="levels-header">Levels</div>
      <table class="levels-table"><thead><tr><th>Level (Chance)</th><th>Guards</th><th>Rewards</th><th>XP</th></tr></thead><tbody>
      ${item.levels.map(l=>`<tr><td>${l.level} (${l.chance!=null?l.chance:"?"}%)</td><td>${l.guards||"—"}</td><td>${l.rewards||"—"}</td><td>${l.xp||"—"}</td></tr>`).join("")}
      </tbody></table>`;
  }
  const row = (label,val)=> val ? `<p><strong>${label}:</strong> ${val}</p>` : "";
  html += row("Terrain", item.terrain || "—");
  html += row("Map limit", item.mapLimit || "—");
  html += row("RMG value", item.rmgValue || "—");
  if(item.inDepth) html += `<p>${item.inDepth}</p>`;
  if(item.notes) html += `<p><em>${item.notes}</em></p>`;
  if(item.trivia) html += `<p><em>${item.trivia}</em></p>`;
  body.innerHTML = html;
  modal.classList.add("open");
}

function ensureStructuresScaffold(){
  let view = document.getElementById("structures-view") || document.getElementById("mapobjects-view");
  if(!view){
    view = document.createElement("div");
    view.id = "structures-view";
    (document.getElementById("app") || document.body).appendChild(view);
  }
  if(view.querySelector(".structures-layout")) return view;
  const layout = document.createElement("div"); layout.className="structures-layout";
  const sidebar = document.createElement("aside"); sidebar.id="structures-sidebar";
  const main = document.createElement("section"); main.id="structures-main";
  const list = document.createElement("div"); list.className="structures-filters";
  STRUCTURE_CATEGORIES.forEach((cat,i)=>{
    const b=document.createElement("button"); b.className="filter-btn"+(i===0?" active":""); b.textContent=cat;
    b.addEventListener("click", ()=>{
      list.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      renderStructuresList(cat);
    });
    list.appendChild(b);
  });
  sidebar.appendChild(list);
  const table = document.createElement("table"); table.id="structures-table";
  table.innerHTML = `<thead><tr><th>Name</th><th>Description</th></tr></thead><tbody id="structures-table-body"></tbody>`;
  main.appendChild(table);
  layout.appendChild(sidebar); layout.appendChild(main); view.appendChild(layout);
  if(!document.getElementById("structures-default-style")){
    const s=document.createElement("style"); s.id="structures-default-style";
    s.textContent=`
      .structures-layout{display:grid;grid-template-columns:220px 1fr;gap:12px}
      #structures-sidebar{padding:8px}
      .structures-filters{display:flex;flex-direction:column;gap:8px}
      .filter-btn{padding:8px 10px;border:1px solid #444;background:#333;color:#ddd;border-radius:8px;cursor:pointer;text-align:left}
      .filter-btn.active{background:#444;color:#ffcc33}
      #structures-table{width:100%;border-collapse:collapse}
      #structures-table th,#structures-table td{border-bottom:1px solid #333;padding:10px;vertical-align:top}
      #structures-table th{color:#ffcc33;text-align:left}
      #structures-table a{color:#ddd;text-decoration:underline dotted}
      #structures-table a:hover{color:#fff}`;
    document.head.appendChild(s);
  }
  return view;
}

function renderStructuresList(category="All"){
  ensureStructuresScaffold();
  const data = getStructuresForCategory(category);
  const tbody = document.getElementById("structures-table-body");
  if(!tbody) return;
  tbody.innerHTML = "";
  data.forEach(item=>{
    const tr=document.createElement("tr");
    const nameTd=document.createElement("td");
    const a=document.createElement("a"); a.href="#"; a.textContent=item.name;
    a.addEventListener("click",(e)=>{e.preventDefault(); openStructureModal(item);});
    nameTd.appendChild(a);
    const shortTd=document.createElement("td"); shortTd.textContent=item.short||"";
    tr.appendChild(nameTd); tr.appendChild(shortTd); tbody.appendChild(tr);
  });
}

function hookStructuresNav(){
  document.querySelectorAll("a,button").forEach(node=>{
    const t=(node.textContent||"").trim().toLowerCase();
    if(["structures","map objects","mapobjects"].includes(t)){
      node.addEventListener("click", ()=> setTimeout(()=>renderStructuresList("All"), 0));
    }
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  ensureStructuresScaffold();
  renderStructuresList("All");
  hookStructuresNav();
});
