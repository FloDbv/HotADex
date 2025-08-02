// Contains all data related to hero movement points on the adventure map.
const movementData = {
  speedToBase: [
    { speed: "3 or less", points: 1500 },
    { speed: "4", points: 1560 },
    { speed: "5", points: 1630 },
    { speed: "6", points: 1700 },
    { speed: "7", points: 1760 },
    { speed: "8", points: 1830 },
    { speed: "9", points: 1900 },
    { speed: "10", points: 1960 },
    { speed: "11 or more", points: 2000 }
  ],
  groundCost: [
    { terrain: "Dirt, Grass, Lava, Subterranean", straight: 100, diagonal: 141 },
    { terrain: "Rough, Wasteland", straight: 125, diagonal: 176 },
    { terrain: "Sand, Snow", straight: 150, diagonal: 212 },
    { terrain: "Swamp", straight: 175, diagonal: 247 },
    { terrain: "Dirt Road", straight: 75, diagonal: 106 },
    { terrain: "Gravel Road", straight: 65, diagonal: 91 },
    { terrain: "Cobblestone Road", straight: 50, diagonal: 70 }
  ],
  nativeTerrains: {
      "Grass": ["Castle", "Rampart", "Conflux"],
      "Snow": ["Tower"],
      "Lava": ["Inferno"],
      "Dirt": ["Necropolis"],
      "Subterranean": ["Dungeon"],
      "Rough": ["Stronghold"],
      "Swamp": ["Fortress", "Cove"],
      "Wasteland": ["Factory"]
  },
  flyingCost: [
    { terrain: "Impassable, Water, Swamp, Sand, Snow", levels: { Basic: {s: 140, d: 197}, Advanced: {s: 120, d: 169}, Expert: {s: 100, d: 141} } },
    { terrain: "Rough, Wasteland", levels: { Basic: {s: 125, d: 176}, Advanced: {s: 100, d: 141}, Expert: {s: 100, d: 141} } },
    { terrain: "All other terrains (except roads)", levels: { Any: {s: 100, d: 141} } },
    { terrain: "Dirt Road", levels: { Any: {s: 75, d: 106} } },
    { terrain: "Gravel Road", levels: { Any: {s: 65, d: 91} } },
    { terrain: "Cobblestone Road", levels: { Any: {s: 50, d: 70} } }
  ],
  diagonalMoveException: "If a hero has fewer movement points remaining than the cost of a diagonal move, but at least enough for a straight move, the hero can still make one final diagonal move for the cost of a straight move. For example, on grass, if a hero has between 100 and 140 movement points left, they can make a final diagonal move that costs only 100 points."
};
