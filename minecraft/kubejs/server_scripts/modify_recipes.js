ServerEvents.recipes(event =>{

    //Make All Knives Unbreakable
    const FDKnives = [
        'create_things_and_misc:copper_knife',
        'create_things_and_misc:zinc_knife',
        'create_things_and_misc:brass_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'farmersdelight:golden_knife',
        'twilightdelight:ironwood_knife',
        'twilightdelight:steeleaf_knife',
        'twilightdelight:knightmetal_knife',
        'twilightdelight:fiery_knife'
        ]

        //unbreakable tag (finally working)
        FDKnives.forEach(knives => {
            event.replaceOutput(
                {output:knives},
                knives,
                Item.of(knives+"[minecraft:unbreakable={}]")
            )
            })

        //enchant for unbreakable (confirmed working)
        /*FDKnives.forEach(knives => {
            event.replaceOutput(
                {output:knives},
                knives,
                Item.of(knives).enchant('minecraft:unbreaking', 10)
            )
            })*/

    //doesn't work, I think washing is unsupported by bulk replace recipes        
    /*event.replaceOutput(
        {input: 'createnuclear:lead_nugget'},
        'createnuclear:lead_nugget',
        ('tfmg:lead_nugget')
    )*/

    //Replace Slimeball Recipes with #c:slime_balls tag
    event.replaceInput(
        {
            input: 'minecraft:slime_ball',
            not: {output:'minecraft:slime_block'},
            not: {output: 'minecraft:magma_cream'}
        },
        'minecraft:slime_ball',
        '#c:slime_balls'
    )

//Closing Brackets
})