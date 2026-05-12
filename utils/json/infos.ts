import uniesp from "@/app/assets/uniespcentrouniversitario_logo.jpeg";
import adatech from "@/app/assets/logo-ada.png";
import santander from "@/app/assets/logo-santander.png";
import logoGran from "@/app/assets/logo-gran2.png";
import logoRocketSeat from "@/app/assets/logo-rocketseat.png"
import { StaticImageData } from "next/image";


export const languages = [
  {id: 1, label: "Javascript"},
  {id: 2,label: "Typescript"},
  {id: 3,label: "Java"},
  {id: 4,label: "NodeJS"}
] 
export const frameworks = [
  { id: 1, label: "NextJS" },
  { id: 2, label: "React" },
  { id: 3, label: "React-Native" },
  { id: 4, label: "TailwindCSS" },
  { id: 5, label: "ShadcnUI" },
  { id: 6, label: "Expo" },
  { id: 7, label: "Spring Boot" },
  { id: 8, label: "NestJS" },
  { id: 9, label: "Express" }
];

export const skills = [
  { id: 1, label: "Scrum" },
  { id: 2, label: "Kanban" },
  { id: 3, label: "UX/UI" },
  { id: 4, label: "Git" },
  { id: 5, label: "Docker" }
];


type CoursesProps = {
  id: number;
  title: string;
  description: string;
  icon: string | StaticImageData;
  alt: string;
}
export const coursesItems: CoursesProps[] = [
  {
    id: 1,
    title: "Gran Centro Universitário",
    description: "Pós-graduando - Desenvolvimento Fullstack e Cloud Computing | 02/26 - 08/26",
    icon: logoGran,
    alt: "Pós-graduação em Desenvolvimento Fullstack e Cloud Computing no Gran Centro Universitário"
  },
  {
    id: 2,
    title: "Gran Centro Universitário",
    description: "Pós-graduando - Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projeto | 02/26 - 08/26",
    icon: logoGran,
    alt: "Pós-graduação em Arquitetura e Desenvolvimento de Sistemas com ênfase em padrões de projeto no Gran Centro Universitário"
  },
  {
    id: 3,
    title: "RocketSeat",
    description: "Navegação com Expo Router - React Native",
    icon: logoRocketSeat,
    alt: "Curso de navegação com Expo Router em React Native pela RocketSeat"
  },
  {
    id: 4,
    title: "UNIESP Centro Universitário",
    description: "Graduado - Sistemas para Internet",
    icon: uniesp,
    alt: "Graduação em Sistemas para Internet pela UNIESP Centro Universitário"
  },
  {
    id: 5,
    title: "Ada Tech",
    description: "Formação Front-end em React",
    icon: adatech,
    alt: "Formação front-end com React pela Ada Tech"
  },
  {
    id: 6,
    title: "Santander Open Academy",
    description: "Bootcamp Santander Coders Tecnologia para Back-end com Java",
    icon: santander,
    alt: "Bootcamp Santander Coders focado em desenvolvimento back-end com Java"
  },
  {
    id: 7,
    title: "Ada Tech",
    description: "Figma para Devs",
    icon: adatech,
    alt: "Curso de Figma voltado para desenvolvedores pela Ada Tech"
  },
  {
    id: 8,
    title: "Ada Tech",
    description: "Git e Versionamento",
    icon: adatech,
    alt: "Curso de Git e versionamento de código pela Ada Tech"
  },
];


