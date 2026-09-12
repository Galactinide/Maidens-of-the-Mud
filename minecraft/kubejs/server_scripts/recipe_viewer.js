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

    event.remove('createcafe:blood_orange')
    event.remove('createcafe:blood_orange_milk_tea')
    event.remove('createcafe:blood_tea_bucket')
    event.remove('createcafe:mana_berries')
    event.remove('createcafe:mana_berry_milk_tea')
    event.remove('createcafe:mana_tea_bucket')

    //Supplementaries Cannon Boats
    const vanillaCannonBoatTypes = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'cherry',
        'mangrove'
    ]

    vanillaCannonBoatTypes.forEach(type => {
        event.remove('supplementaries:cannon_boat_'+type)
    })
    
    event.remove('supplementaries:cannon_raft_bamboo')

    const quarkCannonBoatTypes = [
        'ancient',
        'azalea',
        'blossom'
    ]

    quarkCannonBoatTypes.forEach(type => {
        event.remove('supplementaries:quark/cannon_boat_'+type)
    })

    const hexereiCannonBoatTypes = [
        'mahogany',
        'willow'
    ]

    hexereiCannonBoatTypes.forEach(type => {
        event.remove('supplementaries:hexerei/cannon_boat_'+type)
    })

    const twilightCannonBoatTypes = [
        'canopy',
        'mangrove',
        'dark',
        'time',
        'transformation',
        'mining',
        'sorting',
        'twilight_oak'
    ]

    twilightCannonBoatTypes.forEach(type => {
        event.remove('supplementaries:twilightforest/cannon_boat_'+type)
    })

    event.remove('supplementaries:expandeddelight/cannon_boat_cinnamon')
    event.remove('supplementaries:vinery/cannon_boat_dark_cherry')
    
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

    event.remove('createcafe:blood_tea')
    event.remove('createcafe:mana_tea')

//Closing Brackets
})