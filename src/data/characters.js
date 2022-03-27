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
    attribute: Strength
    points: 8
`