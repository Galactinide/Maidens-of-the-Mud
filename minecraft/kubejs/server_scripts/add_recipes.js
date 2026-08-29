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
    event.shapeless(
        Item.of('quark:limestone'),
        [
            'create:limestone'
        ]
    )

    event.shapeless(
        Item.of('create:limestone'),
        [
            'quark:limestone'
        ]
    )

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

//exclude mangrove bc it's misspelled
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

//Create Aquatic Ambitions - haunt spiky shells into turtle scutes
event.recipes.create.haunting('minecraft:turtle_scute','create_aquatic_ambitions:spiky_shell')

//Create Aquatic Ambitions - Bulk End spiky shells into shulker shells
//this recipe is broken and idk why
event.custom({
    'type': 'create_dragons_plus:ending',
    'ingredients': [{'item': 'create_aquatic_ambitions:spiky_shell'}],
    'results': [{'id': 'minecraft:shulker_shell'}]
})

//Closing Brackets
})
