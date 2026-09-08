
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
    
})