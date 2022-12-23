/**
    task : get all the menus from array, it could be under any key.
    target the value who contains the word menu
**/

const data = [
    {
        name: 'Menu',
        link: 'link',
        subItems: [
            {
                name: 'Menu 2',
                link: 'linkBBB',
            },
        ],
    },
    {
        name: 'Menu 3',
        link: 'link',
        subItems: [
            {
                name: 'Menu 4',
                link: 'linkBBB',
            },
            {
                name: 'Menu 5',
                link: 'linkBBB',
                subItems: [
                    {
                        name: 'Menu 2',
                        link: 'Link 66',
                        subItems: [
                            {
                                name: 'Menu 88'
                            }
                        ]
                    },
                ],
            },
        ],
    },
];


const findAllMenuValues = (arr) => {

    const values = [];
    for (const [key, value] of Object.entries(arr)) {

        if (value.toString().toLowerCase().match('menu')) {
            values.push(value);
        }
        else if (typeof value === 'object') {
            console.log("### else part ###", key, "::>", value)
            values.push(...findAllMenuValues(value));
        }
    }
    return values;
}

const names = data.map((val) => findAllMenuValues(val))



console.log("##### names #####", typeof (names), names)

