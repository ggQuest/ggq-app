import * as React from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

//import { Role } from 'types';
//import { updateProfile } from 'utils/api';
//import { useMobile } from 'hooks';
//import { OnboardingFormDataType } from 'contexts';
//import { userSlice } from '@/selectors';
import { Button } from './../ProfileComponents/Button';
import { Input } from "./../ProfileComponents/Input";
import { Modal } from "./../ProfileComponents/Modal";

//import { updateUserProfile } from '@/slices/user';

type Steps = 'active' | 'idle' | 'error';

interface IEditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  address?: string;
  isUserID : boolean;
}

export const EditProfileModal: React.FC<IEditProfileModalProps> = ({
  isOpen,
  onClose,
  address,
  isUserID
}) => {
  //const isMobile = useMobile();
  const isMobile = false;
  //const dispatch = useDispatch();
  //const { profile } = useSelector(userSlice);
  const [formData, setFormData] : any = React.useState({});
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = React.useState<string>();
  const [file, setFile] = React.useState<File | null>(null);
  const [shouldRemoveAvi, setShouldRemoveAvi] = React.useState(false);
  const [walletRequestStep, setWalletRequestStep] =
    React.useState<Steps>('idle');

  const [isLoading, setIsLoading] = React.useState(false);

  const onAddPicClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onRemovePicClick = () => {
    setFileUrl('');
    setFile(null);
    setFormData({
      ...formData,
      avatar: '',
    });
    setShouldRemoveAvi(true);
  };

  // TODO : modify/create questID
  /*const handleSubmitUpdate = async () => {
    try {
      setIsLoading(true);

      if (!formData) {
        return toast.error('Something went wrong.');
      }

      const formDataToBeSent: OnboardingFormDataType = {
        full_name: formData.full_name,
      };
      
      const { data, error } = await updateProfile(
        address,
        '',
        formDataToBeSent,
      );

      dispatch(updateUserProfile({ ...data, avatar: fileUrl }));

      if (error || !data) {
        setWalletRequestStep('error');
        return toast.error('Failed to update profile');
      }

      toast.success('Profile updated successfully');
      setWalletRequestStep('idle');
      onClose();
    } catch (error) {
      // @ts-expect-error
      toast.error(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  */

  /*
  const handleSubmitMint = async () => {

  }
  */

  
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file as Blob);

    setFile(event.target.files[0]);
    setShouldRemoveAvi(false);
    setFileUrl(fileUrl);
  };


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerClassName={isMobile ? 'w-full' : ''}
    >
      <Toaster />

      
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="ml-4 text-xl font-medium text-indigoGray-90">
            {isUserID ? "Modify Your Quest ID" : "Create Your Quest ID"}
          </h3>
        </div>
        <form className="mt-6 flex flex-col gap-6">
              <Input
                placeholder="CHOOSE UNIQUE USERNAME"
                value={formData.full_name}
                onChange={(val : any) => setFormData({ ...formData, full_name: val })}
              />
            </form>
        <div
          className={`mt-6 flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}
        >
          <div className={`flex ${isMobile ? 'w-full' : 'w-1/2'} flex-col`}>
            <div className="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              
            
            </div>
            <div className="ml-6 mt-8 flex flex-col">
                <Button variant="secondary" onClick={onAddPicClick}>
                  CHANGE PICTURE
                </Button>
                <input
                  ref={fileInputRef}
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={handleFileUpload}
                />

                <Button
                  variant="tertiary"
                  className="mt-2 text-indigoGray-50"
                  onClick={onRemovePicClick}
                >
                  REMOVE PICTURE
                </Button>
              </div>
      
          </div>

          <div className={`flex ${isMobile ? 'w-full' : 'w-1/2'} flex-col`}>
            <img
                src={fileUrl || formData.avatar || '/assets/ggquest/pfp.jpeg'}
                alt="Your avatar"
                className="ml-6 h-[100px] w-[100px] rounded-full border-[1.5px] border-indigoGray-30 object-cover"
              />
            
            {isUserID ? 
              <Button
                //onClick={handleSubmitUpdate}
                disabled={isLoading}
                className="mt-6"
              >
                SAVE CHANGES 
              </Button>
              : 
              <Button
                //onClick={handleSubmitMint}
                disabled={isLoading}
                className="mt-6"
              >
                MINT QUEST ID
              </Button>
            }

            
          </div>
        </div>
      </div>
    </Modal>
  );
};