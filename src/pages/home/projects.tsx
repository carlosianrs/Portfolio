'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import getProjects from "../api/projects";

export default function Projects() {
  const projects = getProjects()

  return (
    <div className="bg-gray-950 px-6 md:px-20 py-32" id="projects">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-white text-heading-hg text-center mb-10">Projetos Relevantes</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
          {projects.map(p => {
            return (
              <Card className={`relative w-95 h-64 overflow-hidden group cursor-pointer border border-transparent shadow-md ${p.shadow}`} key={p.key}>
              <Image
                  src={p.pathImage}
                  alt={p.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h2 className="text-xl font-bold mb-1">{p.title}</h2>
                  <h3 className="text-sm font-semibold mb-2">{p.languages}</h3>
                  <p className="text-sm">{p.description}</p>
              </CardContent>
              </Card>
            ) 
          })}
        </div>
      </div>
    </div>
  );
}
