import { Game } from "../types/game.interface";
import useData from "./useData";


const useGames = () => useData<Game>("/games");
export default useGames;