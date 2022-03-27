import { chatHistory } from '../state/chatHistory';
import { userState } from '../state/user';
import { useRecoilState } from 'recoil';

import './RollableValue.scss';

export default function RollableValue({ diceExpression='1d20+5', label }) {
    const [ history, setHistory ] = useRecoilState(chatHistory);
    const [ user ] = useRecoilState(userState);

    const onClick = () => {
        const result = rollExpression(diceExpression);
        const message = `Rolled ${diceExpression}. Got ${result.expressionWithRolls} = ${result.finalValue}`;
        const oldHistory = history;
        const newHistory = [...history, { user, text:message }];
        setHistory(newHistory);
    }

    return (
        <div className="rollable-value" onClick={onClick}>{ label || diceExpression }</div>
    )
}


function rollExpression(diceExpression) {
    const expressionWithRolls = diceExpression
        .replace(/(\d+)d(\d+)/g, (em, g1, g2) => rollMany(g1,g2));
    const finalValue = eval(expressionWithRolls);
    return { expressionWithRolls, finalValue };
}

function rollMany(quantity, sides) {
    return Array(quantity)
        .fill(0)
        .map(() => rollOne(sides))
        .reduce((p,c) => p+c,0);
}

function rollOne(die) {
    return Math.ceil(Math.random() * die);
}