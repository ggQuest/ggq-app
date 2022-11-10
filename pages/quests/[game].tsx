import { useRouter } from 'next/router'
import styled from "styled-components";
import RowQuest from '@/components/RowQuest';
import { QuestInfo } from '@/types';

import Sandbox from "/assets/ggquest/quests_banner/Sandbox/Sandbox.png"

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
  // TODO : query all quests of the game to get relevant infos
  const infos : QuestInfo = {
    title: "SANDBOXIAN",
    reputation_reward: 200,
    description: "tem.description",
    add_rewards: 21,
    contract_address: "0x0000000"
  }

  return (
    <>
     
     <div className="bg-gradient rounded-2xl border border-foreground-alt-500 shadow ">
      <div className="relative border-b border-foreground-alt-500">
        <img src="/assets/ggquest/Sandbox.png" className="border rounded-xl object-fill"/>
      </div>
      
      <div className="flex relative px-6 py-4 sm:px-8 sm:py-6">
       
        <div className="columns-1">
          <h1 className="text-4xl p-4">THE SANDBOX</h1>
        </div>
      </div>
    </div>
    
      <div className="flex flex-col justify-center mt-10 mb-10">
        <div className="text-center">
            <Thing>AVAILABLE QUESTS</Thing>
        </div>
       
        <div className="flex justify-center items-stretch">
            <div className="grid grid-cols-2 gap-8 place-items-center">
                
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