'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import getLanguages from "../api/languages";

export default function Languages() {
  const languages = getLanguages()

  return (
    <div className="items-center justify-center bg-gray-950 px-10 md:px-20 py-10" id="languages">
      <div className="mx-auto max-w-screen-2xl">
        <p className="text-white text-heading-hg text-center mb-10">Linguagens e Ferramentas</p>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
          {languages.map(l => {
            return (
              <Card className="h-40 overflow-hidden group cursor-pointer border border-transparent shadow-md bg-gray-700 card-anim" key={l.key}>
              <CardContent className="flex flex-col justify-center items-center text-center h-full">
                <div className="flex flex-row justify-center items-center gap-3 mt-5">
                  <Image
                    src={l.pathImage}
                    alt={l.alt}
                    width={50}
                    height={50}
                  />
                  <p className="text-gray-100 text-heading-xl">{l.title}</p>
                </div>
              </CardContent>
              </Card>
            ) 
          })}
        </div>
      </div>
    </div>
  );
}
