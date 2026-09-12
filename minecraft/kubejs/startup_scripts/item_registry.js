
StartupEvents.registry('item', event => {
    //Le fishe au chocolat
    event.create('le_fishe_au_chocolat')
        .displayName('Le Fishe au Chocolat')
        .texture('mud:item/lefisheauchocolat')
        .maxStackSize(2)
        .tooltip('Le Fishe au Chocolat')
        .food(food => {
            food
                .nutrition(1)
                .saturation(0.1)
                .effect('minecraft:glowing', 1200, 0, 1.0)
                .effect('minecraft:nausea', 200, 1, 1.0)
                .alwaysEdible()
        })
})