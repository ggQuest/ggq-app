import { FC, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "styles/index.scss";
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { patchClient } from '@/lib/walletconnect-fix'
import WarpSpeed from "@/layouts/WarpSpeed";
import '@rainbow-me/rainbowkit/styles.css';


import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
  AvatarComponent,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit"

import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.polygonMumbai,
    chain.arbitrumGoerli,
    chain.optimismGoerli,
  ],
  [publicProvider()]
)


const Body: FC<AppProps> = (props) => {
  return <WarpSpeed {...props} />;
};

const App: FC<AppProps> = (props) => {
  const [pageLoaded,setPageLoaded] = useState(false);

  useEffect(()=>{
    setPageLoaded(true);
  },[]);

  const { connectors } = getDefaultWallets({
    appName: "ggQuest",
    chains,
  })
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
            chains={chains}
            theme={{
              lightMode: lightTheme(),
              darkMode: darkTheme(),
            }}
          >
        { (pageLoaded) ?
          <Body {...props} />
          : null
        }
        </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
};

export default App;
