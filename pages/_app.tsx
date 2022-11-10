import { FC, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "styles/index.scss";

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { patchClient } from '@/lib/walletconnect-fix'
import WarpSpeed from "@/layouts/WarpSpeed";

const Body: FC<AppProps> = (props) => {
  return <WarpSpeed {...props} />;
};

const App: FC<AppProps> = (props) => {
  const [pageLoaded,setPageLoaded] = useState(false);

  useEffect(()=>{
    setPageLoaded(true);
  },[]);

  const wagmiClient = createClient(
    patchClient(
      getDefaultClient({
        autoConnect: true,
        appName: "ggQuest",
        chains: [chain.polygon],
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      })
    )
  )

  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider mode="light">
        { (pageLoaded) ?
          <Body {...props} />
          : null
        }
        </ConnectKitProvider>
    </WagmiConfig>
    </>
  );
};

export default App;
