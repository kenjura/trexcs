import RollableValue from '../RollableValue';
import Tooltip from '../Tooltip';

import { useMemo } from 'react';

export default function AbilityScores({ attributes=[], level }) {
    return (
        <section>
            <header>Ability Scores</header>
            <table>
                <tbody>
                    {attributes.map(attribute => <AbilityScore key={attribute.name} attribute={attribute} level={level} />)}
                </tbody>
            </table>
        </section>
    );
}



function AbilityScore({ attribute, level }) {
    const tierBonus = Math.floor(level/4);
    const originBonus = 0;
    const finalScore = useMemo(() => attribute.value + tierBonus + originBonus , [level]);
    const breakdown = `Base: ${attribute.value}. Tier: ${tierBonus}. Origin: ${originBonus}. Total: ${finalScore}`;

    return (
        <tr>
            <td>{attribute.name}</td>
            <td>
                <Tooltip text={breakdown}>
                    <RollableValue 
                        diceExpression={`1d20+${Math.floor((finalScore-10)/2)}`} 
                        label={finalScore}
                    />
                </Tooltip>
            </td>
        </tr>
    )
}