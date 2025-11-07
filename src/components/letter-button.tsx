import { cn } from "@/lib/utils"
import { Button } from "./ui/button";
import { useState } from "react";

type PropsLetterButton = {
  char: string,
  size?: string,
  active: boolean;
}

export function LetterButton({ char, size, active }: PropsLetterButton) {
  const [pressed, setPressed] = useState<boolean>(false);

  function handlePress() {
    setPressed(true);
    setTimeout(() => setPressed(false), 120);
  }

  return (
    <div className={cn(
      "cursor-pointer border-4 border-black bg-gray-200 pb-[10px] transition-all duration-100 select-none",
      (active || pressed) && "pb-0 mb-[10px] translate-y-[10px]"
    )}>
      <Button variant={'ghost'} onClick={handlePress} className={cn("bg-gray-200 border-4 border-white min-w-[2rem]", size && size)}>
        <span className="text-[0.9em]">{char}</span>
      </Button>
    </div>
  );
}
