import { useRouter } from 'next/router'
import Image from "next/image"; 
import styled from "styled-components";
import RowQuest from '@/components/RowQuest';
import { QuestInfo } from '@/types';

import Sandbox from "/assets/ggquest/quests_banner/Sandbox/Sandbox.png"
import useAllQuests from '@/hooks/useAllQuests';

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

export const Thing2 = styled.div`
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
interface GHProps {
  game?: string | string[]
}

const GameHeader = styled.div<GHProps>`
  background: url(
    "/assets/ggquest/homepage_games/axieP.png"
  }) center;
`

const Game = () => {
  const router = useRouter()
  const { game } = router.query
  
  const quests = useAllQuests();
  // filter by GameId
  quests?.filter((obj : any) => obj.gameId === game)

  // TODO : quests contains all infos relevant to display
  // create just an array with objects of type {infos}
  // and map through it to display the right RowQuest just below
  // API reference : https://app.swaggerhub.com/apis-docs/H0tmilk/ggQuest/1.0.0#/public/get_quests
  const infos : QuestInfo = {
    title: "SANDBOXIAN",
    reputation_reward: 200,
    description: "tem.description",
    add_rewards: 21,
    contract_address: "0x0000000",
    thumbnailImageURL : "",
    gameCoverImageURL : "",
    gameName:""
  }
  // the array QUESTS_INFOS will contain several infos objects

  return (
    <>
     
     <div className="border shadow bg-gradient rounded-2xl border-foreground-alt-500 ">
      <div className="relative border-b border-foreground-alt-500">
        {/* TODO : replace src by QUESTS_INFOS[0].gameCoverImageURL */}
      <Image src="/assets/ggquest/Sandbox.png" className="object-fill border rounded-xl" alt={"quest info description"}/>
      </div>
      
      <div className="relative flex px-6 py-4 sm:px-8 sm:py-6">
       
        <div className="columns-1">
          {/* TODO : replace src by QUESTS_INFOS[0].gameName */}
          <h1 className="p-4 text-4xl">THE SANDBOX</h1>
        </div>
      </div>
    </div>
    
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <div className="text-center">
            <Thing>AVAILABLE QUESTS</Thing>
        </div>
       
        <div className="flex items-stretch justify-center">
            <div className="grid grid-cols-2 gap-8 place-items-center">
                  {/* TODO : remove this and map instead the array QUESTS_INFOS */}
                  <RowQuest reward={infos.reputation_reward} questTitle={infos.title}/>
                  <RowQuest reward={infos.reputation_reward} questTitle={infos.title}/>
                  <RowQuest reward={infos.reputation_reward} questTitle={infos.title}/>
                  <RowQuest reward={infos.reputation_reward} questTitle={infos.title}/>
                
            </div>
        </div>

      </div>
     
  </>            
    
  )
}

export default Game