import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    price: '$20',
    title: 'Aperol Sprtiz',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    price: '$16',
    title: "Dark 'N' Stormy",
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    price: '$10',
    title: 'Daiquiri',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    price: '$31',
    title: 'Old Fashioned',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    price: '$26',
     title: 'Negroni',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];



const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
