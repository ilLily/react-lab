import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const add = (products, id) => {
    return products.map((p) => {
      return p.id === id ? { ...p, count: p.count + 1 } : p;
    });
  };
  const decrease = (products, id) => {
    const newProduct = products.map((p) => {
      return p.id === id && p.count >= 1 ? { ...p, count: p.count - 1 } : p;
    });
    return newProduct.filter((p) => {
      return p.count > 0;
    });
  };
  //   const decrease = (products, id) => {
  //     return products.filter((p) => {});
  //   };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              setProducts(add(products, product.id));
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setProducts(decrease(products, product.id));
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
