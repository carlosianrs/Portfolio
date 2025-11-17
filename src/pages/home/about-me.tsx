import { pathConfig } from "@/lib/settings.config";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      className="flex items-center justify-center bg-gray-950 px-6 md:px-20 py-16"
      id="about-me"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl gap-12">
        
        <div className="text-start space-y-4">
          <p className="text-gray-100 text-heading-md md:text-heading-hg">Sobre mim</p>

          <p className="md:text-heading-md text-gray-200 max-w-5xl text-heading-xs text-justify leading-7">
            Sou um desenvolvedor focado em Back-End, mas também já realizei diversos projetos envolvendo Front-End.
            Sempre fui apaixonado por tecnologia: comecei na área de design gráfico e, com o tempo, passei a criar
            mods para Minecraft usando Java. Essa experiência despertou meu interesse pela programação e me fez explorar
            mais sobre o desenvolvimento de jogos e de sites. Em 2020, iniciei meus estudos no Marwin, uma escola
            profissionalizante, cursando Informática, concluí a formação em dezembro de 2022. Além disso, em 2025,
            finalizei minha primeira graduação: Tecnólogo em Análise e Desenvolvimento de Sistemas pela Faculdade Uninassau.
            Como já possuía experiência com programação de jogos, a transição para o desenvolvimento web foi natural.
            Hoje continuo me dedicando, estudando e buscando evoluir constantemente nessa área incrível que é a tecnologia.
          </p>
        </div>

        <Image
          src={`${pathConfig.basePath}/logo.png`}
          alt="logo"
          width={250}
          height={250}
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
