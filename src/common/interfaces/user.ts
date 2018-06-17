import History from './history';

export default interface User {
    id: string;
    name: string;
    status: string;
    type: string;
    history: History;
    friends: User[];
    settings: object;
}