ServerEvents.recipes(event => {

//Hexerei
event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron'})
event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron'})

//Create Limestone Crushing Merge
//make sure to remove the leading "jei:/" and replace the next "/" with a ":" for recipes that start with jei
event.remove({ id: 'create:crushing/limestone'})
event.remove({ id: 'garnished:integration/create_aquatic_ambitions/crushed_salt_crushing'})

//Closing Brackets
})