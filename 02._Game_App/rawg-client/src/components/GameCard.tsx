import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";


import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconList";
import { Game } from "../types/game.interface";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;