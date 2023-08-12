let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let obj2 = Object.values(obj).map(o => {
  if (o.type === 'fruit'){
    return o.colors.map(c => c[0].toUpperCase() + c.slice(1));
  } else {
    return o.size.toUpperCase();
  }
})

console.log(obj2);