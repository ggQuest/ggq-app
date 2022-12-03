import type { GGQuestPage } from "@/types";
import { FC } from "react";
import Image from "next/image";

const NotFound: GGQuestPage = () => {

  return (
    <div className="flex items-center justify-center py-8 lg:py-32">
      <div className="w-4/5 max-w-xl p-6 border shadow bg-background-dark lg:w-1/2 rounded-xl border-foreground-alt-500 md:p-12">
        <div className="flex justify-center mt-2">
          <div className="w-3/5 lg:w-1/2 min-h-[200px]">
            <Image src="/animations/animation.gif"  alt="404 error"/>
          </div>
        </div>
        <div className="w-full mb-8 text-center">
        </div>
        <div className="w-full mb-8 text-center">
          <p className="break-normal text-foreground-alt-200">This is a 404 error, which means the page you are looking for is no longer here or never existed. Try clicking a link in the sidebar.</p>
        </div>
      </div>
    </div>
  );
};

const PageTitle: FC = () => {
  return (
    <>
      <h1 className="pt-2 text-2xl font-medium font-title sm:text-3xl">404 Error</h1>
      <h2 className="mt-1 text-sm font-normal leading-4 font-body text-foreground-alt-200 sm:text-base sm:leading-6">
        Page Not Found
      </h2>
    </>
  );
};

NotFound.PageTitle = PageTitle;


export default NotFound;
