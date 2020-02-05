import { Character } from './../src/js/character.js';

describe('Character', () => {

  test('Should be able to make a character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let character = new Character(vitality, intelligence, strength);
    expect(character instanceof Character).toEqual(true);
  });

  test('Should be able to make a persist the vitality, intelligence, and strength values to a Character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    
    let character = new Character(vitality, intelligence, strength);
    let vitalityFromCharacterObject = character.vitality;
    let intelligenceFromCharacterOject = character.intelligence;
    let strengthFromCharacterObject = character.strength;

    expect(vitality).toEqual(vitalityFromCharacterObject);
    expect(intelligence).toEqual(intelligenceFromCharacterOject);
    expect(strength).toEqual(strengthFromCharacterObject);
    expect(character.currentExperience).toEqual(0);
  });
  test('The application should have a character start with a level object with the level id equal to 1 and the experience equal to 100', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;

    let character = new Character(vitality, intelligence, strength);

    let levelIdFromCharacterLevelObjectOnCharacterInitiation = character.level.id;
    let levelExperienceFromCharacterLevelObjectOnCharacterInitiation = character.level.experience;
    
    expect(levelIdFromCharacterLevelObjectOnCharacterInitiation).toEqual(1);
    expect(levelExperienceFromCharacterLevelObjectOnCharacterInitiation).toEqual(100);
  });
  test('The characters current experience should be able to be set to a different value', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;

    let character = new Character(vitality, intelligence, strength);

    let newCurrentExperience = 200;
    character.setCurrentExperience(newCurrentExperience);
    let characterCurrentExperienceAfterSettingNewValue = character.currentExperience;

    expect(newCurrentExperience).toEqual(characterCurrentExperienceAfterSettingNewValue);
  });
});