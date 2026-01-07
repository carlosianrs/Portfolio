'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import getProjects from "../api/projects";

export default function Projects() {
  const projects = getProjects()

  return (
    <div className="bg-gray-950 px-6 md:px-20 py-24" id="projects">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-white text-heading-md text-center mb-10 md:text-heading-lg">Projetos Relevantes</p>
        <div className="flex flex-col gap-5">
          {projects.map(p => {
            return (
              <Card className={`relative md:h-72 overflow-hidden group cursor-pointer border border-transparent shadow-md ${p.shadow}`} key={p.key}>
                <div className="flex h-full flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-40 md:h-full overflow-hidden">
                    <Image
                      src={p.pathImage}
                      alt={p.alt}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                    />
                  </div>

                  <CardContent className="w-full md:w-1/2 flex flex-col text-center justify-center items-center text-white px-6 bg-gray-900/90">
                    <h2 className="text-heading-sm md:text-heading-md font-bold mb-1 mt-5">{p.title}</h2>
                    <p className="text-xs md:text-heading-xs max-w-md mb-5">{p.description}</p>
                    <div className={`flex flex-wrap gap-2 justify-center bg-gray-350 p-3 rounded-lg`}>
                      {p.linguagens?.map((l, index) => {
                        return (
                          <img
                            key={'linguagens-' + index}
                            alt='linguagens'
                            src={l.url}
                            width={35}
                            height={35}
                          />
                        )
                      })}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ) 
          })}
        </div>
      </div>
    </div>
  );
}
