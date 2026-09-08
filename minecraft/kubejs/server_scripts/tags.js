//Item Tags
ServerEvents.tags('item', event => {
    //mulch:mandrake
    event.add('mulch:mandrake', 'enchanted:mandrake_root')
    event.add('mulch:mandrake', 'hexerei:mandrake_root')

    //lead merge
    event.remove('c:ingots/lead', 'createnuclear:lead_ingot')
    event.remove('c:ingots', 'createnuclear:lead_ingot')
    event.remove('c:nuggets/lead', 'createnuclear:lead_nugget')
    event.remove('c:nuggets', 'createnuclear:lead_nugget')
    event.remove('c:raw_materials/lead', 'createnuclear:raw_lead')
    event.remove('c:raw_materials', 'createnuclear:raw_lead')
    event.remove('c:raw_ores', 'createnuclear:raw_lead')

    //steel merge
    event.remove('c:ingots/steel', 'createnuclear:steel_ingot')
    event.remove('c:ingots', 'createnuclear:steel_ingot')
    event.remove('c:ingots/steel', 'createbigcannons:steel_ingot')
    event.remove('c:ingots', 'createbigcannons:steel_ingot')
    event.remove('c:nuggets/steel', 'createnuclear:steel_nugget')
    event.remove('c:nuggets', 'createnuclear:steel_nugget')
    //leaving in steel scrap because you get that from breaking cannons
    //also leaving CBC molten steel alone because it does weird stuff if you remove it from the tags

    //cast iron merge
    event.remove('c:ingots/cast_iron', 'createbigcannons:cast_iron_ingot')
    event.remove('c:ingots', 'createbigcannons:cast_iron_ingot')

//closing brackets
})

//Fluid Tags
ServerEvents.tags('fluid', event => {

//closing brackets
})