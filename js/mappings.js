// ── Prism mappings ───────────────────────────────────────────────────────────

const PRISM_OVERRIDES = {
  // dual-pool: core stats appear in both Aggressive and Adept's
  "Strength":             ["Aggressive", "Adept's"],
  "Dexterity":            ["Aggressive", "Adept's"],
  "Intelligence":         ["Aggressive", "Adept's"],
  "Willpower":            ["Aggressive", "Adept's"],
  // individual resists = Chromatic only; "Resistance to All Elements" stays as Protector's via category default
  "Fire Resistance":      ["Chromatic"],
  "Cold Resistance":      ["Chromatic"],
  "Lightning Resistance": ["Chromatic"],
  "Poison Resistance":    ["Chromatic"],
  "Shadow Resistance":    ["Chromatic"],
  "Physical Resistance":  ["Chromatic"],
  // single-pool overrides
  "Potion Capacity":      ["Pragmatic"],
  "Lucky Hit Chance":     ["Pragmatic"],
  "Healing Received":     ["Pragmatic"],
  "Barrier Generation":   ["Pragmatic"],
  "Fortify Generation":   ["Pragmatic"],
  "Cooldown Reduction":   ["Pragmatic"],
  "Impairment Reduction": ["Pragmatic"],
};

const PRISM_COLORS = {
  "Aggressive":  "#d4622a",
  "Protector's": "#4a88cc",
  "Chromatic":   "#9a50c8",
  "Pragmatic":   "#c8a030",
  "Adept's":     "#3a9858",
  "Resourceful": "#4c7a7a",
};

function getPrisms(x) {
  if (PRISM_OVERRIDES[x.affix]) return PRISM_OVERRIDES[x.affix];
  if (x.category === "Offensive") return ["Aggressive"];
  if (x.category === "Defensive") return ["Protector's"];
  if (x.category === "Utility")   return ["Adept's"];
  if (x.category === "Mobility")  return ["Pragmatic"];
  if (x.category === "Resources") return ["Resourceful"];
  return [];
}

function prismBadge(x) {
  return getPrisms(x).map(p => {
    const c = PRISM_COLORS[p] || '#888';
    return `<span class="prism-tag" style="color:${c};border-color:${c}">${p}</span>`;
  }).join('');
}

// ── Class mappings ────────────────────────────────────────────────────────────

const GAME_CLASSES = ["All", "Barbarian", "Druid", "Necromancer", "Rogue", "Sorcerer", "Spiritborn", "Paladin", "Warlock", "Unknown"];

// Class-to-skill mapping. Applied at startup to override the "All" placeholders in AFFIXES.
const CLASS_SKILLS = {
  Barbarian: [
    "Weapon Mastery Skills", "Ancient Skills", "Dust Devil Skills", "Earthquake Skills", "Iron Shrapnel Skills", "Brawling Skills",
    "Bash", "Flay", "Frenzy", "Lunging Strike",
    "Double Swing", "Hammer of the Ancients", "Rend", "Upheaval", "Whirlwind",
    "Challenging Shout", "Ground Stomp", "Iron Skin", "Rallying Cry", "War Cry",
    "Charge", "Death Blow", "Kick", "Leap", "Rupture", "Steel Grasp",
    "Mighty Throw",
    "Fury Regeneration", "Fury On Kill",
  ],
  Druid: [
    "Companion Skills", "Wrath Skills", "Human Skills", "Earth Skills", "Nature Magic Skills", "Shapeshifting Skills", "Storm Skills", "Werebear Skills", "Werewolf Skills",
    "Claw", "Earth Spike", "Maul", "Storm Strike", "Wind Shear",
    "Landslide", "Lightning Storm", "Pulverize", "Shred", "Tornado",
    "Blood Howl", "Cyclone Armor", "Debilitating Roar", "Earthen Bulwark",
    "Boulder", "Hurricane", "Rabies", "Ravens", "Trample", "Poison Creeper", "Wolves",
    "Stone Burst",
    "Spirit Regeneration", "Spirit On Kill",
  ],
  Necromancer: [
    "Corpse Skills", "Curse Skills", "Macabre Skills", "Blood Skills", "Bone Skills", "Darkness Skills", "Minion Skills",
    "Bone Splinters", "Decompose", "Hemorrhage", "Reap",
    "Blight", "Blood Lance", "Blood Surge", "Bone Spear", "Sever",
    "Blood Mist", "Bone Prison", "Bone Spirit", "Corpse Explosion", "Corpse Tendrils", "Decrepify", "Iron Maiden",
    "Golem", "Skeleton Mage", "Skeleton Warrior",
    "Essence Regeneration", "Essence On Kill",
  ],
  Rogue: [
    "Agility Skills", "Imbuement Skills", "Subterfuge Skills", "Arrow Storm Skills", "Grenade Skills", "Cutthroat Skills", "Marksman Skills", "Trap Skills", "Disciple Skills",
    "Blade Shift", "Forceful Arrow", "Heartseeker", "Invigorating Strike", "Puncture",
    "Barrage", "Flurry", "Penetrating Shot", "Rapid Fire", "Twisting Blades", "Dance of Knives",
    "Caltrops", "Cold Imbuement", "Concealment", "Dark Shroud", "Dash", "Poison Imbuement", "Poison Trap", "Shadow Imbuement", "Shadow Step", "Smoke Grenade",
    "Energy Regeneration", "Energy On Kill",
  ],
  Sorcerer: [
    "Conjuration Skills", "Mastery Skills", "Frost Skills", "Pyromancy Skills", "Shock Skills",
    "Spark", "Fire Bolt", "Frost Bolt", "Arc Lash",
    "Fireball", "Ice Shards", "Chain Lightning", "Charged Bolts", "Incinerate", "Frozen Orb",
    "Ball Lightning", "Blizzard", "Firewall", "Meteor",
    "Flame Shield", "Frost Nova", "Hydra", "Ice Armor", "Ice Blades", "Lightning Spear", "Teleport", "Familiar",
    "Mana Regeneration", "Mana On Kill",
  ],
  Spiritborn: [
    "Centipede Skills", "Eagle Skills", "Gorilla Skills", "Jaguar Skills", "Potency Skills", "Focus Skills",
    "Quill Volley", "Razor Wings", "Soar",
    "Rake", "Ravager", "Rushing Claw", "Scourge",
    "Crushing Hand", "Thrash", "Concussive Stomp", "Counterattack", "Armored Hide", "Payback",
    "Stinger", "Withering Fist", "Toxic Skin", "Touch of Death",
    "Vortex", "Rock Splitter", "Thunderspike",
    "Vigor Regeneration", "Vigor On Kill",
  ],
  Paladin: [
    "Zealot Skills", "Aura Skills", "Justice Skills", "Valor Skills", "Combat Skills", "Martial Skills",
    "Defiance Aura", "Fanaticism Aura", "Holy Light Aura",
    "Advance", "Brandish", "Clash", "Holy Bolt", "Blessed Hammer", "Blessed Shield", "Divine Lance", "Shield Bash", "Zeal",
    "Condemn", "Consecration", "Purify", "Spear of the Heavens", "Aegis", "Falling Star", "Rally", "Shield Charge",
    "Faith Regeneration", "Faith On Kill",
  ],
  Warlock: [
    "Abyss Skills", "Demonology Skills", "Hellfire Skills", "Occult Skills", "Juggernaut Skills",
    "Command Fallen", "Doom", "Hellion Sting", "Molten Bomb",
    "Blazing Scream", "Bombardment", "Dread Claws", "Hell Fracture", "Umbral Chains", "Dark Prison",
    "Infernal Breath", "Nether Step", "Profane Sentinel", "Rampage",
    "Sigil of Chaos", "Sigil of Subversion", "Sigil of Summons", "Tortured Wretch", "Tyrant's Grasp", "Wall of Agony",
    "Wrath Regeneration", "Wrath every 10 Kills",
  ],
};

// Build reverse lookup: affix name → [class, ...]
const AFFIX_CLASS_LOOKUP = {};
Object.entries(CLASS_SKILLS).forEach(([cls, skills]) => {
  skills.forEach(name => {
    if (!AFFIX_CLASS_LOOKUP[name]) AFFIX_CLASS_LOOKUP[name] = [];
    AFFIX_CLASS_LOOKUP[name].push(cls);
  });
});

// Apply to AFFIXES, overriding the "All" placeholders
AFFIXES.forEach(x => {
  if (AFFIX_CLASS_LOOKUP[x.affix]) x.classes = AFFIX_CLASS_LOOKUP[x.affix];
});

// ── Slot mappings ─────────────────────────────────────────────────────────────
// Keyed by class then slot. Add more classes by pasting Wowhead data.
// Affix names must match the affix field in AFFIXES exactly.

const SLOT_DATA = {
  Sorcerer: {
    "1H Weapon": ["Intelligence", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "2H Weapon": ["Intelligence", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "Off-Hand":  ["Intelligence", "Maximum Life", "Maximum Resource", "All Damage Multiplier", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Cooldown Reduction", "Mana Regeneration"],
    "Helm":      ["Intelligence", "Maximum Life", "Life Regeneration", "Maximum Resource", "Mana Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction", "Conjuration Skills", "Hydra", "Ice Blades", "Lightning Spear", "Familiar"],
    "Chest":     ["Intelligence", "Maximum Life", "Life Regeneration", "Mana Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Defensive Skills", "Flame Shield", "Frost Nova", "Ice Armor", "Teleport"],
    "Gloves":    ["Intelligence", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Core Skills", "Fireball", "Ice Shards", "Chain Lightning", "Charged Bolts", "Incinerate", "Frozen Orb"],
    "Pants":     ["Intelligence", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Spark", "Fire Bolt", "Frost Bolt", "Arc Lash"],
    "Boots":     ["Intelligence", "Maximum Life", "Life Regeneration", "Mana Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Mastery Skills", "Ball Lightning", "Blizzard", "Firewall", "Meteor"],
    "Amulet":    ["Intelligence", "Maximum Life", "Life Regeneration", "Maximum Resource", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction"],
    "Ring":      ["Intelligence", "Maximum Life", "Life Regeneration", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance"],
  },
  Barbarian: {
    "1H Weapon": ["Strength", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "2H Weapon": ["Strength", "Maximum Life", "Fury On Kill", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit", "Resource Cost Reduction"],
    "Helm":      ["Strength", "Maximum Life", "Life Regeneration", "Maximum Resource", "Fury Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction", "Weapon Mastery Skills", "Death Blow", "Rupture", "Steel Grasp", "Mighty Throw"],
    "Chest":     ["Strength", "Maximum Life", "Life Regeneration", "Fury Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Defensive Skills", "Challenging Shout", "Ground Stomp", "Iron Skin", "Rallying Cry"],
    "Gloves":    ["Strength", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Core Skills", "Double Swing", "Hammer of the Ancients", "Rend", "Upheaval", "Whirlwind"],
    "Pants":     ["Strength", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Bash", "Flay", "Frenzy", "Lunging Strike"],
    "Boots":     ["Strength", "Maximum Life", "Life Regeneration", "Fury Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Brawling Skills", "Charge", "Kick", "Leap", "War Cry"],
    "Amulet":    ["Strength", "Maximum Life", "Life Regeneration", "Maximum Resource", "Fury On Kill", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Cooldown Reduction"],
    "Ring":      ["Strength", "Maximum Life", "Life Regeneration", "Fury On Kill", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction"],
  },
  Druid: {
    "1H Weapon": ["Willpower", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "2H Weapon": ["Willpower", "Maximum Life", "Spirit On Kill", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit", "Resource Cost Reduction"],
    "Off-Hand":  ["Willpower", "Maximum Life", "Maximum Resource", "Spirit On Kill", "All Damage Multiplier", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resource Cost Reduction", "Cooldown Reduction"],
    "Helm":      ["Willpower", "Maximum Life", "Life Regeneration", "Maximum Resource", "Spirit Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction", "Companion Skills", "Ravens", "Poison Creeper", "Wolves"],
    "Chest":     ["Willpower", "Maximum Life", "Life Regeneration", "Spirit Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Defensive Skills", "Blood Howl", "Cyclone Armor", "Debilitating Roar", "Earthen Bulwark"],
    "Gloves":    ["Willpower", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Core Skills", "Landslide", "Lightning Storm", "Pulverize", "Shred", "Tornado", "Stone Burst"],
    "Pants":     ["Willpower", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Claw", "Earth Spike", "Maul", "Storm Strike", "Wind Shear"],
    "Boots":     ["Willpower", "Maximum Life", "Life Regeneration", "Spirit Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Wrath Skills", "Boulder", "Hurricane", "Rabies", "Trample"],
    "Amulet":    ["Willpower", "Maximum Life", "Life Regeneration", "Maximum Resource", "Spirit On Kill", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Cooldown Reduction"],
    "Ring":      ["Willpower", "Maximum Life", "Life Regeneration", "Spirit On Kill", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction"],
  },
  Necromancer: {
    "1H Weapon": ["Intelligence", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "2H Weapon": ["Intelligence", "Maximum Life", "Essence On Kill", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit", "Resource Cost Reduction"],
    "Off-Hand":  ["Intelligence", "Maximum Life", "Maximum Resource", "Essence On Kill", "All Damage Multiplier", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resource Cost Reduction", "Cooldown Reduction"],
    "Shield":    ["Intelligence", "Maximum Life", "Life Regeneration", "Essence On Kill", "Thorns", "All Damage Multiplier", "Critical Strike Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Damage Reduction"],
    "Helm":      ["Intelligence", "Maximum Life", "Life Regeneration", "Maximum Resource", "Essence Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Impairment Reduction", "Cooldown Reduction", "Curse Skills", "Decrepify", "Iron Maiden", "Skeleton Warrior"],
    "Chest":     ["Intelligence", "Maximum Life", "Life Regeneration", "Essence Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Macabre Skills", "Blood Mist", "Bone Prison", "Corpse Explosion", "Golem"],
    "Gloves":    ["Intelligence", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Core Skills", "Blight", "Blood Lance", "Blood Surge", "Bone Spear", "Sever", "Skeleton Mage"],
    "Pants":     ["Intelligence", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Bone Splinters", "Decompose", "Hemorrhage", "Reap", "Skeleton Mage"],
    "Boots":     ["Intelligence", "Maximum Life", "Life Regeneration", "Essence Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Corpse Skills", "Bone Spirit", "Corpse Tendrils", "Skeleton Warrior"],
    "Amulet":    ["Intelligence", "Maximum Life", "Life Regeneration", "Maximum Resource", "Essence On Kill", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Cooldown Reduction"],
    "Ring":      ["Intelligence", "Maximum Life", "Life Regeneration", "Essence On Kill", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction"],
  },
  Rogue: {
    "1H Weapon":      ["Dexterity", "Maximum Life", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit"],
    "Ranged Weapon":  ["Dexterity", "Maximum Life", "Energy On Kill", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit", "Resource Cost Reduction"],
    "Helm":           ["Dexterity", "Maximum Life", "Life Regeneration", "Maximum Resource", "Energy Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction", "Imbuement Skills", "Cold Imbuement", "Poison Imbuement", "Shadow Imbuement"],
    "Chest":          ["Dexterity", "Maximum Life", "Life Regeneration", "Energy Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Subterfuge Skills", "Concealment", "Dark Shroud", "Poison Trap", "Smoke Grenade"],
    "Gloves":         ["Dexterity", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Core Skills", "Barrage", "Flurry", "Penetrating Shot", "Rapid Fire", "Twisting Blades"],
    "Pants":          ["Dexterity", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Blade Shift", "Forceful Arrow", "Heartseeker", "Invigorating Strike", "Puncture"],
    "Boots":          ["Dexterity", "Maximum Life", "Life Regeneration", "Energy Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Agility Skills", "Caltrops", "Dash", "Shadow Step", "Dance of Knives"],
    "Amulet":         ["Dexterity", "Maximum Life", "Life Regeneration", "Maximum Resource", "Energy On Kill", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Cooldown Reduction"],
    "Ring":           ["Dexterity", "Maximum Life", "Life Regeneration", "Energy On Kill", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction"],
  },
  Spiritborn: {
    "2H Weapon": ["Dexterity", "Maximum Life", "Vigor On Kill", "All Damage Multiplier", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Life On Hit", "Resource Cost Reduction"],
    "Helm":      ["Dexterity", "Maximum Life", "Life Regeneration", "Maximum Resource", "Vigor Regeneration", "Thorns", "Healing Received", "Lucky Hit Chance", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Cooldown Reduction", "Potency Skills", "Payback", "Razor Wings", "Rushing Claw", "Touch of Death"],
    "Chest":     ["Dexterity", "Maximum Life", "Life Regeneration", "Vigor Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Defensive Skills", "Armored Hide", "Concussive Stomp", "Counterattack", "Scourge"],
    "Gloves":    ["Dexterity", "Maximum Life", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Core Skills", "Crushing Hand", "Quill Volley", "Rake", "Stinger"],
    "Pants":     ["Dexterity", "Maximum Life", "Life Regeneration", "Thorns", "Healing Received", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Basic Skills", "Rock Splitter", "Thunderspike", "Thrash", "Withering Fist"],
    "Boots":     ["Dexterity", "Maximum Life", "Life Regeneration", "Vigor Regeneration", "Movement Speed", "Armor", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Dodge Chance", "Focus Skills", "Vortex", "Soar", "Ravager", "Toxic Skin"],
    "Amulet":    ["Dexterity", "Maximum Life", "Life Regeneration", "Maximum Resource", "Vigor On Kill", "Movement Speed", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction", "Cooldown Reduction"],
    "Ring":      ["Dexterity", "Maximum Life", "Life Regeneration", "Vigor On Kill", "All Damage Multiplier", "Attack Speed", "Critical Strike Chance", "Critical Strike Damage Multiplier", "Vulnerable Damage Multiplier", "Damage Over Time Multiplier", "Lucky Hit Chance", "Life On Hit", "Resistance to All Elements", "Fire Resistance", "Cold Resistance", "Lightning Resistance", "Poison Resistance", "Shadow Resistance", "Resource Cost Reduction"],
  },
  // Paste additional classes here following the same format.
};

// Build union reverse lookup: affix name → Set of slots (across all classes)
const AFFIX_SLOTS = {};
Object.values(SLOT_DATA).forEach(classSlots => {
  Object.entries(classSlots).forEach(([slot, affixes]) => {
    affixes.forEach(name => {
      if (!AFFIX_SLOTS[name]) AFFIX_SLOTS[name] = new Set();
      AFFIX_SLOTS[name].add(slot);
    });
  });
});

// Apply slots to AFFIXES (null = unassigned, always shown)
AFFIXES.forEach(x => {
  x.slots = AFFIX_SLOTS[x.affix] ? [...AFFIX_SLOTS[x.affix]] : null;
});
