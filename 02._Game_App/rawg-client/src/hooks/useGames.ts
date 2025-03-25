import { GameQuery } from "../App";
import { Platform } from "../types/game.interface";
import useData from "./useData";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.slug,
        parent_platforms: gameQuery.platform?.id,
        stores: gameQuery.store?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGames;