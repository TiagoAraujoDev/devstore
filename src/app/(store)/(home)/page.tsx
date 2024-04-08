import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Product } from "~/@types";
import { api } from "~/data/api";

const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const products = await response.json();
  return products;
};

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();
  return (
    <div className="grid max-h-[640px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={highlightedProduct.image}
          className="transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={800}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60  p-1 pl-5">
          <span title={highlightedProduct.title} className="truncate text-sm">
            {highlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(highlightedProduct.price)}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src={product.image}
            className="transition-transform group-hover:scale-105"
            width={800}
            height={800}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60  p-1 pl-5">
            <span title={product.title} className="truncate text-sm">
              {product.title}
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
