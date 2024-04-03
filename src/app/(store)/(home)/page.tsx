import Image from "next/image";
import Link from "next/link";

import { api } from "~/data/api";

async function getFeaturedProducts() {
  const response = await api("/products/featured");
  const products = await response.json();
  return products;
}

export default async function Home() {
  const products = await getFeaturedProducts();
  console.log(products);
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
          <span className="truncate text-sm">Moletom Never stop learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$79,99
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className="transition-transform group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60  p-1 pl-5">
          <span className="truncate text-sm">Moletom AI side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$79,99
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-end overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60  p-1 pl-5">
          <span className="truncate text-sm">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$79,99
          </span>
        </div>
      </Link>
    </div>
  );
}
