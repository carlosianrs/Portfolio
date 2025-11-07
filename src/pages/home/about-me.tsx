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
          <p className="text-gray-100 text-heading-hg">Sobre mim</p>

          <p className="md:text-heading-md text-gray-200 max-w-5xl text-heading-sm text-justify leading-7">
            Sou um Desenvolvedor focado no Back-End, porém já realizei projetos com Front-End.
            Sempre fui apaixonado pela tecnologia, comecei na área de design gráfico, mas com
            um tempo fui aprendendo a criar mods para o minecraft. Me adaptei muito nessa área
            de programação e fiquei muito curioso para saber mais sobre programação de jogos
            e sites. Em 2020, comecei a estudar no Marwin, uma escola profissionalizante,
            terminarei a escola em dezembro de 2022. Como eu já sabia programar jogos, então já
            tinha uma noção de programar sites. Fui e continuo me dedicando e buscando aprender
            cada vez mais sobre essa área incrível.
          </p>
        </div>

        <Image
          src={`${pathConfig.basePath}/logo.png`}
          alt="logo"
          width={300}
          height={300}
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
