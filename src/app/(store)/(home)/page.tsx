import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6">
      <Link
        href="/"
        className="col-span-6 row-span-6 overflow-hidden rounded-lg bg-zinc-900"
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
    </div>
  );
}
