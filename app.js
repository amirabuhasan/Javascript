// Dino Factory
function Dino(traits) {
  const { height, weight, diet, species, fact, where, when } = traits;
  function compareHeight(heightToCompare) {
    const heightDiff = height - heightToCompare;
    if (heightDiff > 0) {
      return 'I am taller than you!';
    } else if (heightDiff < 0) {
      return 'I am shorter than you!';
    } else if (heightDiff === 0) {
      return 'We are the same height!';
    }
    throw 'Invalid value passed in as an argument for compareHeight';
  }
  function compareWeight(weightToCompare) {
    const weightDiff = weight - weightToCompare;
    if (weightDiff > 0) {
      return 'I weigh more than you!';
    } else if (weightDiff < 0) {
      return 'You weight more than me!';
    } else if (weightDiff === 0) {
      return 'We weigh the same!';
    }
    throw 'Invalid value passed in as an argument for compareWeight';
  }
  function compareDiet(dietToCompare) {
    return dietToCompare === diet
      ? `We are both ${diet}s!`
      : `I am a ${diet}, while you are a ${dietToCompare}.`;
  }
  function generateFact(human) {
    if (species === 'Pigeon') {
      return fact;
    }
    const factIndex = Math.floor(Math.random() * 6);
    switch (factIndex) {
      case 0:
        return `I used to live in ${where}.`;
      case 1:
        return `I used to be found during the ${when} period.`;
      case 2:
        return compareDiet(human.diet);
      case 3:
        return compareHeight(human.height);
      case 4:
        return compareWeight(human.weight);
      default:
        return fact;
    }
  }
  return {
    ...traits,
    generateFact
  };
}

// returns an array of Dino objects when invoked.
async function createDinos() {
  const response = await fetch('./dino.json');
  const { Dinos } = await response.json();
  return Dinos.map(d => Dino(d));
}

// Get human data from form
function getHumanData() {
  const name = document.getElementById('name').value;
  const feet = parseInt(document.getElementById('feet').value) || 0;
  const inches = parseInt(document.getElementById('inches').value) || 0;
  const weight = parseInt(document.getElementById('weight').value) || 0;
  const diet = document.getElementById('diet').value;
  const height = feet * 12 + inches;
  return {
    name,
    height,
    weight,
    diet,
    species: 'human'
  };
}

// Helper to generate each tile
function generateTile(obj) {
  const element = document.createElement('div');
  element.className = 'grid-item';
  element.innerHTML = `
    <h3>${obj.name || obj.species}</h3>
    <img src="images/${obj.species.toLowerCase()}.png" alt="image of ${obj.species}"/>
    `;
  return element;
}

// Uses the generateTile function, and appends a fact to the element that it returns
function generateDinoTile(dino, human) {
  const dinoElement = generateTile(dino);
  const factElement = document.createElement('p');
  factElement.innerHTML = dino.generateFact(human);
  dinoElement.appendChild(factElement);
  return dinoElement;
}

// Add tiles to DOM
async function addTilesToDom() {
  const human = getHumanData();
  const dinos = await createDinos();
  const gridElement = document.getElementById('grid');
  dinos.forEach(d => {
    const dinoElement = generateDinoTile(d, human);
    gridElement.appendChild(dinoElement);
  });
  const humanElement = generateTile(human);
  gridElement.insertBefore(humanElement, gridElement.children[4]);
}

// Remove form from screen
function removeFormFromSceen() {
  const formElement = document.getElementById('dino-compare');
  formElement.remove();
}

// On submit form, prepare and display infographic
const formElement = document.getElementById('dino-compare');
formElement.addEventListener('submit', () => {
  addTilesToDom();
  removeFormFromSceen();
});
