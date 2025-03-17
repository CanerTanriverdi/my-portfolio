import profilePicture from "../assets/images/me.jpeg";
import instagram1 from "../assets/icons/instagram1.svg";
import linkedin1 from "../assets/icons/linkedin1.svg";
import github from "../assets/icons/github.svg";
import mail1 from "../assets/icons/mail1.svg";
import SocialLinks from "../components/SocialLinks";
import SkillItem from "../components/SkillItem";
import Skills from "../components/Skills";
import Separator from "../components/Separator";

const homeLinks = [
  { id: "github", url: "https://github.com", icon: github },
  { id: "linkedin", url: "https://linkedin.com", icon: linkedin1 },
  { id: "instagram", url: "https://instagram.com", icon: instagram1 },
  { id: "mail", url: "mailto:canertanriverdiis@gmail.com", icon: mail1 },
];

export default function Home() {
  return (
    <div className="bg-background flex flex-col">
      <div className="h-screen flex">
        <div className="w-1/2 flex flex-col items-end justify-center space-y-10">
          <div className="flex flex-col space-y-2">
            <div className="space-y-10">
              <h2 className="text-primary text-4xl font-bold">Hi, I am</h2>
              <h1 className="text-primary text-7xl font-bold">Caner Tanrıverdi</h1>
            </div>
            <h3 className="text-gray-400 text-2xl">Front-end Developer</h3>
            <SocialLinks
              links={homeLinks}
              containerClass="flex space-x-10 py-10"
              iconClass="w-9 h-9 bg-[#C4C4C4] shadow-[1px_3px_10px_rgba(0,0,0,0.2),-1px_3px_10px_rgba(0,0,0,0.2)] hover:shadow-2xl rounded-md p-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-1/2 h-full relative bg-background bg-right">
          <img
            src={profilePicture}
            alt=""
            className="profileClipPath w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <Separator />
      <Skills>
        <SkillItem />
      </Skills>
    </div>
  );
}
