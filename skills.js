// Contains descriptions for all secondary skills and spell data.
// Data is for Horn of the Abyss (HotA) 1.7.3.

const spellsBySchool = {
    "Air": {
        "Combat Spells": {
            "Level 1": ["Haste"],
            "Level 2": ["Disrupting Ray", "Fortune", "Precision", "Protection from Air"],
            "Level 3": ["Air Shield", "Hypnotize"],
            "Level 4": ["Chain Lightning", "Counterstrike"],
            "Level 5": ["Air Elemental", "Magic Mirror"]
        },
        "Adventure Spells": {
            "Level 1": ["View Air"],
            "Level 5": ["Dimension Door", "Fly"]
        }
    },
    "Earth": {
        "Combat Spells": {
            "Level 1": ["Magic Arrow", "Shield", "Slow", "Stone Skin"],
            "Level 2": ["Death Ripple", "Quicksand", "Protection from Earth"],
            "Level 3": ["Animate Dead", "Anti-Magic", "Earthquake", "Force Field"],
            "Level 4": ["Meteor Shower", "Resurrection", "Sorrow"],
            "Level 5": ["Earth Elemental", "Implosion"]
        },
        "Adventure Spells": {
            "Level 1": ["View Earth"],
            "Level 4": ["Town Portal"]
        }
    },
    "Fire": {
        "Combat Spells": {
            "Level 1": ["Bloodlust", "Curse", "Protection from Fire"],
            "Level 2": ["Blind", "Fire Wall"],
            "Level 3": ["Fireball", "Land Mine", "Misfortune"],
            "Level 4": ["Armageddon", "Berserk", "Fire Shield", "Frenzy", "Inferno", "Slayer"],
            "Level 5": ["Fire Elemental", "Sacrifice"]
        },
        "Adventure Spells": {}
    },
    "Water": {
        "Combat Spells": {
            "Level 1": ["Bless", "Cure", "Dispel", "Protection from Water"],
            "Level 2": ["Cold Ray", "Forgetfulness", "Frost Ring", "Remove Obstacle"],
            "Level 3": ["Clone", "Ice Bolt", "Mirth", "Teleport"],
            "Level 4": ["Prayer"],
            "Level 5": ["Water Elemental"]
        },
        "Adventure Spells": {
            "Level 1": ["Summon Boat"],
            "Level 2": ["Scuttle Boat"],
            "Level 4": ["Water Walk"]
        }
    }
};

const skillsData = {
  "Air Magic": {
    "description": {
      "Basic": "Allows your hero to cast air spells at reduced cost.",
      "Advanced": "Allows your hero to cast air spells at reduced cost and increased effectiveness.",
      "Expert": "Allows your hero to cast air spells at reduced cost and maximum effectiveness."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Like other magic schools, Air Magic is very important. At the expert level, Haste may help a lot as your entire army will possibly move before the enemy's army, and even some very slow units get decent speed. Dimension Door and Fly are extremely helpful for moving on the adventure map.</p>
      <p>The main reasons for choosing Air Magic are the Dimension Door and Haste spells, which are perhaps the most powerful adventure spells along with Town Portal. However, they are typically banned in custom maps. Nevertheless, Expert Air Magic causes Haste to be cast as a mass spell, which still makes it worth the secondary skill slot. Other noteworthy spells are Chain Lightning, a powerful combat spell, and View Air, which lets you see all towns and player heroes even in unexplored areas.</p>
    `
  },
  "Archery": {
    "description": {
      "Basic": "Increases the damage done by ranged attacking creatures by 10%.",
      "Advanced": "Increases the damage done by ranged attacking creatures by 25%.",
      "Expert": "Increases the damage done by ranged attacking creatures by 50%."
    }, "hota_changes": "Fixes a bug where the skill incorrectly reduced the damage of Arrow Towers during sieges.",
    "gameplay_analysis": `
      <p>The usefulness of the Archery skill depends on how much you rely on ranged units. It is very useful for towns with multiple shooters (e.g. Castle, Tower, or Conflux). Expert Archery gives a +50% bonus damage, which is significantly more in comparison with expert Offense, which only gives +30%. However, as the skill only affects ranged attacks, it can be entirely useless if the hero has no creatures capable of attacking at range.</p>
      <h4>Related Artifacts</h4>
      <p>The effect of these artifacts is additive with the skill. If a hero does not have the Archery skill, these artifacts have no effect.</p>
      <ul>
        <li><b>Bow of Elven Cherrywood:</b> +5% Archery</li>
        <li><b>Bowstring of the Unicorn's Mane:</b> +10% Archery</li>
        <li><b>Angel Feather Arrows:</b> +15% Archery</li>
        <li><b>Bow of the Sharpshooter:</b> +30% Archery</li>
      </ul>
      <h4>Comparison to Attack Skill</h4>
      <p>This table shows how much extra Attack skill a hero would need to equal the damage increase from the Archery skill.</p>
      <table class="modal-table">
        <thead><tr><th>Archery Level</th><th>Attack Skill Equivalent Range</th></tr></thead>
        <tbody>
          <tr><td>Basic (10%)</td><td>+2 to +3.6</td></tr>
          <tr><td>Advanced (25%)</td><td>+5 to +9</td></tr>
          <tr><td>Expert (50%)</td><td>+10 to +18</td></tr>
        </tbody>
      </table>
    `
  },
  "Armorer": {
    "description": {
      "Basic": "Reduces all physical damage inflicted against the hero's troops by 5%.",
      "Advanced": "Reduces all physical damage inflicted against the hero's troops by 10%.",
      "Expert": "Reduces all physical damage inflicted against the hero's troops by 15%."
    }, "hota_changes": "Fixes a bug where the skill incorrectly increased the damage from Arrow Towers during sieges.",
    "gameplay_analysis": `
      <p>Armorer is a very useful secondary skill. As it reduces all physical damage at expert level by 15%, it effectively increases allied creatures' health by about 18%. This leads to fewer casualties in battles, and more troops for the next battle.</p>
      <h4>Comparison to Defense Skill</h4>
      <p>This table shows how much extra Defense skill a hero would need to equal the damage reduction from the Armorer skill.</p>
      <table class="modal-table">
        <thead><tr><th>Armorer Level</th><th>Defense Skill Equivalent Range</th></tr></thead>
        <tbody>
          <tr><td>Basic (5%)</td><td>+1 to +2</td></tr>
          <tr><td>Advanced (10%)</td><td>+2 to +4</td></tr>
          <tr><td>Expert (15%)</td><td>+3 to +6</td></tr>
        </tbody>
      </table>
    `
  },
  "Artillery": {
    "description": {
      "Basic": "Gives the hero control of the Ballista, Arrow Towers, and the Cannon. The Ballista has a 50% chance to inflict 200% base Damage.",
      "Advanced": "The Ballista shoots twice and has a 15% chance to inflict 200% base Damage. The Cannon inflicts 200% base Damage to creatures.",
      "Expert": "The Ballista shoots twice and has a 10% chance to inflict 200% base Damage. The Cannon precisely hits fortifications and inflicts 300% base Damage to creatures."
    }, "hota_changes": "The ability to control Arrow Towers was added in Armageddon's Blade and is standard in HotA.",
    "gameplay_analysis": `
      <p>Artillery is useful if you have access to a Ballista. It allows you to fully control the town's Arrow Towers during a siege. The problem with the skill is the ballista itself, which is often seen as ineffective, expensive, and weak. However, on high difficulty settings where resources are minimal, heroes starting with Artillery can be very helpful, especially if your town lacks ranged units. The ballista can be used to soften up enemy stacks while your own troops stay safe.</p>
      <h4>War Machine Details (Ballista & Cannon)</h4>
      <table class="modal-table">
        <thead><tr><th>Effect</th><th>None</th><th>Basic</th><th>Advanced</th><th>Expert</th></tr></thead>
        <tbody>
          <tr><td>Control Ballista</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Ballista Shots</td><td>1</td><td>1</td><td>2</td><td>2</td></tr>
          <tr><td>Cannon Damage (to creatures)</td><td>-</td><td>Normal</td><td>200%</td><td>300%</td></tr>
          <tr><td>Cannon Targeting</td><td>-</td><td>Random</td><td>Random</td><td>Precise</td></tr>
        </tbody>
      </table>
    `
  },
  "Ballistics": {
    "description": {
      "Basic": "Gives the hero control of the Catapult, allowing one aimed shot.",
      "Advanced": "Allows the hero to fire the Catapult twice.",
      "Expert": "Allows the hero to fire the Catapult twice with maximum damage and precision."
    }, "hota_changes": "No significant changes.",
     "gameplay_analysis": `
      <p>Ballistics is very useful when sieging towns. It will make sieging easier and reduce your losses, as you can destroy the fortifications on an early stage of the battle. It also gives you the first chance to cast spells in sieges (if the defender doesn't have Artillery). However, it is the only battle-skill that has absolutely no impact in non-siege battles, so it can be situational.</p>
      <h4>Catapult Details</h4>
      <table class="modal-table">
        <thead><tr><th>Effect</th><th>None</th><th>Basic</th><th>Advanced</th><th>Expert</th></tr></thead>
        <tbody>
          <tr><td>Control Catapult</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Aimed Shots</td><td>0</td><td>1</td><td>2</td><td>2</td></tr>
          <tr><td>Chance to Hit Target</td><td>50%</td><td>60%</td><td>60%</td><td>100%</td></tr>
          <tr><td>Damage</td><td>Random</td><td>Random</td><td>Random</td><td>Max</td></tr>
        </tbody>
      </table>
    `
  },
  "Diplomacy": {
    "description": {
      "Basic": "Improves the chances that wandering monsters flee/negotiate/join, and reduces the cost of surrendering by 20%.",
      "Advanced": "Further improves the chances that wandering monsters flee/negotiate/join, and reduces the cost of surrendering by 40%.",
      "Expert": "Even further improves the chances that wandering monsters flee/negotiate/join, and reduces the cost of surrendering by 60%."
    }, "hota_changes": "On standard random map templates, monsters will only join for gold (half the stack for the price of the full stack).",
    "gameplay_analysis": `
      <p>For early development, Diplomacy is a very powerful skill. It allows you to gather a large army quickly by convincing wandering monsters to join you. In the endgame, the skill loses some of its power as most wandering monsters have been cleared from the map. In tournament and multiplayer games, Diplomacy is often regarded as an overpowered secondary skill and is frequently banned.</p>
      <h4>Related Factors</h4>
      <ul>
        <li><b>Joining Chance:</b> Wandering creatures are roughly 10% more likely to join per level of diplomacy.</li>
        <li><b>Artifact:</b> The Diplomat's Cloak multiplies your hero's army strength by 3 for negotiation purposes.</li>
        <li><b>Libraries:</b> Diplomacy allows you to visit Libraries of Enlightenment at lower levels (Basic: Lvl 8, Advanced: Lvl 6, Expert: Lvl 4).</li>
      </ul>
    `
  },
  "Eagle Eye": {
    "description": {
        "Basic": "After combat, the hero can exchange a level 1-2 spell from their spellbook for one cast by the enemy hero. Usable once per day.",
        "Advanced": "Allows exchanging for spells of level 1-3.",
        "Expert": "Allows exchanging for spells of level 1-4."
    }, 
    "hota_changes": "Completely reworked in HotA 1.7.2. The skill no longer gives a random chance to learn spells during combat. The new functionality allows a guaranteed spell exchange after combat, once per day.",
    "gameplay_analysis": `
      <p>Generally, Eagle Eye is considered one of the least desirable secondary skills. Its flaws include not being guaranteed to work, inability to learn 5th level spells, and that spells are only learned after combat is over.</p>
      <h4>Pre-HotA Mechanics</h4>
      <p>The original version of Eagle Eye gave a chance to learn a spell cast by an enemy hero during combat. For a spell to be learned, the hero must have the appropriate level of Wisdom. If two opposing heroes both had Eagle Eye, the higher-level skill would be reduced by the level of the lower-level skill. For example, an Expert (3) vs Basic (1) Eagle Eye would result in the expert hero having the equivalent of Advanced (2) Eagle Eye for the battle, while the basic hero's skill was negated.</p>
      <h4>Related Artifacts (Pre-HotA)</h4>
      <ul>
        <li><b>Ring of Perception:</b> +5% Eagle Eye chance</li>
        <li><b>Stoic Watchman:</b> +10% Eagle Eye chance</li>
        <li><b>Emblem of Cognizance:</b> +15% Eagle Eye chance</li>
      </ul>
    `
  },
  "Earth Magic": {
    "description": {
      "Basic": "Allows your hero to cast earth spells at reduced cost.",
      "Advanced": "Allows your hero to cast earth spells at reduced cost and increased effectiveness.",
      "Expert": "Allows your hero to cast earth spells at reduced cost and maximum effectiveness."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Earth Magic is one of the most important secondary skills, as some of its spells are crucial. The Town Portal spell is among the most powerful adventure map spells, allowing a hero to travel between all owned towns. Animate Dead (and Resurrection) permanently brings back creatures at Advanced and Expert levels. Slow, when cast as a mass spell at Expert level, has devastating effects on enemy troops by reducing their speed by 50%. Earth Magic also contains Meteor Shower, a great multi-hex damage spell, and Implosion, the strongest single-target damage spell in the game.</p>
    `
  },
  "Estates": {
    "description": {
      "Basic": "A hero contributes 250 gold per day to your cause.",
      "Advanced": "A hero contributes 500 gold per day to your cause.",
      "Expert": "A hero contributes 1000 gold per day to your cause."
    }, "hota_changes": "Income significantly increased from the base game's 125/250/500 gold per day.",
    "gameplay_analysis": `
      <p>Estates is a typical secondary skill for a 'supply hero' who is not involved in major battles. Having several such heroes can be a great support to your economy. It's recommended for secondary heroes in the early to midgame.</p>
      <h4>Related Artifacts</h4>
      <ul>
        <li><b>Endless Purse of Gold:</b> +500 Gold/day</li>
        <li><b>Endless Bag of Gold:</b> +750 Gold/day</li>
        <li><b>Endless Sack of Gold:</b> +1000 Gold/day</li>
      </ul>
      <h4>Lord Haart Specialty</h4>
      <p>The Knight Lord Haart has a specialty in Estates, which grants a 5% bonus to his Estates income per level. With Expert Estates in HotA (1000 gold), Lord Haart's income matches a hero with a flat +350 gold specialty at level 7 and surpasses it after.</p>
    `
  },
    "Fire Magic": {
    "description": {
      "Basic": "Allows your hero to cast fire spells at reduced cost.",
      "Advanced": "Allows your hero to cast fire spells at reduced cost and increased effectiveness.",
      "Expert": "Allows your hero to cast fire spells at reduced cost and maximum effectiveness."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Like any other magic school, Fire Magic is very useful as many of its spells can wreak havoc on your enemies. Expert Bloodlust will increase the damage dealt by your troops, and Berserk and Armageddon can be crucial for defeating large amounts of troops. Of the four magic school skills, Fire Magic is arguably the least useful, not because its spells are weak, but because many of them are not dramatically improved at the Expert level. Nevertheless, Fire Magic is still a very good secondary skill and picking it is never a waste.</p>
    `
  },
  "First Aid": {
    "description": {
      "Basic": "Gives the hero control of the First Aid Tent. Heals 40-50 HP and grants all allied creatures +5% Health.",
      "Advanced": "Heals 60-75 HP and grants all allied creatures +10% Health.",
      "Expert": "Heals 80-100 HP and grants all allied creatures +15% Health."
    }, "hota_changes": "Completely reworked in HotA 1.7.2 to be much more powerful, adding a passive health boost and increased healing. The health-boosting effect still functions even when the tent is not present on the battlefield (like in creature banks).",
    "gameplay_analysis": `
      <p>In the original game, First Aid was one of the less used secondary skills, as its healing was almost always negligible in major battles. In HotA, the skill was reworked. It now grants the hero's creatures a passive percentage of additional health, essentially making it a 'poor man's Elixir of Life'. This makes the skill much more viable.</p>
    `
  },
  "Intelligence": {
    "description": {
      "Basic": "Increases a hero's normal maximum spell points by 20%.",
      "Advanced": "Increases a hero's normal maximum spell points by 35%.",
      "Expert": "Increases a hero's normal maximum spell points by 50%."
    }, "hota_changes": "The percentages were decreased from the base game's 25%/50%/100% to 20%/35%/50% for better balance.",
    "gameplay_analysis": `
      <p>For a magic-focused hero, Intelligence is an excellent supportive secondary skill. Especially on large maps where heroes grow more powerful, the amount of mana can become crucial. Dungeon heroes may be able to pass on Intelligence because they can build a Mana Vortex in their town, which doubles the spell point maximum.</p>
      <h4>Comparison with Mysticism</h4>
      <p>Both Intelligence and Mysticism increase the amount of mana a hero can spend. In simple terms, Mysticism is preferable if the hero spends a relatively small amount of mana each day. Intelligence becomes better for heroes who need to expend a large amount of mana in a single day or battle, as it increases the total pool.</p>
    `
  },
  "Interference": {
    "description": {
      "Basic": "Lowers the power skill of the enemy hero by 10% in combat.",
      "Advanced": "Lowers the power skill of the enemy hero by 20% in combat.",
      "Expert": "Lowers the power skill of the enemy hero by 30% in combat."
    }, "hota_changes": "A new skill introduced in HotA that replaces Resistance on many heroes and as a level-up option by default.",
    "gameplay_analysis": `
      <h4>Related Artifacts</h4>
      <p>The following artifacts have a similar, stacking effect:</p>
      <ul>
        <li><b>Charm of Eclipse:</b> Reduces enemy's Spell Power by 10%</li>
        <li><b>Seal of Sunset:</b> Reduces enemy's Spell Power by 20%</li>
        <li><b>Plate of Dying Light:</b> Reduces enemy's Spell Power by 25%</li>
      </ul>
    `
  },
  "Leadership": {
    "description": {
      "Basic": "Increases your hero's troops' morale by 1.",
      "Advanced": "Increases your hero's troops' morale by 2.",
      "Expert": "Increases your hero's troops' morale by 3."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Leadership is a mediocre secondary skill; not among the worst, but not among the best either. An extra turn from high morale can swing a battle, but the chance is only just over 10% at best. It's most useful for heroes leading mixed armies from different towns where morale might be a problem. The skill is completely unavailable for Necropolis heroes to learn naturally.</p>
      <h4>Related Factors</h4>
      <p>The Spirit of Oppression artifact negates all positive morale. Having Undead, Golems, or Elementals in the army also negatively impacts morale for other troops.</p>
    `
  },
  "Learning": {
    "description": {
      "Basic": "Increases the hero's earned experience points by 20%. Also grants an additional level upon learning the skill.",
      "Advanced": "Increases the hero's earned experience points by 40%. Also grants a 2nd additional level upon learning the skill.",
      "Expert": "Increases the hero's earned experience points by 60%. Also grants a 3rd additional level upon learning the skill."
    }, "hota_changes": "Completely reworked in HotA 1.7.2. The XP bonus was increased from 10%/15%/25% and it now grants an additional level upon learning or advancing the skill, making it much more powerful.",
    "gameplay_analysis": `
      <p>In the original game, Learning was considered a very weak skill because the XP bonus was slow to pay off. In HotA, the bonuses have been drastically increased and it now grants an additional level upon learning or advancing the skill. This means the hero with Learning will become strong very quickly, though it still costs a valuable skill slot. The instant level-up provides extra Primary skills and allows quicker access to quests that require a certain level.</p>
    `
  },
  "Logistics": {
    "description": {
      "Basic": "Increases your hero's movement points over land by 5%.",
      "Advanced": "Increases your hero's movement points over land by 10%.",
      "Expert": "Increases your hero's movement points over land by 20%."
    }, "hota_changes": "The percentages were decreased from the base game's 10%/20%/30% for game balance.",
    "gameplay_analysis": `
      <p>Logistics is an important secondary skill, as it allows a hero to move much faster on the adventure map. This is valuable for reaching further with hero chains, picking up more resources, revealing more of the map, and taking more fights.</p>
      <h4>Related Artifacts</h4>
      <p>These artifacts add a flat bonus to land movement, which is not multiplied by the Logistics percentage.</p>
      <ul>
        <li><b>Equestrian's Gloves:</b> +200 land movement points</li>
        <li><b>Boots of Speed:</b> +400 land movement points</li>
      </ul>
      <h4>Comparison with Pathfinding</h4>
      <p>In HotA, Logistics is preferable on roads and easy terrain (Grass, Dirt). Pathfinding becomes better starting with Rough and Wasteland terrains, and is markedly better on Sand and Swamp. The table below shows the maximum number of tiles a hero can move in a straight line.</p>
      <table class="modal-table">
        <thead>
          <tr><th>Slowest Unit Speed</th><th>Terrain Cost</th><th>Basic Move</th><th>Expert Logistics</th><th>Expert Pathfinding</th></tr>
        </thead>
        <tbody>
          <tr><td>7 (1760 MP)</td><td>Grass (100)</td><td>17 tiles</td><td>21 tiles</td><td>20 tiles</td></tr>
          <tr><td>7 (1760 MP)</td><td>Rough (125)</td><td>14 tiles</td><td>16 tiles</td><td>20 tiles</td></tr>
          <tr><td>7 (1760 MP)</td><td>Swamp (175)</td><td>10 tiles</td><td>12 tiles</td><td>17 tiles</td></tr>
        </tbody>
      </table>
    `
  },
  "Luck": {
    "description": {
      "Basic": "Increases your hero's luck by 1.",
      "Advanced": "Increases your hero's luck by 2.",
      "Expert": "Increases your hero's luck by 3."
    }, "hota_changes": "Bad luck, which deals half damage, was enabled in HotA, making positive luck more valuable for avoiding it.",
    "gameplay_analysis": `
      <p>Luck is a decent bonus but not an essential skill. Having high luck is unquestionably valuable, but it is only a mediocre secondary skill for several reasons. Maximum positive luck (+3) can often be obtained from artifacts or map locations, so a skill slot may not be needed. The damage bonus from lucky strikes is lower on average than what Offense or Archery provide, and it's unpredictable.</p>
      <h4>Related Factors</h4>
      <p>The Hourglass of the Evil Hour artifact gives all units bad luck.</p>
    `
  },
  "Mysticism": {
    "description": {
      "Basic": "Allows the hero to regenerate 10% of their maximum spell points per day (min 5).",
      "Advanced": "Allows the hero to regenerate 20% of their maximum spell points per day (min 10).",
      "Expert": "Allows the hero to regenerate 30% of their maximum spell points per day (min 15)."
    }, "hota_changes": "Significantly buffed from the base game's flat 2/3/4 spell points per day to a percentage-based regeneration.",
    "gameplay_analysis": `
      <p>In the original game, Mysticism was usually ignored by players. In Horn of the Abyss, it regenerates much more spell points, allowing a hero with the expert skill to cast some high-level spells every day without returning to a town.</p>
      <h4>Related Artifacts</h4>
      <ul>
        <li><b>Charm of Mana:</b> +1 spell point/day</li>
        <li><b>Talisman of Mana:</b> +2 spell points/day</li>
        <li><b>Mystic Orb of Mana:</b> +3 spell points/day</li>
      </ul>
      <h4>Comparison with Intelligence</h4>
      <p>Both skills increase the amount of mana a hero can spend. Mysticism is better if the hero spends a small, consistent amount of mana each day. Intelligence is better if the hero needs a large mana pool for a single, difficult battle before they can resupply.</p>
    `
  },
  "Navigation": {
    "description": {
      "Basic": "Increases your hero's movement points at sea by 50%.",
      "Advanced": "Increases your hero's movement points at sea by 100%.",
      "Expert": "Increases your hero's movement points at sea by 150%."
    }, "hota_changes": "Banned by default on random maps without water.",
    "gameplay_analysis": `
      <p>The relevance of Navigation directly depends on the percentage of water on the map. If sea voyages are an important part of the map, then Navigation will help a lot. If the map is terrestrial, then this skill is useless.</p>
      <h4>Related Artifacts</h4>
      <ul>
        <li><b>Sea Captain's Hat:</b> +500 sea movement points</li>
        <li><b>Necklace of Ocean Guidance:</b> +1000 sea movement points</li>
        <li><b>Admiral's Hat:</b> +1500 sea movement points</li>
      </ul>
      <h4>Things that ruin Navigation</h4>
      <p>The following spells and artifacts can make Navigation obsolete by allowing heroes to cross water without a boat: Fly, Water Walk, Dimension Door, Angel Wings, Boots of Levitation.</p>
    `
  },
  "Necromancy": {
    "description": {
      "Basic": "5% of enemy creatures killed are resurrected as Skeletons.",
      "Advanced": "10% of enemy creatures killed are resurrected as Skeletons.",
      "Expert": "15% of enemy creatures killed are resurrected as Skeletons."
    }, "hota_changes": "HotA fixes a bug where AI heroes would only raise 1 skeleton regardless of skill level. Also, the number of raised creatures is based on the total number of slain creatures, not calculated per stack.",
    "gameplay_analysis": `
      <p>Necromancy is the basis of the Necropolis faction. By default, a Necropolis hero cannot be without it. For heroes from other towns, the skill is generally undesirable as the weak Skeletons will negatively affect the army's morale.</p>
      <h4>How it Works</h4>
      <p>After a battle, a hero with Necromancy will raise a percentage of the slain enemy units as Skeletons. This includes living, undead, and mechanical creatures. The number of Skeletons raised depends on the hero's Necromancy skill level and any artifact bonuses. The total health of the raised Skeletons cannot exceed the total health of the creatures killed. Because of this, killing creatures with higher health is more efficient for raising Skeletons. For example, killing 100 creatures with 6+ HP will yield more Skeletons than killing 100 creatures with 1 HP.</p>
      <h4>Related Artifacts</h4>
      <ul>
        <li><b>Amulet of the Undertaker:</b> +2.5% Necromancy</li>
        <li><b>Vampire's Cowl:</b> +5% Necromancy</li>
        <li><b>Dead Man's Boots:</b> +7.5% Necromancy</li>
        <li><b>Cloak of the Undead King:</b> A combination artifact that significantly boosts Necromancy and allows raising Walking Dead, Wights, and Liches.</li>
      </ul>
    `
  },
  "Offense": {
    "description": {
      "Basic": "Increases all hand-to-hand damage inflicted by the hero's troops by 10%.",
      "Advanced": "Increases all hand-to-hand damage inflicted by the hero's troops by 20%.",
      "Expert": "Increases all hand-to-hand damage inflicted by the hero's troops by 30%."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <h4>Comparison to Attack Skill</h4>
      <p>This table shows how much extra Attack skill a hero would need to equal the damage increase from the Offense skill.</p>
      <table class="modal-table">
        <thead><tr><th>Offense Level</th><th>Attack Skill Equivalent Range</th></tr></thead>
        <tbody>
          <tr><td>Basic (10%)</td><td>+2 to +3.6</td></tr>
          <tr><td>Advanced (20%)</td><td>+4 to +7.2</td></tr>
          <tr><td>Expert (30%)</td><td>+6 to +10.8</td></tr>
        </tbody>
      </table>
    `
  },
  "Pathfinding": {
    "description": {
      "Basic": "Reduces the movement penalty for rough terrain by 25%.",
      "Advanced": "Reduces the movement penalty for rough terrain by 50%.",
      "Expert": "Reduces the movement penalty for rough terrain by 75%."
    }, "hota_changes": "Buffed in HotA to be a more competitive alternative to Logistics on difficult terrain.",
    "gameplay_analysis": `
      <p>The usefulness of the Pathfinding skill depends on the terrain of the map. If a map has vast territories that are hard to pass (like Swamp or Sand), Pathfinding works very well, potentially even better than Logistics. It is useless on roads.</p>
      <h4>Terrain Penalties</h4>
      <p>Pathfinding reduces or removes the extra movement cost for travelling over difficult terrain. The percentages in the table represent the final movement cost relative to clear terrain.</p>
      <table class="modal-table">
        <thead><tr><th>Terrain</th><th>Normal Cost</th><th>Expert Pathfinding</th></tr></thead>
        <tbody>
          <tr><td>Rough / Wasteland</td><td>125%</td><td>85%</td></tr>
          <tr><td>Sand / Snow</td><td>150%</td><td>85%</td></tr>
          <tr><td>Swamp</td><td>175%</td><td>100%</td></tr>
        </tbody>
      </table>
      <h4>Comparison with Logistics</h4>
      <p>In HotA, Logistics is preferable on roads and easy terrain (Grass, Dirt). Pathfinding becomes better starting with Rough and Wasteland terrains, and is markedly better on Sand and Swamp. The table below shows the maximum number of tiles a hero can move in a straight line.</p>
      <table class="modal-table">
        <thead>
          <tr><th>Slowest Unit Speed</th><th>Terrain Cost</th><th>Basic Move</th><th>Expert Logistics</th><th>Expert Pathfinding</th></tr>
        </thead>
        <tbody>
          <tr><td>7 (1760 MP)</td><td>Grass (100)</td><td>17 tiles</td><td>21 tiles</td><td>20 tiles</td></tr>
          <tr><td>7 (1760 MP)</td><td>Rough (125)</td><td>14 tiles</td><td>16 tiles</td><td>20 tiles</td></tr>
          <tr><td>7 (1760 MP)</td><td>Swamp (175)</td><td>10 tiles</td><td>12 tiles</td><td>17 tiles</td></tr>
        </tbody>
      </table>
    `
  },
  "Resistance": {
    "description": {
      "Basic": "Endows a hero's troops with 5% magic resistance.",
      "Advanced": "Endows a hero's troops with 10% magic resistance.",
      "Expert": "Endows a hero's troops with 20% magic resistance."
    }, "hota_changes": "Banned by default in HotA since v1.6.0 and replaced by the 'Interference' skill for most heroes and level-up options.",
    "gameplay_analysis": `
      <p>While resistance may not be reliable, it can turn the tide of battle against a magic user when it takes effect, saving your troops from a devastating spell. It works at its finest in Rampart, as Dwarves and Unicorns have their own magic resistance, and Rangers have the highest chance to learn the skill.</p>
      <h4>Things that ruin Resistance</h4>
      <ul>
        <li><b>Orb of Vulnerability:</b> Negates all creature magic immunities and resistance.</li>
      </ul>
    `
  },
  "Scholar": {
    "description": {
      "Basic": "Allows heroes to teach each other 1st and 2nd level spells, effectively trading spells between spell books.",
      "Advanced": "Allows heroes to teach each other any spell up to 3rd level.",
      "Expert": "Allows heroes to teach each other any spell up to 4th level."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Scholar is a terrific secondary skill for a secondary hero, and not the worst skill a main hero could have. One hero with the skill is sufficient, as they can teach spells to all your other heroes who visit them. This is useful for spreading important spells from a town with a high-level Mage Guild to your other heroes and towns.</p>
    `
  },
  "Scouting": {
    "description": {
      "Basic": "Allows your hero to see 1 square further into the shroud.",
      "Advanced": "Allows your hero to see 3 squares further into the shroud.",
      "Expert": "Allows your hero to see 5 squares further into the shroud."
    }, "hota_changes": "Significantly buffed from the base game's +1/+2/+3 radius to +1/+3/+5.",
    "gameplay_analysis": `
      <p>Scouting is a useful secondary skill early in the game. It enables a hero to quickly reveal undiscovered lands, which may give the player a useful insight on where to venture. During the late game, when most important areas are already revealed, it becomes somewhat useless. For this reason, it is most useful for scout-type secondary heroes, combined with movement skills like Logistics or Pathfinding.</p>
      <h4>Related Artifacts</h4>
      <ul>
        <li><b>Speculum:</b> +1 scouting radius</li>
        <li><b>Spyglass:</b> +1 scouting radius</li>
      </ul>
    `
  },
  "Sorcery": {
    "description": {
      "Basic": "Causes a hero's spells to inflict an additional 10% damage in combat.",
      "Advanced": "Causes a hero's spells to inflict an additional 20% damage in combat.",
      "Expert": "Causes a hero's spells to inflict an additional 30% damage in combat."
    }, "hota_changes": "Significantly buffed in HotA 1.7.2 from the base game's 5%/10%/15%.",
    "gameplay_analysis": `
      <p>For a magically-oriented hero, Sorcery is a good supporting skill. On an expert level with high spell power, it does a good job. However, Sorcery is considered a mediocre secondary skill because creatures often cause the most damage in combat, and buffing them with spells like Bless or Haste can be more effective than casting a damage spell. Because of this, the magic school skills (Air, Fire, Earth, Water) are often more preferable.</p>
    `
  },
  "Tactics": {
    "description": {
      "Basic": "Allows the hero to rearrange their troops within 3 rows of the commanding hero before combat.",
      "Advanced": "Allows the hero to rearrange their troops within 5 rows of the commanding hero before combat.",
      "Expert": "Allows the hero to rearrange their troops within 7 rows of the commanding hero before combat."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Tactics is one of the best secondary skills in the game. At expert level, it allows a hero's army to start 7 hexes farther forward, which is almost half the battlefield. This allows even slow units to reach the enemy lines on the first turn of combat, especially when combined with the Haste spell. It also helps to save your troops from fast enemies, defend your shooters, and avoid area-of-effect attacks.</p>
      <h4>How it Works</h4>
      <p>The battlefield is 15 hexes wide. Normally, a creature needs 13 speed to cross it in one turn. With Basic, Advanced, or Expert Tactics, the distance is reduced, and a speed of 11, 9, or 7 is needed, respectively. If two opposing heroes both have Tactics, the skill of the lower-level hero is cancelled out, and the higher-level hero's skill is reduced by that amount. If both have the same level, the skill is cancelled for both heroes.</p>
    `
  },
  "Water Magic": {
    "description": {
      "Basic": "Allows your hero to cast water spells at reduced cost.",
      "Advanced": "Allows your hero to cast water spells at reduced cost and increased effectiveness.",
      "Expert": "Allows your hero to cast water spells at reduced cost and maximum effectiveness."
    }, "hota_changes": "No significant changes.",
    "gameplay_analysis": `
      <p>Like other magic schools, Water Magic is important. It has three essential Level 1 spells: Bless, Cure, and Dispel. It is not to be underestimated on the battlefield, especially for having one of the most formidable buff spells in the game, Prayer. Expert Teleport is extremely useful in siege situations, and Clone can double the damage output of your most powerful units.</p>
    `
  },
  "Wisdom": {
    "description": {
      "Basic": "Allows your hero to learn third level spells.",
      "Advanced": "Allows your hero to learn fourth level spells.",
      "Expert": "Allows your hero to learn fifth level spells."
    }, "hota_changes": "In HotA, the levels at which Elementalists are guaranteed to be offered Wisdom were changed to match those of all other Magic heroes.",
    "gameplay_analysis": `
      <p>Wisdom is perhaps the most essential secondary skill in the game. It should be learned by every hero and never rejected when offered at the basic level. The ability to learn 4th and 5th level spells is not only powerful, but can change the whole gameplay. Spells like Town Portal, Resurrection, Dimension Door, and Fly are game-changers. Wisdom is nearly compulsory for every hero regardless of faction, class, or map size.</p>
      <h4>How it Works</h4>
      <p>Wisdom is required to learn higher-level spells from a Mage Guild or Shrine, but not to cast them if they are known from the start (e.g. from a specialty). Might heroes are guaranteed to be offered Wisdom by level 6, and Magic heroes by level 4.</p>
      <h4>Things that ruin Wisdom</h4>
      <p>The Spellbinder's Hat artifact allows a hero to cast all 5th level spells, which can make Expert Wisdom redundant. Similarly, the Tomes of Magic allow a hero to cast all spells of a given school.</p>
    `
  }
};