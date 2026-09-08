ServerEvents.recipes(event => {

    //Mahogany Broom
    event.custom({
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "minecraft:water",
    "amount": 1000
  },
    "ingredients": [
        { "item": 'minecraft:netherite_ingot' },
        { "item": 'hexerei:mahogany_log' },
        { "item": 'enchanted:demonic_blood' },
        { "tag": 'mud:mandrake' },
        { "item": 'enchanted:flying_ointment' },
        { "tag": 'mud:mandrake' },
        { "item": 'enchanted:demonic_blood' },
        { "item": 'hexerei:mahogany_log' }
    ],
  "output": {
    "id": "hexerei:mahogany_broom"
  },

  "fluidOutput": {
    "id": "hexerei:blood_fluid",
    "amount": 1000
  }
})

    //Witch Hazel Broom
    event.custom({
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "minecraft:water",
    "amount": 1000
  },
    "ingredients": [
        { "item": 'enchanted:attuned_stone' },
        { "item": 'hexerei:witch_hazel_log' },
        { "item": 'enchanted:breath_of_the_goddess' },
        { "item": 'enchanted:wool_of_bat' },
        { "tag": 'mud:mandrake' },
        { "item": 'enchanted:wool_of_bat' },
        { "item": 'enchanted:exhale_of_the_horned_one' },
        { "item": 'hexerei:witch_hazel_log' }
    ],
  "output": {
    "id": "hexerei:witch_hazel_broom"
  },

  "fluidOutput": {
    "id": "hexerei:blood_fluid",
    "amount": 1000
  }
})

//Willow Broom
    event.custom({
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "minecraft:water",
    "amount": 1000
  },
    "ingredients": [
        { "item": 'hexerei:blood_bottle' },
        { "item": 'hexerei:willow_log' },
        { "item": 'minecraft:gold_block' },
        { "tag": 'mud:mandrake' },
        { "item": 'enchanted:whiff_of_magic' },
        { "tag": 'mud:mandrake' },
        { "item": 'minecraft:gold_block' },
        { "item": 'hexerei:willow_log' }
    ],
  "output": {
    "id": "hexerei:willow_broom"
  },

  "fluidOutput": {
    "id": "minecraft:water",
    "amount": 1000
  }
})

//Crystal ball
    event.custom({
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "minecraft:lava",
    "amount": 250
  },
    "ingredients": [
        { "item": 'enchanted:attuned_stone' },
        { "tag": 'c:glass_blocks/colorless' },
        { "tag": 'c:glass_blocks/colorless' },
        { "tag": 'c:glass_blocks/colorless' },
        { "item": 'minecraft:stone' },
        { "tag": 'c:glass_blocks/colorless' },
        { "tag": 'c:glass_blocks/colorless' },
        { "tag": 'c:glass_blocks/colorless' }
    ],
  "output": {
    "id": "hexerei:crystal_ball"
  },
  'heatRequirement': "heated"
})

//Poppet Shelf
event.shaped(
    Item.of('enchanted:poppet_shelf'),
    [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        'A': 'enchanted:attuned_stone',
        'B': 'hexerei:selenite_shard',
        'C': 'minecraft:dark_oak_planks',
        'D': 'minecraft:green_wool'
    }
    
)

//Create Casings
event.recipes.create.deploying('create:shadow_steel_casing', ['betterend:dragon_tree_stripped_log', 'tfmg:steel_ingot'])
event.recipes.create.deploying('create:shadow_steel_casing', ['betterend:dragon_tree_stripped_bark', 'tfmg:steel_ingot'])
event.recipes.create.deploying('create:refined_radiance_casing', ['betterend:lacugrove_stripped_bark', 'tfmg:steel_ingot'])
event.recipes.create.deploying('create:refined_radiance_casing', ['betterend:lacugrove_stripped_log', 'tfmg:steel_ingot'])

//Create Limestone Crushing Merge
    //Create Limestone
    event.recipes.create.crushing(
        [
            'tfmg:limesand',
            'garnished:crushed_salt',
            'create_aquatic_ambitions:calcium_rich_powder',
            CreateItem.of('create_aquatic_ambitions:calcium_rich_powder', 0.5),
            CreateItem.of('create_aquatic_ambitions:suspicious_rock', 0.05),
            CreateItem.of('minecraft:iron_nugget', 0.2),
            CreateItem.of('create:zinc_nugget', 0.1),
        ],
        'create:limestone'
    )
    //Quark Limestone Crushing
    event.recipes.create.crushing(
        [
            'tfmg:limesand',
            'garnished:crushed_salt',
            'create_aquatic_ambitions:calcium_rich_powder',
            CreateItem.of('create_aquatic_ambitions:calcium_rich_powder', 0.5),
            CreateItem.of('create_aquatic_ambitions:suspicious_rock', 0.05),
            CreateItem.of('minecraft:iron_nugget', 0.2),
            CreateItem.of('create:zinc_nugget', 0.1),
        ],
        'quark:limestone'
    )
    //Quark Limestone Milling
    event.recipes.create.milling(
        [
            'garnished:crushed_salt',
            'create_aquatic_ambitions:calcium_rich_powder',
            CreateItem.of('create_aquatic_ambitions:calcium_rich_powder', 0.5),
            CreateItem.of('create_aquatic_ambitions:suspicious_rock', 0.05),
        ],
        'quark:limestone'
    )

    //Quark Create Limestone Switcher
    event.stonecutting('quark:limestone', 'create:limestone')
    event.stonecutting('create:limestone', 'quark:limestone')

//Quark / Twilight Forest - Hollow Logs
const TwilightHollowLogs = (output,input) => {
    event.shaped('4x '+output, [
        'L L',
        '   ',
        'L L'
        ], {
            L:input
        }
    )
}

//exclude vanilla mangrove (vangrove)
const VanillaHollowLogTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'cherry'
]

VanillaHollowLogTypes.forEach(LogType => {
    TwilightHollowLogs('twilightforest:hollow_'+LogType+'_log','minecraft:'+LogType+'_log')
})

const NetherHollowLogTypes = [
    'crimson',
    'warped'
]

TwilightHollowLogs('twilightforest:hollow_vangrove_log','minecraft:mangrove_log')

NetherHollowLogTypes.forEach(LogType => {
    TwilightHollowLogs('twilightforest:hollow_'+LogType+'_stem','minecraft:'+LogType+'_stem')
})

const TwilightHollowLogTypes = [
    'twilight_oak',
    'canopy',
    'mangrove',
    'dark',
    'time',
    'transformation',
    'mining',
    'sorting'
]

TwilightHollowLogTypes.forEach(LogType => {
    TwilightHollowLogs('twilightforest:hollow_'+LogType+'_log','twilightforest:'+LogType+'_log')
})

//Pointed Dripstone Crushing from Dripstone Blocks
event.recipes.create.crushing(
    [CreateItem.of('minecraft:pointed_dripstone', 0.25)],
    ['minecraft:dripstone_block']
)

//Let's Do Vinery Grapevine Stem
event.shaped(
    Item.of('vinery:grapevine_stem', 6),
    [
        ' L ',
        ' L ',
        ' L '
    ],
    {
        L: '#minecraft:logs'
    }
)

//Create Big Cannons - Cast Mould Blank
event.shaped(
    Item.of('kubejs:cast_mould_blank', 3),
    [
        '   ',
        'LLL',
        '   '
    ],
    {
        L: '#minecraft:logs'
    }
)

//Create Big Cannons - Cast Making
const castMouldTypes = [
    'very_small',
    'small',
    'medium',
    'large',
    'very_large',
    'cannon_end',
    'sliding_breech',
    'screw_breech',
    'autocannon_breech',
    'autocannon_recoil_spring',
    'autocannon_barrel'
]

castMouldTypes.forEach(type => {
    event.recipes.create.cutting('createbigcannons:'+type+'_cast_mould', 'kubejs:cast_mould_blank')
})

//Create Aquatic Ambitions - haunt spiky shells into turtle scutes
event.recipes.create.haunting(
    'minecraft:turtle_scute',
    'create_aquatic_ambitions:spiky_shell'
)

//Create Aquatic Ambitions - Bulk End spiky shells into shulker shells
event.custom({
    'type': 'create_dragons_plus:ending',
    'ingredients': [{'item': 'create_aquatic_ambitions:spiky_shell'}],
    'results': [{'id': 'minecraft:shulker_shell'}]
})

//TFMG color rock extruding
event.recipes.create_mechanical_extruder.extruding(
    Item.of('tfmg:galena'),
    [
        BlockPredicate.of('tfmg:lead_block'),
        BlockPredicate.of('minecraft:lava'),
    ]
).catalyst(BlockPredicate.of('minecraft:soul_soil'))

event.recipes.create_mechanical_extruder.extruding(
    Item.of('tfmg:bauxite'),
    [
        BlockPredicate.of('tfmg:aluminum_block'),
        BlockPredicate.of('minecraft:lava'),
    ]
).catalyst(BlockPredicate.of('minecraft:soul_soil'))

event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:asurine'),
    [
        BlockPredicate.of('create:zinc_block'),
        BlockPredicate.of('minecraft:lava'),
    ]
).catalyst(BlockPredicate.of('minecraft:soul_soil'))

event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:ochrum'),
    [
        BlockPredicate.of('minecraft:gold_block'),
        BlockPredicate.of('minecraft:lava'),
    ]
).catalyst(BlockPredicate.of('minecraft:soul_soil'))

event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:veridium'),
    [
        BlockPredicate.of('minecraft:oxidized_copper'),
        BlockPredicate.of('minecraft:lava'),
    ]
).catalyst(BlockPredicate.of('minecraft:soul_soil'))

//Lead Merge
//Replace Crushed Lead Washing output (event.replace does not support create washing)
event.recipes.create.splashing(
    [
        '9x tfmg:lead_nugget',
        CreateItem.of('create:experience_nugget', 0.5)
    ],
    'create:crushed_raw_lead'
)

//add stonecutting recipe for create nuclear and tfmg lead blocks
event.stonecutting('createnuclear:lead_block', 'tfmg:lead_block')
event.stonecutting('tfmg:lead_block', 'createnuclear:lead_block')

//add stonecutting recipe to change ores
event.stonecutting('createnuclear:deepslate_lead_ore', 'tfmg:deepslate_lead_ore')
event.stonecutting('createnuclear:lead_ore', 'tfmg:lead_ore')
event.stonecutting('tfmg:deepslate_lead_ore', 'createnuclear:deepslate_lead_ore')
event.stonecutting('tfmg:lead_ore', 'createnuclear:lead_ore')

//add stonecutting recipe to change raw ore blocks
event.stonecutting('createnuclear:raw_lead_block', 'tfmg:raw_lead_block')
event.stonecutting('tfmg:raw_lead_block', 'createnuclear:raw_lead_block')

//Steel Merge
//Replace molten metal solidifying recipe
event.recipes.create.compacting(
    'tfmg:steel_block',
    [Fluid.of('createbigcannons:molten_steel',810)]
)

event.recipes.create.compacting(
    'tfmg:steel_ingot',
    [Fluid.of('createbigcannons:molten_steel',90)]
)

event.recipes.create.compacting(
    'tfmg:steel_nugget',
    [Fluid.of('createbigcannons:molten_steel',10)]
)

//add stonecutting recipe for create nuclear and big cannons steel
event.stonecutting('createnuclear:steel_block', 'tfmg:steel_block')
event.stonecutting('tfmg:steel_block', 'createnuclear:steel_block')
event.stonecutting('createbigcannons:steel_block', 'tfmg:steel_block')
event.stonecutting('tfmg:steel_block', 'createbigcannons:steel_block')
event.stonecutting('createnuclear:steel_block', 'createbigcannons:steel_block')
event.stonecutting('createbigcannons:steel_block', 'createnuclear:steel_block')

//Cast Iron Merge
//Cast Iron from Iron and coal
event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('minecraft:iron_ingot'), Ingredient.of('#minecraft:coals')]
).heated()

event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('minecraft:iron_block'), Ingredient.of('#minecraft:coals', 9)]
).heated()

event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('minecraft:iron_block'), Ingredient.of('minecraft:coal_block')]
).heated()

//Compacting Molten Cast Iron
event.recipes.create.compacting(
    'tfmg:cast_iron_block',
    [Fluid.of('createbigcannons:molten_cast_iron', 810)]
)

event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Fluid.of('createbigcannons:molten_cast_iron', 90)]
)

event.recipes.create.compacting(
    'tfmg:cast_iron_nugget',
    [Fluid.of('createbigcannons:molten_cast_iron', 10)]
)

//Stonecutting Cast Iron Block Variants
event.stonecutting('createbigcannons:cast_iron_block', 'tfmg:cast_iron_block')
event.stonecutting('tfmg:cast_iron_block', 'createbigcannons:cast_iron_block')

//Sulfur Compat
event.recipes.create.crushing('tfmg:sulfur_dust', 'betterend:crystalline_sulphur')

//Slime Overhaul and Merge
//Glutinous Mass Sequenced Assembly
event.recipes.create.sequenced_assembly(
    //outputs
    [
        CreateItem.of('kubejs:glutinous_mass')
    ],
    //input
    '#c:foods/dough',
    //sequence
    [
        event.recipes.create.cutting('kubejs:incomplete_glutinous_mass', 'kubejs:incomplete_glutinous_mass'),
        event.recipes.create.filling('kubejs:incomplete_glutinous_mass', [Fluid.of('minecraft:water', 250), 'kubejs:incomplete_glutinous_mass']),
        event.recipes.create.pressing('kubejs:incomplete_glutinous_mass', 'kubejs:incomplete_glutinous_mass')
    ]
)
.transitionalItem('kubejs:incomplete_glutinous_mass')
.loops(3)

//Closing Brackets
})
