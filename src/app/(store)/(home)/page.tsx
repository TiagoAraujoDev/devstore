import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60  p-1 pl-5">
          <span>Moletom NLW</span>
          <span> R$ 79,99</span>
        </div>
      </Link>

      <Link
        href="/"
        className="group col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className="transition-transform group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>

      <Link
        href="/"
        className="group col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  );
}
