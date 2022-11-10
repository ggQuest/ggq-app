import { FC, useState } from "react";


import Button from "./Button";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import SkillBar from 'react-skillbars';
import { EditProfileModal } from "./Modal/editProfile";


const ProfileCreate: FC = () => {
  
  const [level, setLevel] = useState(50);
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const { address, isConnected } = useAccount()
    

  const onEditProfileModalClose = () => {
    setEditProfileModalOpen(false);
  };

  const handleEditProfileClick = () => {
    // show modal if not connected
    if(!isConnected) {
      return;
    }
    setEditProfileModalOpen(true);
  }


  return (
    <div className="bg-gradient rounded-2xl border border-foreground-alt-500 shadow ">
      <div className="relative border-b border-foreground-alt-500">
        <img src="/assets/ggquest/coverPink.png" className=" border rounded-xl object-fill">
        </img>
      </div>
      
      <div className="flex relative px-6 py-4 sm:px-8 sm:py-6">

        <EditProfileModal
          isOpen={editProfileModalOpen}
          onClose={onEditProfileModalClose}
          isUserID={false}
          address={address}
        />

        <Button
          size="normal"
          state="enabled"
          onClick={handleEditProfileClick}
        >
          Create Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileCreate;
