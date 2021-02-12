// Create Dino Constructor
function Dino(traits) {
  function get(trait) {
    return traits[trait];
  }
  return {
    ...traits,
    get
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
