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
        { "tag": 'mulch:mandrake' },
        { "item": 'enchanted:flying_ointment' },
        { "tag": 'mulch:mandrake' },
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
        { "tag": 'mulch:mandrake' },
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
        { "tag": 'mulch:mandrake' },
        { "item": 'enchanted:whiff_of_magic' },
        { "tag": 'mulch:mandrake' },
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
    event.shaped(output, [
        ' L ',
        'L L',
        ' L '
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

//Create Aquatic Ambitions - haunt spiky shells into turtle scutes
event.recipes.create.haunting(
    'minecraft:turtle_scute',
    'create_aquatic_ambitions:spiky_shell'
)

//Create Aquatic Ambitions - Bulk End spiky shells into shulker shells
//this recipe is broken and idk why
event.custom({
    'type': 'create_dragons_plus:ending',
    'ingredients': [{'item': 'create_aquatic_ambitions:spiky_shell'}],
    'results': [{'id': 'minecraft:shulker_shell'}]
})

//Chalk box Cardboard recipe
event.shaped(
    Item.of('chalk:chalk_box'),
    [
        'C C',
        'C C',
        'CCC'
    ],
    {
        C: 'create:cardboard'
    }
)

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

//Sulfur Compat
event.recipes.create.crushing('tfmg:sulfur_dust', 'betterend:crystalline_sulphur')

//Closing Brackets
})
