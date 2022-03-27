import './Feat.scss';

import Tooltip from './Tooltip';

import { useState } from 'react';
import { getSystem } from '../data/system';

export default function Feat({ name }) {
	const [ desc, setDesc ] = useState('');

	const onMouseEnter = async () => {
		const {feats} = getSystem();
		const {description} = feats.find(feat => feat.name === name);
		setDesc(description);
	}

	return <Tooltip text={desc}>
		<div className="feat" onMouseEnter={onMouseEnter}>{name}</div>
	</Tooltip>
}