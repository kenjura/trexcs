import Feat from './Feat';
import Modal from './Modal';

import './CharacterSheet.scss';

import { getAll, getOne } from '../data/feats';
import { useState } from 'react';

export default function CharacterSheet() {

    const [ isAddFeatModalShown, setIsAddFeatModalShown ] = useState(false);
    const [ feats, setFeats ] = useState([]);

    const onAddFeat = async () => {        
        const feats = await getAll();
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
                            <td>Beryl</td>
                        </tr>

                        <tr>
                            <th>Level</th>
                            <td>10</td>
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
                            { feats.map(([,name,,desc]) => <tr key={name}>
                                <th>{name}</th>
                                <td>{desc}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </Modal>
            </section>
        </div>
        <div className="grid-right">
            <section>
                <header>Ability Scores</header>
                <p>TBD</p>
            </section>
            <section>
                <header>Attributes</header>
                <p>TBD</p>
            </section>
            <section>
                <header>Skills</header>
                <p>TBD</p>
            </section>
        </div>


    </div>
}