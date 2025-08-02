// Contains all data for the Grail.
const grailData = {
    general: {
        gold: "+5000 Gold per day.",
        growth: "+50% to the weekly growth of all creatures in that town, rounded down. This bonus is applied after other modifiers like external dwellings or the Statue of Legion artifact."
    },
    factions: [
        {
            name: "Castle",
            building: "The Colossus",
            effect: "Increases the Morale of all of the owner's heroes by 2 - does not affect allied heroes."
        },
        {
            name: "Rampart",
            building: "The Spirit Guardian",
            effect: "Increases the Luck of all of the owner's heroes by 2."
        },
        {
            name: "Tower",
            building: "The Skyship",
            effect: "Reveals the entire world map for the owner. This does not negate the effects of an enemy's Cover of Darkness artifact. Increases the spell points of a hero defending the town by 150. Spell points for the defending hero are fully replenished after a battle."
        },
        {
            name: "Inferno",
            building: "The Deity of Fire",
            effect: "Makes every week \"The Week of the Imp,\" which adds +15 to the growth of Imps/Familiars. This special week does not affect external Imp dwellings."
        },
        {
            name: "Necropolis",
            building: "The Soul Prison",
            effect: "Increases the Necromancy skill of all the owner's heroes by 20% - does not affect allied heroes."
        },
        {
            name: "Dungeon",
            building: "The Guardian of Earth",
            effect: "Increases the Spell Power of a hero defending the town by 12."
        },
        {
            name: "Stronghold",
            building: "The Warlords’ Monument",
            effect: "Increases the Attack of a hero defending the town by 20."
        },
        {
            name: "Fortress",
            building: "The Carnivorous Plant",
            effect: "Increases the Attack and Defense of a hero defending the town by 10."
        },
        {
            name: "Conflux",
            building: "The Aurora Borealis",
            effect: "Fills the town's Mage Guild with every spell available to the Conflux faction, up to the guild's currently built level."
        },
        {
            name: "Cove",
            building: "The Lodestar",
            effect: "Makes any terrain on the map native terrain for all Cove units (both allied and enemy). This effect provides: No movement penalty, +1 Attack, +1 Defense, and +1 Speed, and the ability to see and ignore Land Mines and see Quicksand."
        },
        {
            name: "Factory",
            building: "The Lightning Rod",
            effect: "Strikes all enemy creatures with lightning during the first round of every battle. The damage is based on the number of buildings constructed in the town. This effect occurs on the first turn of the player who controls the town, not necessarily the first turn of combat itself. It does not harm creatures immune to the Chain Lightning spell and is reduced by spell damage reduction abilities. The damage is increased by the Sorcery skill and the Orb of the Firmament artifact."
        }
    ]
};
