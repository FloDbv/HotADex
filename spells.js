// Contains all data for spells, organized by name.
const spellsData = {
    "Magic Arrow": {
        "name": "Magic Arrow",
        "school": "All",
        "level": 1,
        "cost": "5 / 4",
        "duration": "Instant",
        "effect": {
            "summary": "Deals (SP x 10) + 10 damage (B), +20 (A), +30 (E).",
            "breakdown": {
                "Basic": "Deals (Spell Power x 10) + 10 damage.",
                "Advanced": "Deals (Spell Power x 10) + 20 damage.",
                "Expert": "Deals (Spell Power x 10) + 30 damage."
            }
        },
        "general_info": "Magic Arrow is one of the game's direct damage spells. In the spell book, Magic Arrow will belong to the school with the highest secondary magic skill (e.g. Earth Magic). If a unit has resistance or vulnerability to a certain school, they will transfer to Magic Arrow as well, regardless of the skills of the casting hero.",
        "probabilities": {
            "Castle": "89%", "Rampart": "89%", "Tower": "94% (89%)", "Inferno": "89%", "Necropolis": "89%", "Dungeon": "88%", "Stronghold": "89%", "Fortress": "89%", "Conflux": "89%", "Cove": "89%", "Factory": "89%"
        },
        "starting_heroes": ["Charna", "Clepin", "Clavius", "Iona", "Isra", "Malcom", "Mulgare", "Mutare Drake", "Rissa", "Rosic", "Tamika", "Thane", "Torosar", "Vey", "Bertram"],
        "specializing_heroes": ["Ciele"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals", "Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of the Firmament / Silt / Tempestuous Fire / Driving Rain", "Plate of Dying Light", "Protection from Earth / Fire / Water"],
        "damage_decreases": ["Spell damage reduction creatures", "Interference Skill", "Charm of Eclipse"],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Magic Bolt'.",
        "gameplay_analysis": null
    },
    "Visions": {
        "name": "Visions",
        "school": "All",
        "level": 2,
        "cost": "4 / 2",
        "duration": "1 day",
        "effect": {
            "summary": "Reveals info about monster stacks (B), hero skills (A), and hero armies (E).",
            "breakdown": {
                "Basic": "Shows the exact number of creatures in a wandering stack and whether they will offer to join. Range is equal to Spell Power or 3, whichever is greater.",
                "Advanced": "Also shows the primary skills of an enemy hero. Range is (Spell Power x 2) or 3, whichever is greater.",
                "Expert": "Also shows the army composition of an enemy hero. Range is (Spell Power x 3) or 3, whichever is greater."
            }
        },
        "general_info": "In the spell book, Visions will belong to the school with the highest secondary magic skill. A hero with at least one Rogue in their army will act as if the expert level Visions spell has been cast constantly, but the ability is lost if Rogues are lost or moved.",
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "18% (13%)", "Inferno": "18%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "13%", "Conflux": "11%", "Cove": "13%", "Factory": "13%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Identify'.",
        "gameplay_analysis": "Visions is one of the most useful spells in the game. Especially in the early stages, it is useful to determine whether or not a stack of wandering creatures will join or flee. This can be a significant advantage. Together with the Diplomacy skill, Visions can form a powerful combination allowing a hero to gather a large army of wandering creatures. Later in the game, Visions can reveal the exact values of an enemy hero's primary skills and the number of troops in their army. Not even the Sphere of Permanence can nullify the effect of Visions."
    },
    "Haste": {
        "name": "Haste",
        "school": "Air",
        "level": 1,
        "cost": "6 / 5",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases speed of one unit by +3 (B), +5 (A), or all units by +5 (E).",
            "breakdown": {
                "Basic": "Increases the speed of a selected friendly unit by 3.",
                "Advanced": "Increases the speed of a selected friendly unit by 5.",
                "Expert": "Increases the speed of all friendly units by 5."
            }
        },
        "general_info": "Haste is the counter-spell to Slow and will remove it when cast upon an affected creature.",
        "probabilities": {
            "Castle": "32%", "Rampart": "54%", "Tower": "39% (31%)", "Inferno": "31%", "Necropolis": "32%", "Dungeon": "52%", "Stronghold": "31%", "Fortress": "53%", "Conflux": "53%", "Cove": "53%", "Factory": "53%"
        },
        "starting_heroes": ["Cyra", "Dracon", "Fafner", "Josephine", "Calid", "Straker", "Ranloo", "Terek", "Brissa", "Celestine", "Frederick"],
        "specializing_heroes": ["Cyra", "Terek", "Brissa"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced level)", "Enchanters (Expert level)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Fast Wind'.",
        "gameplay_analysis": "If you have the fastest unit on the battlefield, giving you the initiative, this is an excellent spell to start with, giving you lots of moves before the enemy can move, especially on Expert level."
    },
    "View Air": {
        "name": "View Air",
        "school": "Air",
        "level": 1,
        "cost": "2 / 1",
        "duration": "Instant",
        "effect": {
            "summary": "Reveals artifacts (B), towns (A), or heroes (E) on the map.",
            "breakdown": {
                "Basic": "Displays the location of all artifacts on the world view screen.",
                "Advanced": "Displays the location of all artifacts and towns on the world view screen.",
                "Expert": "Displays the location of all artifacts, heroes, and towns on the world view screen."
            }
        },
        "general_info": "It displays noteworthy locations on the view world screen. It does not reveal the position of spell scrolls or Pandora's Boxes.",
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "25% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "19%", "Stronghold": "20%", "Fortress": "20%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Disguise": {
        "name": "Disguise",
        "school": "Air",
        "level": 2,
        "cost": "4 / 2",
        "duration": "1 day",
        "effect": {
            "summary": "Masks your army from other players, showing it as your strongest unit.",
            "breakdown": {
                "Basic": "All of the hero's creature troops are displayed as if they were composed of the most powerful creatures in the hero's army. Troop population numbers are represented normally.",
                "Advanced": "Same as basic effect except troop population quantities are represented as 'Few' (1-4).",
                "Expert": "Same as advanced effect except the army is represented as the most powerful creature in the hero's starting town's faction."
            }
        },
        "general_info": "Masks the hero's units on the adventure map from enemy players.",
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "18% (13%)", "Inferno": "18%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "0%", "Fortress": "11%", "Conflux": "13%", "Cove": "0%", "Factory": "13%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "The spell's effect is fixed to last until the beginning of the casting player's next turn. At Advanced or Expert level troop numbers may be seen by the casting player as 0 when inspecting their own hero, but they will be seen by other players as 1-4 unless the other player casts Advanced or Expert Visions.",
        "trivia": null,
        "gameplay_analysis": "The spell's effect will last until the end of the last person's turn, thus making it much more useful for players in the early part of the turn order. Vs. the higher level AI, however the spell is completely useless, as the AI is able to see the true strength of the army in question. Additionally, Disguise helps against an enemy trying to view you with Visions; they will see your fake numbers, but not what troops you have."
    },
    "Disrupting Ray": {
        "name": "Disrupting Ray",
        "school": "Air",
        "level": 2,
        "cost": "10 / 8",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Reduces target's defense by 3 (B), 4 (A), or 5 (E). The effect is cumulative.",
            "breakdown": {
                "Basic": "Reduces the selected enemy unit's defense strength by 3. Cumulative.",
                "Advanced": "Reduces the selected enemy unit's defense strength by 4. Cumulative.",
                "Expert": "Reduces the selected enemy unit's defense strength by 5. Cumulative."
            }
        },
        "general_info": "Disrupting Ray may be cast on the same stack repeatedly, making it the only cumulative spell in the game. The effect of each cast stays until combat ends. It is immune to Dispel, and even if the target was killed and resurrected the effect still remains.",
        "probabilities": {
            "Castle": "35%", "Rampart": "25%", "Tower": "46% (35%)", "Inferno": "47%", "Necropolis": "24%", "Dungeon": "35%", "Stronghold": "35%", "Fortress": "35%", "Conflux": "37%", "Cove": "25%", "Factory": "25%"
        },
        "starting_heroes": ["Aenain"],
        "specializing_heroes": ["Aenain"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Sea Witch (Basic)", "Sorceress (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "The advantage of this spell is that its effects are cumulative. The most typical use is on a Blinded stack, dropping its defense down to zero before all friendly troops attack, making for an easy and quick kill of an otherwise tough opponent."
    },
    "Fortune": {
        "name": "Fortune",
        "school": "Air",
        "level": 2,
        "cost": "7 / 5",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases luck of one unit by +1 (B), +2 (A), or all units by +2 (E).",
            "breakdown": {
                "Basic": "Increases the selected friendly unit's luck by 1.",
                "Advanced": "Increases the selected friendly unit's luck by 2.",
                "Expert": "Increases the luck of all friendly units by 2."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "25%", "Rampart": "35%", "Tower": "33% (25%)", "Inferno": "18%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "25%", "Fortress": "25%", "Conflux": "11%", "Cove": "25%", "Factory": "13%"
        },
        "starting_heroes": ["Melodia", "Daremyth"],
        "specializing_heroes": ["Melodia", "Daremyth"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Leprechaun (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Lightning Bolt": {
        "name": "Lightning Bolt",
        "school": "Air",
        "level": 2,
        "cost": "10 / 8",
        "duration": "Instant",
        "effect": {
            "summary": "Deals (SP x 25) + 10 damage (B), +20 (A), +50 (E).",
            "breakdown": {
                "Basic": "Deals (Spell Power x 25) + 10 damage.",
                "Advanced": "Deals (Spell Power x 25) + 20 damage.",
                "Expert": "Deals (Spell Power x 25) + 50 damage."
            }
        },
        "general_info": "Lightning Bolt is one of the game's direct damage spells.",
        "probabilities": {
            "Castle": "25%", "Rampart": "25%", "Tower": "98% (96%)", "Inferno": "65%", "Necropolis": "35%", "Dungeon": "95%", "Stronghold": "95%", "Fortress": "25%", "Conflux": "77%", "Cove": "25%", "Factory": "95%"
        },
        "starting_heroes": ["Ziph"],
        "specializing_heroes": ["Ziph"],
        "immune_creatures": ["Earth and Magma Elementals", "Green, Gold, Red, Black, and Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons", "Thunderbirds (on attack)"],
        "damage_increases": ["Orb of the Firmament", "Air and Storm Elementals vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Protection from Air"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Ice Bolt is an important second level spell, though it falters compared to the slightly more powerful (yet less cost-effective) Lightning Bolt. It is still a useful tool and one of the game's most notable direct damage spells."
    },
    "Precision": {
        "name": "Precision",
        "school": "Air",
        "level": 2,
        "cost": "8 / 6",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases ranged attack of one unit by +3 (B), +6 (A), or all ranged units by +6 (E).",
            "breakdown": {
                "Basic": "Increases a selected friendly ranged unit's attack strength for ranged attacks by 3.",
                "Advanced": "Increases a selected friendly ranged unit's attack strength for ranged attacks by 6.",
                "Expert": "Increases the attack strength for ranged attacks of all friendly ranged units by 6."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "35%", "Rampart": "35%", "Tower": "33% (25%)", "Inferno": "34%", "Necropolis": "13%", "Dungeon": "35%", "Stronghold": "25%", "Fortress": "25%", "Conflux": "11%", "Cove": "25%", "Factory": "35%"
        },
        "starting_heroes": ["Zubin"],
        "specializing_heroes": ["Zubin"],
        "immune_creatures": [],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Protection from Air": {
        "name": "Protection from Air",
        "school": "Air",
        "level": 2,
        "cost": "7 / 5",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces Air spell damage on one unit by 50% (B/A), or on all units by 75% (E).",
            "breakdown": {
                "Basic": "Protects the selected friendly unit, reducing damage it receives from Air spells by 50%.",
                "Advanced": "Protects the selected friendly unit, reducing damage it receives from Air spells by 50%.",
                "Expert": "Protects all friendly units, reducing damage they receive from Air spells by 75%."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "18% (13%)", "Inferno": "18%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "13%", "Conflux": "11%", "Cove": "13%", "Factory": "13%"
        },
        "starting_heroes": ["Aeris", "Axsis", "Nagash", "Sephinroth", "Oris"],
        "specializing_heroes": [],
        "immune_creatures": ["Green, Gold, Red, Black, and Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Storm Elementals (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In Horn of the Abyss, the effect of Protection from Air/Fire/Water/Earth spells increased to 50% (Basic), 50% (Advanced), and 75% (Expert).",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Air Shield": {
        "name": "Air Shield",
        "school": "Air",
        "level": 3,
        "cost": "12 / 9",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces ranged damage to one unit by 25% (B), 50% (A), or on all units by 50% (E).",
            "breakdown": {
                "Basic": "Target allied troop takes 25% less damage from ranged attacks.",
                "Advanced": "Target allied troop takes 50% less damage from ranged attacks.",
                "Expert": "All allied troops take 50% less damage from ranged attacks."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "13%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "9%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "24%", "Fortress": "17%", "Conflux": "13%", "Cove": "7%", "Factory": "24%"
        },
        "starting_heroes": ["Dargem"],
        "specializing_heroes": ["Dargem"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Fixes a bug where Air Shield was supposed to protect from Arrow Towers as well, but it actually significantly increased their damage.",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Destroy Undead": {
        "name": "Destroy Undead",
        "school": "Air",
        "level": 3,
        "cost": "15 / 12",
        "duration": "Instant",
        "effect": {
            "summary": "Damages all Undead. Damage is (SP x 10) + 10 (B), +20 (A), +50 (E).",
            "breakdown": {
                "Basic": "All undead creature troops receive (Spell Power x 10) + 10 damage.",
                "Advanced": "All undead creature troops receive (Spell Power x 10) + 20 damage.",
                "Expert": "All undead creature troops receive (Spell Power x 10) + 50 damage."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "35%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "9%", "Necropolis": "0%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "9%", "Conflux": "13%", "Cove": "7%", "Factory": "13%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["All non-Undead creatures"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of the Firmament"],
        "damage_decreases": ["Interference"],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Sacred Breath'.",
        "gameplay_analysis": "Destroy Undead is at its best when fighting against a small number of scattered low-tier undead creatures. The damage does not scale enough to cause serious damage when fighting against larger armies with stronger forces. Typically there are more useful spells available than Destroy Undead for harming the enemy."
    },
    "Hypnotize": {
        "name": "Hypnotize",
        "school": "Air",
        "level": 3,
        "cost": "18 / 15",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Takes control of an enemy stack with total HP less than (SP x 25) + 10 (B), +20 (A), +50 (E).",
            "breakdown": {
                "Basic": "Target enemy troop with less than (Spell Power x 25) + 10 health is put under your control.",
                "Advanced": "Target enemy troop with less than (Spell Power x 25) + 20 health is put under your control.",
                "Expert": "Target enemy troop with less than (Spell Power x 25) + 50 health is put under your control."
            }
        },
        "general_info": "This is a mind spell that puts an enemy creature stack under the caster's control. Although the spell description says the hypnotized troop can be attacked without fear of retaliation, this is not true: the unit retaliates as normal. The hypnotized unit does not block enemy shooters.",
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "32% (24%)", "Inferno": "25%", "Necropolis": "0%", "Dungeon": "24%", "Stronghold": "13%", "Fortress": "17%", "Conflux": "35%", "Cove": "13%", "Factory": "13%"
        },
        "starting_heroes": ["Astral"],
        "specializing_heroes": ["Astral"],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Chain Lightning": {
        "name": "Chain Lightning",
        "school": "Air",
        "level": 4,
        "cost": "24 / 20",
        "duration": "Instant",
        "effect": {
            "summary": "Hits 4 (B) or 5 (A/E) targets. Damage is (SP x 40) + 25 (B), +50 (A), +100 (E).",
            "breakdown": {
                "Basic": "Strikes a target troop for (Spell Power x 40) + 25 damage. Bolt then strikes up to four total troops.",
                "Advanced": "Strikes a target troop for (Spell Power x 40) + 50 damage. Bolt then strikes up to five total troops.",
                "Expert": "Strikes a target troop for (Spell Power x 40) + 100 damage. Bolt then strikes up to five total troops."
            }
        },
        "general_info": "Chain Lightning strikes up to four or five creature stacks, causing full damage to the initial target, and halving for each target after that. The closest creature stack to the initial target becomes the second target, whether it is a friend or a foe. The same stack cannot be targeted twice.",
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "29% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": ["Solmyr"],
        "specializing_heroes": ["Solmyr"],
        "immune_creatures": ["Earth and Magma Elementals", "Gold Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": ["Orb of the Firmament", "Air and Storm Elementals vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Air"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "In a big battle, Chain Lightning is mighty, especially at the beginning of the combat. It can wipe out great amounts of units and weaken the enemy significantly. However, when fighting against an enemy with a low amount of stacks, it is not very welcome since it may destroy your own troops. A way to defend your Tower army from lightning strikes is to have Golems as your closest impact creature; Iron Golems will absorb 75% of the magic damage."
    },
    "Counterstrike": {
        "name": "Counterstrike",
        "school": "Air",
        "level": 4,
        "cost": "24 / 20",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Target gets +1 (B) or +2 (A) retaliations. At Expert, all units get +2 retaliations.",
            "breakdown": {
                "Basic": "Target allied troop can retaliate against one additional attack per round.",
                "Advanced": "Target allied troop can retaliate against two additional attacks per round.",
                "Expert": "All allied troops can retaliate against two additional attacks per round."
            }
        },
        "general_info": "The additional counterstrikes remain available until the end of the round, even if the spell is dispelled.",
        "probabilities": {
            "Castle": "10%", "Rampart": "20%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Royal Griffins", "Fangarms", "Gold Dragons", "Magic Elementals", "Black Dragons"],
        "casting_creatures": ["Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Most effectively cast on strong troops like Nagas, those that strike all around (such as Hydras), or massively numbered troops like Halberdiers or Vampire Lords."
    },
    "Dimension Door": {
        "name": "Dimension Door",
        "school": "Air",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Instant",
        "effect": {
            "summary": "Teleports hero on adventure map. Can be cast 2 (B), 3 (A), or 4 (E) times per day.",
            "breakdown": {
                "Basic": "Teleports hero to a selected, unoccupied location on the adventure map. May be cast twice per day. Costs 300 movement points.",
                "Advanced": "May be cast three times per day.",
                "Expert": "May be cast four times per day. Costs 150 movement points."
            }
        },
        "general_info": "Teleports the hero to a selected, unoccupied location on the adventure map. The hero can transfer onto a shrouded square. If the destination is invalid (e.g., water), the spell fails, and the mana and movement points are lost.",
        "probabilities": {
            "Castle": "0%", "Rampart": "20%", "Tower": "28% (14%)", "Inferno": "16%", "Necropolis": "16%", "Dungeon": "16%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "13%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In HotA, with the tournament option on, it's limited to 2 casts per day on XL+U maps with Expert Air Magic, and once per day otherwise.",
        "trivia": "An early name for this spell was 'Dimension Walk'.",
        "gameplay_analysis": "Dimension Door is commonly banned or used with restrictions in tournament and multiplayer games due to its overpowered effects."
    },
    "Fly": {
        "name": "Fly",
        "school": "Air",
        "level": 5,
        "cost": "20 / 15",
        "duration": "1 day",
        "effect": {
            "summary": "Allows hero to fly over obstacles with a 40% (B), 20% (A), or 0% (E) movement penalty.",
            "breakdown": {
                "Basic": "Allows the hero to move over water and any obstacles on the map with a 40% movement penalty.",
                "Advanced": "Allows the hero to move over water and any obstacles on the map with a 20% movement penalty.",
                "Expert": "Allows the hero to move over water and any obstacles on the map with no penalty."
            }
        },
        "general_info": "Allows the casting hero to fly over terrain obstacles (except rock). Cannot be used by a hero on a boat.",
        "probabilities": {
            "Castle": "0%", "Rampart": "16%", "Tower": "32% (16%)", "Inferno": "16%", "Necropolis": "16%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "13%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In HotA, you cannot trigger guarded objects while flying without fighting the guardians first by landing on an adjacent tile.",
        "trivia": null,
        "gameplay_analysis": "In almost all multiplayer games, Fly is banned, along with Dimension Door.",
        "in_depth_mechanics": "<h3>Flying Movement Costs</h3><p>The movement point cost for flying over various terrains is as follows (Straight / Diagonal movement):</p><ul><li><b>Impassable, Water, Swamp, Sand, Snow:</b> 140 / 197</li><li><b>Rough, Wasteland:</b> 125 / 176</li><li><b>All other non-road terrains:</b> 100 / 141</li><li><b>Dirt Road:</b> 75 / 106</li><li><b>Gravel Road:</b> 65 / 91</li><li><b>Cobblestone Road:</b> 50 / 70</li></ul>"
    },
    "Magic Mirror": {
        "name": "Magic Mirror",
        "school": "Air",
        "level": 5,
        "cost": "25 / 20",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Gives a 20% (B), 30% (A), or 40% (E) chance to reflect enemy spells.",
            "breakdown": {
                "Basic": "Enemy spells cast on a targeted, allied troop have a 20% chance of being redirected to a random enemy troop.",
                "Advanced": "Enemy spells cast on a targeted, allied troop have a 30% chance of being redirected to a random enemy troop.",
                "Expert": "Enemy spells cast on a targeted, allied troop have a 40% chance of being redirected to a random enemy troop."
            }
        },
        "general_info": "Reflects direct damage and unit-targeted hostile spells, but not area-of-effect spells like Fireball or mass debuffs like expert Slow. Spells cast by creatures will never be reflected.",
        "probabilities": {
            "Castle": "0%", "Rampart": "16%", "Tower": "28% (14%)", "Inferno": "0%", "Necropolis": "0%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "13%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Magic Elementals"],
        "casting_creatures": ["Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Backlash'.",
        "gameplay_analysis": "Despite being a 5th level spell, Magic Mirror serves very little function in the game. Faerie Dragons are well-protected by its effects, but by the time you have a hero with the mana to cast it, there are likely better spells in your spell book to use in combat."
    },
    "Summon Air Elemental": {
        "name": "Summon Air Elemental",
        "school": "Air",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Summons Air Elementals with total HP equal to SP x 15 (B), x 20 (A), or x 30 (E).",
            "breakdown": {
                "Basic": "Summons a troop of Air Elementals with a total health of (Spell Power x 15).",
                "Advanced": "Summons a troop of Air Elementals with a total health of (Spell Power x 20).",
                "Expert": "Summons a troop of Air Elementals with a total health of (Spell Power x 30)."
            }
        },
        "general_info": "Elementals are summoned to the first row of the combat field on the caster's side. The stack will remain for the rest of the combat or until killed.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "28% (14%)", "Inferno": "0%", "Necropolis": "16%", "Dungeon": "0%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "12%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Restriction on summoning only one type of elemental per combat is removed in HotA.",
        "trivia": null,
        "gameplay_analysis": "All Summon Elemental spells are quite powerful. That being said, Air Elementals have the lowest stats amongst the elementals. On the plus side, Air Elementals are the fastest among their kind. This makes them the best disposable troop to take retaliations off slow, hard-hitting enemies."
    },
    "Titan's Lightning Bolt": {
        "name": "Titan's Lightning Bolt",
        "school": "Air",
        "level": 5,
        "cost": "0 / 0",
        "duration": "Instant",
        "effect": {
            "summary": "Deals 600 damage. Requires the Titan's Thunder artifact.",
            "breakdown": {
                "Basic": "Deals 600 damage. Requires Titan's Thunder artifact.",
                "Advanced": "Deals 600 damage. Requires Titan's Thunder artifact.",
                "Expert": "Deals 600 damage. Requires Titan's Thunder artifact."
            }
        },
        "general_info": "This spell is granted by the combination artifact Titan's Thunder. The spell's damage is unaffected by the hero's Spell Power or Air Magic skill.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0%", "Inferno": "0%", "Necropolis": "0%", "Dungeon": "0%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Earth and Magma Elementals", "Magic Elementals", "Black Dragons"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of the Firmament", "Air and Storm Elementals vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Protection from Air"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Shield": {
        "name": "Shield",
        "school": "Earth",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces melee damage to one unit by 15% (B), 30% (A), or all units by 30% (E).",
            "breakdown": {
                "Basic": "Shields a selected friendly unit, reducing the amount of damage it receives from hand-to-hand attacks by 15%.",
                "Advanced": "Shields a selected friendly unit, reducing the amount of damage it receives from hand-to-hand attacks by 30%.",
                "Expert": "Shields all friendly units, reducing the amount of damage they received from hand-to-hand attacks by 30%."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "54%", "Rampart": "20%", "Tower": "39% (31%)", "Inferno": "20%", "Necropolis": "54%", "Dungeon": "30%", "Stronghold": "31%", "Fortress": "31%", "Conflux": "31%", "Cove": "31%", "Factory": "31%"
        },
        "starting_heroes": ["Aine", "Neela", "Piquedram", "Galthran", "Jaegar", "Nimbus", "Styg", "Todd"],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Unlike spells like Stone Skin that affect Defense, Shield directly multiplies the total damage by 70% (or 85% for Basic). Since Defense is somewhat more complicated, it's hard to directly compare its effects, but a very rough estimate is that Shield is worth about 10 (5 for Basic) extra points of Defense."
    },
    "Slow": {
        "name": "Slow",
        "school": "Earth",
        "level": 1,
        "cost": "6 / 5",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces speed of one unit by 25% (B), 50% (A), or all units by 50% (E). (HotA: 50%+1)",
            "breakdown": {
                "Basic": "Reduces the speed of the selected enemy unit by 25%.",
                "Advanced": "Reduces the speed of the selected enemy unit by 50%. (HotA: 50% + 1)",
                "Expert": "Reduces the speed of all enemy units by 50%. (HotA: 50% + 1)"
            }
        },
        "general_info": "Slow is a counter-spell to Haste and will remove it when cast upon an affected creature. The new speed is rounded down.",
        "probabilities": {
            "Castle": "32%", "Rampart": "54%", "Tower": "63% (53%)", "Inferno": "53%", "Necropolis": "32%", "Dungeon": "30%", "Stronghold": "31%", "Fortress": "31%", "Conflux": "53%", "Cove": "31%", "Factory": "31%"
        },
        "starting_heroes": ["Moandor", "Sandro", "Geon", "Gundula", "Voy", "Grindan", "Andal"],
        "specializing_heroes": ["Grindan"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In Horn of the Abyss, Advanced and Expert Slow's effect is reduced: the enemy's speed is lowered to 50% of normal +1.",
        "trivia": "An early name for this spell was 'Muck and Mire'.",
        "gameplay_analysis": "Slow is one of the best spells in the game, even though it is only level 1. Especially useful early in the game, it can allow one's units to have first option at attacking. Ranged attackers such as Marksmen and Grand Elves can easily clear out slow, yet powerful guardians like Dendroids or Golems with this spell in effect."
    },
    "Stone Skin": {
        "name": "Stone Skin",
        "school": "Earth",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases defense of one unit by +3 (B), +6 (A), or all units by +6 (E).",
            "breakdown": {
                "Basic": "Increases the selected friendly unit's defense strength by 3.",
                "Advanced": "Increases the selected friendly unit's defense strength by 6.",
                "Expert": "Increases the defense strength of all friendly units by 6."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "32%", "Rampart": "32%", "Tower": "63% (53%)", "Inferno": "31%", "Necropolis": "54%", "Dungeon": "30%", "Stronghold": "53%", "Fortress": "31%", "Conflux": "31%", "Cove": "31%", "Factory": "53%"
        },
        "starting_heroes": ["Rion", "Halon", "Zydar", "Vokial", "Xsi", "Darkstorn", "Dessa", "Merist", "Tiva", "Labetha"],
        "specializing_heroes": ["Xsi", "Darkstorn", "Merist", "Labetha"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Tough Skin'.",
        "gameplay_analysis": "Stone Skin is often compared to Shield, which has similar effects. The main difference is that Stone Skin also works against ranged creatures while Shield only reduces hand-to-hand damage. A rule of thumb on whether to use Shield or Stone Skin in hand-to-hand combat is that if an enemy's attack skill is greater than your defense skill, use Stone Skin."
    },
    "View Earth": {
        "name": "View Earth",
        "school": "Earth",
        "level": 1,
        "cost": "2 / 1",
        "duration": "Instant",
        "effect": {
            "summary": "Reveals resources (B), mines (A), or the entire map terrain (E).",
            "breakdown": {
                "Basic": "Displays the location of all loose resources on the world view screen.",
                "Advanced": "Displays the location of all mines and loose resources on the world view screen.",
                "Expert": "Displays the entire map terrain, all mines and loose resources on the view world screen."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "25% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "19%", "Stronghold": "20%", "Fortress": "20%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": ["Ayden", "Agar"],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Death Ripple": {
        "name": "Death Ripple",
        "school": "Earth",
        "level": 2,
        "cost": "10 / 8",
        "duration": "Instant",
        "effect": {
            "summary": "Damages all non-Undead. Damage is (SP x 5) + 10 (B), +20 (A), +30 (E).",
            "breakdown": {
                "Basic": "Sends a wave of death across the battlefield which damages all non-undead units, dealing (10 + (power x 5)) damage.",
                "Advanced": "Sends a wave of death across the battlefield which damages all non-undead units, dealing (20 + (power x 5)) damage.",
                "Expert": "Sends a wave of death across the battlefield which damages all non-undead units, dealing (30 + (power x 5)) damage."
            }
        },
        "general_info": "Death Ripple can only appear in a Necropolis mage guild. Additionally, it can be learned from shrines, spell scrolls, or scholars.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "0%", "Necropolis": "95%", "Dungeon": "0%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": ["Septienna"],
        "specializing_heroes": ["Septienna"],
        "immune_creatures": ["Undead", "Golems", "Gargoyles", "Elementals", "War Machines"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of Silt"],
        "damage_decreases": ["Spell damage reduction", "Interference"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Although the damage dealt by Death Ripple may seem very low at first glance, it can be very effective early on in the game if used properly. This applies not only to Necropolis, but to any faction that can obtain some undead troops or the Pendant of Life."
    },
    "Quicksand": {
        "name": "Quicksand",
        "school": "Earth",
        "level": 2,
        "cost": "8 / 6",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Creates 4 (B), 6 (A), or 8 (E) invisible quicksand pits that halt enemy movement for one turn.",
            "breakdown": {
                "Basic": "Quicksand pits are placed in 4 random hexes.",
                "Advanced": "Quicksand pits are placed in 6 random hexes.",
                "Expert": "Quicksand pits are placed in 8 random hexes."
            }
        },
        "general_info": "A creature stack that tries to move through a hex with a quicksand pit is halted and cannot act until the next round. Once a pit is stepped on, it is revealed. The spell can only be removed by expert Remove Obstacle or expert Dispel.",
        "probabilities": {
            "Castle": "25%", "Rampart": "25%", "Tower": "46% (35%)", "Inferno": "18%", "Necropolis": "24%", "Dungeon": "25%", "Stronghold": "35%", "Fortress": "35%", "Conflux": "20%", "Cove": "25%", "Factory": "25%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Flying creatures"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Quicksand can be particularly useful in town sieges, since a large portion of the battlefield is blocked by walls and moats. It is also useful when fighting neutral army stacks, since wandering creatures will always attempt to attack foes that are within reach, making them predictable and thereby easy to 'trick' into stepping on the quicksand."
    },
    "Protection from Earth": {
        "name": "Protection from Earth",
        "school": "Earth",
        "level": 3,
        "cost": "12 / 9",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces Earth spell damage on one unit by 50% (B/A), or on all units by 75% (E).",
            "breakdown": {
                "Basic": "Protects the selected friendly unit, reducing damage it receives from Earth spells by 50%.",
                "Advanced": "Protects the selected friendly unit, reducing damage it receives from Earth spells by 50%.",
                "Expert": "Protects all friendly units, reducing damage they receive from Earth spells by 75%."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "17% (13%)", "Inferno": "9%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "0%", "Conflux": "13%", "Cove": "13%", "Factory": "13%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Magma Elementals (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In Horn of the Abyss, the effect of Protection from Air/Fire/Water/Earth spells increased to 50% (Basic), 50% (Advanced), and 75% (Expert).",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Animate Dead": {
        "name": "Animate Dead",
        "school": "Earth",
        "level": 3,
        "cost": "15 / 12",
        "duration": "Permanent",
        "effect": {
            "summary": "Permanently resurrects undead. Restores HP equal to (SP x 50) + 30 (B), +60 (A), +160 (E).",
            "breakdown": {
                "Basic": "Reanimates (30 + (power x 50)) health points worth of killed undead creatures.",
                "Advanced": "Reanimates (60 + (power x 50)) health points worth of killed undead creatures.",
                "Expert": "Reanimates (160 + (power x 50)) health points worth of killed undead creatures."
            }
        },
        "general_info": "Permanently reanimates killed undead units, similar to the Resurrection spell. However, unlike Resurrection, the effect is always permanent regardless of the hero's Earth Magic skill level.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "0%", "Necropolis": "44%", "Dungeon": "0%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": ["Thant"],
        "specializing_heroes": ["Thant"],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null,
        "in_depth_mechanics": "The number of HP restored by Animate Dead and Resurrection is almost equal. Both give 50 times spell power at all levels. The flat bonus for Basic/Advanced/Expert level is 30/60/160 for Animate Dead and 40/80/160 for Resurrection, giving Resurrection a slight edge before Expert level. Note that Resurrection costs more spell points to cast and its effect is only permanent with at least Advanced Earth Magic. <br><br> The following table shows the probability of a player finding either Animate Dead or Resurrection based on the number of towns they own (assuming an average of 20% for Resurrection and only Necropolis towns for Animate Dead): <table class='modal-table'><thead><tr><th># of Cities</th><th>Animate Dead Chance</th><th>Resurrection Chance</th></tr></thead><tbody><tr><td>1</td><td>44%</td><td>20%</td></tr><tr><td>2</td><td>69%</td><td>36%</td></tr><tr><td>3</td><td>82%</td><td>49%</td></tr><tr><td>4</td><td>90%</td><td>59%</td></tr><tr><td>5</td><td>94%</td><td>67%</td></tr><tr><td>6</td><td>97%</td><td>74%</td></tr><tr><td>7</td><td>98%</td><td>79%</td></tr><tr><td>8</td><td>99%</td><td>83%</td></tr></tbody></table>"
    },
    "Anti-Magic": {
        "name": "Anti-Magic",
        "school": "Earth",
        "level": 3,
        "cost": "15 / 12",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Makes a target troop immune to spells of level 1-3 (B), 1-4 (A), or all spells (E).",
            "breakdown": {
                "Basic": "Target allied troop becomes immune to spells of level 1-3.",
                "Advanced": "Target allied troop becomes immune to spells of level 1-4.",
                "Expert": "Target allied troop becomes immune to spells of level 1-5."
            }
        },
        "general_info": "Anti-Magic also removes negative spell effects (e.g. Slow) but not positive ones (e.g. Bless). The only spell powerful enough to pierce through Anti-Magic is advanced/expert level Resurrection.",
        "probabilities": {
            "Castle": "35%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "17%", "Necropolis": "25%", "Dungeon": "24%", "Stronghold": "35%", "Fortress": "40%", "Conflux": "35%", "Cove": "30%", "Factory": "24%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Anti-Magic can limit the number of creature stacks available for negative spells. However, you cannot resurrect back lost creatures, unless the stack is completely dead. Even though Dispel can cancel the effect of Anti-Magic, it uses the enemy hero's turn for that combat round."
    },
    "Earthquake": {
        "name": "Earthquake",
        "school": "Earth",
        "level": 3,
        "cost": "20 / 17",
        "duration": "Instant",
        "effect": {
            "summary": "Damages 2 (B), 3 (A), or 4 (E) random sections of the castle wall during a siege.",
            "breakdown": {
                "Basic": "Does one point of damage to two random walls/arrow towers during siege combat.",
                "Advanced": "Does one point of damage to three random walls/arrow towers during siege combat.",
                "Expert": "Does one point of damage to four random walls/arrow towers during siege combat."
            }
        },
        "general_info": "Earthquake cannot be cast in non-siege combat or in a town lacking at least a Fort.",
        "probabilities": {
            "Castle": "13%", "Rampart": "24%", "Tower": "17% (13%)", "Inferno": "25%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "9%", "Conflux": "13%", "Cove": "24%", "Factory": "24%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "When invading a town, Earthquake can make the job much easier. Together with Ballistics, the siege walls can be brought down within the first rounds of combat. For might-oriented heroes, however, the spell point cost can be quite steep."
    },
    "Force Field": {
        "name": "Force Field",
        "school": "Earth",
        "level": 3,
        "cost": "12 / 9",
        "duration": "2 rounds",
        "effect": {
            "summary": "Creates a 2-hex (B) or 3-hex (A/E) impassable wall on the battlefield.",
            "breakdown": {
                "Basic": "A two hex-wide force wall is created at target hex. Movement through these hexes is blocked.",
                "Advanced": "Same as basic effect, except the force wall is three hexes wide.",
                "Expert": "Same as advanced effect."
            }
        },
        "general_info": "The spell creates an impassable wall that can only be removed by expert Remove Obstacle or expert Dispel. The AI cannot cast this spell.",
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "32% (24%)", "Inferno": "9%", "Necropolis": "25%", "Dungeon": "24%", "Stronghold": "13%", "Fortress": "17%", "Conflux": "24%", "Cove": "13%", "Factory": "24%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Stone Wall'. This is one of the only spells that does not improve from advanced to expert level.",
        "gameplay_analysis": "Force Field is used to block enemy ground troops from advancing. It is often used to protect shooters or at least give them more time to thin enemy troops. It becomes very useful on battlefields with suitable obstacles that create narrow paths or pockets."
    },
    "Meteor Shower": {
        "name": "Meteor Shower",
        "school": "Earth",
        "level": 4,
        "cost": "16 / 12",
        "duration": "Instant",
        "effect": {
            "summary": "Hits a 7-hex area. Damage is (SP x 25) + 25 (B), +50 (A), +100 (E).",
            "breakdown": {
                "Basic": "Troops in target hex and adjacent hexes take (25 + (power x 25)) damage.",
                "Advanced": "Troops in target hex and adjacent hexes take (50 + (power x 25)) damage.",
                "Expert": "Troops in target hex and adjacent hexes take (100 + (power x 25)) damage."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "29% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": ["Aislinn", "Deemer"],
        "specializing_heroes": ["Aislinn", "Deemer"],
        "immune_creatures": ["Air and Storm Elementals", "Gold Dragons", "Magic Elementals", "Black Dragons"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of Silt", "Earth and Magma Elemental vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Earth"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Resurrection": {
        "name": "Resurrection",
        "school": "Earth",
        "level": 4,
        "cost": "20 / 16",
        "duration": "Combat / Permanent",
        "effect": {
            "summary": "Resurrects allied living troops. Restores HP equal to (SP x 50) + 40 (B), +80 (A), +160 (E). Permanent with Advanced/Expert.",
            "breakdown": {
                "Basic": "Target allied living troop has (40 + (power x 50)) health worth of creatures restored to life for the duration of the current battle.",
                "Advanced": "Same as basic effect, except that (80 + (power x 50)) health worth of creatures are restored permanently.",
                "Expert": "Same as advanced effect, except that (160 + (power x 50)) health worth of creatures are restored permanently."
            }
        },
        "general_info": "With Basic Resurrection, the resurrected creatures which survive are removed at the end of the combat.",
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "29% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "20%"
        },
        "starting_heroes": ["Alamar", "Jeddite"],
        "specializing_heroes": ["Alamar", "Jeddite"],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Gargoyles"],
        "casting_creatures": ["Archangels"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "With Basic Resurrection, the number of destroyed creatures at the end of combat is the sum of losses throughout all phases of combat. The 'real' creatures are always destroyed first.",
        "trivia": null,
        "gameplay_analysis": "Resurrection is one of the most powerful spells in the game. Using it with Expert Earth Magic and Intelligence, a hero can basically resurrect their entire army if successful. The number of HP restored is almost equal to Animate Dead."
    },
    "Sorrow": {
        "name": "Sorrow",
        "school": "Earth",
        "level": 4,
        "cost": "16 / 12",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces morale of one unit by -1 (B), -2 (A), or all units by -2 (E).",
            "breakdown": {
                "Basic": "Target enemy troop's morale rating is reduced by 1.",
                "Advanced": "Target enemy troop's morale rating is reduced by 2.",
                "Expert": "All enemy troops' morale ratings are reduced by 2."
            }
        },
        "general_info": "It is a mind spell that reduces the morale of the target enemy creature(s).",
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "Minotaurs (cannot be reduced below +1)"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Expert Sorrow is quite useful against wandering creatures, at least in situations where it is essential that they do not receive an extra turn. However, casting Sorrow against a computer or a human player is questionable. In general, Sorrow is not as powerful as many other 4th level spells."
    },
    "Town Portal": {
        "name": "Town Portal",
        "school": "Earth",
        "level": 4,
        "cost": "16 / 12",
        "duration": "Instant",
        "effect": {
            "summary": "Teleports hero to the nearest town (B), or any town of choice (A/E).",
            "breakdown": {
                "Basic": "The casting hero is teleported to the nearest allied town (must be unoccupied). 300 movement points are expended.",
                "Advanced": "Same as basic effect, except the hero may teleport to any allied town with no visiting hero.",
                "Expert": "Same as advanced effect, except only 200 movement points are expended."
            }
        },
        "general_info": "The hero cannot teleport to a town which has a visiting hero. If there is a hero in the garrison but no visiting one, the town can be reached by the spell.",
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "29% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Town Portal is possibly the most powerful spell in the game. It is severely imbalanced as it allows a hero to travel immense distances instantaneously. A hero with Town Portal can hire a great number of troops, upgrade them and take them far away simultaneously, and will have a great chance to defend a town with no losses. However, the spell is so powerful that it should be banned in multiplayer or tournament games."
    },
    "Implosion": {
        "name": "Implosion",
        "school": "Earth",
        "level": 5,
        "cost": "30 / 25",
        "duration": "Instant",
        "effect": {
            "summary": "Deals (SP x 75) + 100 damage (B), +200 (A), +300 (E).",
            "breakdown": {
                "Basic": "Target enemy troop receives (100 + (power x 75)) damage.",
                "Advanced": "Target enemy troop receives (200 + (power x 75)) damage.",
                "Expert": "Target enemy troop receives (300 + (power x 75)) damage."
            }
        },
        "general_info": "Implosion is the most destructive direct damage spell for a single creature stack.",
        "probabilities": {
            "Castle": "0%", "Rampart": "16%", "Tower": "28% (14%)", "Inferno": "16%", "Necropolis": "20%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "13%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["War Machines", "Magic Elementals", "Black Dragons"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of Silt"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Earth"],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Decay'.",
        "gameplay_analysis": null
    },
    "Summon Earth Elemental": {
        "name": "Summon Earth Elemental",
        "school": "Earth",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Summons Earth Elementals with total HP equal to SP x 15 (B), x 20 (A), or x 30 (E).",
            "breakdown": {
                "Basic": "Summons a troop of Earth Elementals with a total health of (Spell Power x 15).",
                "Advanced": "Summons a troop of Earth Elementals with a total health of (Spell Power x 20).",
                "Expert": "Summons a troop of Earth Elementals with a total health of (Spell Power x 30)."
            }
        },
        "general_info": "Elementals are summoned to the first row of the combat field on the caster's side. The stack will remain for the rest of the combat or until killed.",
        "probabilities": {
            "Castle": "0%", "Rampart": "16%", "Tower": "28% (14%)", "Inferno": "16%", "Necropolis": "16%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "12%", "Cove": "0%", "Factory": "16%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Restriction on summoning only one type of elemental per combat is removed in HotA.",
        "trivia": null,
        "gameplay_analysis": "Earth Elementals are the best Elementals to summon. Even though they may be the worst elemental overall to recruit since they are slow and the weakest level 5 unit, Earth Elementals have the most HP and damage per unit of all elementals. Their immunity to Armageddon also allows using the 'Dragogeddon' tactic."
    },
    "Bloodlust": {
        "name": "Bloodlust",
        "school": "Fire",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases melee attack of one unit by +3 (B), +6 (A), or all units by +6 (E).",
            "breakdown": {
                "Basic": "Increases the selected friendly unit's attack strength for hand-to-hand attacks by 3.",
                "Advanced": "Increases the selected friendly unit's attack strength for hand-to-hand attacks by 6.",
                "Expert": "Increases the attack strength for hand-to-hand attacks of all friendly units by 6."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "53%", "Necropolis": "32%", "Dungeon": "30%", "Stronghold": "53%", "Fortress": "31%", "Conflux": "31%", "Cove": "31%", "Factory": "31%"
        },
        "starting_heroes": ["Ash", "Gird", "Inteus", "Malekith", "Saurug"],
        "specializing_heroes": ["Ash", "Inteus"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals", "Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes"],
        "casting_creatures": ["Ogre Magi (Advanced)", "Master Genies (Advanced)", "Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Curse": {
        "name": "Curse",
        "school": "Fire",
        "level": 1,
        "cost": "6 / 5",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Target unit deals minimum damage (B), min-1 (A). At Expert, all enemy units deal min-1 damage.",
            "breakdown": {
                "Basic": "Causes the selected enemy unit to inflict minimum damage when attacking.",
                "Advanced": "Causes the selected enemy unit to inflict (minimum damage - 1) when attacking. Base damage cannot be reduced below 1.",
                "Expert": "Causes all enemy units to inflict (minimum damage - 1) when attacking. Base damage cannot be reduced below 1."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "25% (20%)", "Inferno": "31%", "Necropolis": "54%", "Dungeon": "30%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": ["Aine", "Elleshar", "Ingham", "Vidomina"],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals", "Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes"],
        "casting_creatures": ["Black and Dread Knights"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "For units with big damage range, Curse is a complete disaster. Examples include Harpies (1-4), Hell Hounds (2-7), and Air Elementals (2-8)."
    },
    "Protection from Fire": {
        "name": "Protection from Fire",
        "school": "Fire",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces Fire spell damage on one unit by 50% (B/A), or on all units by 75% (E).",
            "breakdown": {
                "Basic": "Protects the selected friendly unit, reducing damage it receives from Fire spells by 50%.",
                "Advanced": "Protects the selected friendly unit, reducing damage it receives from Fire spells by 50%.",
                "Expert": "Protects all friendly units, reducing damage they receive from Fire spells by 75%."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "25% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "19%", "Stronghold": "20%", "Fortress": "20%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": ["Verdish"],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals", "Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes"],
        "casting_creatures": ["Master Genies (Advanced)", "Energy Elementals (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In Horn of the Abyss, the effect of Protection from Air/Fire/Water/Earth spells increased to 50% (Basic), 50% (Advanced), and 75% (Expert).",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Blind": {
        "name": "Blind",
        "school": "Fire",
        "level": 2,
        "cost": "10 / 8",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Target cannot act. Retaliates at 50% (B), 25% (A), or 0% (E) strength.",
            "breakdown": {
                "Basic": "Blinds the selected enemy unit so that it cannot act until attacked. Deactivating attack is retaliated at 50% of base attack rating.",
                "Advanced": "Blinds the selected enemy unit so that it cannot act until attacked. Deactivating attack is retaliated at 25% of base attack rating.",
                "Expert": "Blinds the selected enemy unit so that it cannot act until attacked. Deactivating attack receives full retaliation."
            }
        },
        "general_info": "Blind is a mind spell that makes the creature stack immobile. It can be removed with Cure and Dispel, and is removed if the creature is attacked.",
        "probabilities": {
            "Castle": "25%", "Rampart": "35%", "Tower": "18% (13%)", "Inferno": "47%", "Necropolis": "24%", "Dungeon": "25%", "Stronghold": "25%", "Fortress": "35%", "Conflux": "37%", "Cove": "0%", "Factory": "44%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "All Dragons", "Efreet Sultans", "Firebirds and Phoenixes", "Troglodytes", "Sandworms"],
        "casting_creatures": ["Unicorns", "War Unicorns"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Blind is arguably one of the strongest spells in the game. It is perhaps at its best combined with the Resurrection spell, and managing to blind the opponent's last creature stack. This leads to a situation where the hero can cast Resurrection to bring many if not all his troops back to life."
    },
    "Fire Wall": {
        "name": "Fire Wall",
        "school": "Fire",
        "level": 2,
        "cost": "8 / 6",
        "duration": "2 rounds",
        "effect": {
            "summary": "Creates a 2-hex (B/A) or 3-hex (E) wall that damages enemies. Damage is (SP x 10) + 10 (B), +20 (A), +50 (E).",
            "breakdown": {
                "Basic": "Places a 2-hex fire wall. Units passing through take (10 + (power x 10)) damage.",
                "Advanced": "Places a 2-hex fire wall. Units passing through take (20 + (power x 10)) damage.",
                "Expert": "Places a 3-hex fire wall. Units passing through take (50 + (power x 10)) damage."
            }
        },
        "general_info": "Produces a wall of fire. Any unit that's not immune that passes through it or ends their turn in it will take damage. Can only be removed by expert Remove Obstacle or expert Dispel.",
        "probabilities": {
            "Castle": "25%", "Rampart": "25%", "Tower": "33% (25%)", "Inferno": "47%", "Necropolis": "24%", "Dungeon": "25%", "Stronghold": "25%", "Fortress": "25%", "Conflux": "37%", "Cove": "25%", "Factory": "25%"
        },
        "starting_heroes": ["Luna"],
        "specializing_heroes": ["Luna"],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of Tempestuous Fire"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Fire"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Fireball": {
        "name": "Fireball",
        "school": "Fire",
        "level": 3,
        "cost": "15 / 12",
        "duration": "Instant",
        "effect": {
            "summary": "Hits a 7-hex area. Damage is (SP x 10) + 15 (B), +30 (A), +60 (E).",
            "breakdown": {
                "Basic": "Troops in target hex and adjacent hexes take (15 + (power x 10)) damage.",
                "Advanced": "Troops in target hex and adjacent hexes take (30 + (power x 10)) damage.",
                "Expert": "Troops in target hex and adjacent hexes take (60 + (power x 10)) damage."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "24%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "90%", "Necropolis": "35%", "Dungeon": "44%", "Stronghold": "35%", "Fortress": "9%", "Conflux": "35%", "Cove": "7%", "Factory": "34%"
        },
        "starting_heroes": ["Xarfax", "Manfred"],
        "specializing_heroes": ["Xarfax", "Manfred"],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of Tempestuous Fire", "Water and Ice Elemental vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Fire"],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Spontaneous Combustion'.",
        "gameplay_analysis": "Most useful for destroying Clones and damaging something else at the same time. Can also destroy your own clones."
    },
    "Land Mine": {
        "name": "Land Mine",
        "school": "Fire",
        "level": 3,
        "cost": "18 / 15",
        "duration": "Until touched",
        "effect": {
            "summary": "Creates 4 (B), 6 (A), or 8 (E) invisible mines. Damage is (SP x 10) + 25 (B), +50 (A), +100 (E).",
            "breakdown": {
                "Basic": "Places 4 random landmines. A troop stepping on a mine takes ((Power x 10) + 25) damage.",
                "Advanced": "Places 6 random landmines. A troop stepping on a mine takes ((Power x 10) + 50) damage.",
                "Expert": "Places 8 random landmines. A troop stepping on a mine takes ((Power x 10) + 100) damage."
            }
        },
        "general_info": "All friendly troops can cross the mines safely. Enemy creatures battling on their native terrain can see the mines and cross them safely. The AI cannot cast this spell.",
        "probabilities": {
            "Castle": "24%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "25%", "Necropolis": "25%", "Dungeon": "35%", "Stronghold": "24%", "Fortress": "9%", "Conflux": "13%", "Cove": "13%", "Factory": "24%"
        },
        "starting_heroes": ["Victoria"],
        "specializing_heroes": ["Victoria"],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of Tempestuous Fire"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Fire"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Land Mine is a terrible spell, far too expensive, deals far too little damage and it lacks the stopping power of Quicksand. Expert fire magic increases the damage significantly, from 4 to 8 mines and 25 to 100 base damage."
    },
    "Misfortune": {
        "name": "Misfortune",
        "school": "Fire",
        "level": 3,
        "cost": "12 / 9",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces luck of one unit by -1 (B), -2 (A), or all units by -2 (E).",
            "breakdown": {
                "Basic": "Luck of target enemy troop is reduced by one.",
                "Advanced": "Luck of target enemy troop is reduced by two.",
                "Expert": "Luck of all enemy troops is reduced by two."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "17% (13%)", "Inferno": "25%", "Necropolis": "25%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "9%", "Conflux": "13%", "Cove": "13%", "Factory": "18%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Halflings (cannot be reduced below +1)", "Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Negative luck (Bad Luck) was enabled in HotA, making this spell more useful.",
        "trivia": null,
        "gameplay_analysis": "Misfortune is quite expensive for what it is worth, since in the original game luck cannot be negative. However, in Horn of the Abyss, bad luck is enabled, which can have tremendous consequences on the enemy's damage output."
    },
    "Armageddon": {
        "name": "Armageddon",
        "school": "Fire",
        "level": 4,
        "cost": "24 / 20",
        "duration": "Instant",
        "effect": {
            "summary": "Damages all creatures. Damage is (SP x 50) + 30 (B), +60 (A), +120 (E). (HotA: SP x 40)",
            "breakdown": {
                "Basic": "All troops take (30 + (power x 50)) damage. (HotA: power x 40)",
                "Advanced": "All troops take (60 + (power x 50)) damage. (HotA: power x 40)",
                "Expert": "All troops take (120 + (power x 50)) damage. (HotA: power x 40)"
            }
        },
        "general_info": "It damages all creatures on the battlefield, including the caster's own troops. However, a few creatures can resist the spell due to their immunities. This allows for specific tactics, including 'Dragogeddon'.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Earth and Magma Elementals", "Firebirds and Phoenixes", "Gold and Black Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": ["Sorcery", "Orb of Tempestuous Fire"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Fire"],
        "hota_modifications": "In HotA, Armageddon damage is reduced from 50*SP to 40*SP. The only towns that can learn Armageddon are Inferno, Dungeon, and Necropolis.",
        "trivia": "An early name for this spell was 'Firestorm'.",
        "gameplay_analysis": "Because Armageddon damages all creatures, it has become part of one of the most renowned tactics, often called 'Dragogeddon'. The tactic requires fast creatures immune to Armageddon, like Black Dragons or Magic Elementals."
    },
    "Berserk": {
        "name": "Berserk",
        "school": "Fire",
        "level": 4,
        "cost": "20 / 16",
        "duration": "1 attack",
        "effect": {
            "summary": "Target attacks nearest troop. Affects a 1-hex area (B), 7-hex area (A), or 19-hex area (E).",
            "breakdown": {
                "Basic": "Target attacks nearest troop. Affects a single hex.",
                "Advanced": "Target attacks nearest troop. All creatures in a 3x3 hex radius affected.",
                "Expert": "Target attacks nearest troop. All creatures in a 5x5 hex radius affected."
            }
        },
        "general_info": "Berserk is a mind spell that makes the target attack the nearest troop, whether it is an ally or enemy. This also includes war machines.",
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "20%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "All Dragons", "Efreet Sultans", "Firebirds and Phoenixes"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "The AI is now able to cast this spell. Fixes creature bugs while under the Berserk spell.",
        "trivia": null,
        "gameplay_analysis": "Berserk is perhaps the most powerful combat spell in the game. It allows heroes to defeat armies with clearly stronger forces."
    },
    "Fire Shield": {
        "name": "Fire Shield",
        "school": "Fire",
        "level": 4,
        "cost": "16 / 12",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reflects 20% (B), 25% (A), or 30% (E) of melee damage back to the attacker.",
            "breakdown": {
                "Basic": "20% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers.",
                "Advanced": "25% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers.",
                "Expert": "30% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers."
            }
        },
        "general_info": "Target allied stack gains a shield of fire that damages all units trying to attack it in melee. Damage is based on the damage dealt to the enchanted unit, considering all attack bonuses of the attacker but not defensive bonuses of the enchanted unit.",
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Fire Shield has good synergy with defensive spells like Shield or Stone Skin, since damage returned is based on damage dealt to the shielded target before mitigation. This spell works very well with Counterstrike, adding extra damage that ignores most damage reductions to retaliation."
    },
    "Frenzy": {
        "name": "Frenzy",
        "school": "Fire",
        "level": 4,
        "cost": "16 / 12",
        "duration": "Until next turn",
        "effect": {
            "summary": "Target's defense becomes 0, and its attack is increased by 100% (B), 150% (A), or 200% (E) of its defense.",
            "breakdown": {
                "Basic": "Target troop's attack rating is increased by 100% of its defense rating, and its defense rating is reduced to zero.",
                "Advanced": "Target troop's attack rating is increased by 150% of its defense rating, and its defense rating is reduced to zero.",
                "Expert": "Target troop's attack rating is increased by 200% of its defense rating, and its defense rating is reduced to zero."
            }
        },
        "general_info": "Frenzy is a mind spell that reduces a target allied troop's defense to 0 whilst raising their attack considerably.",
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": ["Wrathmont"],
        "specializing_heroes": ["Wrathmont"],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "All Dragons", "Efreet and Efreet Sultans", "Firebirds and Phoenixes"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Inferno": {
        "name": "Inferno",
        "school": "Fire",
        "level": 4,
        "cost": "16 / 12",
        "duration": "Instant",
        "effect": {
            "summary": "Hits a 19-hex area. Damage is (SP x 10) + 20 (B), +40 (A), +80 (E).",
            "breakdown": {
                "Basic": "Strikes target hex and all hexes within two hexes for (20 + (power x 10)) damage.",
                "Advanced": "Strikes target hex and all hexes within two hexes for (40 + (power x 10)) damage.",
                "Expert": "Strikes target hex and all hexes within two hexes for (80 + (power x 10)) damage."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "20%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "10%", "Factory": "20%"
        },
        "starting_heroes": ["Adrienne", "Xyron"],
        "specializing_heroes": ["Xyron"],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of Tempestuous Fire", "Water and Ice Elemental vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Fire"],
        "hota_modifications": null,
        "trivia": "An early name for this spell was 'Fireblast'.",
        "gameplay_analysis": null
    },
    "Slayer": {
        "name": "Slayer",
        "school": "Fire",
        "level": 4,
        "cost": "16 / 12",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Target gets +8 attack vs Behemoths/Dragons/Hydras (B), vs Angels/Devils (A), vs Giants/Titans (E).",
            "breakdown": {
                "Basic": "Target allied troop's attack rating is increased by eight against Behemoths, Dragons, and Hydras.",
                "Advanced": "Same as basic effect, except the attack bonus also affects Angels and Devils.",
                "Expert": "Same as advanced effect, except the attack bonus also affects Giants and Titans."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "10%", "Factory": "10%"
        },
        "starting_heroes": ["Coronius"],
        "specializing_heroes": ["Coronius"],
        "immune_creatures": ["Efreet and Efreet Sultans", "Fire and Energy Elementals", "Firebirds and Phoenixes", "Gold and Black Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Slayer depends on your enemy's army makeup; if you never encounter any valid targets, this spell becomes useless. On the other hand, if you regularly fight dragons or other 'monstrous' units, it can be a great damage buff, especially in the endgame when direct damage spells are less effective."
    },
    "Sacrifice": {
        "name": "Sacrifice",
        "school": "Fire",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Permanent",
        "effect": {
            "summary": "Destroys one allied stack to resurrect another. HP resurrected depends on the sacrificed stack's HP and number.",
            "breakdown": {
                "Basic": "Target non-undead troop is sacrificed. Another dead troop has ((power + sacrificed troop's base health + 3) x # of creatures sacrificed) health restored.",
                "Advanced": "Target non-undead troop is sacrificed. Another dead troop has ((power + sacrificed troop's base health + 6) x # of creatures sacrificed) health restored.",
                "Expert": "Target non-undead troop is sacrificed. Another dead troop has ((power + sacrificed troop's base health + 10) x # of creatures sacrificed) health restored."
            }
        },
        "general_info": "The spell destroys (sacrifices) the target troop in order to resurrect creatures of another stack back to life. A sacrificed stack leaves an empty hex on the battlefield without a corpse.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "20%", "Necropolis": "16%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "0%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Undead", "Golems", "Elementals", "Mechanicals", "Gargoyles"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In HotA, Gold Dragons can be resurrected with Sacrifice as both parts of the spell are now considered level 5.",
        "trivia": null,
        "gameplay_analysis": "Typically, it is better to sacrifice a troop with a greater number of creatures than a troop with the same total health but fewer units.",
        "in_depth_mechanics": "By having a hero with a Spell Power of 99 and sacrificing 5510 peasants, you can resurrect 527 Azure Dragons. It therefore takes about 10 peasants to resurrect 1 Azure Dragon. The spell is most effective when the sacrificed creature's health is low and their numbers are high."
    },
    "Summon Fire Elemental": {
        "name": "Summon Fire Elemental",
        "school": "Fire",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Summons Fire Elementals with total HP equal to SP x 15 (B), x 20 (A), or x 30 (E).",
            "breakdown": {
                "Basic": "Summons a troop of Fire Elementals with a total health of (Spell Power x 15).",
                "Advanced": "Summons a troop of Fire Elementals with a total health of (Spell Power x 20).",
                "Expert": "Summons a troop of Fire Elementals with a total health of (Spell Power x 30)."
            }
        },
        "general_info": "Elementals are summoned to the first row of the combat field on the caster's side. The stack will remain for the rest of the combat or until killed.",
        "probabilities": {
            "Castle": "0%", "Rampart": "0%", "Tower": "0% (0%)", "Inferno": "16%", "Necropolis": "0%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "12%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Restriction on summoning only one type of elemental per combat is removed in HotA.",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Bless": {
        "name": "Bless",
        "school": "Water",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Target unit deals max damage (B), max+1 (A). At Expert, all units deal max+1 damage.",
            "breakdown": {
                "Basic": "Causes the selected friendly unit to inflict maximum damage when it attacks.",
                "Advanced": "Causes the selected friendly unit to inflict (maximum damage + 1) when it attacks.",
                "Expert": "Causes all friendly units to inflict (maximum damage + 1) when they attack."
            }
        },
        "general_info": "This spell is most effective on creatures which have a large damage range.",
        "probabilities": {
            "Castle": "54%", "Rampart": "32%", "Tower": "39% (31%)", "Inferno": "0%", "Necropolis": "0%", "Dungeon": "19%", "Stronghold": "20%", "Fortress": "31%", "Conflux": "31%", "Cove": "53%", "Factory": "20%"
        },
        "starting_heroes": ["Adela", "Gem", "Spint"],
        "specializing_heroes": ["Adela"],
        "immune_creatures": ["Undead", "Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "On templates without water, Gem's starting spell is changed from Summon Boat to Bless.",
        "trivia": null,
        "gameplay_analysis": "The spell is most effective on creatures which have a large range between their minimum and maximum damage and, at Advanced and Expert level, with a large amount of creatures in them. Think of Gremlins with their 1-2 damage that becomes a fixed 2 (+33% from average) or 3 on Advanced+ (+100% from average)."
    },
    "Cure": {
        "name": "Cure",
        "school": "Water",
        "level": 1,
        "cost": "6 / 5",
        "duration": "Instant",
        "effect": {
            "summary": "Removes negative spells and heals. Heals for (SP x 5) + 10 HP (B), +20 (A), +30 (E).",
            "breakdown": {
                "Basic": "Removes all negative spell effects from the selected friendly unit and heals it for (10 + (power x 5)) health points.",
                "Advanced": "Removes all negative spell effects from the selected friendly unit and heals it for (20 + (power x 5)) health points.",
                "Expert": "Removes all negative spell effects from all friendly units and heals them for (30 + (power x 5)) health points."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "54%", "Rampart": "54%", "Tower": "39% (31%)", "Inferno": "31%", "Necropolis": "0%", "Dungeon": "30%", "Stronghold": "31%", "Fortress": "53%", "Conflux": "31%", "Cove": "31%", "Factory": "31%"
        },
        "starting_heroes": ["Caitlin", "Uland", "Astra"],
        "specializing_heroes": ["Uland", "Astra"],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Enchanters (Expert)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Cure is rather weak in terms of recovering units' hit points. However, its power lies within its dispelling properties. Using expert Cure instead of expert Dispel removes all negative effects from allied troops, leaving all negative effects on enemy troops and all positive effects on allied troops intact."
    },
    "Dispel": {
        "name": "Dispel",
        "school": "Water",
        "level": 1,
        "cost": "5 / 4",
        "duration": "Instant",
        "effect": {
            "summary": "Removes all spells from a target unit (B), any unit (A), or all units on the battlefield (E).",
            "breakdown": {
                "Basic": "Removes all spell effects from the selected friendly unit.",
                "Advanced": "Removes all spell effects from any selected unit.",
                "Expert": "Removes all spell effects from all units on the battlefield."
            }
        },
        "general_info": "Dispel does NOT remove the effects of the Disrupting Ray spell. It does remove creature abilities like Disease, Petrification, Binding, Paralysis, Aging, and Poison.",
        "probabilities": {
            "Castle": "54%", "Rampart": "54%", "Tower": "63% (53%)", "Inferno": "53%", "Necropolis": "54%", "Dungeon": "52%", "Stronghold": "53%", "Fortress": "53%", "Conflux": "53%", "Cove": "53%", "Factory": "53%"
        },
        "starting_heroes": ["Sanya", "Serena", "Andra", "Gelare", "Casmetra"],
        "specializing_heroes": ["Gelare"],
        "immune_creatures": [],
        "casting_creatures": ["Serpent and Dragon Flies (beneficial spells only)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Using Expert Dispel, be careful as it may remove positive spells from your troops or negative spells from the enemies. For example, if you have cast Blind on the only remaining enemy stack, try not to use mass Dispel, otherwise the enemy may deliberately kill that remaining stack, disallowing you to raise your slain warriors."
    },
    "Protection from Water": {
        "name": "Protection from Water",
        "school": "Water",
        "level": 1,
        "cost": "5 / 4",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Reduces Water spell damage on one unit by 50% (B/A), or on all units by 75% (E).",
            "breakdown": {
                "Basic": "Protects the selected friendly unit, reducing damage it receives from Water spells by 50%.",
                "Advanced": "Protects the selected friendly unit, reducing damage it receives from Water spells by 50%.",
                "Expert": "Protects all friendly units, reducing damage they receive from Water spells by 75%."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "25% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "19%", "Stronghold": "20%", "Fortress": "20%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "In Horn of the Abyss, the effect of Protection from Air/Fire/Water/Earth spells increased to 50% (Basic), 50% (Advanced), and 75% (Expert).",
        "trivia": null,
        "gameplay_analysis": "Protection from Water gives creatures defence against Magic Arrow, Ice Bolt, and Frost Ring. While helpful, the issue is that the enemy can just cast a spell from a different school of magic instead, making Protection from Water situational."
    },
    "Summon Boat": {
        "name": "Summon Boat",
        "school": "Water",
        "level": 1,
        "cost": "8 / 7",
        "duration": "Instant",
        "effect": {
            "summary": "Summons a boat with 50% (B), 75% (A), or 100% (E) chance of success.",
            "breakdown": {
                "Basic": "Summons one of your hero's boats to their current location. Spell has a 50% chance of working.",
                "Advanced": "Same as basic effect, except if no boats are available, a boat is created. The spell has a 75% chance of working.",
                "Expert": "Same as advanced effect, except that the spell has a 100% chance of working."
            }
        },
        "general_info": "The spell may only be cast on the land next to a shoreline. In order to work, there must be an unoccupied water tile to summon the boat.",
        "probabilities": {
            "Castle": "20%", "Rampart": "32%", "Tower": "39% (31%)", "Inferno": "31%", "Necropolis": "20%", "Dungeon": "30%", "Stronghold": "31%", "Fortress": "20%", "Conflux": "20%", "Cove": "31%", "Factory": "31%"
        },
        "starting_heroes": ["Gem"],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "The spell is banned by default on templates without water. Gem's starting spell is changed to Bless on these templates.",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Ice Bolt": {
        "name": "Ice Bolt",
        "school": "Water",
        "level": 2,
        "cost": "8 / 6",
        "duration": "Instant",
        "effect": {
            "summary": "Deals (SP x 20) + 10 damage (B), +20 (A), +50 (E).",
            "breakdown": {
                "Basic": "Drains the body heat from the selected enemy unit, dealing (10 + (power x 20)) damage to it.",
                "Advanced": "Drains the body heat from the selected enemy unit, dealing (20 + (power x 20)) damage to it.",
                "Expert": "Drains the body heat from the selected enemy unit, dealing (50 + (power x 20)) damage to it."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "95%", "Rampart": "95%", "Tower": "46% (35%)", "Inferno": "0%", "Necropolis": "35%", "Dungeon": "35%", "Stronghold": "25%", "Fortress": "96%", "Conflux": "77%", "Cove": "96%", "Factory": "25%"
        },
        "starting_heroes": ["Alagar"],
        "specializing_heroes": ["Alagar"],
        "immune_creatures": ["Nymphs and Oceanids", "Water and Ice Elementals", "Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of Driving Rain", "Fire and Energy Elemental vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Water"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Ice Bolt is an important second level spell, though it falters compared to the slightly more powerful (yet less cost-effective) Lightning Bolt. It is still a useful tool."
    },
    "Remove Obstacle": {
        "name": "Remove Obstacle",
        "school": "Water",
        "level": 2,
        "cost": "7 / 5",
        "duration": "Instant",
        "effect": {
            "summary": "Removes battlefield obstacles. Can also remove Fire Walls (A) and Force Fields (E).",
            "breakdown": {
                "Basic": "Removes any non-magic obstacle of the caster's choice from the battlefield. Integrated obstacles, such as cliffs, are not affected.",
                "Advanced": "Removes any non-magic obstacle or Fire Wall of the caster's choice from the battlefield.",
                "Expert": "Removes any non-magic obstacle, Fire Wall, or Force Field of the caster's choice from the battlefield."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "25%", "Rampart": "25%", "Tower": "46% (35%)", "Inferno": "18%", "Necropolis": "24%", "Dungeon": "25%", "Stronghold": "25%", "Fortress": "25%", "Conflux": "20%", "Cove": "25%", "Factory": "25%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "It is possible to locate Land Mines and Quicksand with an expert Remove Obstacle spell without spending mana, just by hovering over hexes with the cursor."
    },
    "Scuttle Boat": {
        "name": "Scuttle Boat",
        "school": "Water",
        "level": 2,
        "cost": "8 / 6",
        "duration": "Instant",
        "effect": {
            "summary": "Destroys an unoccupied boat with a 50% (B), 75% (A), or 100% (E) chance of success.",
            "breakdown": {
                "Basic": "Spell has a 50% chance of destroying a boat, unless occupied.",
                "Advanced": "Spell has a 75% chance of destroying a boat, unless occupied.",
                "Expert": "Spell has a 100% chance of destroying a boat, unless occupied."
            }
        },
        "general_info": "The AI cannot cast this spell.",
        "probabilities": {
            "Castle": "35%", "Rampart": "25%", "Tower": "33% (25%)", "Inferno": "18%", "Necropolis": "24%", "Dungeon": "25%", "Stronghold": "25%", "Fortress": "25%", "Conflux": "20%", "Cove": "45%", "Factory": "25%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "The spell is banned by default on templates without water.",
        "trivia": null,
        "gameplay_analysis": "It might seem unassuming at first, but a hero that knows this spell camping out enemy shipyards can force enemy players to ration their resources rather than wasting them on new boats that just get scuttled. Also handy for cutting off an enemy hero's escape route."
    },
    "Forgetfulness": {
        "name": "Forgetfulness",
        "school": "Water",
        "level": 3,
        "cost": "12 / 9",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "50% (B) or 100% (A) of a target ranged stack cannot shoot. At Expert, all enemy ranged stacks cannot shoot.",
            "breakdown": {
                "Basic": "50% of the creatures in a target enemy troop with ranged attack forget how to shoot.",
                "Advanced": "100% of creatures in a target enemy troop with ranged attack cannot use their ranged attacks.",
                "Expert": "All enemy troops with ranged attacks cannot use their ranged attacks."
            }
        },
        "general_info": "It is a mind spell that makes an enemy creature unable to use its ranged attack. The spell also reduces the damage of melee attacks for affected creatures.",
        "probabilities": {
            "Castle": "24%", "Rampart": "24%", "Tower": "17% (13%)", "Inferno": "17%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "13%", "Fortress": "17%", "Conflux": "24%", "Cove": "24%", "Factory": "13%"
        },
        "starting_heroes": ["Zilare"],
        "specializing_heroes": ["Zilare"],
        "immune_creatures": ["Units without ranged attacks", "Liches and Power Liches", "Storm and Ice Elementals", "War Machines"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": "In The Shadow of Death, this is one of only a few spells that does not improve between the advanced and expert levels.",
        "gameplay_analysis": null
    },
    "Frost Ring": {
        "name": "Frost Ring",
        "school": "Water",
        "level": 3,
        "cost": "12 / 9",
        "duration": "Instant",
        "effect": {
            "summary": "Damages units surrounding a target hex. Damage is (SP x 10) + 15 (B), +30 (A), +60 (E).",
            "breakdown": {
                "Basic": "Troops in hexes surrounding target hex receive (15 + (power x 10)) in damage. Target hex is unaffected.",
                "Advanced": "Troops in hexes surrounding target hex receive (30 + (power x 10)) in damage. Target hex is unaffected.",
                "Expert": "Troops in hexes surrounding target hex receive (60 + (power x 10)) in damage. Target hex is unaffected."
            }
        },
        "general_info": "This spell is most useful either as typical AoE if stronger options are unavailable or to give your surrounded single-hex stack some breathing room.",
        "probabilities": {
            "Castle": "44%", "Rampart": "43%", "Tower": "55% (43%)", "Inferno": "0%", "Necropolis": "35%", "Dungeon": "35%", "Stronghold": "35%", "Fortress": "17%", "Conflux": "35%", "Cove": "82%", "Factory": "34%"
        },
        "starting_heroes": ["Adelaide"],
        "specializing_heroes": ["Adelaide"],
        "immune_creatures": ["Nymphs and Oceanids", "Water and Ice Elementals", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Faerie Dragons"],
        "damage_increases": ["Sorcery", "Orb of Driving Rain", "Fire and Energy Elemental vulnerability"],
        "damage_decreases": ["Spell damage reduction", "Interference", "Protection from Water"],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "As it is frost-based, many fire-immune creatures will take damage from this spell. Fire and Energy Elementals are vulnerable to it, taking double damage."
    },
    "Mirth": {
        "name": "Mirth",
        "school": "Water",
        "level": 3,
        "cost": "12 / 9",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases morale of one unit by +1 (B), +2 (A), or all units by +2 (E).",
            "breakdown": {
                "Basic": "Morale of target allied troop is increased by one.",
                "Advanced": "Morale of target allied troop is increased by two.",
                "Expert": "Morale of all allied troops is increased by two."
            }
        },
        "general_info": "It is a mind spell that increases the morale of the target creature(s).",
        "probabilities": {
            "Castle": "13%", "Rampart": "13%", "Tower": "17% (13%)", "Inferno": "9%", "Necropolis": "13%", "Dungeon": "13%", "Stronghold": "35%", "Fortress": "9%", "Conflux": "13%", "Cove": "24%", "Factory": "13%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Golems", "Undead", "Elementals", "Mechanicals", "Giants and Titans", "Fangarms", "All Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)", "Satyr (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Teleport": {
        "name": "Teleport",
        "school": "Water",
        "level": 3,
        "cost": "15 / 12 / 6 / 3",
        "duration": "Instant",
        "effect": {
            "summary": "Moves an allied unit to any empty hex. Can teleport over the moat (A) or walls (E).",
            "breakdown": {
                "Basic": "Target allied troop instantly moves to an unoccupied target hex. Troop cannot teleport over walls or moats.",
                "Advanced": "Same as Basic Effect, except troop can teleport past moats (but not walls).",
                "Expert": "Same as Basic Effect, troop can teleport to any unoccupied hex without restriction."
            }
        },
        "general_info": "It is the only spell with a spell point cost that changes with every level of the Water Magic secondary skill.",
        "probabilities": {
            "Castle": "24%", "Rampart": "24%", "Tower": "32% (24%)", "Inferno": "32%", "Necropolis": "25%", "Dungeon": "24%", "Stronghold": "24%", "Fortress": "40%", "Conflux": "24%", "Cove": "30%", "Factory": "29%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": ["Green and Gold Dragons", "Red and Black Dragons", "Azure Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Teleport is often used on rather slow units that can cause massive damage like the Chaos Hydra to quickly reach enemy troops, or to quickly reach the enemy shooters, either killing them or blocking them from firing."
    },
    "Clone": {
        "name": "Clone",
        "school": "Water",
        "level": 4,
        "cost": "24 / 20",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Creates a temporary duplicate of a target troop of level 1-5 (B), 1-6 (A), or 1-7 (E).",
            "breakdown": {
                "Basic": "Creates a duplicate of a target allied troop of level 1-5. The duplicate can attack but is dispelled if it receives any damage.",
                "Advanced": "Same as Basic Effect, except the duplicate may be of a level 1-6 troop.",
                "Expert": "Same as Basic Effect, except the duplicate may be of a level 1-7 troop."
            }
        },
        "general_info": "It creates an exact replica of the target creature stack, which has all of the original stack's features and special abilities. The clone will disappear immediately when it receives any damage.",
        "probabilities": {
            "Castle": "10%", "Rampart": "10%", "Tower": "29% (20%)", "Inferno": "10%", "Necropolis": "10%", "Dungeon": "10%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "20%", "Factory": "10%"
        },
        "starting_heroes": ["Eovacius"],
        "specializing_heroes": ["Eovacius"],
        "immune_creatures": ["Gold Dragons", "Black Dragons", "Magic Elementals"],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": "Clone can often be considered the most powerful spell in the game damage-wise, since a cloned creature is likely to do more damage with a single attack than any spell. A good target for Clone are creatures with no enemy retaliation, for example Vampire Lords and Nagas."
    },
    "Prayer": {
        "name": "Prayer",
        "school": "Water",
        "level": 4,
        "cost": "16 / 12",
        "duration": "1 round / Spell Power",
        "effect": {
            "summary": "Increases Attack, Defense, and Speed of one unit by +2 (B), +4 (A), or all units by +4 (E).",
            "breakdown": {
                "Basic": "Target allied troop's attack, defense, and speed ratings are increased by 2.",
                "Advanced": "Target allied troop's attack, defense, and speed ratings are increased by 4.",
                "Expert": "All allied troops' attack, defense, and speed ratings are increased by 4."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "10%", "Tower": "18% (10%)", "Inferno": "0%", "Necropolis": "0%", "Dungeon": "0%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "10%", "Cove": "20%", "Factory": "10%"
        },
        "starting_heroes": ["Loynis"],
        "specializing_heroes": ["Loynis"],
        "immune_creatures": ["Gold Dragons", "Black Dragons", "Magic Elementals"],
        "casting_creatures": ["Master Genies (Advanced)"],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": null,
        "trivia": null,
        "gameplay_analysis": null
    },
    "Water Walk": {
        "name": "Water Walk",
        "school": "Water",
        "level": 4,
        "cost": "12 / 8",
        "duration": "1 day",
        "effect": {
            "summary": "Allows hero to walk on water with a 40% (B), 20% (A), or 0% (E) movement penalty.",
            "breakdown": {
                "Basic": "The casting hero may follow a movement path across water with a 40% penalty, provided the end destination is land.",
                "Advanced": "The casting hero may follow a movement path across water with a 20% penalty, provided the end destination is land.",
                "Expert": "The casting hero may follow a movement path across water without penalty, provided the end destination is land."
            }
        },
        "general_info": null,
        "probabilities": {
            "Castle": "20%", "Rampart": "20%", "Tower": "29% (20%)", "Inferno": "20%", "Necropolis": "20%", "Dungeon": "20%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "20%", "Cove": "20%", "Factory": "20%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "The spell is banned by default on templates without water.",
        "trivia": null,
        "gameplay_analysis": null
    },
    "Summon Water Elemental": {
        "name": "Summon Water Elemental",
        "school": "Water",
        "level": 5,
        "cost": "25 / 20",
        "duration": "Until end of combat",
        "effect": {
            "summary": "Summons Water Elementals with total HP equal to SP x 15 (B), x 20 (A), or x 30 (E).",
            "breakdown": {
                "Basic": "Summons a troop of Water Elementals with a total health of (Spell Power x 15).",
                "Advanced": "Summons a troop of Water Elementals with a total health of (Spell Power x 20).",
                "Expert": "Summons a troop of Water Elementals with a total health of (Spell Power x 30)."
            }
        },
        "general_info": "Elementals are summoned to the first row of the combat field on the caster's side. The stack will remain for the rest of the combat or until killed.",
        "probabilities": {
            "Castle": "0%", "Rampart": "16%", "Tower": "28% (14%)", "Inferno": "0%", "Necropolis": "0%", "Dungeon": "12%", "Stronghold": "0%", "Fortress": "0%", "Conflux": "12%", "Cove": "0%", "Factory": "0%"
        },
        "starting_heroes": [],
        "specializing_heroes": [],
        "immune_creatures": [],
        "casting_creatures": [],
        "damage_increases": [],
        "damage_decreases": [],
        "hota_modifications": "Restriction on summoning only one type of elemental per combat is removed in HotA.",
        "trivia": null,
        "gameplay_analysis": null
    }
};
