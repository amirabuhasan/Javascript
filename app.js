// Create Dino Constructor
function Dino(traits) {
  const { height, weight, diet } = traits;
  function compareHeight(heightToCompare) {
    const heightDiff = height - heightToCompare;
    switch (heightDiff) {
      case heightDiff > 0:
        return 'I am taller than you!';
      case heightDiff < 0:
        return 'I am shorter than you!';
      case heightDiff === 0:
        return 'We are the same height!';
      default:
        new Error('Invalid value passed in as an argument for compareHeight');
    }
  }
  function compareWeight(weightToCompare) {
    const weightDiff = weight - weightToCompare;
    switch (weightDiff) {
      case weightDiff > 0:
        return 'I weigh more than you!';
      case weightDiff < 0:
        return 'You weight more than me!';
      case weightDiff === 0:
        return 'We weigh the same!';
      default:
        new Error('Invalid value passed in as an argument for compareWeight');
    }
  }
  function compareDiet(dietToCompare) {
    return dietToCompare === diet
      ? `We are both ${diet}`
      : `I am a ${diet}, while you are a ${dietToCompare}`;
  }
  return {
    ...traits,
    compareHeight,
    compareWeight,
    compareDiet
  };
}

// Create Dino Objects
let dinos = [];

const createDinos = (async function() {
  const response = await fetch('./dino.json');
  const { Dinos } = await response.json();
  Dinos.forEach(d => {
    dinos = [...dinos, new Dino(d)];
  });
})();

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
