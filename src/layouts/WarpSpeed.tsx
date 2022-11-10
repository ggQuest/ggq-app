import { FC, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LeftNavbar from "@/components/LeftNavbar";
import TopNavbar from "@/components/TopNavbar";

type Page<P = {}> = NextPage<P> & {
  PageTitle?: FC;
};

type Props = AppProps & {
  Component: Page;
};

const WarpSpeed: FC<Props> = ({ Component, pageProps }) => {
  const PageTitle = Component.PageTitle ?? (() => <></>);
  const { asPath } = useRouter();

  useEffect(() => {
    document.querySelector("body")!.classList.remove("classic");
  }, []);

  return (
    <>  
      
        <LeftNavbar />
        <main className="sm:pl-64">
          <div className="px-4 py-2 sm:px-10 sm:py-10 text-foreground">
            <TopNavbar PageTitle={PageTitle} />
              <Component {...pageProps} />
          </div>
        </main>
        </>
  );
};

export default WarpSpeed;
