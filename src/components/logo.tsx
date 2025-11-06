import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={'/'} title="Página Inicial">
        <div className="flex items-center">
          {/* <Image src={'/logo.svg'} alt="Logo" width={60} height={12}/> */}
          <p className="text-gray-200">Carlos Ian - DEV</p>
        </div>
      </Link>
    </>
  )
}