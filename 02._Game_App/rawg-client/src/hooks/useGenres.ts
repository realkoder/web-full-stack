import { Genre } from "../types/genre.interface";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;