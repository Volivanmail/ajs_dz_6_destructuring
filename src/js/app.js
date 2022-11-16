export default function attackOptions(object) {
  const { special } = object;
  const attackList = special.map((item) => {
    if (typeof item.description === 'undefined') {
      const newItem = { ...item };
      newItem.description = 'Описание недоступно';
      return newItem;
    }
    return item;
  });
  return attackList;
}
