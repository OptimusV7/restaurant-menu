import { Item } from "../model/item";

export const MENUS: Item[] = [
  {
    name: 'Salad',
    choices: [
      {
        name: 'Santa Fe'
      },
      {
        name: 'Greek'
      },
      {
        name: 'Asian'
      },

    ],
    related: [
      {
        name: 'Dressing',
        choices: [
          {
            name: 'Italian'
          },
          {
            name: 'Blue Cheese'
          },
          {
            name: 'Ranch'
          },

        ]
      },
      {
        name: 'Bread',
        choices: [
          {
            name: 'Italian'
          },
          {
            name: 'Flat'
          },
          {
            name: 'Sourdough'
          },

        ]
      }
    ]
  },
  {
    name: 'Entree',
    choices: [
      {
        name: 'Steak'
      },
      {
        name: 'Salmon'
      },
      {
        name: 'Rice'
      },

    ],
  },
  {
    name: 'Soup',
    choices: [
      {
        name: 'Minestrone'
      },
      {
        name: 'Hot and sour'
      },
      {
        name: 'Miso'
      },

    ],
    related: [
      {
        name: 'Bread',
        choices: [
          {
            name: 'Breadsticks'
          }
        ]
      }
    ]
  }
];
