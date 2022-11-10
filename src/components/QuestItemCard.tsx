interface QuestItemProps {
    gameImg?: string;
    title?: string;
    reward?: number;
}

const QuestItemCard = ({gameImg, title, reward} : QuestItemProps) => {
    // TODO : fetch to know if quest with {title} is claimed or not
    const isClaimed = false;

    return (
        <div className="grid place-items-center max-w-sm bg-white rounded-sm border shadow-md dark:bg-black dark:border-white">
            <div className="border-b">
                <img className="w-60 h-60 mx-auto rounded-t-lg" src={gameImg} alt="" />
            </div>

            <div className="p-5">
                <a href="#">
                    <p className="grid place-items-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </p>
                </a>
                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-violet-800 rounded-sm">
                    + {reward} XP
                </a>
            
                {
                    isClaimed ? 
                    <a className="inline-flex items-center ml-5 py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-sm hover:bg-blue-800 ">
                        CLAIMED
                    </a>
                    : 
                    <a href="#" className="inline-flex items-center  ml-5 py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-sm hover:bg-[#053f4d] ">
                        CLAIM
                    </a>
                }
            </div>
        </div>
    )
}

export default QuestItemCard;