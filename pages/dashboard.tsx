import { FC, useEffect, useState } from "react";
import type { GGQuestPage } from "@/types";
import ProfileConnected from "@/components/ProfileConnected";
import QuestCard from "@/components/QuestsCard";
import ProfileCreate from "@/components/ProfileCreate";
import { useAccount, useNetwork } from 'wagmi'
import Button from "@/components/Button";
import useProfile from "@/hooks/useProfile";
import { BannerCarousel } from "@/components/BannerCarousel";


const Dashboard: GGQuestPage = () => {
  const isUser = true;
  const {chain} = useNetwork();
  const {isConnected, address} = useAccount();
  const [profile, setProfile] = useState<any[]>();

  // TODO : fetch to know if user has already a questID
  let questId = useProfile(address)
  
  useEffect(() => {
    if(questId?.isRegistered === true) setProfile(questId)
  }, [questId])
  
  return (
    <>
        <div className="items-center">
            {isConnected && !chain?.unsupported 
            ? ( isUser ? 
                <ProfileConnected profile={profile}/> : 
                <ProfileCreate/>
            )
            : ""
            }
        </div>
        <div className="mt-4">
            <QuestCard/>
        </div>
    </>
  );
};


export default Dashboard;
