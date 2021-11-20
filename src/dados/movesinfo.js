// Ainda não está em uso, pois não terminei de pegar todas as informações da internet e nem de subir no graphcms mas está em andamento

let info = [
    {
        id: 1,
        name: "Absol",
        BASICATTACK: "Every third attack decreases the opponent's Defense. When directed at a single target, deals increased damage. Boosted Attack damage increases with Attack.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/539_basic_attack.mp4",
        Passive: "SUPER LUCK : Increased critical-hit rate.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/539_008.mp4",
        MoveOne: "FEINT : Dashes in an arc, dealing true damage to opponents in your path.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/539_001.mp4",
        MoveTwo: "SLASH : Slashes forward, briefly increasing your critical-hit rate.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/539_002.mp4",
        MoveThree: "NIGHT SLASH : Slashes a wide area. If it hits, a second activation leaps, slashes forward, and briefly increases your critical-hit rate.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/539_003.mp4",
        MoveFour: "PURSUIT : Dash to an area, then lunge to an opponent with your next attack. Lunges from behind deal more damage and reduce this move's cooldown.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/539_004.mp4",
        MoveFive: "PSYCHO CUT : Throws psychic blades at opponents and increases the damage of your next three attacks.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/539_005.mp4",
        MoveSix: "SUCKER PUNCH : Link minds with an opponent - slowing you both - and automatically counter your opponent's next attack, displacing it. If the opponent doesn't attack, lunges at the opponent anyway.",
        VideoMovieSix: "https://www.pokemonunite.gg/res/vid/539_006.mp4",
        UniteMove: "MIDNIGHT SLASH : Unleashes a flurry of slashes, followed by blades of energy that displace opponents.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/539_007.mp4",
    },
    {
        id: 2,
        name: "Venusaur",
        BASICATTACK: "Every third attack deals increased damage and pulls the opponent toward you. Boosted Attack damage increases with Sp. Atk.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/003_basic_attack.mp4",
        Passive: "OVERGROW : Increases damage output at low HP.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/003_008.mp4",
        MoveOne: "SEED BOMB : Hurls a seed that shatters to damage enemies in an area.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/003_001.mp4",
        MoveTwo: "RAZOR LEAF : Launches many sharp leaves, damaging everything in their path.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/003_002.mp4",
        MoveThree: "SLUDGE BOMB : Hurls sludge at the ground. Opponents hit by the sludge become poisoned and suffer lowered Sp. Def and Movement Speed for a short time.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/003_003.mp4",
        MoveFour: "GIGA DRAIN : Steals HP from opponents in an area, temporarily increasing your defense.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/003_004.mp4",
        MoveFive: "SOLAR BEAM : Fires a searing blast of light through enemies.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/003_005.mp4",
        MoveSix: "PETAL DANCE : Summons a whirlwind of petals, increasing your Movement Speed and damaging nearby opponents.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/003_006.mp4",
        UniteMove: "VERDANT ANGER :  Hurls a giant seed that shatters to damage and slow enemies in an area.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/003_007.mp4",
    },
    {
        id: 3,
        name: "Charizard",
        BASICATTACK: "Deals continual damage. Burned opponents receive increased damage. Attack Range increases with each evolution. Boosted Attack damage increases with Attack.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/006_basic_attack.mp4",
        Passive: "BLAZE : Increases critical-hit rate below 50% HP.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/006_008.mp4",
        MoveOne: "FLAME BURST : Spits a bursting flame that burns opponents. Hitting an opponent increases your Movement Speed.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/006_001.mp4",
        MoveTwo: "FIRE SPIN : Creates a vortex of fire that slows opponents and damages them over time.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/006_002.mp4",
        MoveThree: "FLAMETHROWER : Breathes an intense blast of fire that burns opponents. Hitting an opponent increases your Movement Speed.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/006_003.mp4",
        MoveFour: "FIRE PUNCH : Attacks from afar with a fiery fist, displacing and burning opponents.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/006_004.mp4",
        MoveFive: "FIRE BLAST : Blasts intense, all-consuming fire that damages opponents over time and slows them.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/006_005.mp4",
        MoveSix: "FLARE BLITZ : Shields you as you charge forward cloaked in fire, damaging and displacing opponents in your path.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/006_006.mp4",
        UniteMove: "SEISMIC SLAM : Launches you into the air, letting you fly over obstacles. Basic attacks deal increased damage, burn opponents, and heal you.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/006_007.mp4",
    },
    {
        id: 4,
        name: "Blastoise",
        BASICATTACK: "Every third attack does continual damage and slows opposing Pokémon.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/009_basic_attack.mp4",
        Passive: "TORRENT : Increases Attack and Sp. Atk below 50% HP.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/009_008.mp4",
        MoveOne: "WATER GUN : Shoots water that displaces and slows opponents.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/009_001.mp4",
        MoveTwo: "SKULL BASH : Stuns opponents with a fierce headbutt.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/009_002.mp4",
        MoveThree: "HYDRO PUMP : Shoots a large jet of water that displaces opponents.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/009_003.mp4",
        MoveFour: "WATER SPOUT : Creates a spout of water that slows opponents.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/009_004.mp4",
        MoveFive: "SURF : Summon and ride a wave of water that displaces and stuns opponents in its path.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/009_005.mp4",
        MoveSix: "RAPID SPIN : Retreat into your shell, changing your attacks.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/009_006.mp4",
        UniteMove: "HYDRO TYPHOON : Spins and blasts water in all directions, shielding you and pushing all opponents outward.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/009_007.mp4",
    },
    {
        id: 5,
        name: "Pikachu",
        BASICATTACK: "Every third attack deals increased damage and stuns opponents. Boosted Attack damage increases with Sp. Atk.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/025_basic_attack.mp4",
        Passive: "STATIC : Builds up static charge over time that stuns nearby attackers.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/025_008.mp4",
        MoveOne: "THUNDER SHOCK : Electrifies an area, stunning opponents.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/025_001.mp4",
        MoveTwo: "ELECTROWEB : Throws an electric net to stun an opponent.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/025_002.mp4",
        MoveThree: "ELECTRO BALL : Hurls an electric orb that stuns opponents in an area, dealing increased damage per the opponent's missing HP.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/025_003.mp4",
        MoveFour: "THUNDER : Summons lightning strikes in an area.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/025_004.mp4",
        MoveFive: "VOLT TACKLE : Makes an electrified leap forward, displacing opponents.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/025_005.mp4",
        MoveSix: "THUNDERBOLT : Summons a strong blast of lightning that stuns enemies in an area.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/025_006.mp4",
        UniteMove: "THUNDERSTORM : Summons a tremendous lightning storm that follows you and blasts nearby opponents.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/025_007.mp4",
    },
    {
        id: 6,
        name: "Alolan Ninetales",
        BASICATTACK: "Every third attack slows and deals increased damage to opponents in an area. Boosted Attack damage increases with Sp. Atk.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/038_basic_attack.mp4",
        Passive: "SNOW WARNING : Snow falls around you, and your moves and boosted attacks sling snow at opponents (except Aurora Veil). Merely approaching Alolan Ninetales damages and slows opponents due to the cold. Slinging snow on the same opponent multiple times temporarily freezes it.",
        MoveOne: "POWDER SNOW : Blasts opponents in an line with snow, slowing them.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/038_001.mp4",
        MoveTwo: "ICY WIND :Blasts opponents in an area with freezing air from range, slowing them.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/038_002.mp4",
        MoveThree: "AVALANCHE : Forms a wall, trapping opponents. The wall then collapses, damaging opponents nearby.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/038_003.mp4",
        MoveFour: "DAZZLING GLEAM : Shines a blinding cone of light, stunning opponents in its path.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/038_004.mp4",
        MoveFive: "BLIZZARD : Summons two freezing blasts. The first slows opponents in an area, and the second displaces them. If the second blast impacts terrain, it can deal AOE damage a third time.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/038_005.mp4",
        MoveSix: "AURORA VEIL: Creates an aurora to protect your team from damage. Within the aurora, your Movement Speed is increased and your basic attacks are boosted.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/038_006.mp4",
        UniteMove: "SNOW GLOBE: Summons a swirling storm of snow and ice, dealing increased damage to frozen opponents.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/038_007.mp4",
    },
    {
        id: 7,
        name: "Greninja",
        BASICATTACK: "Every third attack deals increased damage. At long range, the opponent is slowed. At close range, you deal increased damage proportional to the opponent's missing health. Boosted Attack damage increases with Attack.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/658_basic_attack.mp4",
        Passive: "TORRENT : Increases Movement Speed and Attack Damage below 50% HP.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/658_008.mp4",
        MoveOne: "BUBBLE : Sprays bubbles, slowing opponents.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/658_001.mp4",
        MoveTwo: "SUBSTITUTE: Dashes forward, leaving a substitute behind.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/658_002.mp4",
        MoveThree: "DOUBLE TEAM: Dashes forward, leaving copies of yourself behind that aid in battle.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/658_003.mp4",
        MoveFour: "SMOKESCREEN : Makes you invisible, increases your movement speed, and boosts your next attack.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/658_004.mp4",
        MoveFive: "WATER SHURIKEN: Increases your movement speed, slows your opponent, and throws shurikens that steal HP from opponents.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/658_005.mp4",
        MoveSix: "SURF : Summon and ride a wave of water that steals HP from opponents. Takedowns reset this move's cooldown.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/658_006.mp4",
        UniteMove: "WATERBURST SHURIKEN : Throws a giant shuriken made of water which crashes into a large area dealing damage and slowing opponents. Then, deals damage again and displaces opponents. Finally, you can dash in a specified location.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/658_007.mp4",
    },
    {
        id: 8,
        name: "Cinderace",
        BASICATTACK: "Every third attack deals increased damage. Boosted Attack damage increases with Attack.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/815_basic_attack.mp4",
        Passive: " BLAZE : Increases critical-hit rate and attack speed below half HP.Using moves boosts your next basic attack.Attacking opponents adds stacks of flame to them. Boosted attacks add two stacks. At five stacks, the opponent takes a burst of extra damage.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/815_008.mp4",
        MoveOne: "EMBER : Tosses a fireball at an opponent, burning it and decreasing its Attack.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/815_001.mp4",
        MoveTwo: "LOW SWEEP : Kicks through opponents in a line.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/815_002.mp4",
        MoveThree: "PYRO BALL : Kicks a fireball through opponents in a line, dealing damage and burning them.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/815_003.mp4",
        MoveFour: "BLAZE KICK : Attacks with a flaming kick, guaranteeing a critical-hit and burning the opponent. While using, you're immune to hindrances.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/815_004.mp4",
        MoveFive: "FLAME CHARGE : Charge forward, damaging all opponents in a line.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/815_005.mp4",
        MoveSix: " FEINT : Command Dodge: Increases your movement speed and makes you invincible. Removes all hindrances.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/815_006.mp4",
        UniteMove: " BLAZING BICYCLE KICK : Kicks a giant fireball that impacts with a large explosion. The excitement increases your Movement Speed.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/815_007.mp4"
    },
    {
        id: 9,
        name: "Zeraora",
        BASICATTACK: "Every third attack deals increased damage, Stun:paralyzes the opponent, and steals HP. Boosted Attack damage increases with Attack.",
        VideoBasicAttack: "https://www.pokemonunite.gg/res/vid/807_basic_attack.mp4",
        Passive: "VOLT ABSORB : Deal more damage when taking damage.",
        VideoPassive: "https://www.pokemonunite.gg/res/vid/807_008.mp4",
        MoveOne: "AGILITY : Dash, and attack faster for a short time.",
        VideoMoveOne: "https://www.pokemonunite.gg/res/vid/807_001.mp4",
        MoveTwo: "SLASH : Dash to an opponent and attack it, knocking it back with the last hit.",
        VideoMoveTwo: "https://www.pokemonunite.gg/res/vid/807_002.mp4",
        MoveThree: "VOLT SWITCH : Dash through opponents, damaging them and increasing your attack speed. Use again to dash back.",
        VideoMoveTree: "https://www.pokemonunite.gg/res/vid/807_003.mp4",
        MoveFour: "SPARK: Leap at an opponent and shock it. Attacking while airborne will leap to the closest opponent instead. Can be used up to three times.",
        VideoMoveFour: "https://www.pokemonunite.gg/res/vid/807_004.mp4",
        MoveFive: "DISCHARGE : Deals damage to nearby opponents and shields you. Paralyzed opponents are pulled towards you, stunned, and take damage a second time.",
        VideoMoveFive: "https://www.pokemonunite.gg/res/vid/807_005.mp4",
        MoveSix: " WILD CHARGE : Command Dodge: Increases your movement speed and makes you invincible. Removes all hindrances.",
        VideoMoveSix: "https://www.pokemonunite.gg/res/vid/807_006.mp4",
        UniteMove: " PLASMA GALE : Deal damage to all opponents in an area, displacing them. While inside the plasma zone, you gain increased Attack Range and Damage.",
        VideoUniteMove: "https://www.pokemonunite.gg/res/vid/807_007.mp4"
    },  

]


export default info;

