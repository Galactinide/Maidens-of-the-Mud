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

//Steel Merge
//Create Nuclear / Create Big Cannons - Remove Steel recipe
event.remove({ id: 'createbigcannons:mixing/alloy_steel'})
event.remove({ id: 'createnuclear:mixing/steel'})

//Create Nuclear - remove steel ingot nugget block recipes
event.remove({id: 'createnuclear:crafting/steel_ingot_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/steel_ingot_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/steel_ingot_from_compacting'})
event.remove({id: 'createnuclear:crafting/steel_nugget_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/steel_nugget_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/steel_block_from_compacting'})

//Create Big Cannons - remove steel ingot nugget block recipes
event.remove({id: 'createbigcannons:steel_ingot_from_nuggets'})
event.remove({id: 'createbigcannons:steel_ingot_from_block'})
event.remove({id: 'createbigcannons:steel_scrap'})
event.remove({id: 'createbigcannons:steel_block'})

//Create Big Cannons - remove default steel casting
event.remove({id: 'createbigcannons:compacting/forge_steel_block'})
event.remove({id: 'createbigcannons:compacting/forge_steel_ingot'})
event.remove({id: 'createbigcannons:compacting/forge_steel_nugget'})

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

//Remove quark Hollow Logs
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
    event.remove({id: 'quark:building/crafting/hollowlogs/hollow_'+type+'_log'})
    event.remove({id: 'sawmill:quark_hollow_'+type+"_log_0"})
})

const quarkVanillaHollowStems = [
    'crimson',
    'warped'
]

quarkVanillaHollowStems.forEach(type => {
    event.remove({id: 'quark:building/crafting/hollowlogs/hollow_'+type+'_stem'})
    event.remove({id: 'sawmill:quark_hollow_'+type+"_stem_0"})
})*/

//More Delight Knives
event.remove({id: 'moredelight:wooden_knife'})
event.remove({id: /sawmill:moredelight_wooden_knife_.*/})
event.remove({id: 'moredelight:stone_knife'})

//Create: Propulstion Simulated Pine Resin and Turpentine
event.remove({id: 'createpropulsion:crushing/spruce_log'})
event.remove({id: 'createpropulsion:mixing/turpentine'})

//Lead Merge
//Replace Crushed Lead washing output with TFMG lead (event.replace doesnt support create washing)
event.remove({id: 'create:splashing/crushed_raw_lead'})

//remove create nuclear lead smelting
const leadSmeltTypes = [
    'lead',
    'raw_lead',
    'lead_ore'
]

leadSmeltTypes.forEach(type => {
    event.remove({id: 'createnuclear:smelting/lead_ingot_for_'+type})
    event.remove({id: 'createnuclear:blasting/lead_ingot_for_'+type})
})

//remove create nuclear lead ingot crafting from nuggets and blocks
event.remove({id: 'createnuclear:crafting/lead_ingot_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/lead_ingot_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/lead_ingot_from_compacting'})

//remove create nuclear lead nugget crafting from ingots
event.remove({id: 'createnuclear:crafting/lead_nugget_from_decompacting'})
event.remove({id: 'createnuclear:crafting/crafting/lead_nugget_from_decompacting'})

//remove create nuclear lead block recipe
event.remove({id: 'createnuclear:crafting/crafting/lead_block_from_compacting'})

//remove create nuclear lead raw ore crafting
event.remove({id: 'createnuclear:crafting/raw_lead_from_decompacting'})

//remove create nuclear lead raw ore block crafting
event.remove({id: 'createnuclear:crafting/raw_lead_block'})

//Remove Dimantic and Adamantine (Diamond and Netherite) Bees
    const beeTypes = [
    'dimantic',
    'adamantine'
]

const combTypes = [
    'diamond',
    'netherite'
]

//Remove Bee Mutation
event.remove({id: 'complicated_bees:mutation/metallic/adamantine'})
event.remove({id: 'complicated_bees:mutation/mineral/dimantic'})

//Remove Comb Production (doesn't work for some reason)
/*beeTypes.forEach(type => {
    event.remove({id: 'complicated_bees:bee_produce/complicated_bees/'+type})
})*/

//Remove Comb Centrifuging
combTypes.forEach(type => {
    event.remove({id: 'complicated_bees:centrifuge/'+type+'_comb'})
})

//Closing Brackets
})


