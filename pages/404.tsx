import type { GGQuestPage } from "@/types";
import { FC } from "react";

const NotFound: GGQuestPage = () => {

  return (
    <div className="flex justify-center items-center py-8 lg:py-32">
      <div className="bg-background-dark w-4/5 lg:w-1/2 max-w-xl rounded-xl border border-foreground-alt-500 shadow p-6 md:p-12">
        <div className="flex justify-center mt-2">
          <div className="w-3/5 lg:w-1/2 min-h-[200px]">
            <img src="/animations/animation.gif" />
          </div>
        </div>
        <div className="w-full text-center mb-8">
        </div>
        <div className="w-full text-center mb-8">
          <p className="break-normal text-foreground-alt-200">This is a 404 error, which means the page you are looking for is no longer here or never existed. Try clicking a link in the sidebar.</p>
        </div>
      </div>
    </div>
  );
};

const PageTitle: FC = () => {
  return (
    <>
      <h1 className="font-title font-medium text-2xl sm:text-3xl pt-2">404 Error</h1>
      <h2 className="font-body font-normal text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1">
        Page Not Found
      </h2>
    </>
  );
};

NotFound.PageTitle = PageTitle;


export default NotFound;
