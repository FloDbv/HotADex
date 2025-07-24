// Contains data specific to each hero class, including magic probabilities.
const classesData = {
  "Knight": {
    "faction": "Castle",
    "type": "Might",
    "primary_skills": { "attack": 2, "defense": 2, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "35%", "defense": "45%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 30, "earth": 20, "fire": 10, "water": 40 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Cleric": {
    "faction": "Castle",
    "type": "Magic",
    "primary_skills": { "attack": 1, "defense": 0, "power": 2, "knowledge": 2 },
     "primary_skill_chance": {
        "levels_2_9": { "attack": "20%", "defense": "15%", "power": "30%", "knowledge": "35%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 31, "earth": 23, "fire": 15, "water": 31 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Ranger": {
    "faction": "Rampart",
    "type": "Might",
    "primary_skills": { "attack": 1, "defense": 3, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "35%", "defense": "45%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 14, "earth": 43, "fire": 0, "water": 43 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Druid": {
    "faction": "Rampart",
    "type": "Magic",
    "primary_skills": { "attack": 0, "defense": 2, "power": 1, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "10%", "defense": "20%", "power": "35%", "knowledge": "35%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 18, "earth": 36.5, "fire": 9, "water": 36.5 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Alchemist": {
    "faction": "Tower",
    "type": "Might",
    "primary_skills": { "attack": 2, "defense": 1, "power": 1, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "40%", "defense": "30%", "power": "15%", "knowledge": "15%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Wizard": {
    "faction": "Tower",
    "type": "Magic",
    "primary_skills": { "attack": 0, "defense": 0, "power": 2, "knowledge": 3 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "10%", "defense": "10%", "power": "40%", "knowledge": "40%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Demoniac": {
    "faction": "Inferno",
    "type": "Might",
    "primary_skills": { "attack": 3, "defense": 2, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "45%", "defense": "35%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 20, "earth": 20, "fire": 40, "water": 20 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Heretic": {
    "faction": "Inferno",
    "type": "Magic",
    "primary_skills": { "attack": 1, "defense": 1, "power": 2, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "15%", "defense": "10%", "power": "35%", "knowledge": "40%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 17, "earth": 17, "fire": 50, "water": 16 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Death Knight": {
    "faction": "Necropolis",
    "type": "Might",
    "primary_skills": { "attack": 2, "defense": 2, "power": 2, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "30%", "defense": "30%", "power": "30%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 50, "fire": 0, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Necromancer": {
    "faction": "Necropolis",
    "type": "Magic",
    "primary_skills": { "attack": 1, "defense": 0, "power": 2, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "10%", "defense": "10%", "power": "40%", "knowledge": "40%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 12.5, "earth": 50, "fire": 12.5, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Overlord": {
    "faction": "Dungeon",
    "type": "Might",
    "primary_skills": { "attack": 3, "defense": 3, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "45%", "defense": "45%", "power": "5%", "knowledge": "5%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Warlock": {
    "faction": "Dungeon",
    "type": "Magic",
    "primary_skills": { "attack": 0, "defense": 1, "power": 2, "knowledge": 3 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "5%", "defense": "5%", "power": "45%", "knowledge": "45%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Barbarian": {
    "faction": "Stronghold",
    "type": "Might",
    "primary_skills": { "attack": 4, "defense": 1, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "50%", "defense": "40%", "power": "5%", "knowledge": "5%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 8
  },
  "Battle Mage": {
    "faction": "Stronghold",
    "type": "Magic",
    "primary_skills": { "attack": 2, "defense": 1, "power": 2, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Beastmaster": {
    "faction": "Fortress",
    "type": "Might",
    "primary_skills": { "attack": 3, "defense": 2, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "40%", "defense": "40%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 20, "earth": 30, "fire": 20, "water": 30 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Witch": {
    "faction": "Fortress",
    "type": "Magic",
    "primary_skills": { "attack": 0, "defense": 1, "power": 3, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "10%", "defense": "10%", "power": "40%", "knowledge": "40%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 20, "earth": 30, "fire": 20, "water": 30 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Captain": {
    "faction": "Cove",
    "type": "Might",
    "primary_skills": { "attack": 3, "defense": 2, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "45%", "defense": "35%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 15, "earth": 15, "fire": 15, "water": 55 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Navigator": {
    "faction": "Cove",
    "type": "Magic",
    "primary_skills": { "attack": 1, "defense": 1, "power": 2, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "15%", "defense": "10%", "power": "35%", "knowledge": "40%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 20, "earth": 10, "fire": 10, "water": 60 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Planeswalker": {
    "faction": "Conflux",
    "type": "Might",
    "primary_skills": { "attack": 2, "defense": 2, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
      "levels_2_9": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" },
      "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Elementalist": {
    "faction": "Conflux",
    "type": "Magic",
    "primary_skills": { "attack": 0, "defense": 0, "power": 2, "knowledge": 3 },
    "primary_skill_chance": {
      "levels_2_9": { "attack": "10%", "defense": "10%", "power": "40%", "knowledge": "40%" },
      "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  },
  "Mercenary": {
    "faction": "Factory",
    "type": "Might",
    "primary_skills": { "attack": 3, "defense": 1, "power": 1, "knowledge": 1 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "45%", "defense": "35%", "power": "10%", "knowledge": "10%" },
        "levels_10_plus": { "attack": "30%", "defense": "30%", "power": "20%", "knowledge": "20%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 4,
    "guaranteed_wisdom": 6
  },
  "Artificer": {
    "faction": "Factory",
    "type": "Magic",
    "primary_skills": { "attack": 1, "defense": 1, "power": 2, "knowledge": 2 },
    "primary_skill_chance": {
        "levels_2_9": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" },
        "levels_10_plus": { "attack": "20%", "defense": "20%", "power": "30%", "knowledge": "30%" }
    },
    "magic_roll_chance": { "air": 25, "earth": 25, "fire": 25, "water": 25 },
    "guaranteed_magic_school": 3,
    "guaranteed_wisdom": 4
  }
};