import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useScores = () => {
    const [scores] = useFetch("https://gg.quest/api/reputation_scores")
    return scores
}

export default useScores