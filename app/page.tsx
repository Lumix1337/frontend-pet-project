import Image from "next/image";
import Link from "next/link";
import { inter } from "../components/ui/fonts";

export default function Home() {
  return (
    <div>
      <header className={`${inter.className} flex flex-row items-center justify-between p-4 bg-gray-100`}>
          <Link href="/">
            <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
          </Link>
          <div className="flex space-x-4">
            <Link href="/auth" className="text-blue-500 hover:text-blue-600 bg-white font-bold py-2 px-4 rounded">
              Sign In or Sign Up
            </Link>
            {/* <Link href="/users" className="text-blue-500 hover:text-blue-600 bg-white font-bold py-2 px-4 rounded">
              Users
            </Link> */}
            <Link href="/submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              submit an application
            </Link>
          </div>

      </header>
    </div>
  );
}
