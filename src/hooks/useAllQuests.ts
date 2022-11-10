import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useAllQuests = () => {
    const [quests] = useFetch("https://gg.quest/api/quests")
    return quests
}

export default useAllQuests