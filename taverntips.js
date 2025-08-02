// Contains data for the Tavern Tips section, starting with Keybinds.
const tavernTipsData = {
    keybinds: {
        "Combat Screen": [
            { key: "A", action: "Autocombat." },
            { key: "C", action: "Opens the Spellbook.<br><i>(Inside spellbook: A = Adventure Spells, C = Combat Spells, Arrow Keys = Flip Pages, ESC/Enter = Exit)</i>" },
            { key: "D / Spacebar", action: "Defend." },
            { key: "F", action: "Use a creature's spell (e.g., Faerie Dragons)." },
            { key: "G", action: "Attack (for Gogs and Liches) or use a creature spell." },
            { key: "H", action: "Opens the Combat Log." },
            { key: "L", action: "Load game." },
            { key: "O", action: "Opens combat options." },
            { key: "Q", action: "Engage in combat with Quick Combat enabled." },
            { key: "R", action: "Retreat." },
            { key: "S", action: "Surrender." },
            { key: "T", action: "Show current troop information." },
            { key: "W", action: "Wait." },
            { key: "Z", action: "Toggle the turn order bar on or off." },
            { key: "F5", action: "Toggles the toolbar for grid and other tools." },
            { key: "F6", action: "Toggles the hex grid display." },
            { key: "F7", action: "Toggles the mouse shadow display." },
            { key: "F8", action: "Toggles the movement shadow display." },
            { key: "Up/Down Arrows", action: "Scrolls through combat messages." },
            { key: "CTRL + Mouse-over", action: "See the creature's general movement range." },
            { key: "SHIFT + Mouse-over", action: "See the creature's exact movement range, calculating for obstacles." },
            { key: "ALT", action: "Switch modes for applicable creatures (e.g., melee vs. ranged)." }
        ],
        "Adventure Screen": [
            { key: "E", action: "End turn." },
            { key: "G", action: "Opens the Thieves' Guild screen." },
            { key: "H", action: "Select the next hero." },
            { key: "K", action: "Kingdom Overview." },
            { key: "M", action: "Move the selected hero along their planned route." },
            { key: "Q", action: "Quest Log." },
            { key: "R", action: "Shows the Dimension Door range on the screen." },
            { key: "T", action: "Select the next town." },
            { key: "W", action: "Wake a sleeping hero." },
            { key: "Z", action: "Put the current hero to sleep." },
            { key: "Enter", action: "Open details for the selected hero or castle." },
            { key: "Spacebar", action: "Re-visit the tile the hero is currently on." },
            { key: "1 or 2", action: "Select options in message windows (e.g., Treasure Chests)." },
            { key: "SHIFT + Left Click", action: "Make the clicked hero the active one." },
            { key: "ALT + Left Click", action: "Moves the selected hero or town to the top of the list." },
            { key: "Hold ALT + Mouse-over", action: "See the movement points required to reach that tile." },
            { key: "ALT + SHIFT + Left Click", action: "Dismiss hero." }
        ],
        "Hero Trade Screen": [
            { key: "Q", action: "Swap both armies and artifacts between the two heroes." },
            { key: "K / F11", action: "Swap only artifacts." },
            { key: "Z / F10", action: "Swap only armies." },
            { key: "CTRL + Left Click", action: "Creates a single stack of 1 creature or removes a stack of 1." },
            { key: "CTRL + SHIFT + Left Click", action: "Fills all empty army slots with single stacks of that creature." },
            { key: "CTRL + ALT + Left Click", action: "Moves the entire army to the other hero or into the castle garrison." },
            { key: "ALT + Left Click", action: "Merges all stacks of the same creature type into the clicked stack." },
            { key: "SHIFT + Left Click", action: "Splits a creature stack into even stacks." },
            { key: "SHIFT + ALT + Left Click", action: "Dismisses a creature stack." },
            { key: "SHIFT + ALT + CTRL + Left Click", action: "Moves the entire army except for one of the clicked creatures." }
        ],
        "Hero Management Screen": [
            { key: "1-9", action: "Equip an artifact preset." },
            { key: "CTRL + 1-9", action: "Create an artifact equipment preset." },
            { key: "SHIFT + Click on slot", action: "Shows available items from the backpack for that specific artifact slot." }
        ],
        "Town Screen": [
            { key: "B", action: "Marketplace." },
            { key: "D", action: "After clicking a unit, select a slot to divide the stack into." },
            { key: "G", action: "Mage Guild." },
            { key: "S / Spacebar", action: "Switch between heroes in the town." },
            { key: "T", action: "Tavern." },
            { key: "Z / F10", action: "Switch between the visiting hero and garrison hero." },
            { key: "Up/Down Arrows", action: "Cycle to the previous or next town." },
            { key: "Left Click Castle Icon", action: "Opens the global creature recruitment menu." },
            { key: "CTRL + Click Castle Icon", action: "Instantly buys all available creatures from all dwellings." },
            { key: "ALT + Click Castle Icon", action: "Instantly buys all available un-upgraded creatures." },
            { key: "CTRL + Click Portrait", action: "Instantly buys all available creatures of that specific type." },
            { key: "ALT + Click Portrait", action: "Instantly buys all available un-upgraded creatures of that type." }
        ]
    }
};
