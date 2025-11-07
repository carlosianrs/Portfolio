import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={'/'} title="Página Inicial">
        <div className="flex items-center">
          <p className="text-gray-200">Carlos Ian - DEV</p>
        </div>
      </Link>
    </>
  )
}