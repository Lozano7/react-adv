import { useState } from 'react';

export const useProductCard = (value: number = 0) => {
  const [count, setCount] = useState(value);

  const increaseBy = (value: number) => {
    setCount((prev) => Math.max(0, prev + value));
  };
  return { count, increaseBy };
};
