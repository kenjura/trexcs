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

    return <div class="character-sheet">
        <section class="grid-left">
            <header>Basics</header>

            <table>
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
            </table>

        </section>
        <section class="grid-left">
            <header>Classes</header>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Class</th>
                </tr>
                <tr>
                    <td>1-10</td>
                    <td>Psion</td>
                </tr>
            </table>
        </section>
        <section class="grid-left">
            <header>Feats</header>
            <ul>
                <li>Dodge</li>
                <li>Aim</li>
            </ul>
            <button onClick={onAddFeat}>add feat</button>
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
}