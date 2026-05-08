# Diablo 4 Affix Search & Roll Target Planner

A fast, browser-based tool for searching **Diablo 4 affixes**, planning your **Roll Target** before using the Transfigure system, and identifying which **Tuning Prism** to use for each mod.

**[Live Tool →](https://yourusername.github.io/diablo4-affixes)** _(replace with your GitHub Pages URL)_

---

## What it does

When you're sitting at the Jeweller or Alchemist about to Transfigure an item, you need to know:

1. Which affixes exist and what they're called
2. Which **Tuning Prism** currency targets that affix
3. Which affixes you actually want — your **Roll Target**

This tool lets you search and browse every affix in the game, check off the ones you want, then toggle **Roll Target** mode to see only your picks at a glance — so you know exactly what you're aiming for before you spend your currency.

---

## Features

- **Full affix list** — all Offensive, Defensive, and Utility mods in one place
- **Instant search** — filter by name across all categories
- **Category pills** — jump straight to Offensive, Defensive, or Utility
- **Class filter** — show only mods relevant to your class (Barbarian, Druid, Necromancer, Rogue, Sorcerer, Spiritborn, Paladin, Warlock)
- **Roll Target** — check off the affixes you want, then toggle to see only those; your picks are saved between sessions via localStorage
- **Tuning Prism colour coding** — every affix is badged with the prism(s) that can target it (see table below)
- **Copy button** — copy the full affix text to clipboard
- **No install** — single HTML file, runs entirely in the browser

---

## Tuning Prism Reference

| Badge              | Prism                    | Targets                                                                                                 |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| 🟠 **Aggressive**  | Aggressive Tuning Prism  | Offensive mods — weapon damage, attack speed, crit, damage multipliers                                  |
| 🔵 **Protector's** | Protector's Tuning Prism | Defensive mods — max life, armour, damage reduction, dodge, **Resistance to All Elements**              |
| 🟣 **Chromatic**   | Chromatic Tuning Prism   | Individual elemental resistances only (Fire, Cold, Lightning, Poison, Shadow, Physical)                 |
| 🟡 **Pragmatic**   | Pragmatic Tuning Prism   | Utility — cooldown reduction, lucky hit chance, potion capacity, healing received, impairment reduction |
| 🟢 **Adept's**     | Adept's Tuning Prism     | Skill ranks and core stats                                                                              |
| 🩵 **Resourceful** | Resourceful Tuning Prism | Resource generation and max resource                                                                    |

> **Dual-badge warning:** Some affixes (e.g. Strength, Dexterity, individual resistances) appear in two prism pools. Using either prism can accidentally affect them — be careful when rolling an item that has one of these alongside the stat you actually want to target.

> **Resistance to All Elements** lives in the _Defensive_ category but uses the **Protector's** prism — not Chromatic.

---

## How to Use

1. **Search** — type any affix name in the search box to filter instantly
2. **Browse by category** — click a pill (Offensive / Defensive / Utility) to focus that section
3. **Filter by class** — use the class dropdown to hide mods your class can't roll _(note: class assignments are a work in progress and may be incomplete)_
4. **Check your mods** — tick the checkbox on any affix to add it to your Roll Target
5. **Roll Target mode** — click **Roll Target** in the footer to show only your checked mods; click again to return to the full list
6. **Clear Picks** — resets all selections and exits Roll Target mode
7. **Copy** — hover any row and click Copy to grab the full affix text for pasting elsewhere

Your Roll Target selections are saved in your browser's localStorage, so they persist between visits.

---

## Running Locally

No build step needed. Just open `index.html` in any modern browser.

```
git clone https://theveug.github.io/d4-s13-crafting-tool/
cd diablo4-affixes
# open index.html in your browser
```

---

## Notes & Caveats

- Prism information is based on Season 13 data. Check patch notes if things change after a major update.
- The class filter is community-sourced and **incomplete** — some skill mods may be missing or assigned to the wrong class. If in doubt, keep the filter on _All Classes_.
- Barrier Generation and Fortify Generation are labelled as Pragmatic prism targets but are currently reported as bugged/untargetable in Transfigure.

---

## Contributing

If you spot a wrong class assignment, a missing affix, or an outdated prism mapping, feel free to open an issue or pull request. The affix data lives in the `AFFIXES` array in `index.html` and the class mapping is in `CLASS_SKILLS` just above `GAME_CLASSES`.

---

_Not affiliated with Blizzard Entertainment. Diablo® is a registered trademark of Blizzard Entertainment, Inc._
