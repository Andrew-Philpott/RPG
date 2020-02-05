import { Level } from "./level";

//Vitality - 
//Health - current health
//Intelligence
//Strength
//Experience
//Mana
//import { Level } from './../level.js'

export class Character {
  constructor(vitality, intelligence, strength) {
    this.vitality = vitality;
    this.intelligence = intelligence;
    this.strength = strength;
    this.level = new Level(1, 100);
    this.currentExperience = 0;
  }
  
  // checkLevel() {
  //   if(this.currentExperience >= this.level.experience) {
  //     this.level.changeLevel(this.level.id);
  //     this.level = levels[this.level.id + 1];
  //   }
  // }
}

//Another class that is type. type is going to have different weapons and maybe 

//level up define levels in the level up class with level 1 = 100 exp points, 2 = 300, 3 = 600