import Game from "./game";

export default interface History {
    id: string;
    games: Game[];
}