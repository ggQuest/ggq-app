import useAllGames from "@/hooks/useAllGames";
import { QuestInfo } from "@/types";
import QuestCatalogue from "./QuestCatalogue";


const questCatalogMock = [
    {
        id: 1,
        gameNameOrId: "SandBox",
    },
    {
        id: 2,
        gameNameOrId: "2",
    },
    {
        id: 3,
        gameNameOrId: "3",
    },
    {
        id: 4,
        gameNameOrId: "4",
    },
    {
        id: 5,
        gameNameOrId: "5",
    },
    {
        id: 6,
        gameNameOrId: "6",
    },
]

const GamesAvailable = ()=> {
    
    // TODO : get all games available from backend
    // for each game get info object
    // API reference : https://app.swaggerhub.com/apis-docs/H0tmilk/ggQuest/1.0.0#/public/get_games

    const games = useAllGames();
    
    return ( 
        <div className="flex items-stretch justify-center">
            <div className="grid grid-cols-4 gap-8 place-items-center">
                {questCatalogMock.map((gameNameOrId: string, id) => (
                     // eslint-disable-next-line react/jsx-key
                     <div className="flex-initial w-64">
                        <QuestCatalogue key={id} game={gameNameOrId} />
                        </div>
                ))} 
            </div>
        </div>
    )
}

export default GamesAvailable;