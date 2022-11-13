export default function attackOptions(object) {
  const { special } = object;
  const attackList = special.map((item) => {
    if (typeof item['description'] === 'undefined') {
      item.description = 'Описание недоступно';
    }
    return item;
  });
  return attackList;
}
