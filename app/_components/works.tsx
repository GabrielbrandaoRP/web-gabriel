import Image from "next/image";
import confrapag from "../assets/confrapag-icon.jpeg";
import contax from "../assets/liq-contax.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FlaskConical } from "lucide-react";

export default function Works() {
  return (
    <section
      className="w-full p-5 px-10 bg-gray-100 dark:bg-zinc-900 dark:text-black flex flex-col gap-5 rounded-xl shadow-xl shadow-zinc-300 dark:shadow-zinc-800"
      id="about"
      data-aos="fade-left" data-aos-duration="10000"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <FlaskConical size={34} className="dark:text-white" />
          <h1 className="text-xl text-black font-bold dark:text-white">Experiência profissional</h1>

        </div>
        <hr className="border-gray-300 dark:border-gray-700" />
      </div>

      <div>
        
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value="confrapag">
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  <Image
                    src={confrapag}
                    alt="Confrapag"
                    width={80}
                    height={80}
                    className="rounded-full border border-gray-200 shadow-lg"
                  />
                  <div>
                    <h1 className="font-bold text-lg text-black dark:text-gray-400">Confrapag</h1>
                    <p className="text-black dark:text-gray-200">Desenvolvedor Fron-end Jr</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-5 text-black dark:text-gray-200">
                Atuo como Desenvolvedor Front-end Jr na Confrapag, empresa
                especializada em soluções de meios de pagamento, contribuindo no
                desenvolvimento, manutenção, evolução e estabilidade dos
                principais produtos da empresa. Principais atividades e
                responsabilidades: Desenvolvimento e manutenção de
                funcionalidades Front-end utilizando Javascript com React + Next
                e TailwindCSS + ShadcnUI para estilização de interfaces, e
                React-Native em soluções para aplicativos mobile Android e IOS e
                sistema de POS, seguindo boas práticas de código e arquitetura.
                Desenvolvimento de novas Features em portais e Apps, refatoração
                de códigos e alinhamento a padrões de projetos Atuação em
                ambientes com arquitetura multi-tenant, garantindo isolamento,
                segurança e escalabilidade entre os clientes. Realização de
                testes unitários com Jest Submissão de Aplicativos na lojas App
                Store e Google Play Utilização do Storybook para documentação de
                componentes Web Colaboração com o time de desenvolvimento e
                demais áreas para entendimento de requisitos e entrega de
                soluções eficientes Análise, correção e prevenção de falhas em
                produção em interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contax">
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  <Image
                    src={contax}
                    alt="Contax"
                    width={80}
                    height={80}
                    className="rounded-full border border-gray-200 shadow-lg"
                  />
                  <div>
                    <h1 className="font-bold text-lg text-black dark:text-gray-400">Contax</h1>
                    <p className="text-black dark:text-gray-200">Atendente Pleno</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-5 text-black dark:text-gray-200">
                Atuei no atendimento a clientes de alto valor em Cia. Aérea Multinacional, realizando
                remarcações, cancelamento, vendas e demais procedimentoes técnicos com passagens aéreas.

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        
      </div>
    </section>
  );
}
