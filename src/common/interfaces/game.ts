import User from "./user";

export default interface Game {
    id: string;
    name: string;
    status: string;
    type: string;
    config: object;
    users: User[];
}