ServerEvents.recipes(event =>{

    //Make All Knives Unbreakable
    /*const knifeunbreak = (kbknife) => {
        event.replaceOutput(
        {output:kbknife},
        kbknife,
        Item.of(kbknife).enchant('minecraft:unbreaking',10)
        )
        knifeunbreak('create_things_and_misc:copper_knife')
        knifeunbreak('create_things_and_misc:zinc_knife')
        knifeunbreak('create_things_and_misc:brass_knife')
        knifeunbreak('farmersdelight:flint_knife')
        knifeunbreak('farmersdelight:iron_knife')
        knifeunbreak('farmersdelight:diamond_knife')
        knifeunbreak('farmersdelight:netherite_knife')
        knifeunbreak('farmersdelight:golden_knife')
        knifeunbreak('twilightdelight:ironwood_knife')
        knifeunbreak('twilightdelight:steeleaf_knife')
        knifeunbreak('twilightdelight:knightmetal_knife')
        knifeunbreak('twilightdelight:fiery_knife')
    }*/
    
    //Make all knives unbreakable take 2
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

        FDKnives.forEach(knives => {
            event.replaceOutput(
                {output:knives},
                knives,
                Item.of(knives).enchant('minecraft:unbreaking', 10)
            )
            })

    //{Unbreakable: 1b}
    //make iron knife sharp (test: works)
    /*event.replaceOutput(
        {output:'farmersdelight:iron_knife'},
        'farmersdelight:iron_knife',
        Item.of('farmersdelight:iron_knife').enchant('minecraft:unbreaking',10)
    )*/
    

//Closing Brackets
})