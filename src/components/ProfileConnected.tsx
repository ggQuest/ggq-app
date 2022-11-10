import { FC, useState } from "react";
import Button from "./Button";
import { useAccount } from "@/hooks/useAccount";
import SkillBar from 'react-skillbars';
import { EditProfileModal } from "./Modal/editProfile";



const ProfileConnected = (profile : any) => {
  //const {account} = useAccount();
 
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);

  // TODO : get address and info as the user is already connected and owns a questId
  const address = ""; // profile.address
  const pfp = "/assets/ggquest/logoProfile.jpeg"; // profile.profilePictureURL
  const name = "DANIEL ZIMMERMAN"; // profile.coverPictureURL
  const lvl = "50"; // profile.gainedReputation - lostReputation

  const skills = [
    { type: '', level: lvl , 
      color: {
        bar: '#391D75',
        title: { text: '', background: '#6931E0' }
      }
    }
  ];

  const onEditProfileModalClose = () => {
    setEditProfileModalOpen(false);
  };

  const handleEditProfileClick = () => {
    setEditProfileModalOpen(true);
  }
  return (
    <div className="bg-gradient rounded-2xl border border-foreground-alt-500 shadow ">
      <div className="relative border-b border-foreground-alt-500">
        <img src="/assets/ggquest/Sandbox.png" className="border rounded-xl object-fill">
        </img>
      </div>
      
      <div className="flex relative px-6 py-4 sm:px-8 sm:py-6">
        <img
          src={pfp}
          className="w-[150px] h-[150px] border-1 border-white -mt-[50px] rounded-xl"
        />
        <div className="columns-1 -mt-[12px]">
          <h2 className="p-4">{name}</h2>
          <div className="pl-4">
            <SkillBar skills={skills} height={20} symbol = {''}/>
          </div>
          
          <span className="p-4">
            {lvl}/100 XP
          </span>
        </div>
       
        <EditProfileModal
          isOpen={editProfileModalOpen}
          onClose={onEditProfileModalClose}
          isUserID={true}
        />

        <Button
          size="normal"
          state="enabled"
          className="xl:ml-[520px]"
          onClick={handleEditProfileClick}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileConnected;
