import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import AxieBackgroundImg from "/assets/ggquest/homepage_games/axieP.png";
import SandBackgroundImg from "/assets/ggquest/homepage_games/sand4.png";
import EvioBackgroundImg from "/assets/ggquest/homepage_games/evio.png";
import IlluBackgroundImg from "/assets/ggquest/homepage_games/illuHome.png";
import BigTimeBackgroundImg from "/assets/ggquest/homepage_games/bigtimeHome.jpeg";
import StarAtlasBackgroundImg from "/assets/ggquest/homepage_games/starAtlasHome.jpeg";

// TODO : remove the above ones new GAMES
import one from "/assets/ggquest/homepage_games/Sandbox.png";
import two from "/assets/ggquest/homepage_games/2.png";
import three from "/assets/ggquest/homepage_games/3.png";
import four from "/assets/ggquest/homepage_games/4.png";
import five from "/assets/ggquest/homepage_games/5.png";
import six from "/assets/ggquest/homepage_games/6.png";

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

interface OCProps {
    title?: string | StaticImageData;
}

const OverviewContainer = styled.div<OCProps>`
    position:absolute;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background: url(${props => 
        props.title === "Axie Infinity" ? "/assets/ggquest/homepage_games/axieP.png" : 
        props.title === "Sandbox" ? "/assets/ggquest/homepage_games/sand4.png":  
        props.title === "Evio" ? "/assets/ggquest/homepage_games/evio.png" :
        props.title === "Bigtime" ? "/assets/ggquest/homepage_games/bigtimeHome.jpeg" :  
        props.title === "StarAtlas" ? "/assets/ggquest/homepage_games/starAtlasHome.jpeg" : 
        props.title === "Sandbox" ? "/assets/ggquest/homepage_games/Sandbox.png" :
        props.title === "2" ? "/assets/ggquest/homepage_games/2.png" :
        props.title === "3" ? "/assets/ggquest/homepage_games/3.png" :
        props.title === "4" ? "/assets/ggquest/homepage_games/4.png" :
        props.title === "5" ? "/assets/ggquest/homepage_games/5.png" :
        props.title === "6" ? "/assets/ggquest/homepage_games/6.png" :
        "/assets/ggquest/homepage_games/axieP.png"
    }
    ) center;
    background-size: cover;
    background-position: -85px 0px;
`;


const SpanBottomQuest = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  background-color: black;
  width: 100%;
  height: 50px;
  border : 2px solid white;
  justify-content:center;
  font-family:Soft;
  font-size: 20px;
  position:relative;
  bottom:0;
`

export function OverviewQuest(props : any) {

    const router = useRouter()

  
    const switchToQuest = (path : string) => {
        router.push(path)
    }
  
    return (
      <OverviewContainer title={props.title}>
        {/** 
        <Button onClick={switchToBuy} overview>
          <TitleText variant>
            Overview
          </TitleText>
          </Button>
        */}
        <SpanBottomQuest className="cursor-pointer hover:bg-violet-600" onClick={() => switchToQuest(`/quests/${props.title}`)}>
          View Quests
        </SpanBottomQuest>
      </OverviewContainer>
    );
  }