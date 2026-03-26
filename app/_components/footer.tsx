import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    icon: (
      <GithubLogoIcon
        size={32}
        weight="light"
        className="bg-black rounded-full p-1 "
        color="white"
      />
    ),
    url: "https://github.com/GabrielbrandaoRP",
  },
  {
    id: 2,
    icon: (
      <EnvelopeSimpleIcon 
      size={32}
        weight="light"
        className="bg-black rounded-full p-1 hover:bg-red-500"
        color="white"
      />
    ),
    url: "mailto:gabrielhand15@gmail.com",
  },
  {
    id: 3,
    icon: (
      <LinkedinLogoIcon
        size={32}
        weight="regular"
        className="bg-black rounded-full p-1 hover:bg-sky-700"
        color="white"
      />
    ),
    url: "https://www.linkedin.com/in/gabriel-brandaorp/",
  },
  {
    id: 4,
    icon: (
      <WhatsappLogoIcon
        size={32}
        weight="light"
        className="bg-black rounded-full p-1 hover:bg-green-400"
        color="white"
      />
    ),
    url: "https://wa.link/zy7i94",
  },
  {
    id: 5,
    icon: (
      <InstagramLogoIcon
        size={32}
        weight="light"
        className="bg-black rounded-full p-1 
        hover:bg-linear-to-br from-pink-600 from-40% via-orange-400 via-60% to-purple-600 to-73% "
        color="white"
      />
    ),
    url: "https://www.instagram.com/gabrielbrandaorp?igsh=MWR0YjhxYXd4eG04dQ==",
  },
];

export default function Footer() {
  return (
    <div className="px-8 py-2 mx-4 border border-gray-400 rounded-3xl" data-aos="fade-bottom">
      <div className="flex justify-between">
        {socialLinks.map((item) => (
          <Link key={item.id} href={item.url} className="shadow-md shadow-zinc-800 rounded-full hover:scale-105">
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
