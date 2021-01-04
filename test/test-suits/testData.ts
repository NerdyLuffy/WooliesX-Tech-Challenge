import { Product } from 'src/exercise2/ProductInterface';

const productsWithLowPrice: Product[] = [
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
];

const productWithHighPrice: Product[] = [
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
];

const productAtoZ: Product[] = [
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
];

const productZtoA: Product[] = [
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
];

const trolleyTotal = {
  Products: [
    { Name: '1', Price: 2 },
    { Name: '2', Price: 5 },
  ],
  Specials: [
    {
      Quantities: [
        { Name: '1', Quantity: 3 },
        { Name: '2', Quantity: 0 },
      ],
      Total: 5,
    },
    {
      Quantities: [
        { Name: '1', Quantity: 1 },
        { Name: '2', Quantity: 2 },
      ],
      Total: 10,
    },
  ],
  Quantities: [
    { Name: '1', Quantity: 3 },
    { Name: '2', Quantity: 2 },
  ],
};

const recommendedProducts: Product[] = [
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
];

const _ = {
  productsWithLowPrice,
  productWithHighPrice,
  productAtoZ,
  productZtoA,
  recommendedProducts,
  trolleyTotal,
};

export default _;
