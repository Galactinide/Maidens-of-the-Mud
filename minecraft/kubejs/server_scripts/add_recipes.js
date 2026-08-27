ServerEvents.recipes(event => {
    event.custom({
        "type": 'hexerei:mixingcauldron',
        "liquid": {
            "fluid": 'hexerei:blood_fluid'
        },
        "ingredients": [
            {
                'item': "minecraft:netherite_ingot"
            },
            {
                'item': "hexerei:mahogany_log"
            },
            {
                'item': "enchanted:demonic_blood"
            },
            {
                'tag': "mulch:mandrake"
            },
            {
                'item': "enchanted:flying_ointment"
            },
            {
                'tag': "mulch:mandrake"
            },
            {
                'item': "enchanted:demonic_blood"
            },
            {
                'item': "hexerei:mahogany_log"
            }
        ],
        "output": {
            'item': "hexerei:mahogany_broom"
        },
        "liquidOutput": {
            'fluid': "hexerei:blood_fluid"
        },
        "fluidLevelsConsumed": 1000
    })



})
