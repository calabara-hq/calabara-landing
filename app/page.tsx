import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">

      <div className="flex flex-col gap-4 w-3/4">
        <div className="flex flex-col">
          <h1 className="text-3xl">Calabara</h1>
          <h2 className="text-lg italic">/kuh,lah,buh,ruh/</h2>
        </div>
        <h2 className="text-xl">
          Founded in 2021, we build public goods for onchain creators and communities.
        </h2>
        <div className="flex flex-col gap-2 text-xl">
          <h2 className="">We are the founders & maintainers of</h2>
          <Link target="_blank" href="https://uplink.wtf/" className="flex gap-2">
            <Image
              src="/uplink-logo.svg"
              width={15}
              height={15}
              alt="pfp"
              className=""
            />

            <p className="font-bold text-[#cc0595] hover:underline">Uplink</p>
          </Link>
          <h2 className=""> and creators of the</h2>
          <Link href="https://github.com/calabara-hq/transmissions" target="_blank" className=" text-[#cc0595] font-bold hover:underline">Transmissions Protocol</Link>
        </div>
        <hr className="border-t border-gray-300 my-4" />

        <h1 className="text-3xl">
          Team
        </h1>
        <div className="flex flex-col justify-evenly gap-4">
          <div className="flex gap-4 ">
            <Image
              src="/nick-pfp.png"
              width={50}
              height={50}
              alt="pfp"
              className="w-20 "
            />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">
                Nick Dodson
              </p>
              <a href="https://x.com/nickddsn" target="_blank" className="hover:underline">
                <li>X</li>
              </a>
              <a href="https://warpcast.com/nickd" target="_blank" className="hover:underline">
                <li>warpcast</li>
              </a>
            </div>
          </div>
          <div className="flex gap-4 ">
            <Image
              src="/josh-pfp.png"
              width={50}
              height={50}
              alt="pfp"
              className="w-20 "
            />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">
                Josh Welsh
              </p>
              <a href="https://x.com/yungweez703" target="_blank" className="hover:underline">
                <li>X</li>
              </a>
              <a href="https://warpcast.com/weez" target="_blank" className="hover:underline">
                <li>warpcast</li>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
      </div >


    </main >
  );
}
