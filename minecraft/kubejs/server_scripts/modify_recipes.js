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
    const CTAMKnives = [
        'copper_knife',
        'zinc_knife',
        'brass_knife'
    ]
    
    const FDKnives = [
        'iron_knife',
        'diamond_knife',
        'netherite_knife',
        'golden_knife'
    ]

    const TDKnives = [
        'ironwood_knife',
        'steeleaf_knife',
        'knightmetal_knife',
        'fiery_knife'
    ]
    
    CTAMKnives.forEach(CTAMKnives => {
        event.replaceOutput(
            {output:'create_things_and_misc:$==={CTAMKnives}==='},
            'create_things_and_misc:$==={CTAMKnives}===',
            Item.of('create_things_and_misc:$==={CTAMKnives}===').enchant('minecraft:unbreaking', 10)
        )
    })

    FDKnives.forEach(FDKnives => {
        event.replaceOutput(
            {output:'farmersdelight:$==={FDKnives}==='},
            'farmersdelight:$==={FDKnives}===',
            Item.of('farmersdelight:$==={FDKnives}===').enchant('minecraft:unbreaking', 10)
        )
    })

    TDKnives.forEach(TDKnives => {
        event.replaceOutput(
            {output:'twilightdelight:$==={TDKnives}==='},
            'twilightdelight:$==={TDKnives}===',
            Item.of('twilightdelight:$==={TDKnives}===').enchant('minecraft:unbreaking', 10)
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