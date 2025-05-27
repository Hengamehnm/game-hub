import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const headnig = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return <Heading as="h1" marginY={5} fontSize='5xl'>{headnig}</Heading>;
};

export default GameHeading;
