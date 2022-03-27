const yaml = require('js-yaml');

async function getOne(name) {
    const jso = yaml.load(TEMP_FIXTURE);
    return jso;
}

export { getOne };






const TEMP_FIXTURE = `
name: Beryl
level: 10
attributes:
  - name: Strength
    value: 14
  - name: Dexterity
    value: 16
  - name: Constitution
    value: 14
  - name: Intelligence
    value: 16
  - name: Wisdom
    value: 10
  - name: Charisma
    value: 10
coreSkills:
  - name: Attack
    attribute: Dexterity
    points: 10
  - name: Spellcraft
    attribute: Intelligence
    points: 2
  - name: Fortitude
    attribute: Constitution
    points: 4
  - name: Reflex
    attribute: Dexterity
    points: 7
  - name: Willpower
    attribute: Charisma
    points: 3
  - name: Concentration
    attribute: Wisdom
    points: 4
classes:
  - class: Psion
    level: 1
  - class: Psion
    level: 2
  - class: Psion
    level: 3
  - class: Psion
    level: 4
  - class: Psion
    level: 5
  - class: Psion
    level: 6
  - class: Psion
    level: 7
  - class: Psion
    level: 8
  - class: Psion
    level: 9
  - class: Psion
    level: 10
feats:
  - name: Dodge
  - name: Aim
skills:
  - name: Acrobatics
    attribute: Dexterity
    points: 12
  - name: Athletics
    attribute: Constitution
    points: 8
  - name: Deception
    attribute: Charisma
    points: 
  - name: Diplomacy
    attribute: Charisma
    points: 
  - name: Hacking
    attribute: Intelligence
    points: 2
  - name: Investigation
    attribute: Intelligence
    points: 12
  - name: Linguistics
    attribute: Intelligence
    points: 
  - name: Mechanic
    attribute: Intelligence
    points: 0
  - name: Medicine
    attribute: Wisdom
    points: 0
  - name: Mercantilism
    attribute: Intelligence
    points: 0
  - name: Perception
    attribute: Wisdom
    points: 4
  - name: Performance
    attribute: Charisma
    points: 0
  - name: Persuasion
    attribute: Charisma
    points: 0
  - name: Vehicles
    attribute: Dexterity
    points: 12
  - name: Research
    attribute: Intelligence
    points: 0
  - name: Security
    attribute: Intelligence
    points: 7
  - name: Sleight of Hand
    attribute: Dexterity
    points: 2
  - name: Stealth
    attribute: Dexterity
    points: 7
  - name: Survival
    attribute: Wisdom
    points: 0
  - name: Arcana
    attribute: Intelligence
    points: 0
  - name: Archaeology
    attribute: Intelligence
    points: 0
  - name: High Society
    attribute: Intelligence
    points: 0
  - name: History
    attribute: Intelligence
    points: 0
  - name: Psionics
    attribute: Intelligence
    points: 2
  - name: Science (behavioral, psy)
    attribute: Intelligence
    points: 0
  - name: Science (earth, life, bio)
    attribute: Intelligence
    points: 0
  - name: Science (physical)
    attribute: Intelligence
    points: 
  - name: Underworld
    attribute: Intelligence
    points: 7
  - name: Tactics
    attribute: Intelligence
    points: 0
  - name: Technology and Engineering
    attribute: Intelligence
    points: 0
  - name: Theology
    attribute: Intelligence
    points: 0
`