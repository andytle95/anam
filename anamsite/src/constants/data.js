import images from './images';

const appetizers = [
  {
    title: 'Wonton Soup',
    price: '$6.95',
    tags: 'Pork and shrimp wontons in a pork broth.',
  },
  {
    title: 'Fish Sauce Wings',
    price: '$10.95',
    tags: 'Vietnamese style wings with onions and bell peppers. Each order comes with 6 wings.',
  },
  {
    title: 'Bánh Bèo',
    price: '$5.95',
    tags: 'Steamed rice cake with house toppings.',
  },
  {
    title: 'Bánh Ram Ít',
    price: '$5.95',
    tags: 'Stuffed steamed rice dumplings.',
  },
  {
    title: 'Nem Cua Bể',
    price: '$14.95',
    tags: 'Deep fried rice paper rolls served with crab meat, prawns, and pork.',
  },
  {
    title: 'Spring Rolls',
    price: '$6.95',
    tags: 'Shrimp, pork, lettuce, mint and vermicelli noodles wrapped in a rice paper served with housemade peanut sauce.',
  },
  {
    title: 'Roasted Pork',
    price: '$12.95',
    tags: 'Roasted pork served with lettuce, mint, and vermicelli noodles.',
  },

  {
    title: 'Fried Daikon Cake',
    price: '$8.95',
    tags: 'Fried daikon with eggs served with sweet soy sauce vinaigrette dressing.',
  },

  {
    title: 'Spicy Tamarind Prawns',
    price: '$8.95',
    tags: 'Six prawns per serving.',
  },

  {
    title: 'Fried Wonton',
    price: '$5.95',
    tags: 'Deep fried pork and shrimp wontons.',
  },

  {
    title: 'Salt and Pepper Prawns',
    price: '$8.95',
    tags: 'Six prawns per serving.',
  },

  {
    title: 'Fried Cuttlefish',
    price: '$8.95',
    tags: 'Seasoned with salt and pepper.',
  },

  {
    title: 'Gói Tôm Sen',
    price: '$12.94',
    // tags: 'Seasoned with salt and pepper.',
  },



];

const dimsum = [
  {
    title: 'Ha Gow',
    price: '$4.95',
    tags: 'Shrimp dumplings with bamboo shoots.',
  },
  {
    title: "Sui Mai",
    price: '$4.95',
    tags: 'Pork and shrimp dumplings topped with roe.',
  },
  {
    title: 'Chicken Feet',
    price: '$5.95',
    tags: 'Popular dim sum favorite.',
  },
  {
    title: 'Prawns and Chive Dumpling',
    price: '$6.95',
    tags: 'Translucent dumplings filled with prawns and chives.',
  },
  {
    title: 'Shrimp Balls',
    price: '$6.95',
    tags: 'Deep fried prawns with a flaky texture.',
  },
];

const entrees = [
  {
    title: 'Mi Go Combination Egg Noodle',
    price: '$13.95',
  },
  {
    title: 'Banh Mi Chao Sizzling Filet Mignon',
    price: '$18.95',
  },
  {
    title: 'Xiu Mai Da Lat',
    price: '$9.95',
  },
  {
    title: 'Com Bo Steak / Ribeye with Rice',
    price: '$18.95',
  },
    {
    title: 'Com Ga Chien / Fried Chicken with Rice',
    price: '$15.95',
  },
  {
    title: 'Com Tom Kho Tau / Saute Prawns in Roe Sauce with Rice',
    price: '$18.95',
  },
  {
    title: 'Pho',
    price: '$13.95',
  },
  {
    title: 'Bun Bo Hue / Spicy Beef Noodles',
    price: '$13.95',
  },
  {
    title: 'Chao Long / Pork Congee',
    price: '$12.95',
  },
  {
    title: 'Bun Mam / Fermented Fish Noodles',
    price: '$13.95',
  },

  {
    title: 'Bánh Canh Cua / Crab Udon Soup',
    price: '$13.95',
  },

  {
    title: 'Steak Garlic Noodle',
    price: '$20',
  },

  {
    title: 'Prawns Garlic Noodle',
    price: '$20',
  },

];

const drinks = [

  {
    title: 'Ca Phe Trung / Egg Coffee',
    price: '$6.95'
  },
  {
    title: 'Strawberry Passionfruit',
    price: '$6.95'
  },
  {
    title: 'Passionfruit',
    price: '$6.95'
  },
  {
    title: 'Suong Sam Nuoc Dua / Coconut Juice with Yanang Jelly',
    price: '$7.95'
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

export default { appetizers, dimsum, entrees, drinks, awards };
