// Defines the chance for each secondary skill to appear on level-up, based on hero class.
// Data is for Horn of the Abyss (HotA) 1.7.3.
const skillProbabilities = {
  "Knight": {
    "Leadership": 10, "Ballistics": 8, "Offense": 7, "Tactics": 7, "Estates": 6, "Armorer": 5,
    "Archery": 5, "Logistics": 5, "Resistance": 5, "Artillery": 5, "Interference": 5, "Pathfinding": 4,
    "Scouting": 4, "Diplomacy": 4, "Learning": 4, "Water Magic": 4, "Luck": 3, "Air Magic": 3,
    "Wisdom": 3, "Earth Magic": 2, "First Aid": 2, "Mysticism": 2, "Fire Magic": 1, "Sorcery": 1,
    "Intelligence": 1, "Scholar": 1, "Eagle Eye": 2, "Necromancy": 0
  },
  "Cleric": {
    "First Aid": 10, "Diplomacy": 7, "Wisdom": 7, "Intelligence": 6, "Scholar": 6, "Eagle Eye": 6,
    "Luck": 5, "Sorcery": 5, "Air Magic": 4, "Ballistics": 4, "Logistics": 4, "Learning": 4,
    "Water Magic": 4, "Mysticism": 4, "Offense": 4, "Armorer": 3, "Archery": 3, "Earth Magic": 3,
    "Estates": 3, "Scouting": 3, "Leadership": 2, "Resistance": 2, "Tactics": 2, "Artillery": 2,
    "Fire Magic": 2, "Pathfinding": 2, "Interference": 0, "Necromancy": 0
  },
  "Ranger": {
    "Resistance": 9, "Interference": 9, "Armorer": 8, "Archery": 8, "Pathfinding": 7, "Scouting": 7,
    "Leadership": 6, "Artillery": 6, "Luck": 6, "Offense": 5, "Logistics": 5, "Tactics": 5,
    "Ballistics": 4, "Diplomacy": 4, "Learning": 4, "First Aid": 3, "Earth Magic": 3, "Water Magic": 3,
    "Wisdom": 3, "Mysticism": 3, "Estates": 2, "Eagle Eye": 2, "Intelligence": 2, "Sorcery": 2,
    "Air Magic": 1, "Scholar": 1, "Fire Magic": 0, "Necromancy": 0
  },
  "Druid": {
    "Luck": 9, "Wisdom": 8, "Scholar": 8, "First Aid": 7, "Eagle Eye": 7, "Intelligence": 7,
    "Sorcery": 6, "Mysticism": 6, "Archery": 5, "Logistics": 5, "Pathfinding": 5, "Ballistics": 4,
    "Diplomacy": 4, "Learning": 4, "Earth Magic": 4, "Water Magic": 4, "Armorer": 3, "Estates": 3,
    "Leadership": 2, "Air Magic": 2, "Scouting": 2, "Offense": 1, "Resistance": 1, "Tactics": 1,
    "Artillery": 1, "Fire Magic": 1, "Interference": 0, "Necromancy": 0
  },
  "Alchemist": {
    "Learning": 10, "Armorer": 8, "Offense": 6, "Ballistics": 6, "Logistics": 6, "Archery": 5,
    "Resistance": 5, "Interference": 5, "Artillery": 4, "Estates": 4, "Scouting": 4, "Intelligence": 4,
    "Mysticism": 4, "Tactics": 4, "Pathfinding": 4, "Diplomacy": 3, "Scholar": 3, "Air Magic": 3,
    "Earth Magic": 3, "Fire Magic": 1, "Water Magic": 2, "Wisdom": 6, "First Aid": 2, "Luck": 2,
    "Sorcery": 3, "Eagle Eye": 3, "Necromancy": 0
  },
  "Wizard": {
    "Wisdom": 10, "Intelligence": 10, "Scholar": 9, "Sorcery": 8, "Eagle Eye": 8, "Mysticism": 8,
    "First Aid": 7, "Learning": 4, "Diplomacy": 4, "Luck": 4, "Tactics": 1, "Leadership": 4,
    "Estates": 5, "Air Magic": 3, "Earth Magic": 3, "Fire Magic": 2, "Water Magic": 3, "Archery": 2,
    "Offense": 1, "Armorer": 1, "Ballistics": 4, "Logistics": 2, "Scouting": 2, "Pathfinding": 2,
    "Artillery": 1, "Resistance": 0, "Interference": 0, "Necromancy": 0
  },
  "Demoniac": {
    "Logistics": 10, "Offense": 8, "Armorer": 7, "Ballistics": 7, "Archery": 6, "Resistance": 6,
    "Interference": 6, "Artillery": 5, "Scouting": 5, "Tactics": 6, "Pathfinding": 4, "Wisdom": 5,
    "Sorcery": 3, "Fire Magic": 7, "Air Magic": 3, "Earth Magic": 3, "Water Magic": 1, "Leadership": 3,
    "Estates": 3, "Diplomacy": 4, "Learning": 4, "First Aid": 2, "Luck": 2, "Mysticism": 2,
    "Intelligence": 2, "Eagle Eye": 3, "Scholar": 2, "Necromancy": 0
  },
  "Heretic": {
    "Mysticism": 10, "Wisdom": 8, "Sorcery": 6, "Intelligence": 6, "First Aid": 5, "Scholar": 5,
    "Fire Magic": 5, "Learning": 4, "Eagle Eye": 4, "Offense": 4, "Artillery": 4, "Pathfinding": 4,
    "Earth Magic": 4, "Ballistics": 4, "Diplomacy": 3, "Logistics": 3, "Estates": 2, "Leadership": 2,
    "Luck": 2, "Scouting": 3, "Tactics": 4, "Archery": 4, "Armorer": 2, "Air Magic": 2, "Water Magic": 2,
    "Resistance": 3, "Interference": 0, "Necromancy": 0
  },
  "Death Knight": {
    "Necromancy": 10, "Offense": 7, "Armorer": 6, "Artillery": 5, "Tactics": 5, "Logistics": 5,
    "Resistance": 5, "Interference": 5, "Pathfinding": 4, "Scouting": 4, "Earth Magic": 4, "Sorcery": 4,
    "Mysticism": 4, "Learning": 4, "Intelligence": 5, "Wisdom": 5, "Water Magic": 3, "Air Magic": 3,
    "Ballistics": 3, "Scholar": 2, "Diplomacy": 2, "Eagle Eye": 4, "Luck": 1, "Estates": 0,
    "First Aid": 0, "Leadership": 0, "Fire Magic": 1
  },
  "Necromancer": {
    "Necromancy": 10, "Wisdom": 8, "Earth Magic": 8, "Sorcery": 6, "Scholar": 6, "Intelligence": 6,
    "Eagle Eye": 7, "Mysticism": 3, "Learning": 4, "Scouting": 2, "Logistics": 4, "Pathfinding": 6,
    "Air Magic": 3, "Water Magic": 3, "Fire Magic": 2, "Ballistics": 2, "Artillery": 3, "Tactics": 2,
    "Offense": 3, "Armorer": 1, "Resistance": 1, "Luck": 1, "Diplomacy": 4, "Estates": 3,
    "First Aid": 0, "Leadership": 0, "Archery": 2, "Interference": 0
  },
  "Overlord": {
    "Leadership": 8, "Offense": 8, "Logistics": 8, "Artillery": 8, "Ballistics": 7, "Archery": 6,
    "Armorer": 5, "Resistance": 6, "Interference": 6, "Pathfinding": 5, "Scouting": 5, "Tactics": 10,
    "Wisdom": 4, "Earth Magic": 3, "Air Magic": 3, "Fire Magic": 2, "Water Magic": 0, "Sorcery": 2,
    "Mysticism": 1, "Intelligence": 1, "Eagle Eye": 2, "Learning": 4, "Scholar": 1, "Diplomacy": 3,
    "Estates": 4, "Luck": 1, "First Aid": 1, "Necromancy": 0
  },
  "Warlock": {
    "Wisdom": 10, "Sorcery": 10, "Intelligence": 8, "Scholar": 8, "Eagle Eye": 8, "Mysticism": 8,
    "First Aid": 6, "Learning": 4, "Diplomacy": 4, "Earth Magic": 5, "Fire Magic": 5, "Air Magic": 4,
    "Water Magic": 2, "Pathfinding": 2, "Scouting": 2, "Logistics": 2, "Ballistics": 6, "Archery": 2,
    "Luck": 2, "Leadership": 3, "Tactics": 1, "Offense": 1, "Armorer": 4, "Artillery": 1,
    "Estates": 5, "Resistance": 0, "Interference": 0, "Necromancy": 0
  },
  "Barbarian": {
    "Offense": 10, "Artillery": 8, "Pathfinding": 8, "Scouting": 8, "Archery": 7, "Logistics": 7,
    "Leadership": 5, "Armorer": 4, "Ballistics": 4, "Resistance": 4, "Interference": 4, "Learning": 4,
    "Luck": 3, "Earth Magic": 3, "Air Magic": 3, "Fire Magic": 2, "Estates": 2, "Wisdom": 2,
    "Sorcery": 1, "Mysticism": 1, "Intelligence": 1, "Eagle Eye": 1, "Scholar": 1, "First Aid": 1,
    "Diplomacy": 1, "Tactics": 8, "Water Magic": 0, "Necromancy": 0
  },
  "Battle Mage": {
    "Logistics": 9, "Wisdom": 8, "Offense": 8, "Sorcery": 6, "Ballistics": 6, "Tactics": 5,
    "Intelligence": 5, "Mysticism": 5, "Eagle Eye": 5, "Learning": 4, "First Aid": 4, "Armorer": 4,
    "Archery": 4, "Artillery": 4, "Scouting": 4, "Pathfinding": 4, "Leadership": 4, "Scholar": 4,
    "Earth Magic": 3, "Air Magic": 3, "Fire Magic": 3, "Diplomacy": 3, "Water Magic": 2, "Luck": 2,
    "Estates": 1, "Resistance": 1, "Interference": 1, "Necromancy": 0
  },
  "Beastmaster": {
    "Armorer": 10, "Offense": 9, "Artillery": 8, "Ballistics": 8, "Logistics": 8, "Pathfinding": 8,
    "Scouting": 7, "Archery": 7, "First Aid": 6, "Resistance": 5, "Interference": 5, "Tactics": 5,
    "Leadership": 5, "Wisdom": 3, "Luck": 2, "Earth Magic": 2, "Air Magic": 2, "Water Magic": 2,
    "Mysticism": 2, "Diplomacy": 2, "Fire Magic": 1, "Sorcery": 1, "Intelligence": 1, "Eagle Eye": 1,
    "Learning": 1, "Scholar": 1, "Estates": 1, "Necromancy": 0
  },
  "Witch": {
    "Eagle Eye": 10, "Wisdom": 8, "First Aid": 8, "Sorcery": 8, "Mysticism": 8, "Intelligence": 7,
    "Scholar": 7, "Learning": 4, "Ballistics": 4, "Luck": 4, "Armorer": 4, "Air Magic": 3,
    "Earth Magic": 3, "Fire Magic": 3, "Water Magic": 3, "Logistics": 3, "Artillery": 2, "Pathfinding": 2,
    "Scouting": 2, "Diplomacy": 2, "Leadership": 1, "Offense": 1, "Estates": 1, "Tactics": 1,
    "Resistance": 0, "Interference": 0, "Archery": 1, "Necromancy": 0
  },
  "Captain": {
      "Offense": 10, "Navigation": 10, "Archery": 7, "Pathfinding": 7, "Luck": 7, "Logistics": 7,
      "Armorer": 6, "Ballistics": 6, "Scouting": 5, "Wisdom": 5, "Leadership": 4, "Water Magic": 4,
      "Estates": 4, "Resistance": 4, "Interference": 4, "First Aid": 3, "Learning": 3, "Artillery": 2,
      "Tactics": 2, "Diplomacy": 2, "Eagle Eye": 1, "Air Magic": 1, "Earth Magic": 1,
      "Sorcery": 0, "Intelligence": 0, "Mysticism": 0, "Scholar": 0, "Fire Magic": 0, "Necromancy": 0
  },
  "Navigator": {
      "Wisdom": 10, "Water Magic": 10, "Intelligence": 8, "Sorcery": 7, "First Aid": 7, "Scholar": 7,
      "Navigation": 7, "Luck": 6, "Diplomacy": 5, "Mysticism": 5, "Learning": 4, "Eagle Eye": 4,
      "Scouting": 3, "Estates": 3, "Ballistics": 3, "Pathfinding": 2, "Air Magic": 2, "Earth Magic": 2,
      "Offense": 2, "Armorer": 2, "Fire Magic": 1, "Tactics": 1, "Logistics": 1, "Artillery": 1, "Archery": 1,
      "Resistance": 0, "Interference": 0, "Leadership": 0, "Necromancy": 0
  },
  "Planeswalker": {
      "Offense": 8, "Artillery": 8, "Logistics": 8, "Learning": 8, "Tactics": 8, "Wisdom": 8, "Resistance": 6,
      "Interference": 6, "Scouting": 6, "Armorer": 5, "Pathfinding": 5, "Archery": 4, "Ballistics": 4,
      "First Aid": 4, "Air Magic": 2, "Earth Magic": 2, "Fire Magic": 2, "Water Magic": 2, "Sorcery": 2,
      "Luck": 2, "Leadership": 2, "Mysticism": 1, "Intelligence": 1, "Scholar": 1, "Eagle Eye": 1, "Diplomacy": 1,
      "Estates": 1, "Necromancy": 0
  },
  "Elementalist": {
      "Wisdom": 10, "Intelligence": 8, "Sorcery": 8, "Eagle Eye": 8, "Mysticism": 8, "Scholar": 6, "Learning": 6,
      "Air Magic": 5, "Earth Magic": 5, "Fire Magic": 5, "Water Magic": 5, "First Aid": 4, "Diplomacy": 4,
      "Scouting": 3, "Pathfinding": 2, "Logistics": 2, "Luck": 2, "Artillery": 2, "Ballistics": 2,
      "Offense": 1, "Armorer": 1, "Archery": 1, "Leadership": 1, "Estates": 1, "Tactics": 1,
      "Resistance": 0, "Interference": 0, "Necromancy": 0
  },
  "Mercenary": {
    "Logistics": 9, "Pathfinding": 9, "Offense": 8, "Tactics": 8, "Archery": 7, "Diplomacy": 7,
    "Leadership": 6, "Armorer": 5, "Artillery": 5, "Scouting": 5, "Ballistics": 4, "First Aid": 4,
    "Estates": 4, "Wisdom": 3, "Learning": 2, "Luck": 2, "Interference": 1, "Air Magic": 1,
    "Earth Magic": 1, "Fire Magic": 1, "Water Magic": 1, "Scholar": 1, "Sorcery": 1, "Mysticism": 1,
    "Intelligence": 1, "Eagle Eye": 0, "Resistance": 0, "Necromancy": 0
  },
  "Artificer": {
      "Wisdom": 9, "Intelligence": 7, "Scholar": 7, "Learning": 7, "First Aid": 6, "Mysticism": 6,
      "Sorcery": 6, "Leadership": 5, "Luck": 5, "Armorer": 5, "Ballistics": 5, "Artillery": 4,
      "Logistics": 4, "Offense": 3, "Scouting": 3, "Pathfinding": 3, "Diplomacy": 3, "Air Magic": 3,
      "Earth Magic": 3, "Fire Magic": 3, "Water Magic": 3, "Estates": 2, "Archery": 1, "Tactics": 1,
      "Eagle Eye": 0, "Resistance": 0, "Interference": 0, "Necromancy": 0
  }
};