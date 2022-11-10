import { OverviewQuest } from "./overviewQuest";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { QuestInfo } from "@/types";


interface QCProps {
    game?: string;
    srcGame?:string;
    srcToken?:string;
    questItem?: any;
    questInfos?: QuestInfo;
    
}

const CardContainer = styled.div`
display: flex;
  width: 230px;
  height: 450px;
  box-shadow: 0 0 12px 1px rgba(15, 15, 15, 0.12);
  position: relative;
  padding: 20px solid;
  border: 1px solid ;
  border-image-slice: 1;
  display:flex;
  margin:30px;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const QuestCatalogue = (props : QCProps)=> {
    return (
        <CardContainer>
            <CardWrapper>
                <OverviewQuest title={props.game} />
            </CardWrapper>
        </CardContainer>
    )
}

export default QuestCatalogue;