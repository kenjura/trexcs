import AbilityScores from './sections/AbilityScores';
import Skills from './sections/Skills';
import Feat from './Feat';
import Modal from './Modal';

import './CharacterSheet.scss';

import { getSystem } from '../data/system';
import { useState } from 'react';

export default function CharacterSheet({ character }) {

    const [ isAddFeatModalShown, setIsAddFeatModalShown ] = useState(false);
    const [ feats, setFeats ] = useState([]);

    const onAddFeat = async () => {        
        const {feats} = getSystem();
        setFeats(feats);

        setIsAddFeatModalShown(true);
    }
    const onCloseAddFeatModal = () => {
        setIsAddFeatModalShown(false);
    }

    return <div className="character-sheet">
        <div className="grid-left">
            <section>
                <header>Basics</header>

                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{ character.name }</td>
                        </tr>

                        <tr>
                            <th>Level</th>
                            <td>{ character.level }</td>
                        </tr>

                        <tr>
                            <th>Classes</th>
                            <td>Psion 10</td>
                        </tr>
                    </tbody>
                </table>

            </section>
            <section>
                <header>Classes</header>
                <table>
                    <tbody>
                        <tr>
                            <th>Level</th>
                            <th>Class</th>
                        </tr>
                        <tr>
                            <td>1-10</td>
                            <td>Psion</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <header>Feats</header>
                <Feat name="Dodge" />
                <Feat name="Aim" />
                <div>
                    <button onClick={onAddFeat}>add feat</button>
                </div>
                <Modal isShown={isAddFeatModalShown} onClose={onCloseAddFeatModal} title="Add Feat">
                    <table>
                        <tbody>
                            { feats.map(({ name, description }) => <tr key={name}>
                                <th>{name}</th>
                                <td>{description}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </Modal>
            </section>
        </div>
        <div className="grid-right">
            <AbilityScores attributes={character.attributes} level={character.level} />
            <Skills attributes={character.attributes} skills={character.coreSkills} level={character.level} />
            <Skills attributes={character.attributes} skills={character.skills} level={character.level} title="Core Skills" />
        </div>


    </div>
}