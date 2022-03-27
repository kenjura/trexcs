import './Feat.scss';

import Tooltip from './Tooltip';

import { useState } from 'react';
import { getOne } from '../data/feats';

export default function Feat({ name }) {
	const [ desc, setDesc ] = useState('');

	const onMouseEnter = async () => {
		const [,,,desc] = await getOne(name);
		setDesc(desc);
	}

	return <Tooltip text={desc}>
		<div className="feat" onMouseEnter={onMouseEnter}>{name}</div>
	</Tooltip>
}