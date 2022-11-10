import styled from "styled-components";
import GamesAvailable from "@/components/GamesAvailable";

export const Thing = styled.div`
    box-sizing: border-box;
    mix-blend-mode: screen;
    opacity: 1;
    box-shadow: 0px 3.93651px 3.93651px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    border-width : 2px;
    border-style: solid;
    border-image-slice: 1;
    font-family: Soft, sans-serif;
    font-style: normal;
    font-weight: bold;
    border-image-source: linear-gradient(to left, #1AFFE3, #8499DA);
    padding: 10px 100px;
`

const Quests = () => {
    return (
        <>
            <div className="flex justify-center mb-10">
                <div className="text-center">
                    <Thing>CHOOSE YOUR GAME</Thing>
                </div>
            </div>
            <GamesAvailable/>

        </>
    )
}

export default Quests;