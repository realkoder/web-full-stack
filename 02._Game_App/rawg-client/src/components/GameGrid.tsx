import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import { Genre } from "../types/genre.interface";
import { Platform } from "../types/game.interface";
import { Store } from "../hooks/useStores";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedStore: Store | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform, selectedStore }: Props) => {
  const skeletons = [...Array(20).keys()];
  const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform, selectedStore);

  return (
    <>
      {error && <Text color={"tomato"}>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
