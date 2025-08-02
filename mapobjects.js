// Contains all data for Adventure Map objects, starting with Creature Banks.
const creatureBanksData = [
  {
    name: "Ancient Altar",
    guards: "25 Haspids",
    rewards: {
      creatures: null,
      artifacts: "Horn of the Abyss",
      gold: null,
      resources: null,
      experience: "7500"
    },
    levels: null,
    terrain: "Any dry land",
    value: "20000",
    additional_info: "The reward is always Horn of the Abyss. If the bank has been defeated, the Horn of the Abyss on the exterior disappears. Does not appear on random maps unless it is enabled in the template settings."
  },
  {
    name: "Beholders' Sanctuary",
    guards: "50-150 Beholders",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "3000-9000",
      resources: null,
      experience: "1100-3300"
    },
    levels: [
      { level: 1, guards: "50 Beholders", rewards: "m, 3000 G", experience: "1100" },
      { level: 2, guards: "75 Beholders", rewards: "m, 5000 G", experience: "1650" },
      { level: 3, guards: "100 Beholders", rewards: "M, 6000 G", experience: "2200" },
      { level: 4, guards: "150 Beholders", rewards: "m, 9000 G", experience: "3300" }
    ],
    terrain: "Water",
    value: "2500",
    additional_info: "50% probability for 1/5 of the guards to be Evil Eyes."
  },
  {
    name: "Black Tower",
    guards: "1 Dragon",
    rewards: {
      creatures: null,
      artifacts: "m",
      gold: "2000-3750",
      resources: null,
      experience: "180-300"
    },
    levels: [
      { level: 1, guards: "1 Green Dragon", rewards: "m, 2000 G", experience: "180" },
      { level: 2, guards: "1 Red Dragon", rewards: "m, 2250 G", experience: "180" },
      { level: 3, guards: "1 Gold Dragon", rewards: "m, 3500 G", experience: "250" },
      { level: 4, guards: "1 Black Dragon", rewards: "m, 3750 G", experience: "300" }
    ],
    terrain: "Any dry land",
    value: "1500",
    additional_info: "Standard battle layout (war machines active)."
  },
  {
    name: "Churchyard",
    guards: "90 Zombies",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "2500",
      resources: null,
      experience: "1800"
    },
    levels: null,
    terrain: "Any dry land",
    value: "1500",
    additional_info: "When visited after the guards have been defeated decreases the hero's morale by 1 for the next battle."
  },
  {
    name: "Crypt",
    guards: "20-40 Walking Dead, 20-40 Wights, 10-20 Vampires",
    rewards: {
      creatures: null,
      artifacts: "m",
      gold: "2500-5000",
      resources: null,
      experience: "750-900"
    },
    levels: [
      { level: 1, guards: "20 Walking Dead", rewards: "1500 G", experience: "480" },
      { level: 2, guards: "25 Walking Dead, 5 Wights", rewards: "2000 G", experience: "540" },
      { level: 3, guards: "20 Walking Dead, 20 Wights, 10 Vampires", rewards: "t, 2500 G", experience: "750" },
      { level: 4, guards: "40 Walking Dead, 20 Wights, 10 Vampires", rewards: "t, 5000 G", experience: "900" }
    ],
    terrain: "Grass, Dirt, Snow, Swamp, Sand",
    value: "1000",
    additional_info: "When visited after the guards have been defeated decreases the hero's morale by 1 for the next battle."
  },
  {
    name: "Cyclops Stockpile",
    guards: "20-50 Cyclops",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: null,
      resources: "4-10 W+O+M+S+G+C",
      experience: "1400-3500"
    },
    levels: [
      { level: 1, guards: "20 Cyclops", rewards: "4 W+O+M+S+G+C", experience: "1400" },
      { level: 2, guards: "30 Cyclops", rewards: "6 W+O+M+S+G+C", experience: "2100" },
      { level: 3, guards: "40 Cyclops", rewards: "8 W+O+M+S+G+C", experience: "2800" },
      { level: 4, guards: "50 Cyclops", rewards: "10 W+O+M+S+G+C", experience: "3500" }
    ],
    terrain: "Any dry land",
    value: "3000",
    additional_info: "50% probability for 1/5 of the guards to be Cyclops Kings."
  },
  {
    name: "Derelict Ship",
    guards: "30-60 Water Elementals",
    rewards: {
      creatures: null,
      artifacts: "m",
      gold: "3000-6000",
      resources: null,
      experience: "900-1800"
    },
    levels: [
      { level: 1, guards: "30 Water Elementals", rewards: "3000 G", experience: "900" },
      { level: 2, guards: "40 Water Elementals", rewards: "t, 3000 G", experience: "1200" },
      { level: 3, guards: "50 Water Elementals", rewards: "t, 4000 G", experience: "1200" },
      { level: 4, guards: "60 Water Elementals", rewards: "m, 6000 G", experience: "1800" }
    ],
    terrain: "Water",
    value: "4000",
    additional_info: "When visited after the guards have been defeated decreases the hero's morale by 1 for the next battle."
  },
  {
    name: "Dragon Fly Hive",
    guards: "45-120 Dragon Flies",
    rewards: {
      creatures: "4-12 Wyverns",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "600-1800"
    },
    levels: [
      { level: 1, guards: "45 Dragon Flies", rewards: "4 Wyverns", experience: "600" },
      { level: 2, guards: "60 Dragon Flies", rewards: "6 Wyverns", experience: "900" },
      { level: 3, guards: "90 Dragon Flies", rewards: "8 Wyverns", experience: "1200" },
      { level: 4, guards: "120 Dragon Flies", rewards: "12 Wyverns", experience: "1800" }
    ],
    terrain: "Any dry land",
    value: "9000",
    additional_info: null
  },
  {
    name: "Dragon Utopia",
    guards: "8-16 Green Dragons, 2-5 Red Dragons, 1-4 Gold Dragons, 1-3 Black Dragons",
    rewards: {
      creatures: null,
      artifacts: "m/M/R",
      gold: "20000-50000",
      resources: null,
      experience: "3140-5700"
    },
    levels: [
      { level: 1, guards: "8 Green, 2 Red, 1 Gold, 1 Black Dragon", rewards: "t, m, M, R, 20000 G", experience: "3140" },
      { level: 2, guards: "10 Green, 3 Red, 2 Gold, 1 Black Dragon", rewards: "m, M, 2 R, 30000 G", experience: "3870" },
      { level: 3, guards: "12 Green, 3 Red, 3 Gold, 2 Black Dragon", rewards: "M, 3 R, 40000 G", experience: "4420" },
      { level: 4, guards: "16 Green, 5 Red, 4 Gold, 3 Black Dragon", rewards: "4 R, 50000 G", experience: "5700" }
    ],
    terrain: "Any dry land",
    value: "10000",
    additional_info: null
  },
  {
    name: "Dwarven Treasury",
    guards: "50-150 Dwarves",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "2500-7500",
      resources: "2-10 C",
      experience: "1000-3000"
    },
    levels: [
      { level: 1, guards: "50 Dwarves", rewards: "2500 G, 2 C", experience: "1000" },
      { level: 2, guards: "75 Dwarves", rewards: "4000 G, 3 C", experience: "1500" },
      { level: 3, guards: "100 Dwarves", rewards: "5000 G, 5 C", experience: "2000" },
      { level: 4, guards: "150 Dwarves", rewards: "7500 G, 10 C", experience: "3000" }
    ],
    terrain: "Any dry land",
    value: "2000",
    additional_info: "50% probability for 1/5 of the guards to be Battle Dwarves."
  },
  {
    name: "Experimental Shop",
    guards: "20-80 Steel Golems",
    rewards: {
      creatures: "1-4 Giants",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "900-3600"
    },
    levels: [
      { level: 1, guards: "20 Steel Golems", rewards: "1 Giant", experience: "900" },
      { level: 2, guards: "40 Steel Golems", rewards: "2 Giants", experience: "1800" },
      { level: 3, guards: "60 Steel Golems", rewards: "3 Giants", experience: "2700" },
      { level: 4, guards: "80 Steel Golems", rewards: "4 Giants", experience: "3600" }
    ],
    terrain: "Any dry land",
    value: "3500",
    additional_info: null
  },
  {
    name: "Griffin Conservatory",
    guards: "50-150 Griffins",
    rewards: {
      creatures: "1-4 Angels",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "1250-3750"
    },
    levels: [
      { level: 1, guards: "50 Griffins", rewards: "1 Angel", experience: "1250" },
      { level: 2, guards: "75 Griffins", rewards: "2 Angels", experience: "1875" },
      { level: 3, guards: "100 Griffins", rewards: "3 Angels", experience: "2500" },
      { level: 4, guards: "150 Griffins", rewards: "4 Angels", experience: "3750" }
    ],
    terrain: "Any dry land",
    value: "2000",
    additional_info: "50% probability for 1/5 of the guards to be Royal Griffins."
  },
  {
    name: "Imp Cache",
    guards: "100-300 Imps",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "1000-3000",
      resources: "2-6 M",
      experience: "400-1200"
    },
    levels: [
      { level: 1, guards: "100 Imps", rewards: "1000 G, 2 M", experience: "400" },
      { level: 2, guards: "150 Imps", rewards: "1500 G, 3 M", experience: "600" },
      { level: 3, guards: "200 Imps", rewards: "2000 G, 4 M", experience: "800" },
      { level: 4, guards: "300 Imps", rewards: "3000 G, 6 M", experience: "1200" }
    ],
    terrain: "Any dry land",
    value: "5000",
    additional_info: "50% probability for 1/5 of the guards to be Familiars."
  },
  {
    name: "Ivory Tower",
    guards: "35-80 Magi",
    rewards: {
      creatures: "3-12 Enchanters",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "1050-2400"
    },
    levels: [
      { level: 1, guards: "35 Magi", rewards: "3 Enchanters", experience: "1050" },
      { level: 2, guards: "50 Magi", rewards: "6 Enchanters", experience: "1500" },
      { level: 3, guards: "65 Magi", rewards: "9 Enchanters", experience: "1950" },
      { level: 4, guards: "80 Magi", rewards: "12 Enchanters", experience: "2400" }
    ],
    terrain: "Sand, Snow",
    value: "7000",
    additional_info: "Does not appear on random maps unless it is enabled in the template settings."
  },
  {
    name: "Mansion",
    guards: "40-100 Vampires",
    rewards: {
      creatures: null,
      artifacts: "M",
      gold: "2500-10000",
      resources: "2-5 M+S+G+C",
      experience: "1600-4000"
    },
    levels: [
      { level: 1, guards: "40 Vampires", rewards: "M, 2500 G, 2 M+S+G+C", experience: "1600" },
      { level: 2, guards: "60 Vampires", rewards: "M, 5000 G, 3 M+S+G+C", experience: "2400" },
      { level: 3, guards: "80 Vampires", rewards: "M, 7500 G, 4 M+S+G+C", experience: "3200" },
      { level: 4, guards: "100 Vampires", rewards: "M, 10000 G, 5 M+S+G+C", experience: "4000" }
    ],
    terrain: "Any dry land",
    value: "5000",
    additional_info: null
  },
  {
    name: "Medusa Stores",
    guards: "20-50 Medusas",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "2000-5000",
      resources: "5-10 S",
      experience: "520-1300"
    },
    levels: [
      { level: 1, guards: "20 Medusas", rewards: "2000 G, 5 S", experience: "520" },
      { level: 2, guards: "30 Medusas", rewards: "3000 G, 6 S", experience: "780" },
      { level: 3, guards: "40 Medusas", rewards: "4000 G, 8 S", experience: "1040" },
      { level: 4, guards: "50 Medusas", rewards: "5000 G, 10 S", experience: "1300" }
    ],
    terrain: "Any except Subterranean and Water",
    value: "1500",
    additional_info: "50% probability for 1/5 of the guards to be Medusa Queens."
  },
  {
    name: "Naga Bank",
    guards: "10-30 Nagas",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "4000-12000",
      resources: "8-24 G",
      experience: "1100-3300"
    },
    levels: [
      { level: 1, guards: "10 Nagas", rewards: "4000 G, 8 G", experience: "1100" },
      { level: 2, guards: "15 Nagas", rewards: "6000 G, 12 G", experience: "1650" },
      { level: 3, guards: "20 Nagas", rewards: "8000 G, 16 G", experience: "2200" },
      { level: 4, guards: "30 Nagas", rewards: "12000 G, 24 G", experience: "3300" }
    ],
    terrain: "Any dry land",
    value: "3000",
    additional_info: "Sulfur is replaced by gems in HD Mod and HotA. 50% probability for 1/5 of the guards to be Naga Queens."
  },
  {
    name: "Pirate Cavern",
    guards: "40-160 Pirates",
    rewards: {
      creatures: "1-4 Sea Serpents",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "600-2400"
    },
    levels: [
      { level: 1, guards: "40 Pirates", rewards: "1 Sea Serpent", experience: "600" },
      { level: 2, guards: "80 Pirates", rewards: "2 Sea Serpents", experience: "1200" },
      { level: 3, guards: "120 Pirates", rewards: "3 Sea Serpents", experience: "1800" },
      { level: 4, guards: "160 Pirates", rewards: "4 Sea Serpents", experience: "2400" }
    ],
    terrain: "Rough",
    value: "3500",
    additional_info: "50% probability for 1/2 of Pirates to be Corsairs. Does not appear on random maps unless it is enabled in the template settings."
  },
  {
    name: "Red Tower",
    guards: "35-140 Fire Elementals",
    rewards: {
      creatures: "1-4 Fire Birds",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "1225-4900"
    },
    levels: [
      { level: 1, guards: "35 Fire Elementals", rewards: "1 Firebird", experience: "1225" },
      { level: 2, guards: "70 Fire Elementals", rewards: "2 Firebirds", experience: "2450" },
      { level: 3, guards: "105 Fire Elementals", rewards: "3 Firebirds", experience: "3675" },
      { level: 4, guards: "140 Fire Elementals", rewards: "4 Firebirds", experience: "4900" }
    ],
    terrain: "Any dry land",
    value: "4000",
    additional_info: "Limit per zone: 1. 50% probability for 1/5 of the guards to be Energy Elementals."
  },
  {
    name: "Ruins",
    guards: "20-50 Skeletons, 3-9 Wights, 3-9 Wraiths, 10-20 Skeleton Warriors, 1-3 Power Liches",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "1000-4000",
      resources: null,
      experience: "328-864"
    },
    levels: [
        { level: 1, guards: "20 Skeletons, 3 Wights", rewards: "1000 G", experience: "328" },
        { level: 2, guards: "30 Skeletons, 5 Wights, 5 Skeleton Warriors", rewards: "2000 G", experience: "460" },
        { level: 3, guards: "40 Skeletons, 7 Wights, 10 Skeleton Warriors, 1 Power Lich", rewards: "3000 G", experience: "662" },
        { level: 4, guards: "50 Skeletons, 9 Wights, 20 Skeleton Warriors, 3 Power Liches", rewards: "4000 G", experience: "864" }
    ],
    terrain: "Highlands",
    value: "1000",
    additional_info: "After defeating the guards, the shroud is removed from all tiles within 12 tiles from Ruins."
  },
  {
    name: "Shipwreck",
    guards: "10-50 Wights",
    rewards: {
      creatures: null,
      artifacts: "t/m",
      gold: "2000-5000",
      resources: null,
      experience: "270-900"
    },
    levels: [
        { level: 1, guards: "10 Wights", rewards: "2000 G", experience: "180" },
        { level: 2, guards: "15 Wights", rewards: "3000 G", experience: "270" },
        { level: 3, guards: "25 Wights", rewards: "t, 4000 G", experience: "450" },
        { level: 4, guards: "50 Wights", rewards: "m, 5000 G", experience: "900" }
    ],
    terrain: "Water",
    value: "2000",
    additional_info: "Can be visited without a boat if placed next to the dry land. When visited after the guards have been defeated, it decreases the hero's morale by 1 for the next battle."
  },
  {
    name: "Spit",
    guards: "16-48 Basilisks",
    rewards: {
      creatures: null,
      artifacts: null,
      gold: "3000-9000",
      resources: null,
      experience: "560-1680"
    },
    levels: [
        { level: 1, guards: "16 Basilisks", rewards: "3000 G", experience: "560" },
        { level: 2, guards: "24 Basilisks", rewards: "4500 G", experience: "840" },
        { level: 3, guards: "32 Basilisks", rewards: "6000 G", experience: "1120" },
        { level: 4, guards: "48 Basilisks", rewards: "9000 G", experience: "1680" }
    ],
    terrain: "Swamp",
    value: "1500",
    additional_info: "Does not appear on random maps unless it is enabled in the template settings."
  },
  {
    name: "Temple of the Sea",
    guards: "8-10 Hydras, 6-9 Sea Serpents, 3-6 Chaos Hydras, 2-5 Haspids",
    rewards: {
      creatures: null,
      artifacts: "t/m/M/R",
      gold: "10000-30000",
      resources: null,
      experience: "3830-6370"
    },
    levels: [
        { level: 1, guards: "8 Hydras, 6 Sea Serpents, 3 Chaos Hydras, 2 Haspids", rewards: "2 t, m, R, 10000 G", experience: "3830" },
        { level: 2, guards: "8 Hydras, 7 Sea Serpents, 4 Chaos Hydras, 3 Haspids", rewards: "t, m , M, R, 15000 G", experience: "4580" },
        { level: 3, guards: "8 Hydras, 7 Sea Serpents, 5 Chaos Hydras, 4 Haspids", rewards: "m, 2 M, R, 20000 G", experience: "5110" },
        { level: 4, guards: "10 Hydras, 9 Sea Serpents, 6 Chaos Hydras, 5 Haspids", rewards: "2 M, 2 R, 30000 G", experience: "6370" }
    ],
    terrain: "Water",
    value: "10000",
    additional_info: null
  },
  {
    name: "Wolf Raider Picket",
    guards: "50-150 Wolf Riders",
    rewards: {
      creatures: "4-12 Cyclops",
      artifacts: null,
      gold: null,
      resources: null,
      experience: "500-1500"
    },
    levels: [
        { level: 1, guards: "50 Wolf Riders", rewards: "4 Cyclops", experience: "500" },
        { level: 2, guards: "75 Wolf Riders", rewards: "6 Cyclops", experience: "750" },
        { level: 3, guards: "100 Wolf Riders", rewards: "8 Cyclops", experience: "1000" },
        { level: 4, guards: "150 Wolf Riders", rewards: "12 Cyclops", experience: "1500" }
    ],
    terrain: "Any dry land",
    value: "9500",
    additional_info: null
  }
];
