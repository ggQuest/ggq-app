import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useGame = (game : string) => {
    const [game_] = useFetch("https://gg.quest/api/game/"+game)
    return game_
}

export default useGame