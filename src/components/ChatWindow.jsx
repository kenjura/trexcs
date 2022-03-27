import { chatHistory } from '../state/chatHistory';
import { userState } from '../state/user';
import { useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';

import './ChatWindow.scss';

export default function ChatWindow() {
    const [ history, setHistory ] = useRecoilState(chatHistory);
    const [ user ] = useRecoilState(userState);
    const [ newMessage, setNewMessage ] = useState('');
    const onSubmit = () => {
        const oldHistory = history;
        const newHistory = [...history, { user, text:newMessage, timestamp:Date.now() }];
        setHistory(newHistory);
    };

    const historyWindowRef = useRef();
    useEffect(() => {
        const options = {
            top: historyWindowRef.current.scrollHeight,
            behavior: 'smooth',
        };
        historyWindowRef.current.scroll(options);
    },[history]);


    return <div className="chat-window">
        <div className="chat-window-history" ref={historyWindowRef}>
            {history.map(message => <ChatMessage
                key={message.user.name+message.timestamp} 
                user={message.user} 
                text={message.text}
                timestamp={message.timestamp}
            />)}
        </div>
        <input className="chat-window-input" type="text" value={newMessage} onChange={evt => setNewMessage(evt.target.value)} />
        <input className="chat-window-submit" onClick={onSubmit} type="button" value="Submit" />
    </div>
}


function ChatMessage({ user, text, timestamp }) {

    return (
        <div className="chat-message">
            <ChatMessageTimestamp timestamp={timestamp} />
            <span className="chat-message-name" style={{ color:user.color }}>{user.name}</span>
            <span className="chat-message-text">{text}</span>
        </div>
    )
}

function ChatMessageTimestamp({ timestamp }) {
    if (!timestamp || isNaN(timestamp)) return '';
    const date = (new Date(timestamp));//.toLocaleTimeString();
    if (!(date instanceof Date)) return 'wtf';
    return (
        <span className="chat-message-timestamp">
            {date.toLocaleTimeString()}
        </span>
    )
}

const TEMP_FIXTURE = [
    { name:'Foo', text:'The quick brown fox jumped over the lazy dog.' },
    { name:'Bar', text:'The quick brown dog jumped over the lazy fox.' },
    { name:'Foo', text:'The quick brown fox jumped over the lazy dog.' },
    { name:'Bar', text:'The quick brown dog jumped over the lazy fox.' },
    { name:'Foo', text:'The quick brown fox jumped over the lazy dog.' },
    { name:'Bar', text:'The quick brown dog jumped over the lazy fox.' },
    { name:'Foo', text:'The quick brown fox jumped over the lazy dog.' },
    { name:'Bar', text:'The quick brown dog jumped over the lazy fox.' },
    { name:'Foo', text:'The quick brown fox jumped over the lazy dog.' },
]