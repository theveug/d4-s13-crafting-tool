const AFFIXES = [
  {
    "id": 1,
    "category": "Offensive",
    "affix": "Weapon Damage",
    "format": "+[# - #]",
    "text": "+[# - #] Weapon Damage",
    "classes": ["All"]
  },
  {
    "id": 2,
    "category": "Offensive",
    "affix": "Strength",
    "format": "+[# - #]",
    "text": "+[# - #] Strength",
    "classes": ["All"]
  },
  {
    "id": 3,
    "category": "Offensive",
    "affix": "Intelligence",
    "format": "+[# - #]",
    "text": "+[# - #] Intelligence",
    "classes": ["All"]
  },
  {
    "id": 4,
    "category": "Offensive",
    "affix": "Willpower",
    "format": "+[# - #]",
    "text": "+[# - #] Willpower",
    "classes": ["All"]
  },
  {
    "id": 5,
    "category": "Offensive",
    "affix": "Dexterity",
    "format": "+[# - #]",
    "text": "+[# - #] Dexterity",
    "classes": ["All"]
  },
  {
    "id": 6,
    "category": "Offensive",
    "affix": "Thorns",
    "format": "+[# - #]",
    "text": "+[# - #] Thorns",
    "classes": ["All"]
  },
  {
    "id": 7,
    "category": "Offensive",
    "affix": "All Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% All Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 8,
    "category": "Offensive",
    "affix": "Attack Speed",
    "format": "+[# - #]%",
    "text": "+[# - #]% Attack Speed",
    "classes": ["All"]
  },
  {
    "id": 9,
    "category": "Offensive",
    "affix": "Critical Strike Chance",
    "format": "+[# - #]%",
    "text": "+[# - #]% Critical Strike Chance",
    "classes": ["All"]
  },
  {
    "id": 10,
    "category": "Offensive",
    "affix": "Critical Strike Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Critical Strike Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 11,
    "category": "Offensive",
    "affix": "Vulnerable Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Vulnerable Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 12,
    "category": "Offensive",
    "affix": "Damage Over Time Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Damage Over Time Multiplier",
    "classes": ["All"]
  },
  {
    "id": 13,
    "category": "Offensive",
    "affix": "Cold Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Cold Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 14,
    "category": "Offensive",
    "affix": "Fire Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Fire Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 15,
    "category": "Offensive",
    "affix": "Holy Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Holy Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 16,
    "category": "Offensive",
    "affix": "Lightning Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Lightning Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 17,
    "category": "Offensive",
    "affix": "Physical Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Physical Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 18,
    "category": "Offensive",
    "affix": "Poison Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Poison Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 19,
    "category": "Offensive",
    "affix": "Shadow Damage Multiplier",
    "format": "x[# - #]%",
    "text": "x[# - #]% Shadow Damage Multiplier",
    "classes": ["All"]
  },
  {
    "id": 20,
    "category": "Defensive",
    "affix": "Maximum Life",
    "format": "+[# - #]",
    "text": "+[# - #] Maximum Life",
    "classes": ["All"]
  },
  {
    "id": 21,
    "category": "Defensive",
    "affix": "Life Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Life Regeneration",
    "classes": ["All"]
  },
  {
    "id": 22,
    "category": "Defensive",
    "affix": "Life On Hit",
    "format": "+[# - #]",
    "text": "+[# - #] Life On Hit",
    "classes": ["All"]
  },
  {
    "id": 23,
    "category": "Defensive",
    "affix": "Life on Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Life on Kill",
    "classes": ["All"]
  },
  {
    "id": 24,
    "category": "Defensive",
    "affix": "Armor",
    "format": "+[# - #]",
    "text": "+[# - #] Armor",
    "classes": ["All"]
  },
  {
    "id": 25,
    "category": "Defensive",
    "affix": "Resistance to All Elements",
    "format": "+[# - #]",
    "text": "+[# - #] Resistance to All Elements",
    "classes": ["All"]
  },
  {
    "id": 26,
    "category": "Defensive",
    "affix": "Fire Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Fire Resistance",
    "classes": ["All"]
  },
  {
    "id": 27,
    "category": "Defensive",
    "affix": "Cold Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Cold Resistance",
    "classes": ["All"]
  },
  {
    "id": 28,
    "category": "Defensive",
    "affix": "Lightning Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Lightning Resistance",
    "classes": ["All"]
  },
  {
    "id": 29,
    "category": "Defensive",
    "affix": "Poison Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Poison Resistance",
    "classes": ["All"]
  },
  {
    "id": 30,
    "category": "Defensive",
    "affix": "Shadow Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Shadow Resistance",
    "classes": ["All"]
  },
  {
    "id": 31,
    "category": "Defensive",
    "affix": "Physical Resistance",
    "format": "+[# - #]",
    "text": "+[# - #] Physical Resistance",
    "classes": ["All"]
  },
  {
    "id": 32,
    "category": "Defensive",
    "affix": "Damage Reduction",
    "format": "[# - #]%",
    "text": "[# - #]% Damage Reduction",
    "classes": ["All"]
  },
  {
    "id": 33,
    "category": "Defensive",
    "affix": "Dodge Chance",
    "format": "[# - #]%",
    "text": "[# - #]% Dodge Chance",
    "classes": ["All"]
  },
  {
    "id": 34,
    "category": "Utility",
    "affix": "Potion Capacity",
    "format": "+[# - #]",
    "text": "+[# - #] Potion Capacity",
    "classes": ["All"]
  },
  {
    "id": 35,
    "category": "Utility",
    "affix": "Lucky Hit Chance",
    "format": "+[# - #]%",
    "text": "+[# - #]% Lucky Hit Chance",
    "classes": ["All"]
  },
  {
    "id": 36,
    "category": "Utility",
    "affix": "Healing Received",
    "format": "+[# - #]%",
    "text": "+[# - #]% Healing Received",
    "classes": ["All"]
  },
  {
    "id": 37,
    "category": "Utility",
    "affix": "Barrier Generation",
    "format": "+[# - #]%",
    "text": "+[# - #]% Barrier Generation",
    "classes": ["All"]
  },
  {
    "id": 38,
    "category": "Utility",
    "affix": "Fortify Generation",
    "format": "+[# - #]%",
    "text": "+[# - #]% Fortify Generation",
    "classes": ["All"]
  },
  {
    "id": 39,
    "category": "Utility",
    "affix": "Cooldown Reduction",
    "format": "[# - #]%",
    "text": "[# - #]% Cooldown Reduction",
    "classes": ["All"]
  },
  {
    "id": 40,
    "category": "Utility",
    "affix": "Impairment Reduction",
    "format": "[# - #]%",
    "text": "[# - #]% Impairment Reduction",
    "classes": ["All"]
  },
  {
    "id": 41,
    "category": "Utility",
    "affix": "Weapon Mastery Skills",
    "format": "+[#] to",
    "text": "+[#] to Weapon Mastery Skills",
    "classes": ["All"]
  },
  {
    "id": 42,
    "category": "Utility",
    "affix": "Companion Skills",
    "format": "+[#] to",
    "text": "+[#] to Companion Skills",
    "classes": ["All"]
  },
  {
    "id": 43,
    "category": "Utility",
    "affix": "Wrath Skills",
    "format": "+[#] to",
    "text": "+[#] to Wrath Skills",
    "classes": ["All"]
  },
  {
    "id": 44,
    "category": "Utility",
    "affix": "Basic Skills",
    "format": "+[#] to",
    "text": "+[#] to Basic Skills",
    "classes": ["All"]
  },
  {
    "id": 45,
    "category": "Utility",
    "affix": "Core Skills",
    "format": "+[#] to",
    "text": "+[#] to Core Skills",
    "classes": ["All"]
  },
  {
    "id": 46,
    "category": "Utility",
    "affix": "Defensive Skills",
    "format": "+[#] to",
    "text": "+[#] to Defensive Skills",
    "classes": ["All"]
  },
  {
    "id": 47,
    "category": "Utility",
    "affix": "Corpse Skills",
    "format": "+[#] to",
    "text": "+[#] to Corpse Skills",
    "classes": ["All"]
  },
  {
    "id": 48,
    "category": "Utility",
    "affix": "Curse Skills",
    "format": "+[#] to",
    "text": "+[#] to Curse Skills",
    "classes": ["All"]
  },
  {
    "id": 49,
    "category": "Utility",
    "affix": "Macabre Skills",
    "format": "+[#] to",
    "text": "+[#] to Macabre Skills",
    "classes": ["All"]
  },
  {
    "id": 50,
    "category": "Utility",
    "affix": "Agility Skills",
    "format": "+[#] to",
    "text": "+[#] to Agility Skills",
    "classes": ["All"]
  },
  {
    "id": 51,
    "category": "Utility",
    "affix": "Imbuement Skills",
    "format": "+[#] to",
    "text": "+[#] to Imbuement Skills",
    "classes": ["All"]
  },
  {
    "id": 52,
    "category": "Utility",
    "affix": "Subterfuge Skills",
    "format": "+[#] to",
    "text": "+[#] to Subterfuge Skills",
    "classes": ["All"]
  },
  {
    "id": 53,
    "category": "Utility",
    "affix": "Conjuration Skills",
    "format": "+[#] to",
    "text": "+[#] to Conjuration Skills",
    "classes": ["All"]
  },
  {
    "id": 54,
    "category": "Utility",
    "affix": "Mastery Skills",
    "format": "+[#] to",
    "text": "+[#] to Mastery Skills",
    "classes": ["All"]
  },
  {
    "id": 55,
    "category": "Utility",
    "affix": "Ancient Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ancient Skills",
    "classes": ["All"]
  },
  {
    "id": 56,
    "category": "Utility",
    "affix": "Dust Devil Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dust Devil Skills",
    "classes": ["All"]
  },
  {
    "id": 57,
    "category": "Utility",
    "affix": "Earthquake Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Earthquake Skills",
    "classes": ["All"]
  },
  {
    "id": 58,
    "category": "Utility",
    "affix": "Iron Shrapnel Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Iron Shrapnel Skills",
    "classes": ["All"]
  },
  {
    "id": 59,
    "category": "Utility",
    "affix": "Arrow Storm Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Arrow Storm Skills",
    "classes": ["All"]
  },
  {
    "id": 60,
    "category": "Utility",
    "affix": "Grenade Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Grenade Skills",
    "classes": ["All"]
  },
  {
    "id": 61,
    "category": "Utility",
    "affix": "Shade Skills",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shade Skills",
    "classes": ["All"]
  },
  {
    "id": 62,
    "category": "Utility",
    "affix": "Human Skills",
    "format": "+[#] to",
    "text": "+[#] to Human Skills",
    "classes": ["All"]
  },
  {
    "id": 63,
    "category": "Utility",
    "affix": "Versatile Skills",
    "format": "+[#] to",
    "text": "+[#] to Versatile Skills",
    "classes": ["All"]
  },
  {
    "id": 64,
    "category": "Utility",
    "affix": "Bash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bash",
    "classes": ["All"]
  },
  {
    "id": 65,
    "category": "Utility",
    "affix": "Flay",
    "format": "+[# - #] to",
    "text": "+[# - #] to Flay",
    "classes": ["All"]
  },
  {
    "id": 66,
    "category": "Utility",
    "affix": "Frenzy",
    "format": "+[# - #] to",
    "text": "+[# - #] to Frenzy",
    "classes": ["All"]
  },
  {
    "id": 67,
    "category": "Utility",
    "affix": "Lunging Strike",
    "format": "+[# - #] to",
    "text": "+[# - #] to Lunging Strike",
    "classes": ["All"]
  },
  {
    "id": 68,
    "category": "Utility",
    "affix": "Double Swing",
    "format": "+[# - #] to",
    "text": "+[# - #] to Double Swing",
    "classes": ["All"]
  },
  {
    "id": 69,
    "category": "Utility",
    "affix": "Hammer of the Ancients",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hammer of the Ancients",
    "classes": ["All"]
  },
  {
    "id": 70,
    "category": "Utility",
    "affix": "Rend",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rend",
    "classes": ["All"]
  },
  {
    "id": 71,
    "category": "Utility",
    "affix": "Upheaval",
    "format": "+[# - #] to",
    "text": "+[# - #] to Upheaval",
    "classes": ["All"]
  },
  {
    "id": 72,
    "category": "Utility",
    "affix": "Whirlwind",
    "format": "+[# - #] to",
    "text": "+[# - #] to Whirlwind",
    "classes": ["All"]
  },
  {
    "id": 73,
    "category": "Utility",
    "affix": "Challenging Shout",
    "format": "+[# - #] to",
    "text": "+[# - #] to Challenging Shout",
    "classes": ["All"]
  },
  {
    "id": 74,
    "category": "Utility",
    "affix": "Charge",
    "format": "+[# - #] to",
    "text": "+[# - #] to Charge",
    "classes": ["All"]
  },
  {
    "id": 75,
    "category": "Utility",
    "affix": "Death Blow",
    "format": "+[# - #] to",
    "text": "+[# - #] to Death Blow",
    "classes": ["All"]
  },
  {
    "id": 76,
    "category": "Utility",
    "affix": "Ground Stomp",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ground Stomp",
    "classes": ["All"]
  },
  {
    "id": 77,
    "category": "Utility",
    "affix": "Iron Skin",
    "format": "+[# - #] to",
    "text": "+[# - #] to Iron Skin",
    "classes": ["All"]
  },
  {
    "id": 78,
    "category": "Utility",
    "affix": "Kick",
    "format": "+[# - #] to",
    "text": "+[# - #] to Kick",
    "classes": ["All"]
  },
  {
    "id": 79,
    "category": "Utility",
    "affix": "Leap",
    "format": "+[# - #] to",
    "text": "+[# - #] to Leap",
    "classes": ["All"]
  },
  {
    "id": 80,
    "category": "Utility",
    "affix": "Rallying Cry",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rallying Cry",
    "classes": ["All"]
  },
  {
    "id": 81,
    "category": "Utility",
    "affix": "Rupture",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rupture",
    "classes": ["All"]
  },
  {
    "id": 82,
    "category": "Utility",
    "affix": "Steel Grasp",
    "format": "+[# - #] to",
    "text": "+[# - #] to Steel Grasp",
    "classes": ["All"]
  },
  {
    "id": 83,
    "category": "Utility",
    "affix": "War Cry",
    "format": "+[# - #] to",
    "text": "+[# - #] to War Cry",
    "classes": ["All"]
  },
  {
    "id": 84,
    "category": "Utility",
    "affix": "Claw",
    "format": "+[# - #] to",
    "text": "+[# - #] to Claw",
    "classes": ["All"]
  },
  {
    "id": 85,
    "category": "Utility",
    "affix": "Earth Spike",
    "format": "+[# - #] to",
    "text": "+[# - #] to Earth Spike",
    "classes": ["All"]
  },
  {
    "id": 86,
    "category": "Utility",
    "affix": "Maul",
    "format": "+[# - #] to",
    "text": "+[# - #] to Maul",
    "classes": ["All"]
  },
  {
    "id": 87,
    "category": "Utility",
    "affix": "Storm Strike",
    "format": "+[# - #] to",
    "text": "+[# - #] to Storm Strike",
    "classes": ["All"]
  },
  {
    "id": 88,
    "category": "Utility",
    "affix": "Wind Shear",
    "format": "+[# - #] to",
    "text": "+[# - #] to Wind Shear",
    "classes": ["All"]
  },
  {
    "id": 89,
    "category": "Utility",
    "affix": "Landslide",
    "format": "+[# - #] to",
    "text": "+[# - #] to Landslide",
    "classes": ["All"]
  },
  {
    "id": 90,
    "category": "Utility",
    "affix": "Lightning Storm",
    "format": "+[# - #] to",
    "text": "+[# - #] to Lightning Storm",
    "classes": ["All"]
  },
  {
    "id": 91,
    "category": "Utility",
    "affix": "Pulverize",
    "format": "+[# - #] to",
    "text": "+[# - #] to Pulverize",
    "classes": ["All"]
  },
  {
    "id": 92,
    "category": "Utility",
    "affix": "Shred",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shred",
    "classes": ["All"]
  },
  {
    "id": 93,
    "category": "Utility",
    "affix": "Tornado",
    "format": "+[# - #] to",
    "text": "+[# - #] to Tornado",
    "classes": ["All"]
  },
  {
    "id": 94,
    "category": "Utility",
    "affix": "Blood Howl",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blood Howl",
    "classes": ["All"]
  },
  {
    "id": 95,
    "category": "Utility",
    "affix": "Boulder",
    "format": "+[# - #] to",
    "text": "+[# - #] to Boulder",
    "classes": ["All"]
  },
  {
    "id": 96,
    "category": "Utility",
    "affix": "Cyclone Armor",
    "format": "+[# - #] to",
    "text": "+[# - #] to Cyclone Armor",
    "classes": ["All"]
  },
  {
    "id": 97,
    "category": "Utility",
    "affix": "Debilitating Roar",
    "format": "+[# - #] to",
    "text": "+[# - #] to Debilitating Roar",
    "classes": ["All"]
  },
  {
    "id": 98,
    "category": "Utility",
    "affix": "Earthen Bulwark",
    "format": "+[# - #] to",
    "text": "+[# - #] to Earthen Bulwark",
    "classes": ["All"]
  },
  {
    "id": 99,
    "category": "Utility",
    "affix": "Hurricane",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hurricane",
    "classes": ["All"]
  },
  {
    "id": 100,
    "category": "Utility",
    "affix": "Rabies",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rabies",
    "classes": ["All"]
  },
  {
    "id": 101,
    "category": "Utility",
    "affix": "Ravens",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ravens",
    "classes": ["All"]
  },
  {
    "id": 102,
    "category": "Utility",
    "affix": "Trample",
    "format": "+[# - #] to",
    "text": "+[# - #] to Trample",
    "classes": ["All"]
  },
  {
    "id": 103,
    "category": "Utility",
    "affix": "Poison Creeper",
    "format": "+[# - #] to",
    "text": "+[# - #] to Poison Creeper",
    "classes": ["All"]
  },
  {
    "id": 104,
    "category": "Utility",
    "affix": "Wolves",
    "format": "+[# - #] to",
    "text": "+[# - #] to Wolves",
    "classes": ["All"]
  },
  {
    "id": 105,
    "category": "Utility",
    "affix": "Bone Splinters",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bone Splinters",
    "classes": ["All"]
  },
  {
    "id": 106,
    "category": "Utility",
    "affix": "Decompose",
    "format": "+[# - #] to",
    "text": "+[# - #] to Decompose",
    "classes": ["All"]
  },
  {
    "id": 107,
    "category": "Utility",
    "affix": "Hemorrhage",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hemorrhage",
    "classes": ["All"]
  },
  {
    "id": 108,
    "category": "Utility",
    "affix": "Reap",
    "format": "+[# - #] to",
    "text": "+[# - #] to Reap",
    "classes": ["All"]
  },
  {
    "id": 109,
    "category": "Utility",
    "affix": "Blight",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blight",
    "classes": ["All"]
  },
  {
    "id": 110,
    "category": "Utility",
    "affix": "Blood Lance",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blood Lance",
    "classes": ["All"]
  },
  {
    "id": 111,
    "category": "Utility",
    "affix": "Blood Surge",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blood Surge",
    "classes": ["All"]
  },
  {
    "id": 112,
    "category": "Utility",
    "affix": "Bone Spear",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bone Spear",
    "classes": ["All"]
  },
  {
    "id": 113,
    "category": "Utility",
    "affix": "Sever",
    "format": "+[# - #] to",
    "text": "+[# - #] to Sever",
    "classes": ["All"]
  },
  {
    "id": 114,
    "category": "Utility",
    "affix": "Blood Mist",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blood Mist",
    "classes": ["All"]
  },
  {
    "id": 115,
    "category": "Utility",
    "affix": "Bone Prison",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bone Prison",
    "classes": ["All"]
  },
  {
    "id": 116,
    "category": "Utility",
    "affix": "Bone Spirit",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bone Spirit",
    "classes": ["All"]
  },
  {
    "id": 117,
    "category": "Utility",
    "affix": "Corpse Explosion",
    "format": "+[# - #] to",
    "text": "+[# - #] to Corpse Explosion",
    "classes": ["All"]
  },
  {
    "id": 118,
    "category": "Utility",
    "affix": "Corpse Tendrils",
    "format": "+[# - #] to",
    "text": "+[# - #] to Corpse Tendrils",
    "classes": ["All"]
  },
  {
    "id": 119,
    "category": "Utility",
    "affix": "Decrepify",
    "format": "+[# - #] to",
    "text": "+[# - #] to Decrepify",
    "classes": ["All"]
  },
  {
    "id": 120,
    "category": "Utility",
    "affix": "Iron Maiden",
    "format": "+[# - #] to",
    "text": "+[# - #] to Iron Maiden",
    "classes": ["All"]
  },
  {
    "id": 121,
    "category": "Utility",
    "affix": "Blade Shift",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blade Shift",
    "classes": ["All"]
  },
  {
    "id": 122,
    "category": "Utility",
    "affix": "Forceful Arrow",
    "format": "+[# - #] to",
    "text": "+[# - #] to Forceful Arrow",
    "classes": ["All"]
  },
  {
    "id": 123,
    "category": "Utility",
    "affix": "Heartseeker",
    "format": "+[# - #] to",
    "text": "+[# - #] to Heartseeker",
    "classes": ["All"]
  },
  {
    "id": 124,
    "category": "Utility",
    "affix": "Invigorating Strike",
    "format": "+[# - #] to",
    "text": "+[# - #] to Invigorating Strike",
    "classes": ["All"]
  },
  {
    "id": 125,
    "category": "Utility",
    "affix": "Puncture",
    "format": "+[# - #] to",
    "text": "+[# - #] to Puncture",
    "classes": ["All"]
  },
  {
    "id": 126,
    "category": "Utility",
    "affix": "Barrage",
    "format": "+[# - #] to",
    "text": "+[# - #] to Barrage",
    "classes": ["All"]
  },
  {
    "id": 127,
    "category": "Utility",
    "affix": "Flurry",
    "format": "+[# - #] to",
    "text": "+[# - #] to Flurry",
    "classes": ["All"]
  },
  {
    "id": 128,
    "category": "Utility",
    "affix": "Penetrating Shot",
    "format": "+[# - #] to",
    "text": "+[# - #] to Penetrating Shot",
    "classes": ["All"]
  },
  {
    "id": 129,
    "category": "Utility",
    "affix": "Rapid Fire",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rapid Fire",
    "classes": ["All"]
  },
  {
    "id": 130,
    "category": "Utility",
    "affix": "Twisting Blades",
    "format": "+[# - #] to",
    "text": "+[# - #] to Twisting Blades",
    "classes": ["All"]
  },
  {
    "id": 131,
    "category": "Utility",
    "affix": "Caltrops",
    "format": "+[# - #] to",
    "text": "+[# - #] to Caltrops",
    "classes": ["All"]
  },
  {
    "id": 132,
    "category": "Utility",
    "affix": "Cold Imbuement",
    "format": "+[# - #] to",
    "text": "+[# - #] to Cold Imbuement",
    "classes": ["All"]
  },
  {
    "id": 133,
    "category": "Utility",
    "affix": "Concealment",
    "format": "+[# - #] to",
    "text": "+[# - #] to Concealment",
    "classes": ["All"]
  },
  {
    "id": 134,
    "category": "Utility",
    "affix": "Dark Shroud",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dark Shroud",
    "classes": ["All"]
  },
  {
    "id": 135,
    "category": "Utility",
    "affix": "Dash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dash",
    "classes": ["All"]
  },
  {
    "id": 136,
    "category": "Utility",
    "affix": "Poison Imbuement",
    "format": "+[# - #] to",
    "text": "+[# - #] to Poison Imbuement",
    "classes": ["All"]
  },
  {
    "id": 137,
    "category": "Utility",
    "affix": "Poison Trap",
    "format": "+[# - #] to",
    "text": "+[# - #] to Poison Trap",
    "classes": ["All"]
  },
  {
    "id": 138,
    "category": "Utility",
    "affix": "Shadow Imbuement",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shadow Imbuement",
    "classes": ["All"]
  },
  {
    "id": 139,
    "category": "Utility",
    "affix": "Shadow Step",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shadow Step",
    "classes": ["All"]
  },
  {
    "id": 140,
    "category": "Utility",
    "affix": "Smoke Grenade",
    "format": "+[# - #] to",
    "text": "+[# - #] to Smoke Grenade",
    "classes": ["All"]
  },
  {
    "id": 141,
    "category": "Utility",
    "affix": "Spark",
    "format": "+[# - #] to",
    "text": "+[# - #] to Spark",
    "classes": ["All"]
  },
  {
    "id": 142,
    "category": "Utility",
    "affix": "Fire Bolt",
    "format": "+[# - #] to",
    "text": "+[# - #] to Fire Bolt",
    "classes": ["All"]
  },
  {
    "id": 143,
    "category": "Utility",
    "affix": "Frost Bolt",
    "format": "+[# - #] to",
    "text": "+[# - #] to Frost Bolt",
    "classes": ["All"]
  },
  {
    "id": 144,
    "category": "Utility",
    "affix": "Arc Lash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Arc Lash",
    "classes": ["All"]
  },
  {
    "id": 145,
    "category": "Utility",
    "affix": "Fireball",
    "format": "+[# - #] to",
    "text": "+[# - #] to Fireball",
    "classes": ["All"]
  },
  {
    "id": 146,
    "category": "Utility",
    "affix": "Ice Shards",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ice Shards",
    "classes": ["All"]
  },
  {
    "id": 147,
    "category": "Utility",
    "affix": "Chain Lightning",
    "format": "+[# - #] to",
    "text": "+[# - #] to Chain Lightning",
    "classes": ["All"]
  },
  {
    "id": 148,
    "category": "Utility",
    "affix": "Charged Bolts",
    "format": "+[# - #] to",
    "text": "+[# - #] to Charged Bolts",
    "classes": ["All"]
  },
  {
    "id": 149,
    "category": "Utility",
    "affix": "Incinerate",
    "format": "+[# - #] to",
    "text": "+[# - #] to Incinerate",
    "classes": ["All"]
  },
  {
    "id": 150,
    "category": "Utility",
    "affix": "Frozen Orb",
    "format": "+[# - #] to",
    "text": "+[# - #] to Frozen Orb",
    "classes": ["All"]
  },
  {
    "id": 151,
    "category": "Utility",
    "affix": "Ball Lightning",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ball Lightning",
    "classes": ["All"]
  },
  {
    "id": 152,
    "category": "Utility",
    "affix": "Blizzard",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blizzard",
    "classes": ["All"]
  },
  {
    "id": 153,
    "category": "Utility",
    "affix": "Firewall",
    "format": "+[# - #] to",
    "text": "+[# - #] to Firewall",
    "classes": ["All"]
  },
  {
    "id": 154,
    "category": "Utility",
    "affix": "Flame Shield",
    "format": "+[# - #] to",
    "text": "+[# - #] to Flame Shield",
    "classes": ["All"]
  },
  {
    "id": 155,
    "category": "Utility",
    "affix": "Frost Nova",
    "format": "+[# - #] to",
    "text": "+[# - #] to Frost Nova",
    "classes": ["All"]
  },
  {
    "id": 156,
    "category": "Utility",
    "affix": "Hydra",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hydra",
    "classes": ["All"]
  },
  {
    "id": 157,
    "category": "Utility",
    "affix": "Ice Armor",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ice Armor",
    "classes": ["All"]
  },
  {
    "id": 158,
    "category": "Utility",
    "affix": "Ice Blades",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ice Blades",
    "classes": ["All"]
  },
  {
    "id": 159,
    "category": "Utility",
    "affix": "Lightning Spear",
    "format": "+[# - #] to",
    "text": "+[# - #] to Lightning Spear",
    "classes": ["All"]
  },
  {
    "id": 160,
    "category": "Utility",
    "affix": "Meteor",
    "format": "+[# - #] to",
    "text": "+[# - #] to Meteor",
    "classes": ["All"]
  },
  {
    "id": 161,
    "category": "Utility",
    "affix": "Teleport",
    "format": "+[# - #] to",
    "text": "+[# - #] to Teleport",
    "classes": ["All"]
  },
  {
    "id": 162,
    "category": "Utility",
    "affix": "Brawling Skills",
    "format": "+[#] to",
    "text": "+[#] to Brawling Skills",
    "classes": ["All"]
  },
  {
    "id": 163,
    "category": "Utility",
    "affix": "Familiar",
    "format": "+[# - #] to",
    "text": "+[# - #] to Familiar",
    "classes": ["All"]
  },
  {
    "id": 164,
    "category": "Utility",
    "affix": "Dance of Knives",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dance of Knives",
    "classes": ["All"]
  },
  {
    "id": 165,
    "category": "Utility",
    "affix": "Stone Burst",
    "format": "+[# - #] to",
    "text": "+[# - #] to Stone Burst",
    "classes": ["All"]
  },
  {
    "id": 166,
    "category": "Utility",
    "affix": "Mighty Throw",
    "format": "+[# - #] to",
    "text": "+[# - #] to Mighty Throw",
    "classes": ["All"]
  },
  {
    "id": 167,
    "category": "Utility",
    "affix": "Vortex",
    "format": "+[# - #] to",
    "text": "+[# - #] to Vortex",
    "classes": ["All"]
  },
  {
    "id": 168,
    "category": "Utility",
    "affix": "Toxic Skin",
    "format": "+[# - #] to",
    "text": "+[# - #] to Toxic Skin",
    "classes": ["All"]
  },
  {
    "id": 169,
    "category": "Utility",
    "affix": "Touch of Death",
    "format": "+[# - #] to",
    "text": "+[# - #] to Touch of Death",
    "classes": ["All"]
  },
  {
    "id": 170,
    "category": "Utility",
    "affix": "Soar",
    "format": "+[# - #] to",
    "text": "+[# - #] to Soar",
    "classes": ["All"]
  },
  {
    "id": 171,
    "category": "Utility",
    "affix": "Scourge",
    "format": "+[# - #] to",
    "text": "+[# - #] to Scourge",
    "classes": ["All"]
  },
  {
    "id": 172,
    "category": "Utility",
    "affix": "Rushing Claw",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rushing Claw",
    "classes": ["All"]
  },
  {
    "id": 173,
    "category": "Utility",
    "affix": "Razor Wings",
    "format": "+[# - #] to",
    "text": "+[# - #] to Razor Wings",
    "classes": ["All"]
  },
  {
    "id": 174,
    "category": "Utility",
    "affix": "Ravager",
    "format": "+[# - #] to",
    "text": "+[# - #] to Ravager",
    "classes": ["All"]
  },
  {
    "id": 175,
    "category": "Utility",
    "affix": "Payback",
    "format": "+[# - #] to",
    "text": "+[# - #] to Payback",
    "classes": ["All"]
  },
  {
    "id": 176,
    "category": "Utility",
    "affix": "Counterattack",
    "format": "+[# - #] to",
    "text": "+[# - #] to Counterattack",
    "classes": ["All"]
  },
  {
    "id": 177,
    "category": "Utility",
    "affix": "Concussive Stomp",
    "format": "+[# - #] to",
    "text": "+[# - #] to Concussive Stomp",
    "classes": ["All"]
  },
  {
    "id": 178,
    "category": "Utility",
    "affix": "Armored Hide",
    "format": "+[# - #] to",
    "text": "+[# - #] to Armored Hide",
    "classes": ["All"]
  },
  {
    "id": 179,
    "category": "Utility",
    "affix": "Stinger",
    "format": "+[# - #] to",
    "text": "+[# - #] to Stinger",
    "classes": ["All"]
  },
  {
    "id": 180,
    "category": "Utility",
    "affix": "Rake",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rake",
    "classes": ["All"]
  },
  {
    "id": 181,
    "category": "Utility",
    "affix": "Quill Volley",
    "format": "+[# - #] to",
    "text": "+[# - #] to Quill Volley",
    "classes": ["All"]
  },
  {
    "id": 182,
    "category": "Utility",
    "affix": "Crushing Hand",
    "format": "+[# - #] to",
    "text": "+[# - #] to Crushing Hand",
    "classes": ["All"]
  },
  {
    "id": 183,
    "category": "Utility",
    "affix": "Potency Skills",
    "format": "+[#] to",
    "text": "+[#] to Potency Skills",
    "classes": ["All"]
  },
  {
    "id": 184,
    "category": "Utility",
    "affix": "Focus Skills",
    "format": "+[#] to",
    "text": "+[#] to Focus Skills",
    "classes": ["All"]
  },
  {
    "id": 185,
    "category": "Utility",
    "affix": "Withering Fist",
    "format": "+[# - #] to",
    "text": "+[# - #] to Withering Fist",
    "classes": ["All"]
  },
  {
    "id": 186,
    "category": "Utility",
    "affix": "Thunderspike",
    "format": "+[# - #] to",
    "text": "+[# - #] to Thunderspike",
    "classes": ["All"]
  },
  {
    "id": 187,
    "category": "Utility",
    "affix": "Thrash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Thrash",
    "classes": ["All"]
  },
  {
    "id": 188,
    "category": "Utility",
    "affix": "Rock Splitter",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rock Splitter",
    "classes": ["All"]
  },
  {
    "id": 189,
    "category": "Utility",
    "affix": "Zealot Skills",
    "format": "+[#] to",
    "text": "+[#] to Zealot Skills",
    "classes": ["All"]
  },
  {
    "id": 190,
    "category": "Utility",
    "affix": "Aura Skills",
    "format": "+[#] to",
    "text": "+[#] to Aura Skills",
    "classes": ["All"]
  },
  {
    "id": 191,
    "category": "Utility",
    "affix": "Justice Skills",
    "format": "+[#] to",
    "text": "+[#] to Justice Skills",
    "classes": ["All"]
  },
  {
    "id": 192,
    "category": "Utility",
    "affix": "Valor Skills",
    "format": "+[#] to",
    "text": "+[#] to Valor Skills",
    "classes": ["All"]
  },
  {
    "id": 193,
    "category": "Utility",
    "affix": "Advance",
    "format": "+[# - #] to",
    "text": "+[# - #] to Advance",
    "classes": ["All"]
  },
  {
    "id": 194,
    "category": "Utility",
    "affix": "Brandish",
    "format": "+[# - #] to",
    "text": "+[# - #] to Brandish",
    "classes": ["All"]
  },
  {
    "id": 195,
    "category": "Utility",
    "affix": "Clash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Clash",
    "classes": ["All"]
  },
  {
    "id": 196,
    "category": "Utility",
    "affix": "Holy Bolt",
    "format": "+[# - #] to",
    "text": "+[# - #] to Holy Bolt",
    "classes": ["All"]
  },
  {
    "id": 197,
    "category": "Utility",
    "affix": "Blessed Hammer",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blessed Hammer",
    "classes": ["All"]
  },
  {
    "id": 198,
    "category": "Utility",
    "affix": "Blessed Shield",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blessed Shield",
    "classes": ["All"]
  },
  {
    "id": 199,
    "category": "Utility",
    "affix": "Divine Lance",
    "format": "+[# - #] to",
    "text": "+[# - #] to Divine Lance",
    "classes": ["All"]
  },
  {
    "id": 200,
    "category": "Utility",
    "affix": "Shield Bash",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shield Bash",
    "classes": ["All"]
  },
  {
    "id": 201,
    "category": "Utility",
    "affix": "Zeal",
    "format": "+[# - #] to",
    "text": "+[# - #] to Zeal",
    "classes": ["All"]
  },
  {
    "id": 202,
    "category": "Utility",
    "affix": "Defiance Aura",
    "format": "+[# - #] to",
    "text": "+[# - #] to Defiance Aura",
    "classes": ["All"]
  },
  {
    "id": 203,
    "category": "Utility",
    "affix": "Fanaticism Aura",
    "format": "+[# - #] to",
    "text": "+[# - #] to Fanaticism Aura",
    "classes": ["All"]
  },
  {
    "id": 204,
    "category": "Utility",
    "affix": "Holy Light Aura",
    "format": "+[# - #] to",
    "text": "+[# - #] to Holy Light Aura",
    "classes": ["All"]
  },
  {
    "id": 205,
    "category": "Utility",
    "affix": "Condemn",
    "format": "+[# - #] to",
    "text": "+[# - #] to Condemn",
    "classes": ["All"]
  },
  {
    "id": 206,
    "category": "Utility",
    "affix": "Consecration",
    "format": "+[# - #] to",
    "text": "+[# - #] to Consecration",
    "classes": ["All"]
  },
  {
    "id": 207,
    "category": "Utility",
    "affix": "Purify",
    "format": "+[# - #] to",
    "text": "+[# - #] to Purify",
    "classes": ["All"]
  },
  {
    "id": 208,
    "category": "Utility",
    "affix": "Spear of the Heavens",
    "format": "+[# - #] to",
    "text": "+[# - #] to Spear of the Heavens",
    "classes": ["All"]
  },
  {
    "id": 209,
    "category": "Utility",
    "affix": "Aegis",
    "format": "+[# - #] to",
    "text": "+[# - #] to Aegis",
    "classes": ["All"]
  },
  {
    "id": 210,
    "category": "Utility",
    "affix": "Falling Star",
    "format": "+[# - #] to",
    "text": "+[# - #] to Falling Star",
    "classes": ["All"]
  },
  {
    "id": 211,
    "category": "Utility",
    "affix": "Rally",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rally",
    "classes": ["All"]
  },
  {
    "id": 212,
    "category": "Utility",
    "affix": "Shield Charge",
    "format": "+[# - #] to",
    "text": "+[# - #] to Shield Charge",
    "classes": ["All"]
  },
  {
    "id": 213,
    "category": "Utility",
    "affix": "Command Fallen",
    "format": "+[# - #] to",
    "text": "+[# - #] to Command Fallen",
    "classes": ["All"]
  },
  {
    "id": 214,
    "category": "Utility",
    "affix": "Doom",
    "format": "+[# - #] to",
    "text": "+[# - #] to Doom",
    "classes": ["All"]
  },
  {
    "id": 215,
    "category": "Utility",
    "affix": "Hellion Sting",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hellion Sting",
    "classes": ["All"]
  },
  {
    "id": 216,
    "category": "Utility",
    "affix": "Molten Bomb",
    "format": "+[# - #] to",
    "text": "+[# - #] to Molten Bomb",
    "classes": ["All"]
  },
  {
    "id": 217,
    "category": "Utility",
    "affix": "Abyss Skills",
    "format": "+[#] to",
    "text": "+[#] to Abyss Skills",
    "classes": ["All"]
  },
  {
    "id": 218,
    "category": "Utility",
    "affix": "Demonology Skills",
    "format": "+[#] to",
    "text": "+[#] to Demonology Skills",
    "classes": ["All"]
  },
  {
    "id": 219,
    "category": "Utility",
    "affix": "Hellfire Skills",
    "format": "+[#] to",
    "text": "+[#] to Hellfire Skills",
    "classes": ["All"]
  },
  {
    "id": 220,
    "category": "Utility",
    "affix": "Occult Skills",
    "format": "+[#] to",
    "text": "+[#] to Occult Skills",
    "classes": ["All"]
  },
  {
    "id": 221,
    "category": "Utility",
    "affix": "Blazing Scream",
    "format": "+[# - #] to",
    "text": "+[# - #] to Blazing Scream",
    "classes": ["All"]
  },
  {
    "id": 222,
    "category": "Utility",
    "affix": "Bombardment",
    "format": "+[# - #] to",
    "text": "+[# - #] to Bombardment",
    "classes": ["All"]
  },
  {
    "id": 223,
    "category": "Utility",
    "affix": "Dread Claws",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dread Claws",
    "classes": ["All"]
  },
  {
    "id": 224,
    "category": "Utility",
    "affix": "Hell Fracture",
    "format": "+[# - #] to",
    "text": "+[# - #] to Hell Fracture",
    "classes": ["All"]
  },
  {
    "id": 225,
    "category": "Utility",
    "affix": "Umbral Chains",
    "format": "+[# - #] to",
    "text": "+[# - #] to Umbral Chains",
    "classes": ["All"]
  },
  {
    "id": 226,
    "category": "Utility",
    "affix": "Dark Prison",
    "format": "+[# - #] to",
    "text": "+[# - #] to Dark Prison",
    "classes": ["All"]
  },
  {
    "id": 227,
    "category": "Utility",
    "affix": "Infernal Breath",
    "format": "+[# - #] to",
    "text": "+[# - #] to Infernal Breath",
    "classes": ["All"]
  },
  {
    "id": 228,
    "category": "Utility",
    "affix": "Nether Step",
    "format": "+[# - #] to",
    "text": "+[# - #] to Nether Step",
    "classes": ["All"]
  },
  {
    "id": 229,
    "category": "Utility",
    "affix": "Profane Sentinel",
    "format": "+[# - #] to",
    "text": "+[# - #] to Profane Sentinel",
    "classes": ["All"]
  },
  {
    "id": 230,
    "category": "Utility",
    "affix": "Rampage",
    "format": "+[# - #] to",
    "text": "+[# - #] to Rampage",
    "classes": ["All"]
  },
  {
    "id": 231,
    "category": "Utility",
    "affix": "Sigil of Chaos",
    "format": "+[# - #] to",
    "text": "+[# - #] to Sigil of Chaos",
    "classes": ["All"]
  },
  {
    "id": 232,
    "category": "Utility",
    "affix": "Sigil of Subversion",
    "format": "+[# - #] to",
    "text": "+[# - #] to Sigil of Subversion",
    "classes": ["All"]
  },
  {
    "id": 233,
    "category": "Utility",
    "affix": "Sigil of Summons",
    "format": "+[# - #] to",
    "text": "+[# - #] to Sigil of Summons",
    "classes": ["All"]
  },
  {
    "id": 234,
    "category": "Utility",
    "affix": "Tortured Wretch",
    "format": "+[# - #] to",
    "text": "+[# - #] to Tortured Wretch",
    "classes": ["All"]
  },
  {
    "id": 235,
    "category": "Utility",
    "affix": "Tyrant's Grasp",
    "format": "+[# - #] to",
    "text": "+[# - #] to Tyrant's Grasp",
    "classes": ["All"]
  },
  {
    "id": 236,
    "category": "Utility",
    "affix": "Wall of Agony",
    "format": "+[# - #] to",
    "text": "+[# - #] to Wall of Agony",
    "classes": ["All"]
  },
  {
    "id": 237,
    "category": "Utility",
    "affix": "Combat Skills",
    "format": "+[#] to",
    "text": "+[#] to Combat Skills",
    "classes": ["All"]
  },
  {
    "id": 238,
    "category": "Utility",
    "affix": "Martial Skills",
    "format": "+[#] to",
    "text": "+[#] to Martial Skills",
    "classes": ["All"]
  },
  {
    "id": 239,
    "category": "Utility",
    "affix": "Earth Skills",
    "format": "+[#] to",
    "text": "+[#] to Earth Skills",
    "classes": ["All"]
  },
  {
    "id": 240,
    "category": "Utility",
    "affix": "Nature Magic Skills",
    "format": "+[#] to",
    "text": "+[#] to Nature Magic Skills",
    "classes": ["All"]
  },
  {
    "id": 241,
    "category": "Utility",
    "affix": "Shapeshifting Skills",
    "format": "+[#] to",
    "text": "+[#] to Shapeshifting Skills",
    "classes": ["All"]
  },
  {
    "id": 242,
    "category": "Utility",
    "affix": "Storm Skills",
    "format": "+[#] to",
    "text": "+[#] to Storm Skills",
    "classes": ["All"]
  },
  {
    "id": 243,
    "category": "Utility",
    "affix": "Werebear Skills",
    "format": "+[#] to",
    "text": "+[#] to Werebear Skills",
    "classes": ["All"]
  },
  {
    "id": 244,
    "category": "Utility",
    "affix": "Werewolf Skills",
    "format": "+[#] to",
    "text": "+[#] to Werewolf Skills",
    "classes": ["All"]
  },
  {
    "id": 245,
    "category": "Utility",
    "affix": "Blood Skills",
    "format": "+[#] to",
    "text": "+[#] to Blood Skills",
    "classes": ["All"]
  },
  {
    "id": 246,
    "category": "Utility",
    "affix": "Bone Skills",
    "format": "+[#] to",
    "text": "+[#] to Bone Skills",
    "classes": ["All"]
  },
  {
    "id": 247,
    "category": "Utility",
    "affix": "Darkness Skills",
    "format": "+[#] to",
    "text": "+[#] to Darkness Skills",
    "classes": ["All"]
  },
  {
    "id": 248,
    "category": "Utility",
    "affix": "Minion Skills",
    "format": "+[#] to",
    "text": "+[#] to Minion Skills",
    "classes": ["All"]
  },
  {
    "id": 249,
    "category": "Utility",
    "affix": "Disciple Skills",
    "format": "+[#] to",
    "text": "+[#] to Disciple Skills",
    "classes": ["All"]
  },
  {
    "id": 250,
    "category": "Utility",
    "affix": "Juggernaut Skills",
    "format": "+[#] to",
    "text": "+[#] to Juggernaut Skills",
    "classes": ["All"]
  },
  {
    "id": 251,
    "category": "Utility",
    "affix": "Cutthroat Skills",
    "format": "+[#] to",
    "text": "+[#] to Cutthroat Skills",
    "classes": ["All"]
  },
  {
    "id": 252,
    "category": "Utility",
    "affix": "Marksman Skills",
    "format": "+[#] to",
    "text": "+[#] to Marksman Skills",
    "classes": ["All"]
  },
  {
    "id": 253,
    "category": "Utility",
    "affix": "Trap Skills",
    "format": "+[#] to",
    "text": "+[#] to Trap Skills",
    "classes": ["All"]
  },
  {
    "id": 254,
    "category": "Utility",
    "affix": "Frost Skills",
    "format": "+[#] to",
    "text": "+[#] to Frost Skills",
    "classes": ["All"]
  },
  {
    "id": 255,
    "category": "Utility",
    "affix": "Pyromancy Skills",
    "format": "+[#] to",
    "text": "+[#] to Pyromancy Skills",
    "classes": ["All"]
  },
  {
    "id": 256,
    "category": "Utility",
    "affix": "Shock Skills",
    "format": "+[#] to",
    "text": "+[#] to Shock Skills",
    "classes": ["All"]
  },
  {
    "id": 257,
    "category": "Utility",
    "affix": "Centipede Skills",
    "format": "+[#] to",
    "text": "+[#] to Centipede Skills",
    "classes": ["All"]
  },
  {
    "id": 258,
    "category": "Utility",
    "affix": "Eagle Skills",
    "format": "+[#] to",
    "text": "+[#] to Eagle Skills",
    "classes": ["All"]
  },
  {
    "id": 259,
    "category": "Utility",
    "affix": "Gorilla Skills",
    "format": "+[#] to",
    "text": "+[#] to Gorilla Skills",
    "classes": ["All"]
  },
  {
    "id": 260,
    "category": "Utility",
    "affix": "Jaguar Skills",
    "format": "+[#] to",
    "text": "+[#] to Jaguar Skills",
    "classes": ["All"]
  },
  {
    "id": 261,
    "category": "Utility",
    "affix": "All Skills",
    "format": "+[#] to",
    "text": "+[#] to All Skills",
    "classes": ["All"]
  },
  {
    "id": 262,
    "category": "Utility",
    "affix": "Golem",
    "format": "+[#] to",
    "text": "+[#] to Golem",
    "classes": ["All"]
  },
  {
    "id": 263,
    "category": "Utility",
    "affix": "Skeleton Mage",
    "format": "+[#] to",
    "text": "+[#] to Skeleton Mage",
    "classes": ["All"]
  },
  {
    "id": 264,
    "category": "Utility",
    "affix": "Skeleton Warrior",
    "format": "+[#] to",
    "text": "+[#] to Skeleton Warrior",
    "classes": ["All"]
  },
  {
    "id": 265,
    "category": "Resources",
    "affix": "Maximum Resource",
    "format": "+[# - #]",
    "text": "+[# - #] Maximum Resource",
    "classes": ["All"]
  },
  {
    "id": 266,
    "category": "Resources",
    "affix": "Energy Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Energy Regeneration",
    "classes": ["All"]
  },
  {
    "id": 267,
    "category": "Resources",
    "affix": "Essence Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Essence Regeneration",
    "classes": ["All"]
  },
  {
    "id": 268,
    "category": "Resources",
    "affix": "Fury Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Fury Regeneration",
    "classes": ["All"]
  },
  {
    "id": 269,
    "category": "Resources",
    "affix": "Mana Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Mana Regeneration",
    "classes": ["All"]
  },
  {
    "id": 270,
    "category": "Resources",
    "affix": "Spirit Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Spirit Regeneration",
    "classes": ["All"]
  },
  {
    "id": 271,
    "category": "Resources",
    "affix": "Vigor Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Vigor Regeneration",
    "classes": ["All"]
  },
  {
    "id": 272,
    "category": "Resources",
    "affix": "Energy On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Energy On Kill",
    "classes": ["All"]
  },
  {
    "id": 273,
    "category": "Resources",
    "affix": "Essence On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Essence On Kill",
    "classes": ["All"]
  },
  {
    "id": 274,
    "category": "Resources",
    "affix": "Fury On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Fury On Kill",
    "classes": ["All"]
  },
  {
    "id": 275,
    "category": "Resources",
    "affix": "Mana On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Mana On Kill",
    "classes": ["All"]
  },
  {
    "id": 276,
    "category": "Resources",
    "affix": "Spirit On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Spirit On Kill",
    "classes": ["All"]
  },
  {
    "id": 277,
    "category": "Resources",
    "affix": "Vigor On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Vigor On Kill",
    "classes": ["All"]
  },
  {
    "id": 278,
    "category": "Resources",
    "affix": "Faith Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Faith Regeneration",
    "classes": ["All"]
  },
  {
    "id": 279,
    "category": "Resources",
    "affix": "Faith On Kill",
    "format": "+[# - #]",
    "text": "+[# - #] Faith On Kill",
    "classes": ["All"]
  },
  {
    "id": 280,
    "category": "Resources",
    "affix": "Wrath every 10 Kills",
    "format": "+[# - #]",
    "text": "+[# - #] Wrath every 10 Kills",
    "classes": ["All"]
  },
  {
    "id": 281,
    "category": "Resources",
    "affix": "Wrath Regeneration",
    "format": "+[# - #]",
    "text": "+[# - #] Wrath Regeneration",
    "classes": ["All"]
  },
  {
    "id": 282,
    "category": "Resources",
    "affix": "Resource Cost Reduction",
    "format": "[# - #]%",
    "text": "[# - #]% Resource Cost Reduction",
    "classes": ["All"]
  },
  {
    "id": 283,
    "category": "Resources",
    "affix": "Resource Generation",
    "format": "[# - #]%",
    "text": "[# - #]% Resource Generation",
    "classes": ["All"]
  },
  {
    "id": 284,
    "category": "Resources",
    "affix": "Lucky Hit: Up to a 15% Chance to Restore +[# - #] Primary Resource",
    "format": "",
    "text": "Lucky Hit: Up to a 15% Chance to Restore +[# - #] Primary Resource",
    "classes": ["All"]
  },
  {
    "id": 285,
    "category": "Mobility",
    "affix": "Movement Speed",
    "format": "+[# - #]%",
    "text": "+[# - #]% Movement Speed",
    "classes": ["All"]
  },
  {
    "id": 286,
    "category": "Mobility",
    "affix": "Attacks Reduce Evade's Cooldown by [# - #] Seconds",
    "format": "",
    "text": "Attacks Reduce Evade's Cooldown by [# - #] Seconds",
    "classes": ["All"]
  },
  {
    "id": 287,
    "category": "Mobility",
    "affix": "Maximum Evade Charge",
    "format": "+[#]",
    "text": "+[#] Maximum Evade Charge",
    "classes": ["All"]
  },
  {
    "id": 288,
    "category": "Mobility",
    "affix": "Evade Grants +[# - #]% Movement Speed for [#] Seconds",
    "format": "",
    "text": "Evade Grants +[# - #]% Movement Speed for [#] Seconds",
    "classes": ["All"]
  }
];
