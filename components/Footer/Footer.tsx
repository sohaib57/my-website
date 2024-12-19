import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import StackoverflowIcon from "../Icons/StackoverflowIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/sohaib57", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/sohaib-ashraf-butt-b36191192/", Icon: LinkedinIcon },
  { href: "https://stackoverflow.com/users/11961514/sohaib", Icon: StackoverflowIcon },
  // { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Sohaib Ashraf
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className={"w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"} />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
