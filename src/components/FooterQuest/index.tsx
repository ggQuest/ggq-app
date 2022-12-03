import Image from "next/image";
import Link from "next/link";

import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const FooterQuest = () => {
  return (
    <>
      <footer className="p-10 footer bg-quest text-base-content ">
        <div className="px-10">
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
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@gg.quest"
                class="input input-bordered"
              />
            </label>
          </div>
          <p>contact@gg.quest</p>
        </div>
        <div>
          <span className="footer-title">Quest</span>
          <a className="link link-hover">Faq</a>
          <a className="link link-hover">Games</a>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Advertisement</a>
        </div>
      </footer>
      <footer className="px-10 py-4 border-t footer bg-quest text-base-content border-base-300">
        <div className="items-center content-center grid-flow-col">
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
          <p>Copyright ® 2022 GG QUEST All rights Rcerved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <BsFacebook />
            </a>
            <a>
              <AiFillInstagram />
            </a>
            <a>
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
