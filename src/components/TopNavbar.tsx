import { FC } from "react";
import { ConnectKitButton } from 'connectkit'
import { shortAddr } from "@/lib/utils";
import Button from "./Button";

interface Props {
  PageTitle: FC;
}

const TopNavbar: FC<Props> = ({ PageTitle }) => (
  <div className="flex grow mb-8 sm:mb-12">
    <div className="flex-initial sm:pr-4">
      <PageTitle />
    </div>
    <div className="flex-none grow justify-end items-center hidden sm:flex h-10">
      <ConnectKitButton.Custom>
				{({ show, isConnected, address, ensName }) => (
					<Button onClick={show} className="px-4 py-3 rounded-full bg-183c4a text-ffffff text-14">
						{isConnected ? ensName ?? shortAddr(address) : 'Connect Wallet'}
					</Button>
				)}
			</ConnectKitButton.Custom>
    </div>
  </div>
);

export default TopNavbar;
