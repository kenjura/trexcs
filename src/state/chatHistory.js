import { atom } from 'recoil';

export const chatHistory = atom({
    key: 'chatHistory',
    default: [
        { user: { name:'system', color:'#369' }, text:'Welcome to the character sheet.', timestamp:Date.now() },
    ],
});