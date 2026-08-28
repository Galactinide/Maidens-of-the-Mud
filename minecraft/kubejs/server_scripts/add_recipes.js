ServerEvents.recipes(event => {

    //Mahogany Broom (broken)
    event.custom({
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "minecraft:water",
    "amount": 1000
  },
    "ingredients": [
        {
            "item": 'minecraft:netherite_ingot'
        },
        {
            "item": 'hexerei:mahogany_log'
        },
        {
            "item": 'enchanted:demonic_blood'
        },
        {
            "tag": 'mulch:mandrake'
        },
        {
            "item": 'enchanted:flying_ointment'
        },
        {
            "tag": 'mulch:mandrake'
        },
        {
            "item": 'enchanted:demonic_blood'
        },
        {
            "item": 'hexerei:mahogany_log'
        }
    ],
  "output": {
    "id": "hexerei:mahogany_broom"
  },

  "fluidOutput": {
    "id": "hexerei:blood_fluid",
    "amount": 1000
  }
})

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

//Closing Brackets
})
