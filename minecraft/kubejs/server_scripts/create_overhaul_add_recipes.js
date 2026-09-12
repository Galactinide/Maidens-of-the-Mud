ServerEvents.recipes(event => {
//Uranium Processing
    //Main Pre Line
    event.custom({
        'type': 'create_dragons_plus:ending',
        'ingredients': [{'item': 'minecraft:granite'}],
        'results': [{'id': 'createnuclear:autunite'}]
    })

    event.recipes.create.crushing(
        [
            'kubejs:uranium_rich_gravel'
        ],
        'createnuclear:autunite'
    )

    event.recipes.create.compacting(
        'kubejs:dense_uranium_rich_gravel',
        [
            Ingredient.of('kubejs:uranium_rich_gravel'),
            Ingredient.of('kubejs:uranium_rich_gravel')
        ]
    )

    event.recipes.create.splashing(
        'kubejs:uranium_rich_slurry',
        'kubejs:dense_uranium_rich_gravel'
    )

    event.recipes.create.compacting(
        [
            'kubejs:pitchblende', 
            'kubejs:uranium_poor_tailings'
        ],
        [
            'kubejs:uranium_rich_slurry',
            'create:crushed_raw_lead'
        ]
    )
    .heated()

    event.recipes.create.mixing(
        'kubejs:tyuyayamunite', 
        [
            'minecraft:yellow_dye',
            'kubejs:pitchblende'
        ])
        .superheated()
    event.recipes.create.crushing(
        [
            CreateItem.of('create:crushed_raw_uranium'),
            CreateItem.of('create:crushed_raw_lead', 0.75),
            CreateItem.of('minecraft:granite', 0.5)

        ],
        'kubejs:tyuyayamunite'
    )

    //Offshoot Pre Line
    event.recipes.create.sequenced_assembly(
        [
        CreateItem.of('kubejs:dense_uranium_rich_gravel', 0.4),
        CreateItem.of('create:crushed_raw_iron', 0.2),
        CreateItem.of('create:crushed_raw_gold', 0.2),
        CreateItem.of('create:crushed_raw_zinc', 0.2),
        CreateItem.of('create:crushed_raw_lead', 0.2)
        ],
        'kubejs:uranium_poor_tailings',
        [
            event.recipes.create.filling('kubejs:uranium_poor_slurry', ['kubejs:uranium_poor_slurry', Fluid.of('minecraft:water', 250)]),
            event.recipes.create.pressing('kubejs:uranium_poor_slurry', 'kubejs:uranium_poor_slurry')
        ]
    )
    .transitionalItem('kubejs:uranium_poor_slurry')
    .loops(3)

    //Main Post Line
    event.recipes.create.mechanical_crafting(
        Item.of('kubejs:brittle_uranium_rod'),
        [
            '    Y',
            '   Y ',
            '  Y  ',
            ' Y   ',
            'Y    '
        ],
        {
            Y: 'createnuclear:enriched_yellowcake'
        }
    )

    event.recipes.create.compacting(
        [
            'createnuclear:uranium_rod',
            'kubejs:yellowgangue'
        ],
        'kubejs:brittle_uranium_rod'
    )
    .superheated()

    event.recipes.create.crushing(
        'kubejs:yellowgravel',
        'kubejs:yellowgangue'
    )

    event.recipes.create.sequenced_assembly(
        'kubejs:uranium_poor_tailings',
        'kubejs:yellowgravel',
        [
            event.recipes.create.filling('kubejs:yellowslurry', ['kubejs:yellowslurry', Fluid.of('tfmg:sulfuric_acid', 250)]),
            event.recipes.create.filling('kubejs:yellowslurry', ['kubejs:yellowslurry', Fluid.of('minecraft:water', 500)]),
            event.recipes.create.pressing('kubejs:yellowslurry', 'kubejs:yellowslurry')
        ]
    )
    .transitionalItem('kubejs:yellowslurry')
    .loops(2)

//Closing Brackets
})
