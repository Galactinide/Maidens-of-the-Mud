//ITEM OBLITERATION CATALOG
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    
    //quark Hollow Logs
    /*const quarkVanillaHollowLogs = [
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
        
    })*/

    //more delight knives
    event.remove('moredelight:wooden_knife')
    event.remove('moredelight:stone_knife')

    //create: propulsion simulated pine resin and turpentine bucket
    event.remove('createpropulsion:pine_resin')
    event.remove('createpropulsion:turpentine_bucket')

    //Lead Merge
    event.remove('createnuclear:lead_ingot')
    event.remove('createnuclear:lead_nugget')
    event.remove('createnuclear:raw_lead')

    //Steel Merge
    event.remove('createnuclear:steel_ingot')
    event.remove('createnuclear:steel_nugget')
    event.remove('createbigcannons:steel_ingot')

    //Cast Iron Merge
    event.remove('createbigcannons:cast_iron_ingot')

    //Complicated Bees remove Diamond and Netherite bees
    const beeTypes = [
        'dimantic',
        'adamantine'
    ]

    const combTypes = [
        'diamond',
        'netherite'
    ]

    //remove nests
    beeTypes.forEach(type => {
        event.remove('complicated_bees:bee_nest[block_entity_data={id:"complicated_bees:bee_nest",species:"complicated_bees:'+type+'"}]')
    })

    //remove combs
    combTypes.forEach(type => {
        event.remove('complicated_bees:comb[complicated_bees:comb_type="complicated_bees:'+type+'"]')
    })
    //not removing the bees because they have way too much data for me to just remove them cleanly

    //Create Cafe recipeless culling
    const emptyCafe = [
        'mango',
        'lime',
        'lychee',
        'kiwi',
        'lemon',
        'strawberry',
        'blueberry',
        'orange',
        'peach',
        'pineapple',
        'banana',
        'yucca',
        'cherry',
        'plum',
        'aloe',
        'blackberry',
        'jackfruit',
        'coconut',
        'dragonfruit',
        'apricot',
        'durian',
        'fig',
        'tamarind',
        'gooseberry',
        'grapefruit',
        'papaya',
        'guava',
        'passionfruit',
        'pomegranate',
        'persimmon',
        'raspberry',
        'starfruit',
        'lavender',
        'pomelo',
        'mandarin',
        'citron',
        'redlove',
        'barberry'
    ]

    emptyCafe.forEach(type => {
        event.remove('createcafe:'+type+'_milk_tea')
        event.remove('createcafe:'+type+'_tea_bucket')
    })

    const emptySyrup = [
        'strawberry',
        'vanilla',
        'raspberry',
        'coconut',
        'banana'
    ]

    emptySyrup.forEach(type => {
        event.remove('createcafe:'+type+'_syrup_bucket')
    })

//Closing Brackets
})

//FLUID OBLITERATION CATALOG
RecipeViewerEvents.removeEntriesCompletely('fluid', event => {

    //create propulsion simulated turpentine
    event.remove('createpropulsion:turpentine')

    //Create Cafe recipeless culling
    const emptyCafe = [
        'mango',
        'lime',
        'lychee',
        'kiwi',
        'lemon',
        'strawberry',
        'blueberry',
        'orange',
        'peach',
        'pineapple',
        'banana',
        'yucca',
        'cherry',
        'plum',
        'aloe',
        'blackberry',
        'jackfruit',
        'coconut',
        'dragonfruit',
        'apricot',
        'durian',
        'fig',
        'tamarind',
        'gooseberry',
        'grapefruit',
        'papaya',
        'guava',
        'passionfruit',
        'pomegranate',
        'persimmon',
        'raspberry',
        'starfruit',
        'lavender',
        'pomelo',
        'mandarin',
        'citron',
        'redlove',
        'barberry'
    ]

    emptyCafe.forEach(type => {
        event.remove('createcafe:'+type+'_tea')
    })

    const emptySyrup = [
        'strawberry',
        'vanilla',
        'raspberry',
        'coconut',
        'banana'
    ]

    emptySyrup.forEach(type => {
        event.remove('createcafe:'+type+'_syrup')
    })
})