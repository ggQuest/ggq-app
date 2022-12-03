import { FC, useEffect, useState } from "react";
import type { GGQuestPage } from "@/types";
import ProfileConnected from "@/components/ProfileConnected";
import QuestCard from "@/components/QuestsCard";
import ProfileCreate from "@/components/ProfileCreate";
import { useAccount, useNetwork } from 'wagmi'
import Button from "@/components/Button";
import useProfile from "@/hooks/useProfile";
import { BannerCarousel } from "@/components/BannerCarousel";


const QuestHome: GGQuestPage = () => {
  return (
    <>
      <div className="mt-4">
        <QuestCard/>
      </div>
    </>
  );
};


export default QuestHome;
