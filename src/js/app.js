export default function attackOptions(object) {
  const { special } = object;
  const attackList = [];
  const resattack = special.map(item => {
    if (typeof item['description'] === "undefined") {
      item['description'] = 'Описание недоступно';
    }
    return item;
  });
  return resattack;
} 
