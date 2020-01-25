const db = {
  hat: {
    emoji: '🧢',
    title: 'Hat',
    price: '$50.00',
  },
  flamethrower: {
    emoji: '🔥🔫',
    title: 'Not a flamethrower',
    price: '$500.00',
  },
};

export default {
  fetchProduct: async id => {
    await delay(2000);
    let product = await db[id];
    return product;
  },
  fetchProducts: async () => {
    await delay(3000);
    return db;
  },
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
