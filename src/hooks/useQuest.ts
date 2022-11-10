import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useQuest = (address : string) => {
    const [questId] = useFetch("https://gg.quest/api/quests"+address)
    return questId
}

export default useQuest