import { Game, Platform } from "../types/game.interface";
import { Genre } from "../types/genre.interface";
import useData from "./useData";
import { Store } from "./useStores";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedStore: Store | null) => {
    const { data, error, isLoading } = useData<Game>("/games", 
        { params: { genres: selectedGenre?.id, "parent_platforms": selectedPlatform?.id, stores: selectedStore?.id } },
        [selectedGenre, selectedPlatform, selectedStore]);

    return { data, error, isLoading }
};
export default useGames;