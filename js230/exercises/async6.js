let classifications = {
  'Classifications': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich']
};

let animals = {
  'Animals': ['Classifictions', 'Vertebrate', 'War-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

let filter1 = document.getElementById('animal-classifications');
let filter2 = document.getElementById('animals');
let clear = document.getElementById('clear');

function getOtherOptions(list, currentOption ) {
  let otherOptions = list[currentOption];
  let newOptions = [];

  otherOptions.forEach(name => {
    let option = new Option(name, name);
    newOptions.push(option);
  });

  return newOptions;
}

function populateOtherFilter(filter, options) {
  options.forEach(option => {
    filter.add(option);
  });
}

function clearOptions(element) {
  let currentOptions = element.options;
  while(currentOptions.length > 0 ) {
    currentOptions.remove(0);
  }
}

filter1.addEventListener('change', event => {
  clearOptions(filter2);
  let currentSelection = event.target.value;
  let options = getOtherOptions(classifications, currentSelection);

  populateOtherFilter(filter2, options);
  
})

filter2.addEventListener('change', event => {
  clearOptions(filter1);
  let currentSelection = event.target.value;
  let options = getOtherOptions(animals, currentSelection);

  populateOtherFilter(filter1, options);
})

clear.addEventListener('click', event => {
  event.preventDefault();
  clearOptions(filter1);
  clearOptions(filter2);

  let defaultClassifications = Object.keys(classifications).map(classification => {
    return new Option(classification, classification);
  });

  let defaultAnimals = Object.keys(animals).map(animal => {
    return new Option(animal, animal);
  })
  
 populateOtherFilter(filter1, defaultClassifications);
 populateOtherFilter(filter2, defaultAnimals);
})
