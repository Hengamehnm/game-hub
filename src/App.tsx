import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformIconList from "./components/PlatformIconList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";




const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatfrom]=useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav"  padding ='10px'>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"  padding = '10px'>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre = {(genre)=>setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX='5px'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatfrom={(platform)=> setSelectedPlatfrom(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
