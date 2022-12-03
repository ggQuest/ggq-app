import { classNames } from "@/lib/utils/index";
import QuestItemCard from "./QuestItemCard";
import React, { useState } from 'react';
import useAllGames from "@/hooks/useAllGames";

// todo remove mock 
const questItems = [
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game1.png",
    title: "Axie Infinity",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game2.png",
    title: "Axie Infinity",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game3.png",
    title: "Axie Infinity",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game4.png",
    title: "Axie Infinity",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game5.png",
    title: "Big Time",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game6.png",
    title: "Illuvium",
    reward: 75,
  },
  {
    id: 1,
    imageQuest: "/assets/ggquest/dashboardGames/game7.png",
    title: "Star Atlas",
    reward: 75,
  },
  {
    id: 8,
    imageQuest: "/assets/ggquest/dashboardGames/game8.png",
    title: "Sandbox",
    reward: 75 
  },
]

interface questItems {
  id: number,
  imageQuest: string,
  title: string,
  reward: number
}

const QuestCard = () => {

    // TODO : fetch the right quests on each click
    // For each quest : get reward and status if claimed or not
    const games = useAllGames();
    // API reference : https://app.swaggerhub.com/apis-docs/H0tmilk/ggQuest/1.0.0#/public/get_games
    const onButtonClick = (mode : string) => {
      switch (mode) {
        case "All":
          setState("All");
          break;
        case "Popular":
          setState("Popular");
          break;
        case "Claimed":
          setState("Claimed");
          break;
        default:
          break;
      }
    }
    const [state, setState] = useState("All");

    return (
        <div className="border shadow bg-gradient rounded-2xl border-foreground-alt-500 ">
          <div className="relative border-foreground-alt-500">
           {/* LINE OF 3 BUTTONS */}
            <div className="flex items-stretch">
              <div className="py-4 pl-8 pr-4">
                <button 
                  onClick={() => onButtonClick("All")} 
                  className={classNames(
                    state === "All" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900	  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  All
                </button>
              </div>

              <div className="py-4 pr-4">
                <button 
                  onClick={() => onButtonClick("Popular")} 
                  className={classNames(
                    state === "Popular" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900		  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  Popular
                </button>
              </div>

              <div className="py-4">
                <button 
                  onClick={() => onButtonClick("Claimed")} 
                  className={classNames(
                    state === "Claimed" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  Claimmed
                </button>
              </div>

            </div>
          </div>
          
          <div className="relative px-6 py-4 sm:px-8 sm:py-6">
            {/* GRID OF 4 ELEMENTS PER PAGE WITH 2 ROWS */}
            <div className="grid grid-cols-4 gap-4">
                {questItems.map((items: questItems) => (
                    <QuestItemCard key={items.id} gameImg={items.imageQuest} title={items.title} reward={items.reward}/>
                ))}
            </div>
          </div>
        </div>
      );
}

export default QuestCard;