
StartupEvents.registry('item', event => {
    //Glutinous Mass (Create Slime Overhaul)
    event.create('glutinous_mass')
        .displayName('Glutinous Mass')
        .texture('mud:item/glutinous_mass')
        .maxStackSize(64)

    event.create('incomplete_glutinous_mass')
        .displayName('Sticky Glutinous Mess')
        .texture('mud:item/incomplete_glutinous_mass')
        .maxStackSize(64)

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
        
    //Pitchblende
    event.create('pitchblende')
        .displayName('Pitchblende')
        .texture('mud:item/pitchblende')
        .maxStackSize(64)
            
    
})