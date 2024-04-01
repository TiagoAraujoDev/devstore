import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="col-span-6 row-span-6 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className=""
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>

      <Link
        href="/"
        className="col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className=""
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>

      <Link
        href="/"
        className="col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className=""
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  );
}
