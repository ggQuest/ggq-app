import { FC, MouseEventHandler } from "react";
import {
  AcademicCapIcon,
  ChartBarIcon,
  HeartIcon,
  LightningBoltIcon,
  SpeakerphoneIcon,
  StarIcon,
  TemplateIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
 import NavItem from "./NavItem";

interface Props {
  onClick?: MouseEventHandler;
}

const NavItems: FC<Props> = ({ onClick }) => {

  const navigation = [
    { name: "Dashboard", href: "/", icon: TemplateIcon },
    {
      name: "Quests",
      href: "/quests",
      icon: LightningBoltIcon,
    },
    { name:"Leaderboard", href: "/", icon: UserGroupIcon },
    { name: "Badges", href: "/", icon: StarIcon },
    { name: "Settings", href: "/", icon: HeartIcon },
  ];

  return (
    <nav className="flex-1 space-y-2">
      {navigation.map((item) => (
        <NavItem
          key={item.name}
          Icon={item.icon}
          href={item.href}
          onClick={onClick}
        >
          {item.name}
        </NavItem>
      ))}
    </nav>
  );
};

export default NavItems;
