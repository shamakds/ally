import User from './user';
import Game from './game';

export default interface App {
    id: string;
    name: string;
    user: User;
    game: Game;
}