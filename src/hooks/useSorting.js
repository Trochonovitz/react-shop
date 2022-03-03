export const useSorting = () => {
  const sortAlphabetical = (array) =>
    array.sort((a, b) => {
      const first = a.name.toLowerCase();
      const second = b.name.toLowerCase();
      return first.localeCompare(second);
    });

  const sortAlphabeticalReverse = (array) =>
    array.sort((a, b) => {
      const first = a.name.toLowerCase();
      const second = b.name.toLowerCase();
      return second.localeCompare(first);
    });

  const sortByPrice = (array) =>
    array.sort((a, b) => {
      const first = a.price;
      const second = b.price;
      return first - second;
    });

  return { sortAlphabetical, sortAlphabeticalReverse, sortByPrice };
};
