import {feats} from './feats.yml.js';
import yaml from 'js-yaml';

test('feats fixture', () => {
	const feats = yaml.load(feats);
	console.log(feats);
})