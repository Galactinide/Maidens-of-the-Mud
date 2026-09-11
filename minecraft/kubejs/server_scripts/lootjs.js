LootJS.modifiers(event => {
    event.addBlockModifier('createnuclear:deepslate_lead_ore')
        .replaceLoot('createnuclear:raw_lead', 'tfmg:raw_lead')
        .replaceLoot('createnuclear:deepslate_lead_ore', 'tfmg:deepslate_lead_ore')
    event.addBlockModifier('createnuclear:lead_ore')
        .replaceLoot('createnuclear:raw_lead', 'tfmg:raw_lead')
        .replaceLoot('createnuclear:lead_ore', 'tfmg:lead_ore')
})

