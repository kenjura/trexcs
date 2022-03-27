import CharacterSheet from './components/CharacterSheet';
import ChatWindow from './components/ChatWindow';
import User from './components/User';

import { getOne } from './data/characters';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { userState } from './state/user';

import './App.css';

const TEMP_CHARACTER_NAME = 'Beryl';

export default function App() {

  return (
    <RecoilRoot>
      <AppWithState />
    </RecoilRoot>
  );
}

function AppWithState() {
  const [ character, setCharacter ] = useState({});
  const [ user ] = useRecoilState(userState);

  useEffect(async () => {
    const character = await getOne(TEMP_CHARACTER_NAME);
    setCharacter(character);
    console.log(character);
  },[TEMP_CHARACTER_NAME]);

  return (
    <div className="App">
      <header className="App-header">
        Character Sheet
      </header>
      <CharacterSheet character={character} />
      <ChatWindow />
      <User user={user} />
    </div>
  );
}