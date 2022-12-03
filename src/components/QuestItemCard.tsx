import Image from "next/image";
interface QuestItemProps {
    gameImg?: string;
    title?: string;
    reward?: number;
}

const QuestItemCard = ({gameImg, title, reward} : QuestItemProps) => {
    // TODO : fetch to know if quest with {title} is claimed or not
    const isClaimed = false;

    return (
        <div className="grid max-w-sm bg-white border rounded-sm shadow-md place-items-center dark:bg-black dark:border-white">
            <div className="border-b">
            <Image className="mx-auto rounded-t-lg w-60 h-60" src={gameImg} alt="" />
            </div>

            <div className="p-5">
                <a href="#">
                    <p className="grid mb-2 text-xl font-bold tracking-tight text-gray-900 place-items-center dark:text-white">
                        {title}
                    </p>
                </a>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-sm bg-violet-800">
                    + {reward} XP
                </a>
            
                {
                    isClaimed ? 
                    <a className="inline-flex items-center px-3 py-2 ml-5 text-sm font-medium text-center text-white bg-teal-500 rounded-sm hover:bg-blue-800 ">
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