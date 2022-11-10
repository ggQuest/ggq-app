import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useAllGames = () => {
    const [games] = useFetch("https://gg.quest/api/games")
    return games
}

export default useAllGames