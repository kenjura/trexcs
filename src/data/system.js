import yaml from 'js-yaml';
import { featsYml } from './fixtures/feats.yml.js';

export function getSystem() {    
    const system = yaml.load(SYSTEM_YML);
    const { feats } = yaml.load(featsYml);
    system.feats = feats;
    return system;
}


const SYSTEM_YML =  `
formulas:
  - tierBonus: FLOOR(level/4)
skills:
  - name: Acrobatics
    attribute: Dexterity
  - name: Athletics
    attribute: Constitution
  - name: Deception
    attribute: Charisma
  - name: Diplomacy
    attribute: Charisma
  - name: Hacking
    attribute: Intelligence
  - name: Investigation
    attribute: Intelligence
  - name: Linguistics
    attribute: Intelligence
  - name: Mechanic
    attribute: Intelligence
  - name: Medicine
    attribute: Wisdom
  - name: Mercantilism
    attribute: Intelligence
  - name: Perception
    attribute: Wisdom
  - name: Performance
    attribute: Charisma
  - name: Persuasion
    attribute: Charisma
  - name: Vehicles
    attribute: Dexterity
  - name: Research
    attribute: Intelligence
  - name: Security
    attribute: Intelligence
  - name: Sleight of Hand
    attribute: Dexterity
  - name: Stealth
    attribute: Dexterity
  - name: Survival
    attribute: Wisdom
  - name: Arcana
    attribute: Intelligence
  - name: Archaeology
    attribute: Intelligence
  - name: High Society
    attribute: Intelligence
  - name: History
    attribute: Intelligence
  - name: Psionics
    attribute: Intelligence
  - name: Science (behavioral, psy)
    attribute: Intelligence
  - name: Science (earth, life, bio)
    attribute: Intelligence
  - name: Science (physical)
    attribute: Intelligence
  - name: Underworld
    attribute: Intelligence
  - name: Tactics
    attribute: Intelligence
  - name: Technology and Engineering
    attribute: Intelligence
  - name: Theology
    attribute: Intelligence
`