import useAllGames from "@/hooks/useAllGames";
import { QuestInfo } from "@/types";
import QuestCatalogue from "./QuestCatalogue";


const GamesAvailable = ()=> {
    
    // TODO : get all games available from backend
    // for each game get info object
    const games = useAllGames();
    
    return ( 
        <div className="flex justify-center items-stretch">
            <div className="grid grid-cols-4 gap-8 place-items-center">
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