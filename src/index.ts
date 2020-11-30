// Global Variables
let character1 = {
  name: "Character 1",
  health: 100,
  attack: generateRandomInteger(15, 20),
  defense: generateRandomInteger(10, 15),
  ability: 0
};
let character2 = {
  name: "Character 2",
  health: 100,
  attack: generateRandomInteger(15, 20),
  defense: generateRandomInteger(10, 15),
  ability: 0
};

//Randomize Attack & Defense Variables
function generateRandomInteger(min: any, max: any) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

// Determines if character gets an ability
function getAbility(character: any) {
  if (Math.random() < 0.25) {
      let a = generateRandomInteger(0, 3);
      if (a < 1) {
          character.ability = 1;
      } else if (a < 2)
          character.ability = 2;
      else
          character.ability = 3;
      console.log(character.name + " has activated ability " + character.ability + ".\n");
  } else {
      console.log(character.name + " hasn't activated any ability.");
  }
}

// Character uses ability
function useAbility(character1: any, character2: any) {
  if (character2.ability == 1) {
      character2.health = character1.attack / 2;
  }
  if (character2.ability == 3 && character2.health < 30) {
      character2.health = character2.health + 5;
  }
  if (character1.ability == 2) {
      character2.health = character2.health - character1.attack / 2;
  }
}

// Show Current Character Health, Defense and Attack Stats
function logInfo() {
  console.log("Character 1: \n" + "health: " + character1.health + ", attack: " + character1.attack + ", defense: " + character1.defense + ";\n");
  console.log("Character 2: \n" + "health: " + character2.health + ", attack: " + character2.attack + ", defense: " + character2.defense + ". \n");
}

// Doesn't let the character's health be lower than zero
function toPositiveHealth(character: any) {
  if (character.health < 0) {
      character.health = 0;
  }
}

// Shows who the winner is
function displayWinner() {
  if (character2.health == 0) {
      console.log("Character 1 Wins")
  } else if (character1.health == 0) {
      console.log("Character 2 Wins")
  }
}

// The game has started
let round = 1;
// Character 1 starts
if (generateRandomInteger(0, 1) > 0.5) {
  logInfo();
  getAbility(character1);
  getAbility(character2);
  console.log("Character 1 attacks first")

  // Battle has commenced
  while (character1.health > 0 && character2.health > 0) {
      console.log("Round " + round);

      // Character 1 attacks and ability is used (if exists)
      console.log("Character 1 attacks.\n");
      character2.health = character2.health - character1.attack + character2.defense;
      toPositiveHealth(character1);
      toPositiveHealth(character2);
      useAbility(character1, character2);
      console.log("Character 2 now has " + character2.health + " health. \n");

      // Display winner if there is one before the round has ended
      displayWinner();
      // If either character dies, the game stops and the other doesn't attack
      if (character1.health == 0 || character2.health == 0) {
          break;
      }

      // Character 2 attacks and ability is used (if exists)
      console.log("Character 2 attacks.\n");
      character1.health = character1.health - character2.attack + character1.defense;
      toPositiveHealth(character1);
      toPositiveHealth(character2);
      useAbility(character2, character1);
      console.log("Character 1 now has " + character1.health + " health. \n");

      // Winnder is announced
      displayWinner();

      round = round + 1;
  }
}
// Character 2 starts 
else {
  logInfo();
  getAbility(character1);
  getAbility(character2);
  console.log("Character 2 attacks first")

  // Battle has commenced
  while (character1.health > 0 && character2.health > 0) {
      console.log("Round " + round);

      //Character 2 attacks and ability is used (if exists)
      console.log("Character 2 attacks.\n");
      character1.health = character1.health - character2.attack + character1.defense;
      toPositiveHealth(character1);
      toPositiveHealth(character2);
      useAbility(character2, character1);
      console.log("Character 1 now has " + character1.health + " health. \n");

      // Display Winner if there is one before the round has ended
      displayWinner();
      // If either character dies, the game stops and the other doesn't attack
      if (character1.health == 0 || character2.health == 0) {
          break;
      }

      // Character 1 attacks and ability is used (if exists)
      console.log("Character 1 attacks.\n");
      character2.health = character2.health - character1.attack + character2.defense;
      toPositiveHealth(character1);
      toPositiveHealth(character2);
      useAbility(character1, character2);
      console.log("Character 2 now has " + character2.health + " health. \n");

      // Winner is announced
      displayWinner();

      round = round + 1;
  }
}