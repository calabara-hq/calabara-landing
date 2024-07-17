import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">

      <div className="flex flex-col gap-4 w-3/4">
        <h1 className="text-3xl">Welcome to Calabara</h1>
        <p>
          Since our founding back in 2021, we have been committed to building public goods for the web3 universe and providing our users
          with efficient ways to co-create masterpieces with their respective communities. 
        </p>
        <hr className="border-t border-gray-300 my-4" />

        <h1 className="text-3xl">
          Team
        </h1>
        <div className="flex flex-col justify-evenly gap-4">
          <div className="flex gap-4 ">
            <Image
              src="/nick-pfp.png"
              width={90}
              height={90}
              alt="pfp"
              className="rounded-full w-20 sm:w-16 md:w-20 lg:w-24"
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
              width={90}
              height={90}
              alt="pfp"
              className="rounded-full w-20 sm:w-16 md:w-20 lg:w-24"
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

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">We are the founders of:</h2>
          <div className="flex gap-2">
            <Image
              src="/uplink-logo.svg"
              width={18}
              height={18}
              alt="pfp"
              className=""
            />

            <a href="https://uplink.wtf/" target="_blank" className="text-xl font-bold hover:underline">Uplink</a>
          </div>
          <p>a front end for onchain group creation and publication</p>
          <p className="text-xl">&</p>
          <a href="https://github.com/calabara-hq/transmissions" target="_blank" className="text-xl font-bold hover:underline">Transmission Protocol</a>
        </div>
      </div>


    </main>
  );
}
