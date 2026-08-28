//Mahogany Broom (broken)
ServerEvents.recipes(event => {
    event.custom({
        "type": 'hexerei:mixingcauldron',
        "liquid": {
            "fluid": 'hexerei:blood_fluid'
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
            "item": 'hexerei:mahogany_broom'
        },
        "liquidOutput": {
            "fluid": 'hexerei:blood_fluid'
        },
        "fluidLevelsConsumed": 1000
    })

//Create Limestone Crushing Merge

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

//Closing Brackets
})
