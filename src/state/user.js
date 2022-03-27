import { atom } from 'recoil';

export const userState = atom({
    key: 'user',
    default: {
        color: 'deeppink',
        name: 'Beryl',
    },
});