import useAllGames from "@/hooks/useAllGames";
import { QuestInfo } from "@/types";
import QuestCatalogue from "./QuestCatalogue";


const GamesAvailable = ()=> {
    
    // TODO : get all games available from backend
    // for each game get info object
    // API reference : https://app.swaggerhub.com/apis-docs/H0tmilk/ggQuest/1.0.0#/public/get_games

    const games = useAllGames();
    
    return ( 
        <div className="flex justify-center items-stretch">
            <div className="grid grid-cols-4 gap-8 place-items-center">
                {/* TODO : remove this and map instead the array games to get all games info */}

                <div className="flex-initial w-64">
                    <QuestCatalogue  game="Sandbox"/>
                </div>
                <div className="flex-initial w-64">
                    <QuestCatalogue game="2"/>

                </div>
                <div className="flex-initial w-64">
                    <QuestCatalogue  game="3"/>

                </div>
                <div className="flex-initial w-64">
                    <QuestCatalogue  game="4"/>

                </div>
                <div className="flex-initial w-64">
                    <QuestCatalogue  game="5"/>

                </div>
                <div className="flex-initial w-64">
                    <QuestCatalogue  game="6"/>

                </div>
            </div>
        </div>
    )
}

export default GamesAvailable;