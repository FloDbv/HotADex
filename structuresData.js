// structuresData.js
// Unified dataset for ALL Adventure Map objects.
// Main page uses: name + short (exact one-liner from your DOCX).
// Modal uses: levels (if any), terrain, mapLimit, rmgValue, inDepth, notes, trivia.
// Filtering uses: categories (["Army Strength","Creature Banks","Economy","Hero Strength","Mobility / Intel"]).
// Overlay items: leave categories [] and label with overlaySubtype; they appear only under "All".
window.structuresData = [
  // ========== A ==========
  {
    id: "abandoned-mine",
    name: "Abandoned Mine",
    short: "Works as a random mine (except Sawmill) after the guards — 100-245 Troglodytes — are defeated. Up to 7 stacks of units can be left inside of it.",
    categories: ["Economy"],
    terrain: "Subterranean (combat visuals & native bonuses)",
    mapLimit: "144 (all Mines and Lighthouses)",
    rmgValue: "—",
    inDepth:
      "Battles taking place in an Abandoned Mine will always use subterranean terrain with all native terrain bonuses, meaning that the Troglodytes will benefit from a +1 to Spd, A, D."
  },
  {
    id: "airship",
    name: "Airship",
    short: "Enables a Hero to fly over obstacles and water.",
    categories: ["Mobility / Intel"],
    mapLimit: "64",
    rmgValue: "n/a",
    inDepth:
      "Enables a Hero to fly over land tiles, water tiles, and obstacles. Boarding or disembarking uses all remaining movement that day. While aboard, a Hero cannot interact with objects or attack, but other Heroes can interact with/attack the airship. Disembark/stop only on unblocked land tiles. One Hero + army per airship. Airships can be purchased from an Airship Yard for 5000 G and 20 W, or found on the Adventure Map. If the carrying Hero is defeated, the Airship disappears. Can be entered from shore even if the airship stands on water.",
    trivia:
      "In the World on Fire campaign, the airship is implied to have been created from a stolen Bracadan skyship."
  },
  {
    id: "airship-yard",
    name: "Airship Yard",
    short: "Allows players to build Airships for the price of 5000 G and 20 W.",
    categories: ["Mobility / Intel"],
    mapLimit: "Unlimited",
    rmgValue: "n/a",
    inDepth:
      "Once flagged, the yard can be used by its owner or an ally by clicking on its tile, without having a Hero visit it."
  },
  {
    id: "alchemists-lab",
    name: "Alchemist's Lab",
    short:
      "Produces +1 M / day starting on the day after being flagged by a Hero. Up to 7 stacks of units can be left inside as guards.",
    categories: ["Economy"],
    mapLimit: "144 (all Mines and Lighthouses)",
    rmgValue: "3500"
  },
  {
    id: "altar-of-mana",
    name: "Altar of Mana",
    short:
      "Visiting Heroes may sacrifice creatures in exchange for spell points, up to 4x their normal maximum.",
    categories: ["Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "100",
    inDepth:
      "Each sacrificed creature gives (AI value)/80 spell points. Never guarded and cannot be part of an object group on random maps."
  },
  {
    id: "altar-of-sacrifice",
    name: "Altar of Sacrifice",
    short:
      "Visiting Heroes can sacrifice Artifacts and / or creatures in exchange for XP. A Hero’s alignment determines what can be sacrificed.",
    categories: ["Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "100",
    inDepth:
      "Castle/Tower/Rampart (good) can only sacrifice Artifacts for XP. Inferno/Necropolis/Dungeon (evil) can only sacrifice creatures. Stronghold/Fortress/Conflux/Cove/Factory (neutral) can sacrifice either. XP: 1000/1500/3000/6000 for t/m/M/R artifacts; or 5*(AI value/40, rounded down) for creatures. Peasants give no XP and can’t be sacrificed alone.",
    notes: "TODO: add HotA creatures sacrificed XP table",
    // TODO placeholder acknowledged; modal can hide this note until provided.
  },
  {
    id: "ancient-altar",
    name: "Ancient Altar",
    short:
      "Upon defeating 25 Haspids, rewards the Hero with the Horn of the Abyss and 7500 XP.",
    categories: ["Creature Banks", "Hero Strength"],
    terrain: "Any dry land",
    mapLimit: "Unlimited",
    rmgValue: "20000",
    guards: "25 Haspids",
    rewards: "Horn of the Abyss; 7500 XP",
    notes:
      "The reward is always the Horn of the Abyss. If the bank has been defeated, the Horn on the exterior disappears. Does not appear on random maps unless enabled in template settings."
  },
  {
    id: "ancient-lamp",
    name: "Ancient Lamp",
    short:
      "Visiting Heroes can recruit 4-7 Master Genies. Disappears after all the units are bought.",
    categories: ["Army Strength"],
    mapLimit: "Unlimited",
    rmgValue: "5000",
    notes:
      "Does not appear on random maps unless it is enabled in the template settings."
  },
  {
    id: "anti-magic-garrison",
    name: "Anti-magic Garrison",
    short:
      "Can withhold up to seven different stacks of creatures. The garrison prevents all spellcasting during combat and in the visiting square.",
    categories: ["Mobility / Intel"],
    mapLimit: "48",
    rmgValue: "n/a",
    inDepth:
      "Owners/allies pass without fighting; enemies must defeat the force. Heroes can’t occupy the Garrison. Magic is suppressed in combat and for adventure spells on the tile. Combo artifacts (Armor of the Damned, Angelic Alliance, Ironfist) still cast; Faerie Dragons still cast. Troops may be set removable or not in editor."
  },
  {
    id: "arena",
    name: "Arena",
    short:
      "Upon visiting, Heroes can choose a one time permanent +2 increase to Attack or Defense.",
    categories: ["Hero Strength"],
    mapLimit: "32",
    rmgValue: "3000"
  },
  {
    id: "artifact-object",
    name: "Artifact",
    short: "Object that provides various bonuses when equipped by a Hero.",
    categories: ["Economy", "Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "2000 (t), 5000 (m), 10000 (M), 20000 (R), n/a (C)",
    inDepth:
      "Can be acquired from map objects; defeated enemy Heroes; returning Heroes in Tavern; allies; Artifacts Merchant; starting bonus. Pickups go to slot or backpack (max 64). If full, further artifacts disappear; digging Grail blocked if backpack full. Effects: primary/secondary skills, movement, morale/luck, immunities, income, growth. Similar artifacts don’t stack (except Quiet Eye and resource producers). Map artifacts may be invisibly guarded. If guards are set with no message, combat starts immediately.",
    notes: "TODO: add slots information and picture"
  },

  // ========== B ==========
  {
    id: "beholders-sanctuary",
    name: "Beholders' Sanctuary",
    short:
      "Water structure; upon defeating 50-150 Beholders, rewards the Hero with a m or M Artifact, 3000-9000 G, and 1100-3300 XP.",
    categories: ["Creature Banks", "Economy", "Hero Strength"],
    terrain: "Water",
    mapLimit: "Unlimited",
    rmgValue: "2500",
    levels: [
      { level: 1, chance: 30, guards: "50 Beholders", rewards: "m, 3000 G", xp: "1100" },
      { level: 2, chance: 30, guards: "75 Beholders", rewards: "m, 5000 G", xp: "1650" },
      { level: 3, chance: 30, guards: "100 Beholders", rewards: "M, 6000 G", xp: "2200" },
      { level: 4, chance: 10, guards: "150 Beholders", rewards: "M, 9000 G", xp: "3300" }
    ],
    notes: "50% probability for 1/5 of the guards to be Evil Eyes."
  },
  {
    id: "black-market",
    name: "Black Market",
    short:
      "Visiting Heroes to buy Artifacts for 2.5x the basic price.",
    categories: ["Economy", "Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "8000",
    inDepth:
      "Sells three t, three m, and one M artifact; never restocked. Prices equal Merchant with 5 Marketplaces (x2.5). If an artifact class is restricted, random classes (incl. R, C) are generated. No Scrolls or Tomes."
  },
  {
    id: "black-tower",
    name: "Black Tower",
    short:
      "Upon defeating a Green, Red, Gold, or Black Dragon , rewards the Hero with a m Artifact, 2000-3750 G, and 180-300 XP.",
    categories: ["Creature Banks", "Economy", "Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "1500",
    levels: [
      { level: 1, chance: 25, guards: "1 Green Dragon", rewards: "m, 2000 G", xp: "180" },
      { level: 2, chance: 25, guards: "1 Red Dragon", rewards: "m, 2250 G", xp: "180" },
      { level: 3, chance: 25, guards: "1 Gold Dragon", rewards: "m, 3500 G", xp: "250" },
      { level: 4, chance: 25, guards: "1 Black Dragon", rewards: "m, 3750 G", xp: "300" }
    ]
  },
  {
    id: "boat",
    name: "Boat",
    short: "Enables a Hero to move over water tiles.",
    categories: ["Mobility / Intel"],
    mapLimit: "64",
    rmgValue: "n/a"
  },
  {
    id: "border-gate",
    name: "Border Gate",
    short:
      "Cannot be passed unless one of the player's Heroes has visited a Keymaster's Tent of the same color.",
    categories: ["Mobility / Intel"],
    mapLimit: "Unlimited",
    rmgValue: "n/a",
    inDepth:
      "Eight colors: red, green, light blue, dark blue, brown, purple, white, black. Unlike Border Guards, Gates do not disappear after passage."
  },
  {
    id: "border-guard",
    name: "Border Guard",
    short:
      "Cannot be passed unless one of the player's Heroes has visited a Keymaster's Tent of the same color. Disappears after being visited by a qualified Hero.",
    categories: ["Mobility / Intel"],
    mapLimit: "Unlimited",
    rmgValue: "n/a",
    inDepth:
      "Eight colors: red, green, light blue, dark blue, brown, purple, white, black."
  },
  {
    id: "buoy",
    name: "Buoy",
    short: "Gives the visiting Hero +1 to Morale for the next battle.",
    categories: ["Mobility / Intel", "Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "100"
  },

  // ========== C ==========
  {
    id: "campfire",
    name: "Campfire",
    short:
      "Gives the player between 400-600 G and 4-6 other resources. Disappears after a Hero visits it.",
    categories: ["Economy"],
    mapLimit: "Unlimited",
    rmgValue: "2000"
  },
  {
    id: "cannon-yard",
    name: "Cannon Yard",
    short: "Allows a Hero to buy a Cannon for 3000 G.",
    categories: ["Army Strength"],
    mapLimit: "Unlimited",
    rmgValue: "3000"
  },
  {
    id: "cartographer",
    name: "Cartographer",
    short:
      "Surface, Water, and Subterranean Cartographers reveal all the surface, water, and subterranean tiles, respectively. All maps cost 10000 G.",
    categories: ["Mobility / Intel"],
    mapLimit: "Unlimited",
    rmgValue: "10000 (surface) / 7500 (subterranean) / 5000 (water)",
    inDepth:
      "Tower reveals surface (except water); Water reveals water tiles; Stalagmite reveals subterranean (except water). In HotA, all cost 10000 G."
  },
  {
    id: "churchyard",
    name: "Churchyard",
    short:
      "Upon defeating 90 Zombies, rewards the Hero with 2500 G and 1800 XP.",
    categories: ["Creature Banks", "Hero Strength", "Economy"],
    mapLimit: "Unlimited",
    rmgValue: "1500",
    guards: "90 Zombies",
    rewards: "2500 G; 1800 XP",
    inDepth:
      "When visited after the guards have been defeated decreases the hero's morale by 1 for the next battle."
  },
  {
    id: "colosseum-of-the-magi",
    name: "Colosseum of the Magi",
    short:
      "Upon visiting, Heroes can choose a one time permanent +2 increase to Spell Power or Knowledge.",
    categories: ["Hero Strength"],
    mapLimit: "32",
    rmgValue: "3000"
  },
  {
    id: "corpse",
    name: "Corpse",
    short:
      "The first Hero to visit a corpse has 80% of finding nothing, and 20% of finding a m Artifact.",
    categories: ["Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "500",
    inDepth:
      "If the Hero does not have free space and backpack is full, he will receive 1000 G."
  },
  {
    id: "cover-of-darkness",
    name: "Cover of Darkness",
    short:
      "When visited, creates a 20 tiles radius shroud of darkness on the map for non-allied players to the visiting Hero.",
    categories: ["Mobility / Intel"],
    mapLimit: "32",
    rmgValue: "500",
    inDepth:
      "A Tower Town with a Lookout Tower can partially cancel the effect; Skyship does not."
  },
  {
    id: "creature-dwelling",
    name: "Creature Dwelling",
    short:
      "Visiting Heroes can hire one type of creature; once flagged, the amount increases every first day of the week by the dwelling’s base growth. Level 5+ are guarded.",
    categories: ["Army Strength"],
    mapLimit: "144",
    rmgValue: "Various",
    inDepth:
      "Flagged dwelling increases same-creature growth by +1 in owned Towns with that dwelling built. Level 5/6/7 guards: 9/6/3 non-upgraded units (Pyre guarded by 6 Firebirds). If defeated by one color, another enemy visiting same week won’t fight again.",
    notes: "TODO: add specific detailed info"
  },
  {
    id: "crypt",
    name: "Crypt",
    short:
      "Upon defeating 20-40 Walking Deads, 20-40 Wights, and 10-20 Vampires, rewards the Hero with a m Artifact, 2500-5000 G, and 750-900 XP.",
    categories: ["Creature Banks", "Economy", "Hero Strength"],
    mapLimit: "Unlimited",
    rmgValue: "1000",
    levels: [
      { level: 1, chance: 25, guards: "20 Walking Dead", rewards: "1500 G", xp: "480" },
      { level: 2, chance: 25, guards: "25 Walking Dead, 5 Wights", rewards: "2000 G", xp: "540" },
      { level: 3, chance: 25, guards: "20 Walking Dead, 20 Wights, 10 Vampires", rewards: "t, 2500 G", xp: "750" },
      { level: 4, chance: 25, guards: "40 Walking Dead, 20 Wights, 10 Vampires", rewards: "t, 5000 G", xp: "900" }
    ],
    notes: "Visiting after cleared: -1 morale for next battle."
  },
  {
    id: "crystal-cavern",
    name: "Crystal Cavern",
    short:
      "Produces +1 C / day starting on the day after being flagged by a Hero. Up to 7 stacks of units can be left inside as guards.",
    categories: ["Economy"],
    mapLimit: "144 (all Mines and Lighthouses)",
    rmgValue: "3500"
  },
  {
    id: "cyclops-stockpile",
    name: "Cyclops Stockpile",
    short:
      "Upon defeating 20-50 Cyclops, rewards the Hero with 4-10 W, O, M, S, Gm, and C, and 1400-3500 XP.",
    categories: ["Creature Banks", "Hero Strength", "Economy"],
    mapLimit: "Unlimited",
    rmgValue: "3000",
    levels: [
      { level: 1, chance: 25, guards: "20 Cyclops", rewards: "4 W+O+M+S+Gm+C", xp: "1400" },
      { level: 2, chance: 25, guards: "30 Cyclops", rewards: "6 W+O+M+S+Gm+C", xp: "2100" },
      { level: 3, chance: 25, guards: "40 Cyclops", rewards: "8 W+O+M+S+Gm+C", xp: "2800" },
      { level: 4, chance: 25, guards: "50 Cyclops", rewards: "10 W+O+M+S+Gm+C", xp: "3500" }
    ],
    notes: "50% probability for 1/5 of the guards to be Cyclops Kings."
  }

  // NOTE: D–W entries are prepared the same way and should be appended here.
];
