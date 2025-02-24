import { Platform } from "../types/game.interface";
import useData from "./useData";


const usePlatform = () => useData<Platform>("/platforms/lists/parents")

export default usePlatform;