const cache = '';

async function getData() {
    return TEMP_FIXTURE;
    if (cache) return cache;
    const response = await fetch('http://wiki.bertball.com/5e/Classes/Feats?raw');
    return await response.text()
}


function parseData(rawText) {
    // const re = /\*|- \[([^\]]+)\]([\n]+)/gm;
    const re = /\[([^\[]+)\](\([^\)]*\))([^\n]+)/gm;
    const allFeats = [...rawText.matchAll(re)];
    return allFeats;
}

async function getAndParse() {
    const rawText = await getData();
    const parsed = parseData(rawText);
    return parsed;
}

async function getAll() {
    const data = await getAndParse();
    return data;
}

async function getOne(name) {
    const data = await getAndParse();
    return data.find(d => d[1] === name);
}

export { getAll, getOne }












const TEMP_FIXTURE = `# Combat

Making you more awesome at killing people.

## General

| Feat         | Requirements                     | Description                                                                                                                                                                                                                                   |
|--------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Execute      | Target must be at 50% or less HP | Your melee attacks cause death on a failed Con save; on success, double damage.                                                                                                                                                               |
| Hamstring    |                                  | Your melee attacks cause a 50% movement penalty (Con ends)                                                                                                                                                                                    |
| Disarm       |                                  | On successful melee attack against an enemy wielding a weapon, enemy must roll an attack with that weapon, beating your attack roll. If he fails, he drops the weapon. Anyone with two hands on their weapon gains advantage to these checks. |
| Power Charge | Str 13                           | When you use the Charge action (single action, move up to twice base movement in a straight line, then attack once), you inflict 50% bonus damage.                                                                                            |
| Victory Rush | Multiattack 1                    | When you fell an opponent with a melee attack, you gain an immediate bonus attack or half-distance charge attack. Max once/rd.                                                                                                                |
| Iron Fist    |                                  | Gain proficiency with unarmed attacks, which now inflict 1d6 damage. You are considered armed without weapons.                                                                                                                                |

## Block

| Maneuver                                    | Requirements      | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Block](Block "wikilink")                   |                   | Reaction to an incoming attack or area effect, must be wielding a weapon or shield; roll a Str save, and reduce damage suffered by that amount. If using a shield that you're proficient with, its AC bonus is added to your roll. If your blocking weapon or shield is not proficient, suffer disadvantage to the roll. (Note: after the first Block attempt each round is used, further attempts cost 1 AP each) |
| [Riposte](Riposte "wikilink")               |                   | When you successfully use [Block](Block "wikilink"), you may take an immediate melee attack against your attacker.                                                                                                                                                                                                                                                                                                 |
| [Critical Block](Critical_Block "wikilink") | Wielding a shield | When you suffer a critical hit while blocking with a shield, it is treated as non-critical. Furthermore, you negate damage from [Sneak Attack](Sneak_Attack "wikilink") and similar abilities.                                                                                                                                                                                                                     |
| [Revenge](Revenge "wikilink")               |                   | When you successfully block an attack, keep track of the damage dealt (before the block). On your next successful melee attack against the attacker within 3 rounds, you may add this amount to the damage dealt. You can have only one such "charge" at a time.                                                                                                                                                   |
| [Rebound](Rebound "wikilink")               |                   | When an enemy fails to hit you due to [Block](Block "wikilink"), he is either pushed back 1 square or knocked prone (his choice).                                                                                                                                                                                                                                                                                  |

## Dodge

| Feat                                              | Requirements                                                                     | Description                                                                                                                                                                                                                                                                  |
|---------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Dodge](Dodge "wikilink")                         |                                                                                  | Reaction to an incoming targeted attack; roll a Dex save. If it exceeds the attack roll, you avoid the attack entirely. (Note: after the first one each round is used, reactions cost 1 AP each)                                                                             |
| [Focused Defense](Focused_Defense "wikilink")     |                                                                                  | As a free action once/rd, you may designate one enemy; against that enemy, the Action Point cost for any action to defend against that enemy is halved. Any action costing half an AP costs nothing the first time it is used each round, 1 AP the second, 0 the third, etc. |
| [Evade and Counter](Evade_and_Counter "wikilink") | [Dodge](Dodge "wikilink"), proficiency bonus of +3 or higher                     | When you successfully use [Dodge](Dodge "wikilink"), you may take an immediate attack against your attacker, or an immediate move of up to half your base movement rate without provoking.                                                                                   |
| [Evasion](Evasion "wikilink")                     | Dex 13                                                                           | When you are allowed a Dex save against an area effect for partial effect, you actually suffer no effect on a successful save. If no save was allowed, you are allowed a Dex save at a reasonable DC for half damage.                                                        |
| [Proactive Defense](Proactive_Defense "wikilink") | [Focused Defense](Focused_Defense "wikilink"), proficiency bonus of +3 or higher | The AP cost reduction applies to offensive actions against your chosen target, not just defensive ones.                                                                                                                                                                      |

## Group Fighting

| Feat             | Requirements                       | Description                                                                                                                                    |
|------------------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Cleave           |                                    | Your melee attack affects 3 squares adjacent to each other and within your reach. Still have to beat subject's AC to hit them. Not a "chain".  |
| Great Cleave     | Cleave and prof +3 or higher       | Your Cleave affects all squares in reach                                                                                                       |
| Bladestorm       | Great Cleave, prof +5 or higher    | You may move at normal speed, attacking one enemy once per square moved, if within reach. Can't attack same enemy twice.                       |
| Eye of the Storm |                                    | You're not outnumbered; they're outmatched. For each enemy currently threatening you in melee (minimum 2), gain +1 to attack and damage rolls. |

## Light Weapons

| Feat          | Requirements                    | Description                                                                                                                                                                             |
|---------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Flurry        | Light weapon                    | You attack many times in quick succession, probing enemy's defenses. Gain advantage on your attack and damage roll.                                                                     |
| Raptor Strike | Wielding two one-handed weapons | 1 action, melee attack, requires two weapons; you attack with both weapons in a single strike. Roll two attack rolls and two damage rolls, and use the higher of each for both weapons. |

## Heavy Weapons

| Feat               | Requirements        | Description                                                                                                                                                                  |
|--------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Slam               | Heavy weapon        | Melee attack inflicts double damage, but provokes opportunity attacks.                                                                                                       |
| Great Slam         | Slam, prof +3       | Your Slam causes stun 1 rd (Con negates)                                                                                                                                     |
| Devastate          | Slam, prof +3       | Your Slam causes Vulnerable (weapons) 50% for 1 rd                                                                                                                           |
| Unbalancing Strike | Heavy weapon        | Your melee attacks cause foes to become *unbalanced*, meaning they cannot take use physical-attack-based reactions, and are disadvantaged against push/pull, knockdown, etc. |
| Knockdown          | Heavy weapon        | Your melee attacks cause knockdown (Str negates, vs your proficient Str check)                                                                                               |
| Punt               | Heavy weapon        | Your melee attacks cause push 1, or 2 with a two-handed weapon.                                                                                                              |
|                    |                     |                                                                                                                                                                              |

Notes:

-   *Bloodied* means the target is below half HP (if elite or leader,
    one-quarter HP; if villain, 10% hp).
-   The jury's out on [Power Attack](Power_Attack "wikilink") and such
    feats. I'm still considering whether I want "combo point" mechanics
    or not.
-   A shield counts as a heavy weapon when used to bash.

## Proficiencies

Gaining basic combat proficiencies some classes have automatically, or
enabling basic combat styles.

| Feat               | Description                                                                       | Reasoning                                                                                                                                                                              |
|--------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Armor Proficiency  | You can wear all types of armor.                                                  | It shouldn't take 12 levels to build up to plate mail. Heavy/medium/light armor are self-balancing; the heavier types aren't necessarily "better" (barring a revamp of armor, that is) |
| Weapon Proficiency | You may use all weapons.                                                          | See above                                                                                                                                                                              |
| Dual Wield         | You may dual wield any one-handed weapons, and draw/sheath two weapons at a time. | Removed the unnecessary +1. I thought this system was supposed to be less complicated.                                                                                                 |
| Quick Load         | Ignore the "loading" penalty of weapons.                                          | Ehh, why not?                                                                                                                                                                          |



## Ranged Weapons

Feat               | Requirements                              | Description
-------------------|-------------------------------------------|------------
Archer             | Proficiency in one or more ranged weapons |Decrease reload time for ranged weapons by 1 round (minimum: free action once/rd). No disadvantage when firing point-blank. You are not considered unarmed when wielding only a ranged weapon, and in fact threaten an area with that weapon as if it were a melee weapon.
Aim                |                                           | Bonus action; you carefully line up a shot against a chosen foe, gaining ''advantage'' against your next ranged attack against that target taken within 5 rounds. You lose the benefit if you move before the attack.
Called Shot        |                                           | 1 action, ranged attack; you target a specific location, causing various effects. The shot is harder to land, represented by a penalty to your attack roll. (See below for specifics)
Concussive Shot    |                                           | Bonus action, ranged attack; no damage, but subject is ''confused'' for 1 rd (Wis negates).
Multi Shot         |                                           | Single action; you fire three attacks, each at a different target. All must fit in a cone emanating from your position.
Quick Shot         |                                           | Bonus action; you take a normal ranged attack.
Precise Shot       |                                           | You suffer no disadvantage for attacking at long range, and ignore any cover penalties for all but total and near-total cover.
Covering Fire      | Proficiency bonus of +3 or higher         | Bonus action, weapon range, circle 3; no damage, but subjects no longer threatens an area until their next action (Wis negates, fear effect).
Steady Shot        | Proficiency bonus of +3 or higher         | Single action; normal ranged attack, plus you gain an extra bonus action.
Volley             | Proficiency bonus of +3 or higher         | Single action, weapon range, circle 3; normal damage to all in area (Dex save for half).
Barrage            | Proficiency bonus of +4 or higher         | Single action; normal ranged damage in a 30-ft cone.
Kill Shot          | Proficiency bonus of +4 or higher         | Single action; normal damage, plus, if 3x normal damage would kill the subject, subject must pass a Con save or die instantly.


Called Shots:
* Arm: -4 to hit. Normal damage, plus all actions using that arm are disadvantaged, and any melee damage caused by a weapon in that arm inflict half damage (Con ends).
* Leg: -4 to hit. Normal damage, plus 50% movement speed penalty (Con ends).
* Foot: -8 to hit. Normal damage, plus pinned. Str ends; on success, suffer normal damage again, and 50% movement speed penalty (Con ends).
* Hand: -8 to hit. Normal damage, plus cannot wield weapons, cast spells, or make attacks using that hand. Con ends, but subject must remove the missile, suffering normal damage again, then disadvantage and half damage with that hand (Con ends).
* Heart: -12 to hit; double damage, with 10-20 crit range (double again on crit).


## Spellcasting

Feat                       | Description
---------------------------|----------------
Careful Targeting          | When casting an area spell, you may remove 1 ally or other square from the effect per point of your primary casting ability modifier. 
Chain Spell                | Targeted spell becomes chain 5. Each jump costs 1 Mana. 
Spell Steal                | On a successful Dispel check, you "steal" the spell. Beneficial enhancements are transferred to you. Shaping effects change their allegiance. (Contingent on porting over dispel/counterspell mechanics)
Twin Spell                 | You may cast two spells simultaneously in the same action^1^
Spell Mantle               | You may create a Spell Mantle, which is a group of powers whose normal casting time is one action or less, for which the target is you. When activated, all spells become active at once, following normal rules (such as Mana/slot cost). The maximum number of spells in this mantle is equal to 1 per point of your primary ability modifier. 
Ready for Anything         | When readying an action, you need not specify a trigger; in effect, the chosen action becomes immediate until your next turn. 
Wield Spell                | At-will, free; choose one spell. You are now "wielding" that spell. You threaten an area with the spell (equal to a line 5x1 in your front arc, subject to the spell's range limits). You are considered armed. If you end up using the spell as an attack of opportunity, you must pay its Mana/slot cost; if you use it multiple times in the same round, you need only spend the cost once. 
Interrupt Request          | When readying an action, you need only specify a trigger, not what actions you are readying. Any actions you then take are subtracted from your next turn (max one std, one swift, and one move, plus any free). Cannot combine with Ready for Anything. 

Notes:
* 1: 
    * The action is the longer action of the two.
    * The Mana or slot cost is the sum of both spells.
    * Each can be targeted independently.
    * Any interruption will interrupt both spells.




# Skill

## Agility

| Feat                                        | Requirements                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Extended Reach](Extended_Reach "wikilink") | Dex 15                                                                                 | Your natural reach increases by 5 ft, as you're able to dart forward, attack, and leap backward at lightning speed.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Tumble](Tumble "wikilink")                 | Dex 15                                                                                 | You gain the "Jump" movement type. At-will, as a move action, you leap from your current square to a square within half your normal movement rate; you do not step on the ground in any intervening square, but rather follow a shallow parabolic trajectory (max height = 1/4 jump length). You do not provoke for any square of this movement, nor do creatures and objects block your path (although walls do, and, at the DM's discretion, certain creatures may be especially hard to bypass, requiring an Agility check). |
| [Fwang](Fwang "wikilink")                   | Gained at least +2 to Dex through ability score increases, [Tumble](Tumble "wikilink") | As [Tumble](Tumble "wikilink"), except the distance equals your base movement, and the vertical height half that.                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Spider Climb](Spider_Climb "wikilink")     | Gained at least +2 to Dex through ability score increases                              | You can cling to any solid wall that would be a DC 20 or less to climb.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Disengage](Disengage "wikilink")           | Gained at least +2 to Dex through ability score increases                              | As a reaction to an incoming attack, you leap backward up to half your movement rate, without provoking opportunity attacks. Free the first time each round; costs 1 AP otherwise.                                                                                                                                                                                                                                                                                                                                              |

## Perception

| Feat                   | Requirements                                 | Description                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alert                  | Wis 13                                       | You gain advantage to initiative checks, and can always act in a surprise round if conscious. You awaken automatically when danger is present, taking 1 round to gather your bearings. Attackers of which you are unaware do not gain advantage when attacking you.                                                                                                                                     |
| Focus                  | Wis 13                                       | You gain an amount of Focus equal to your Wis bonus. Each point can be spent to add 1d6 to a skill check, save, or attack roll after your roll it. The points recharge with a long rest.
| Blindsense             | Wis 13, at least 1 point of increase to Wis  | You gain Blindsense in a radius of 5-ft per Wis bonus. With Blindsense, you know the position of all creatures in the area, regardless of cover or concealment, and are aware of any attacks against you originating in that area. |
| Defensive Precognition | Focus, prof bonus +4 or higher               | You may spend Focus to add to your AC against a single attack.

## Stealth

| Feat                                                  | Description                                                                                                                                                                                                          |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Hide In Plain Sight](Hide_In_Plain_Sight "wikilink") | You may attempt to Hide even while observed, although you are disadvantaged.                                                                                                                                         |
| [Blind Spot](Blind_Spot "wikilink")                   | You may attempt to Hide without concealment, provided you are currently standing in a subject's rear arc. You'll have disadvantage on the roll, and it applies only to subjects whose rear arc you are standing in.  |
| [Vanish](Vanish "wikilink")                           | Whenever you gain access to concealment or enter a blind spot, you may use Stealth as a reaction.                                                                                                                    |
| [Snipe](Snipe "wikilink")                             | After firing a ranged weapon, you may immediately attempt a new Stealth check (at disadvantage) to remain hidden. On success, the target does not become aware of you, but will be alerted to danger if not already. |
| [Silent Surge](Silent_Surge "wikilink")               | You may use the charge action without breaking stealth. You may only charge half the normal distance. After charging, you are no longer hidden.                                                                      |

# Role

## Defender

| Feat                                    | Requirements                             | Description
|-----------------------------------------|------------------------------------------|--------------------------------------------------------
| [Aegis](Aegis "wikilink")               |                                          | Attacks against allies adjacent to you are disadvantaged.
| [Intervene](Intervene "wikilink")       |                                          | When an ally is attacked (who is standing within a standard move action of your position), you may move to interpose yourself as a reaction.
| [Road Block](Road_Block "wikilink")     |                                          | All enemies who attempt to move through your threatened area must pass a Str check opposed to your own, or they are blocked.
| [Taunt](Taunt "wikilink")               |                                          | At-will, free; subject is compelled to focus hostilities on you (all hostile actions must be centered on you) for 3 rounds. Doesn't work on subjects with no emotion or ability to communicate.
| [Iron Curtain](Iron_Curtain "wikilink") | Aegis, proficiency bonus of +3 or higher | Adjacent allies gain resistance to all attacks.

## Leader

| Feat                                    | Requirements  | Description
|-----------------------------------------|---------------|--------------------------------------------------------
Battle Cry                                |               | Free action; you let out a battle cry, causing one of the effects below^1^ until the end of the encounter, or until you use [[Battle Cry]] again. Only one of the effects can be active at a time, and each may be used no more than once per encounter.
Coordination                              |               | Free action, costs 1 AP; allies instantly gain 1 temporary Action Point, to be used immediately, or not at all.
Inspiring Presence                        |               | Constant 60-ft emanation; you and allies gain advantage to saving throws against fear, and +1 to movement, attack rolls, and saving throws.

(1) Battle Cry:
* ***Inspire Allies:*** You and allies within 60 ft are inspired, gaining advantage to one attack roll or saving throw per round. (If used between rounds, counts against the next round)
* ***Demoralize Enemies:*** Enemies within 60 ft are demoralized, and suffer disadvantage to attacks and saving throws until they successfully inflict damage or debilitation to you or an ally.
* ***Charge!:*** You and allies within 60 ft gain +50% movement speed, and on your next attack, if you use the Charge action, gain +50% bonus damage.
* ***Rallying Cry:*** You and allies within 60 ft regain 20% of lost HP or one lost AP (each person chooses).
* ***Regroup:*** Allies within 60 ft gain an immediate move action toward you. This movement does not provoke attacks.


## Skirmisher

| Feat | Requirements | Description |
|------|--------------|-------------|
|      |              |             |


# Item Crafting

All Item Crafting feats work as follows:

-   You can craft all items of appropriate level of the type your feat
    allows using raw materials.
-   You can find raw materials in your travels, or can purchase them for
    gold.
-   For simplicity's sake, all raw materials of a certain type are
    abstracted. Thus, you might find or purchase 5,000 GP worth of
    "blacksmithing materials" that can be used to craft any
    blacksmithing item up to 5,000 GP in value.
-   The market cost of crafting materials is 5 SP per 1 GP (in other
    words, half the price of the item it could craft).
-   You can scrap items made from the same raw materials as the items
    you can craft, yielding 1/3 of the item's market value in materials.
    For example, if a certain magic sword with market value 12,000 GP is
    scrapped, it yields 4,000 GP worth of blacksmithing materials
    (two-thirds of the 6,000 GP worth you'd need to make the sword
    anew).
-   When you have an Item Crafting feat, it is possible to find more
    value in encounters than you otherwise might. For example, if your
    party defeats and Iron Golem, which, disappointingly, has no
    treasure to offer, you might find a wealth of blacksmithing
    components. (In other words, the mats you occasionally find are a
    bonus above and beyond normal treasure)
-   See [5e Items](5e_Items "wikilink") for a list of items that can be
    crafted with these skills (work in progress).

| Feat           | Prerequisite | Description                                                                                   |
|----------------|--------------|-----------------------------------------------------------------------------------------------|
| Alchemist      | Int 13+      | You can brew potions, elixirs, oils, and unstable, explosive mixtures.                        |
| Blacksmithing  | Str 13+      | You can forge weapons, shields, and armor out of metal.                                       |
| Engineering    | Int 13+      | You can make trinkets, automata, and even firearms.                                           |
| Inscription    | Int 13+      | You can inscribe magical glyphs, carve runes, or scribe scrolls and tomes.                    |
| Jewelcrafting  | Dex 13+      | You can make jewels, cut gemstones, and blow glass.                                           |
| Leatherworking | Dex 13+      | You can tan hides and sew leather into armor, bracers, boots, or other useful items.          |
| Tailoring      | Int 13+      | You can sew fabrics into garments, including armor, cloaks, slippers, and other useful items. |

# Miscellaneous

| Feat                                                  | Requirements                                                 | Description                                                                                                                                                                                                                  |
|-------------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Improved Initiative](Improved_Initiative "wikilink") |                                                              | When rolling initiative, you have advantage.                                                                                                                                                                                 |
| [Lucky](Lucky "wikilink")                             |                                                              | Whenever you roll a d20, you can "reserve" that roll, immediately re-rolling and taking the latter result. At any time, you can swap out a d20 roll for your reserved roll. You may have only one roll in reserve at a time. |
| [Really Lucky](Really_Lucky "wikilink")               | [Lucky](Lucky "wikilink"), proficiency bonus of +3 or higher | You may now have 3 rolls in reserve at a time.                                                                                                                                                                               |
| [Preparation](Preparation "wikilink")                 |                                                              | At the beginning of each round (including a surprise round), you may take an immediate move or bonus action.                                                          |
`;