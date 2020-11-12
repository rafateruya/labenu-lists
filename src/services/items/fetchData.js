import {data} from './data';

const PAGINATION_SIZE = 3;

export const fetchData = async (lastItemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentItemIndex = data.findIndex((item) => item.id === lastItemId);
      const fromIndex = currentItemIndex === -1 ? 0 : currentItemIndex + 1;
      const toIndex =
        fromIndex + PAGINATION_SIZE < data.length
          ? fromIndex + PAGINATION_SIZE
          : data.length;
      resolve(data.slice(fromIndex, toIndex));
    }, 1000);
  });
};
