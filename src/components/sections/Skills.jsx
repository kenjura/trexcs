import RollableValue from '../RollableValue';
import Tooltip from '../Tooltip';

import { formatModifier } from '../../helper/formatModifier';
import { useMemo } from 'react';

export default function Skills({ attributes=[], skills=[], level, title="Skills" }) {
    return (
        <section>
            <header>{title}</header>
            <table>
                <tbody>
                    {skills.map(skill => <Skill 
                        key={skill.name}
                        attribute={attributes.find(attribute => attribute.name === skill.attribute)}
                        skill={skill} 
                        level={level} 
                    />)}
                </tbody>
            </table>
        </section>
    );
}



function Skill({ skill, attribute, level }) {
    const attributeModifier = Math.floor(((attribute.value + Math.floor(level/4)) - 10) / 2);
    const finalValue = useMemo(() => skill.points + attributeModifier , [level, skill.points]);
    const breakdown = `Skill Points: ${skill.points}. ${attribute.name} Mod: ${attributeModifier}. Total: ${finalValue}`;

    return (
        <tr>
            <td>{skill.name}</td>
            <td>
                <Tooltip text={breakdown}>
                    <RollableValue 
                        diceExpression={`1d20+${finalValue}`} 
                        label={formatModifier(finalValue)}
                    />
                </Tooltip>
            </td>
        </tr>
    )
}