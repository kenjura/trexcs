# POC Dev

## Milestone 1
- [*] Make a RollableValue component
- [*] Make a chat window
- [*] AbilityScore breakdown tooltip
- [*] Skill component

## Milestone 2
- [...] Add a system service
  - [ ] Render attributes using system-derived formulas
  - [ ] Render skills using system-derived attributes

## Milestone X1
- [ ] Implement TS
- [ ] Implement Prettier
- [ ] Add component library




# Decisions to make
- Should the model be hydrated?
  - For instance, should a pre-processor fill each Skill with a full Attribute object? With already-parsed modifiers?
- Should the character sheet have to rely an any data outside the character object?
  - For instance, ability scores have a tier bonus. The formula is floor(level/4). But that formula doesn't exist in the character sheet.