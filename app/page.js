import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold text-center">
            The best URL shortener in the market
          </p>

          <p className=" text-center">
            We are the most straight forward URL Shortener in the world.Most of
            the url shorteners will track you or ask you to give your details
            for login.
          </p>

          <div className="flex space-x-5">
            <Link href={"/shorten"}>
              
              <button className="bg-purple-500 shadow-lg rounded-lg px-5 py-2 text-white hover:bg-purple-400">
                Try Now
              </button>
            </Link>
            <Link href={"/github"}>
              
              <button className="bg-purple-500 shadow-lg rounded-lg px-5 py-2 text-white hover:bg-purple-400">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className=" flex justify-string relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.png"}
            fill={true}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
