import { FC } from "react";

export interface GGQuestPage extends FC {
  PageTitle?: FC;
}

export interface QuestInfo {
  title: string;
  reputation_reward: string | number;
  description: string;
  add_rewards: any;
  contract_address: string | number;
}
