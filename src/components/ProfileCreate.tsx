import { FC, useState } from "react";
import Image from "next/image";

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
    <div className="border shadow bg-gradient rounded-2xl border-foreground-alt-500 ">
      <div className="relative border-b border-foreground-alt-500">
        <Image src="/assets/ggquest/coverPink.png" className="object-fill border rounded-xl"  alt="Profile Image"/>

      </div>
      
      <div className="relative flex px-6 py-4 sm:px-8 sm:py-6">

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
