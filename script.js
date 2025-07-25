document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const heroes = heroesData;
    const skills = skillsData;
    const skillProbs = skillProbabilities;
    const classes = classesData;
    const moveData = movementData;
    const allCreatures = creaturesData;
    const allSpells = spellsData;

    // --- DOM Elements ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const views = document.querySelectorAll('.view');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');

    // Heroes View Elements
    const classSidebar = document.getElementById('class-sidebar');
    const mainContent = document.getElementById('main-content');

    // Creatures View Elements
    const factionSidebar = document.getElementById('faction-sidebar');
    const creatureContent = document.getElementById('creature-content');

    // Spells View Elements
    const schoolSidebar = document.getElementById('school-sidebar');
    const spellContent = document.getElementById('spell-content');

    // --- Mobile Detection ---
    const isMobile = window.matchMedia("(max-width: 768px)").matches;


    // --- Initialization ---
    function init() {
        setupEventListeners();
        if (isMobile) {
            populateClassDropdown_Mobile();
            renderClassView(Object.keys(classes)[0]);
            populateFactionDropdown_Mobile();
            renderCreatureView('All');
            populateSchoolDropdown_Mobile();
            renderSpellView('Air');
        } else {
            populateClassSidebar();
            renderClassView(Object.keys(classes)[0]);
            populateFactionSidebar();
            renderCreatureView('All');
            populateSchoolSidebar();
            renderSpellView('Air');
        }
    }

    // --- View Management ---
    function showView(viewId) {
        views.forEach(view => view.classList.add('view-hidden'));
        document.getElementById(viewId)?.classList.remove('view-hidden');
        tabButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.view === viewId);
        });
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

    // --- Heroes View Functions (Desktop) ---
    function populateClassSidebar() {
        classSidebar.innerHTML = '';
        const factions = {};
        for (const className in classes) {
            const faction = classes[className].faction;
            if (!factions[faction]) {
                factions[faction] = [];
            }
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
                if (classesInFaction.length > 0) {
                    renderClassView(classesInFaction[0]);
                }
            });
            factionTab.appendChild(factionButton);
            factionTab.appendChild(classSubTabs);
            classSidebar.appendChild(factionTab);
        }
    }

    // --- Heroes View Functions (Mobile) ---
    function populateClassDropdown_Mobile() {
        classSidebar.innerHTML = '';
        const select = document.createElement('select');
        select.className = 'mobile-select';
        select.addEventListener('change', (e) => renderClassView(e.target.value));

        const factions = {};
        for (const className in classes) {
            const faction = classes[className].faction;
            if (!factions[faction]) {
                factions[faction] = [];
            }
            factions[faction].push(className);
        }
        const sortedFactions = Object.keys(factions).sort();
        for (const factionName of sortedFactions) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = factionName;
            const classesInFaction = factions[factionName];
            classesInFaction.forEach(className => {
                const option = document.createElement('option');
                option.value = className;
                option.textContent = className;
                optgroup.appendChild(option);
            });
            select.appendChild(optgroup);
        }
        classSidebar.appendChild(select);
    }

    function renderClassView(className) {
        if (isMobile) {
            renderClassView_Mobile(className);
        } else {
            renderClassView_Desktop(className);
        }
    }

    function renderClassView_Desktop(className) {
        const selectedFactionName = classes[className].faction;
        document.querySelectorAll('#class-sidebar .faction-tab-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.faction === selectedFactionName);
        });
        document.querySelectorAll('#class-sidebar .class-sub-tabs').forEach(container => {
            container.classList.add('hidden');
        });
        const activeFactionButton = document.querySelector(`.faction-tab-button[data-faction="${selectedFactionName}"]`);
        if (activeFactionButton) {
            activeFactionButton.nextElementSibling.classList.remove('hidden');
        }
        document.querySelectorAll('#class-sidebar .sidebar-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.className === className);
        });
        const processTerrain = (terrainString) => {
            return terrainString.split(', ').map(terrain => {
                if (moveData.nativeTerrains[terrain]) {
                    return `<span class="clickable" data-terrain-name="${terrain}">${terrain}</span>`;
                }
                return terrain;
            }).join(', ');
        };
        const classData = classes[className];
        const classSkillProbs = skillProbabilities[className];
        const heroesOfClass = heroes.filter(h => h.class === className);
        mainContent.innerHTML = `
            <div class="page-grid">
                <div id="class-primary-skills-panel" class="panel"><h2>${className} Primary Skills (%)</h2><table class="stats-grid-table"><thead><tr><th></th><th class="clickable" data-primary-skill="attack">A</th><th class="clickable" data-primary-skill="defense">D</th><th class="clickable" data-primary-skill="power">SP</th><th class="clickable" data-primary-skill="knowledge">K</th></tr></thead><tbody><tr><td>Lvl 1</td><td>${classData.primary_skills.attack}</td><td>${classData.primary_skills.defense}</td><td>${classData.primary_skills.power}</td><td>${classData.primary_skills.knowledge}</td></tr><tr><td>Lvl 2-9</td><td>${classData.primary_skill_chance.levels_2_9.attack}</td><td>${classData.primary_skill_chance.levels_2_9.defense}</td><td>${classData.primary_skill_chance.levels_2_9.power}</td><td>${classData.primary_skill_chance.levels_2_9.knowledge}</td></tr><tr><td>Lvl 10+</td><td>${classData.primary_skill_chance.levels_10_plus.attack}</td><td>${classData.primary_skill_chance.levels_10_plus.defense}</td><td>${classData.primary_skill_chance.levels_10_plus.power}</td><td>${classData.primary_skill_chance.levels_10_plus.knowledge}</td></tr></tbody></table></div>
                <div id="movement-panel" class="panel"><h2>Movement Points</h2><table class="movement-table"><thead><tr><th>Unit Spd</th><th>Mvt Pts</th></tr></thead><tbody>${moveData.speedToBase.map(row => `<tr><td>${row.speed}</td><td>${row.points}</td></tr>`).join('')}</tbody></table><table class="movement-table"><thead><tr><th>Terrain</th><th>Cost (S/D)</th></tr></thead><tbody>${moveData.groundCost.map(row => `<tr><td>${processTerrain(row.terrain)}</td><td>${row.straight} / ${row.diagonal}</td></tr>`).join('')}</tbody></table><div class="movement-links"><span class="clickable" data-modal-type="flying">Flying Movement Points</span><br><span class="clickable" data-modal-type="diagonal">Diagonal Move Exception</span></div></div>
                <div id="magic-chance-panel" class="panel"><h2>Magic & Wisdom %</h2><div class="magic-chance-grid"><div class="school-name clickable" data-school-name="Air">Air</div><div class="school-name clickable" data-school-name="Earth">Earth</div><div class="school-name clickable" data-school-name="Fire">Fire</div><div class="school-name clickable" data-school-name="Water">Water</div><div class="school-chance">${classData.magic_roll_chance.air}%</div><div class="school-chance">${classData.magic_roll_chance.earth}%</div><div class="school-chance">${classData.magic_roll_chance.fire}%</div><div class="school-chance">${classData.magic_roll_chance.water}%</div></div><div class="guaranteed-skill-info"><div>Choice of a Magic School guaranteed every ${classData.guaranteed_magic_school} lvl</div><div>Choice of Wisdom guaranteed every ${classData.guaranteed_wisdom} lvl</div></div></div>
                <div id="secondary-skills-panel" class="panel"><h2>Sec. Skills %</h2><table class="info-table">${Object.entries(classSkillProbs).sort((a, b) => b[1] - a[1]).map(([skill, chance]) => `<tr class="clickable" data-skill-name="${skill}"><td>${skill}</td><td>${chance}</td></tr>`).join('')}</table></div>
                <div id="heroes-panel" class="panel"><h2>Heroes</h2><table class="hero-table"><thead><tr><th>Hero</th><th>Specialty</th><th>Starting skill(s)</th><th>Army</th><th>Spell</th></tr></thead><tbody>${heroesOfClass.map(hero => `<tr><td><div class="hero-name-cell clickable" data-hero-name="${hero.name}"><img class="hero-portrait" src="https://heroes.thelazy.net/images/thumb/e/e4/Hero_${hero.name.replace(/\s/g, '_')}.png/28px-Hero_${hero.name.replace(/\s/g, '_')}.png" alt="${hero.name}" onerror="this.style.display='none'"><strong>${hero.name}</strong></div></td><td class="clickable" data-specialty-name="${hero.specialty}" data-specialty-desc="${hero.specialty_description}">${hero.specialty}</td><td>${hero.skills.map(skill => `<div class="clickable" data-skill-name="${skill.replace(/^(Basic|Advanced|Expert)\s/, '')}">${skill}</div>`).join('')}</td><td>${hero.army.map(u => `${u.quantity} ${u.creature}`).join('<br>')}</td><td>${hero.spell || '–'}</td></tr>`).join('')}</tbody></table></div>
            </div>`;
        attachMainContentListeners();
    }

    function renderClassView_Mobile(className) {
        const classData = classes[className];
        const classSkillProbs = skillProbabilities[className];
        const heroesOfClass = heroes.filter(h => h.class === className);

        mainContent.innerHTML = `
            <div class="mobile-accordion">
                <details>
                    <summary>Primary Skills</summary>
                    <div class="panel-content">
                        <table class="stats-grid-table"><thead><tr><th></th><th class="clickable" data-primary-skill="attack">A</th><th class="clickable" data-primary-skill="defense">D</th><th class="clickable" data-primary-skill="power">SP</th><th class="clickable" data-primary-skill="knowledge">K</th></tr></thead><tbody><tr><td>Lvl 1</td><td>${classData.primary_skills.attack}</td><td>${classData.primary_skills.defense}</td><td>${classData.primary_skills.power}</td><td>${classData.primary_skills.knowledge}</td></tr><tr><td>Lvl 2-9</td><td>${classData.primary_skill_chance.levels_2_9.attack}</td><td>${classData.primary_skill_chance.levels_2_9.defense}</td><td>${classData.primary_skill_chance.levels_2_9.power}</td><td>${classData.primary_skill_chance.levels_2_9.knowledge}</td></tr><tr><td>Lvl 10+</td><td>${classData.primary_skill_chance.levels_10_plus.attack}</td><td>${classData.primary_skill_chance.levels_10_plus.defense}</td><td>${classData.primary_skill_chance.levels_10_plus.power}</td><td>${classData.primary_skill_chance.levels_10_plus.knowledge}</td></tr></tbody></table>
                    </div>
                </details>
                <details>
                    <summary>Secondary Skills %</summary>
                    <div class="panel-content">
                        <table class="info-table">${Object.entries(classSkillProbs).sort((a, b) => b[1] - a[1]).map(([skill, chance]) => `<tr class="clickable" data-skill-name="${skill}"><td>${skill}</td><td>${chance}</td></tr>`).join('')}</table>
                    </div>
                </details>
                <details>
                    <summary>Magic & Wisdom %</summary>
                    <div class="panel-content">
                        <div class="magic-chance-grid"><div class="school-name clickable" data-school-name="Air">Air</div><div class="school-name clickable" data-school-name="Earth">Earth</div><div class="school-name clickable" data-school-name="Fire">Fire</div><div class="school-name clickable" data-school-name="Water">Water</div><div class="school-chance">${classData.magic_roll_chance.air}%</div><div class="school-chance">${classData.magic_roll_chance.earth}%</div><div class="school-chance">${classData.magic_roll_chance.fire}%</div><div class="school-chance">${classData.magic_roll_chance.water}%</div></div><div class="guaranteed-skill-info"><div>Magic School guaranteed every ${classData.guaranteed_magic_school} lvl</div><div>Wisdom guaranteed every ${classData.guaranteed_wisdom} lvl</div></div>
                    </div>
                </details>
                 <details>
                    <summary>Movement</summary>
                    <div class="panel-content">
                       <table class="movement-table"><thead><tr><th>Unit Spd</th><th>Mvt Pts</th></tr></thead><tbody>${moveData.speedToBase.map(row => `<tr><td>${row.speed}</td><td>${row.points}</td></tr>`).join('')}</tbody></table><table class="movement-table"><thead><tr><th>Terrain</th><th>Cost (S/D)</th></tr></thead><tbody>${moveData.groundCost.map(row => `<tr><td>${row.terrain}</td><td>${row.straight} / ${row.diagonal}</td></tr>`).join('')}</tbody></table><div class="movement-links"><span class="clickable" data-modal-type="flying">Flying Movement</span><br><span class="clickable" data-modal-type="diagonal">Diagonal Exception</span></div>
                    </div>
                </details>
                <details open>
                    <summary>Heroes</summary>
                    <div class="panel-content">
                        <table class="hero-table"><thead><tr><th>Hero</th><th>Specialty</th><th>Skills</th></tr></thead><tbody>${heroesOfClass.map(hero => `<tr><td><div class="hero-name-cell clickable" data-hero-name="${hero.name}"><img class="hero-portrait" src="https://heroes.thelazy.net/images/thumb/e/e4/Hero_${hero.name.replace(/\s/g, '_')}.png/28px-Hero_${hero.name.replace(/\s/g, '_')}.png" alt="${hero.name}" onerror="this.style.display='none'"><strong>${hero.name}</strong></div></td><td class="clickable" data-specialty-name="${hero.specialty}" data-specialty-desc="${hero.specialty_description}">${hero.specialty}</td><td>${hero.skills.map(skill => `<div class="clickable" data-skill-name="${skill.replace(/^(Basic|Advanced|Expert)\s/, '')}">${skill}</div>`).join('')}</td></tr>`).join('')}</tbody></table>
                    </div>
                </details>
            </div>
        `;
        attachMainContentListeners();
    }

    // --- Creatures View Functions ---
    function populateFactionSidebar() {
        const factions = ["All", ...[...new Set(allCreatures.map(c => c.faction))].sort()];
        factionSidebar.innerHTML = `<button class="sidebar-button active" data-faction="All">All Creatures</button>`;
        factions.slice(1).forEach(faction => {
            const button = document.createElement('button');
            button.className = 'sidebar-button';
            button.dataset.faction = faction;
            button.textContent = faction;
            factionSidebar.appendChild(button);
        });
        factionSidebar.innerHTML += `<div class="sidebar-divider"></div><button class="sidebar-button" data-faction="Compare Factions">Compare Factions</button><button class="sidebar-button" data-faction="Compare Creatures">Compare Creatures</button>`;
        factionSidebar.querySelectorAll('.sidebar-button').forEach(button => {
            button.addEventListener('click', () => renderCreatureView(button.dataset.faction));
        });
    }

    function populateFactionDropdown_Mobile() {
        factionSidebar.innerHTML = '';
        const select = document.createElement('select');
        select.className = 'mobile-select';
        select.addEventListener('change', (e) => renderCreatureView(e.target.value));

        const factions = ["All", ...[...new Set(allCreatures.map(c => c.faction))].sort()];
        factions.forEach(faction => {
            const option = document.createElement('option');
            option.value = faction;
            option.textContent = faction === 'All' ? 'All Creatures' : faction;
            select.appendChild(option);
        });

        const compareOptgroup = document.createElement('optgroup');
        compareOptgroup.label = "Comparisons";

        const compareFactionsOption = document.createElement('option');
        compareFactionsOption.value = 'Compare Factions';
        compareFactionsOption.textContent = 'Compare Factions';
        compareOptgroup.appendChild(compareFactionsOption);

        const compareCreaturesOption = document.createElement('option');
        compareCreaturesOption.value = 'Compare Creatures';
        compareCreaturesOption.textContent = 'Compare Creatures';
        compareOptgroup.appendChild(compareCreaturesOption);

        select.appendChild(compareOptgroup);
        factionSidebar.appendChild(select);
    }

    function renderCreatureView(faction) {
        if (!isMobile) {
            document.querySelectorAll('#faction-sidebar .sidebar-button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.faction === faction);
            });
        }
        if (faction === "Compare Factions") {
            renderFactionComparisonView();
            return;
        }
        if (faction === "Compare Creatures") {
            renderCreatureComparisonView();
            return;
        }
        let nativeTerrainInfo = '';
        const factionsWithTerrain = ["Castle", "Rampart", "Tower", "Inferno", "Necropolis", "Dungeon", "Stronghold", "Fortress", "Conflux", "Cove", "Factory"];
        if (factionsWithTerrain.includes(faction)) {
            let terrainName = '';
            let associatedFactions = [];
            for (const [terrain, factionList] of Object.entries(moveData.nativeTerrains)) {
                if (factionList.includes(faction)) {
                    terrainName = terrain;
                    associatedFactions = factionList;
                    break;
                }
            }
            if (terrainName) {
                let infoText = '';
                const combatBonus = "+1 A / D / Spd";
                if (terrainName === 'Grass') {
                    infoText = `<strong>Native terrain:</strong> ${terrainName} &rarr; ${combatBonus}`;
                } else {
                    const movementBonus = `No ${terrainName} terrain movement penalty if all units in the hero army are ${associatedFactions.join(' / ')} ones`;
                    infoText = `<strong>Native terrain:</strong> ${terrainName} &rarr; ${combatBonus} - ${movementBonus}`;
                }
                nativeTerrainInfo = `<p class="native-terrain-info">${infoText}</p>`;
            }
        }
        const filteredCreatures = faction === 'All' ? allCreatures : allCreatures.filter(c => c.faction === faction);
        creatureContent.innerHTML = `<div class="panel"><h2>${faction} Creatures</h2>${nativeTerrainInfo}<table class="creature-table"><thead><tr><th>Lvl</th><th>Creature</th><th>Att</th><th>Def</th><th>Dmg</th><th>HP</th><th>Spd</th><th>Grw</th><th>AI</th><th>Cost</th><th>Special</th></tr></thead><tbody>${filteredCreatures.map(c => `<tr class="${c.upgraded ? 'upgraded-row' : ''}"><td>${c.level}${c.upgraded ? '+' : ''}</td><td class="creature-name clickable" data-creature-name="${c.name}">${c.name}</td><td>${c.att}</td><td>${c.def}</td><td>${c.dmg_min}-${c.dmg_max}</td><td>${c.hp}</td><td>${c.spd}</td><td>${c.grw}</td><td>${c.ai_val}</td><td>${formatCost(c.cost)}</td><td>${formatSpecial(c.special)}</td></tr>`).join('')}</tbody></table></div>`;
        attachCreatureContentListeners();
    }

    // --- Spells View Functions ---
    function populateSchoolSidebar() {
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

    function populateSchoolDropdown_Mobile() {
        schoolSidebar.innerHTML = '';
        const select = document.createElement('select');
        select.className = 'mobile-select';
        select.addEventListener('change', (e) => renderSpellView(e.target.value));
        const schools = ["Air", "Earth", "Fire", "Water"];
        schools.forEach(school => {
            const option = document.createElement('option');
            option.value = school;
            option.textContent = `${school} Magic`;
            select.appendChild(option);
        });
        schoolSidebar.appendChild(select);
    }

    function renderSpellView(school) {
        if (!isMobile) {
            document.querySelectorAll('#school-sidebar .sidebar-button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.school === school);
            });
        }
        const commonSpells = Object.values(allSpells).filter(s => s.school === "All");
        const schoolSpells = Object.values(allSpells).filter(s => s.school === school);
        const spellsToDisplay = [...commonSpells, ...schoolSpells].sort((a,b) => a.level - b.level);

        const spellsByLevel = {};
        spellsToDisplay.forEach(spell => {
            if (!spellsByLevel[spell.level]) {
                spellsByLevel[spell.level] = [];
            }
            spellsByLevel[spell.level].push(spell);
        });

        let contentHTML = `<div class="panel"><h2>${school} Magic Spells</h2>`;
        for (const level in spellsByLevel) {
            contentHTML += `<h3>Level ${level}</h3>`;
            contentHTML += `<table class="spell-list-table"><thead><tr><th>Spell</th><th>Cost (w/o / with skill)</th><th>Duration</th><th>Effect</th></tr></thead><tbody>`;
            spellsByLevel[level].forEach(spell => {
                contentHTML += `
                    <tr>
                        <td class="clickable spell-name" data-spell-name="${spell.name}">${spell.name}</td>
                        <td>${spell.cost}</td>
                        <td>${spell.duration}</td>
                        <td>${spell.effect.summary}</td>
                    </tr>
                `;
            });
            contentHTML += `</tbody></table>`;
        }
        contentHTML += `</div>`;
        spellContent.innerHTML = contentHTML;
        attachSpellContentListeners();
    }


    // --- Comparison View Functions ---
    function renderFactionComparisonView() {
        // ... (code is unchanged)
    }

    function renderCreatureComparisonView() {
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
            tableContainer.innerHTML = `<table class="creature-table"><thead><tr><th>Stat</th>${selectedCreatures.map(c => `<th>${c.name}</th>`).join('')}</tr></thead><tbody>${stats.map(stat => `<tr><td class="creature-name">${stat}</td>${selectedCreatures.map(c => { let val; if (stat === 'Dmg') { val = `${c.dmg_min}-${c.dmg_max}`; } else if (stat === 'Special') { val = c.special ? c.special.name : '–'; } else if (stat === 'Cost') { val = formatCost(c.cost); } else { val = c[stat.toLowerCase()]; } return `<td>${val}</td>` }).join('')}</tr>`).join('')}</tbody></table>`;
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
        const biographyHTML = hero.biography ? `<details open><summary>Biography</summary><div class="details-content"><p>${hero.biography}</p></div></details>` : '';
        const analysisHTML = (hero.gameplay_analysis && hero.gameplay_analysis.trim() !== "") ? `<details open><summary>Gameplay Analysis</summary><div class="details-content">${hero.gameplay_analysis}</div></details>` : '';
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

        const analysisHTML = creature.gameplay_analysis ? `<details class="hota-details" open><summary>Gameplay Analysis</summary><div class="details-content"><p>${creature.gameplay_analysis}</p></div></details>` : '';
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
            return `<details class="hota-details" open><summary>${title}</summary><div class="details-content">${content}</div></details>`;
        };

        if (spell.effect.breakdown) {
            const effectContent = `<ul>
                <li><strong>Basic:</strong> ${spell.effect.breakdown.Basic}</li>
                <li><strong>Advanced:</strong> ${spell.effect.breakdown.Advanced}</li>
                <li><strong>Expert:</strong> ${spell.effect.breakdown.Expert}</li>
            </ul>`;
            modalHTML += createDetailSection("Spell Effect by Expertise", effectContent);
        }

        modalHTML += createDetailSection("General Information", spell.general_info);

        if (spell.probabilities) {
            const probContent = `<table class="modal-table"><thead><tr><th>Faction</th><th>Chance</th></tr></thead><tbody>
                ${Object.entries(spell.probabilities).map(([faction, chance]) => `<tr><td>${faction}</td><td>${chance}</td></tr>`).join('')}
            </tbody></table>`;
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

    function displaySpecialtyDetails(specialtyName, specialtyDesc) {
        modalBody.innerHTML = `<h3>${specialtyName} (Specialty)</h3><p>${specialtyDesc}</p>`;
        showModal();
    }

    function displayMovementDetails(type) {
        let title = '';
        let content = '';
        if (type === 'flying') {
            title = 'Flying Movement Costs';
            content = `<p>Flying movement cost is determined by the terrain being flown over and the hero's Pathfinding skill. The costs below are Straight / Diagonal.</p>
            <table class="modal-table">
            <thead><tr><th>Terrain</th><th>Basic Pathfinding</th><th>Advanced Pathfinding</th><th>Expert Pathfinding</th></tr></thead>
            <tbody>
                <tr><td>Impassable, Water, Swamp, Sand, Snow</td><td>140 / 197</td><td>120 / 169</td><td>100 / 141</td></tr>
                <tr><td>Rough, Wasteland</td><td>125 / 176</td><td>100 / 141</td><td>100 / 141</td></tr>
                <tr><td>All other non-road terrains</td><td colspan="3">100 / 141</td></tr>
                <tr><td>Roads</td><td colspan="3">Same as ground movement</td></tr>
            </tbody>
            </table>`;
        } else if (type === 'diagonal') {
            title = 'Diagonal Move Exception';
            content = `<p>${moveData.diagonalMoveException}</p>`;
        }
        modalBody.innerHTML = `<h3>${title}</h3>${content}`;
        showModal();
    }

    function displayPrimarySkillDetails(skill) {
        const skillInfo = {
            attack: {
                title: "Attack Skill (A)",
                description: "A hero's attack skill value is added to each creature's attack rating, increasing the amount of damage they can inflict in combat. For each point of Attack advantage over the defender's Defense, damage is increased by 5% (up to a maximum of 300%)."
            },
            defense: {
                title: "Defense Skill (D)",
                description: "A hero's defense skill is added to the defense rating of each creature in their army, decreasing the amount of damage they take from enemy attacks. For each point of Defense advantage over the attacker's Attack, the received damage is reduced by 2.5% (up to a maximum of 70%)."
            },
            power: {
                title: "Spell Power (SP)",
                description: "Spell Power is the main factor for the duration of many spells (1 point of Power typically equals 1 round), the amount of damage dealt by magical attacks, and the number of hit points restored by healing spells."
            },
            knowledge: {
                title: "Knowledge (K)",
                description: "Knowledge determines the maximum amount of spell points a hero can have. The total is calculated by multiplying the hero's knowledge skill by 10. For example, a hero with 12 Knowledge will have 120 spell points."
            }
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
        modalBody.innerHTML = `<h3>${terrainName} (Native Terrain)</h3>
            <p><strong>Native Factions:</strong> ${terrainData.join(', ')}</p>
            <p>${combatBonus}</p>
            ${terrainName !== 'Grass' ? `<p>${movementBonus}</p>` : ''}`;
        showModal();
    }

    function displayMagicSchoolDetails(schoolName) {
        const schoolData = spellsBySchool[schoolName];
        if (!schoolData) return;
        let combatSpellsHTML = '';
        for (const level in schoolData['Combat Spells']) {
            combatSpellsHTML += `<h4>${level}</h4><p>${schoolData['Combat Spells'][level].join(', ')}</p>`;
        }
        let adventureSpellsHTML = '';
        if (Object.keys(schoolData['Adventure Spells']).length > 0) {
            adventureSpellsHTML = '<h3>Adventure Spells</h3>';
            for (const level in schoolData['Adventure Spells']) {
                adventureSpellsHTML += `<h4>${level}</h4><p>${schoolData['Adventure Spells'][level].join(', ')}</p>`;
            }
        }
        modalBody.innerHTML = `<h2>${schoolName} Magic Spells</h2>
            <h3>Combat Spells</h3>
            ${combatSpellsHTML}
            ${adventureSpellsHTML}`;
        showModal();
    }

    function attachMainContentListeners() {
        mainContent.querySelectorAll('.clickable[data-hero-name]').forEach(el => {
            el.addEventListener('click', (e) => displayHeroDetails(e.currentTarget.dataset.heroName));
        });
        mainContent.querySelectorAll('.clickable[data-skill-name]').forEach(el => {
            el.addEventListener('click', (e) => displaySkillDetails(e.currentTarget.dataset.skillName));
        });
        mainContent.querySelectorAll('.clickable[data-specialty-name]').forEach(el => {
            el.addEventListener('click', (e) => displaySpecialtyDetails(e.currentTarget.dataset.specialtyName, e.currentTarget.dataset.specialtyDesc));
        });
        mainContent.querySelectorAll('.clickable[data-modal-type]').forEach(el => {
            el.addEventListener('click', (e) => displayMovementDetails(e.currentTarget.dataset.modalType));
        });
        mainContent.querySelectorAll('.clickable[data-primary-skill]').forEach(el => {
            el.addEventListener('click', (e) => displayPrimarySkillDetails(e.currentTarget.dataset.primarySkill));
        });
        mainContent.querySelectorAll('.clickable[data-terrain-name]').forEach(el => {
            el.addEventListener('click', (e) => displayTerrainDetails(e.currentTarget.dataset.terrainName));
        });
        mainContent.querySelectorAll('.clickable[data-school-name]').forEach(el => {
            el.addEventListener('click', (e) => displayMagicSchoolDetails(e.currentTarget.dataset.schoolName));
        });
    }

    function attachCreatureContentListeners() {
        creatureContent.querySelectorAll('.clickable[data-creature-name]').forEach(el => {
            el.addEventListener('click', (e) => displayCreatureDetails(e.currentTarget.dataset.creatureName));
        });
        creatureContent.querySelectorAll('.clickable[data-special-name]').forEach(el => {
            el.addEventListener('click', (e) => {
                const specialName = e.currentTarget.dataset.specialName;
                const specialDesc = e.currentTarget.dataset.specialDesc;
                modalBody.innerHTML = `<h3>${specialName} (Special Ability)</h3><p>${specialDesc}</p>`;
                showModal();
            });
        });
    }

    function attachSpellContentListeners() {
        spellContent.querySelectorAll('.clickable[data-spell-name]').forEach(el => {
            el.addEventListener('click', (e) => displaySpellDetails(e.currentTarget.dataset.spellName));
        });
    }

    function setupEventListeners() {
        modalClose.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                showView(button.dataset.view);
            });
        });
    }

    // --- Start the App ---
    init();
});
