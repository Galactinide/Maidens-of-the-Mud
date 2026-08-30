//ITEM OBLITERATION CATALOG
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    
    //quark Hollow Logs
    const quarkVanillaHollowLogs = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry'
    ]

    quarkVanillaHollowLogs.forEach(type => {
        event.remove('quark:hollow_'+type+'_log')
    })

    const quarkVanillaHollowStems =[
        'crimson',
        'warped'
    ]

    quarkVanillaHollowStems.forEach(type => {
        event.remove('quark:hollow_'+type+'_stem')
        
    })

    //more delight knives
    event.remove('moredelight:wooden_knife')
    event.remove('moredelight:stone_knife')

    //create: propulsion simulated pine resin and turpentine bucket
    event.remove('createpropulsion:pine_resin')
    event.remove('createpropulsion:turpentine_bucket')

//Closing Brackets
})

//FLUID OBLITERATION CATALOG
RecipeViewerEvents.removeEntriesCompletely('fluid', event => {

    //create propulsion simulated turpentine
    event.remove('createpropulsion:turpentine')

})