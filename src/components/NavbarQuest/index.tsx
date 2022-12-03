import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Dashboard from '../../../pages/index';


export const NavbarQuest = () => {
    return (
        <>
        <div className="navbar bg-quest mt-110 ">
            <div className="ml-20 navbar-start">
                <a className="text-xl normal-case"> 
                    <Link legacyBehavior href="/">
                        <Image
                                src="/assets/ggquest/ggLogo.svg"
                                width={162}
                                height={50}
                                layout="responsive"
                                alt="meta.titleFull"
                                priority
                            />
                    </Link>
                </a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="p-0 menu menu-horizontal">
                <li><Link legacyBehavior href="/quests" >Quests</Link></li>
                <li><Link legacyBehavior href="/leaderboard" >Leaderboard</Link></li>
                <li><Link legacyBehavior href="/dashboard" >Dashboard</Link></li>
                </ul>
            </div>
            <div className="mr-20 navbar-end">
            <button className="btn btn-ghost btn-rounded">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
                <ConnectButton 
                    accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                    }}
                    chainStatus="icon"
                    showBalance={false}
                />
            </div>
            </div>
            <div class="divider"></div> 
        </>
    )
}