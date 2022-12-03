import { FC } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit"
import { shortAddr } from "@/lib/utils";
import Button from "./Button";

interface Props {
  PageTitle: FC;
}

const TopNavbar: FC<Props> = ({ PageTitle }) => (
  <div className="flex mb-8 grow sm:mb-12">
    <div className="flex-initial sm:pr-4">
      <PageTitle />
    </div>
    <div className="items-center justify-end flex-none hidden h-10 grow sm:flex">
    {/* <ConnectButton
        label="Start here"
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        chainStatus="icon"
        showBalance={false}
      /> */}
    </div>
  </div>
);

export default TopNavbar;
