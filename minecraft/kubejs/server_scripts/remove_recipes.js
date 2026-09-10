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

//Let's Do Vinery - Grapevine Stem
    event.remove({id: 'vinery:grapevine_stem'})

//Create Big Cannons - Cast Mould recipes
    const castMouldTypes = [
        'very_small',
        'small',
        'medium',
        'large',
        'very_large',
        'cannon_end',
        'sliding_breech',
        'screw_breech',
        'autocannon_breech',
        'autocannon_recoil_spring',
        'autocannon_barrel'
    ]

    castMouldTypes.forEach(type => {
        event.remove({id: 'createbigcannons:cutting/'+type+'_cast_mould'})
    })

//Cast Iron Merge
    //TFMG Cast Iron from Ingots (to replace original)
        event.remove({id: 'tfmg:compacting/cast_iron'})

    //CBC Cast Iron from Ingots
        event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_ingot'})
        event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_block'})

    //CBC Molten Cast Iron to Ingot
        event.remove({id: 'createbigcannons:compacting/forge_cast_iron_block'})
        event.remove({id: 'createbigcannons:compacting/forge_cast_iron_ingot'})
        event.remove({id: 'createbigcannons:compacting/forge_cast_iron_nugget'})

    //CBC remove ingot block nugget
        event.remove({id: 'createbigcannons:cast_iron_nugget'})
        event.remove({id: 'createbigcannons:cast_iron_ingot_from_nuggets'})
        event.remove({id: 'createbigcannons:cast_iron_ingot_from_block'})
        event.remove({id: 'createbigcannons:cast_iron_block'})

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

//Create Mechanical Extruder - Standardize Color Rock Recipes
    event.remove({id: 'create_mechanical_extruder:extruding/asurine'})
    event.remove({id: 'create_mechanical_extruder:extruding/veridium'})
    event.remove({id: 'create_mechanical_extruder:extruding/ochrum'})

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

//Remove overlapping Farmer's Delight dough mixing recipe (why would you do this create: food?)
    event.remove({id: 'createfood:create/mixing/wheat_dough_from_mixing_water_farmersdelight'})

//Slime Overhaul and Merge
    //Remove Create Slimeball Recipes
        event.remove({id: 'create:crafting/appliances/slime_ball'})
        event.remove({id: 'create_dragons_plus:dye_fluid_coloring/minecraft/lime/create/crafting/appliances/slime_ball_as_coloring'})
        event.remove({id: 'create_dragons_plus:dye_fluid_coloring/minecraft/lime/garnished/dye_blowing/minecraft/lime/slime_ball'})
        event.remove({id: 'create_dragons_plus:dye_fluid_coloring/minecraft/green/garnished/dye_blowing/minecraft/green/slime_ball'})
        event.remove({id: 'create:crafting/appliances/slime_ball_as_coloring'})
        event.remove({id: 'garnished:dye_blowing/minecraft/lime/slime_ball'})
        event.remove({id: 'garnished:dye_blowing/minecraft/green/slime_ball'})

    //Remove Maze Slimeball Recipes in favor of tagged recipes
        event.remove({id: 'twilightforest:sticky_piston_maze_ver'})
        event.remove({id: 'twilightforest:lead_maze_ver'})
        event.remove({id: 'twilightforest:magma_cream_maze_ver'})

//Jetpack Crafting Overhaul
    event.remove({id: 'create_jetpack:jetpack'})
    event.remove({id: 'create_jetpack:netherite_jetpack'})

//Remove Slimeball only Mastic Resin [Broken: Mastic Resin recipe is not changeable due to weird Garnished warning errors]
    //event.remove({id: 'garnished:compacting/mastic_resin/base'})

//Replacing Uranium powder in crushing granite
    event.remove({id: 'create:crushing/granite'})

//Closing Brackets
})


