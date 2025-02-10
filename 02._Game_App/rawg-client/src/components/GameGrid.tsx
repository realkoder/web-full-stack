import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((res) => res.data.results)
      .then((results) => setGames(results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {games.map((game) => (
        <Text>{game.name}</Text>
      ))}
    </>
  );
};

export default GameGrid;
