ServerEvents.recipes(event => {

//Hexerei
event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron'})
event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron'})
event.remove({ id: 'hexerei:crystal_ball_from_mixing_cauldron'})

//Enchanted
event.remove({ id: 'enchanted:poppet_shelf'})

//Create Limestone Crushing Merge
//make sure to remove the leading "jei:/" and replace the next "/" with a ":" for recipes that start with jei
event.remove({ id: 'create:crushing/limestone'})
event.remove({ id: 'garnished:integration/create_aquatic_ambitions/crushed_salt_crushing'})
event.remove({ id: 'create:milling/limestone'})

//Create Aquatic Ambitions Remove Trident Recipe
event.remove({ id: 'create_aquatic_ambitions:crafting/materials/trident'})

//Create Nuclear / Create Big Cannons - Remove Steel
event.remove({ id: 'createbigcannons:mixing/alloy_steel'})
event.remove({ id: 'createnuclear:mixing/steel'})

//Quark / Twilight Forest - Hollow Logs
    //Twilight HL switch to quark pattern
        //exclude vanilla mangrove log (vangrove)
const LogTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'cherry',
    'twilight_oak',
    'canopy',
    'mangrove',
    'dark',
    'time',
    'transformation',
    'mining',
    'sorting'
]

LogTypes.forEach(type => {
    event.remove({ id: 'twilightforest:stonecutting/'+type+'_log/hollow_'+type+'_log'})
})

const StemTypes = [
    'crimson',
    'warped'
]

StemTypes.forEach(type => {
    event.remove({ id: 'twilightforest:stonecutting/'+type+'_stem/hollow_'+type+'_stem'})
})

event.remove({ id: 'twilightforest:stonecutting/mangrove_log/hollow_vangrove_log'})

//Closing Brackets
})
