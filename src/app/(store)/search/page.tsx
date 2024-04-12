import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Product } from "~/@types";
import { api } from "~/data/api";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

const searchProduct = async (query: string): Promise<Product[]> => {
  const response = await api(`/products/search?q=${query}`);
  const products = await response.json();
  return products;
};

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams;
  if (!query) redirect("/");
  const products = await searchProduct(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`product/${product.slug}`}
                className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
              >
                <Image
                  src={product.image}
                  className="transition-transform group-hover:scale-105"
                  width={480}
                  height={480}
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
            );
          })
        ) : (
          <div className="col-span-3 h-full">
            <h1 className="text-center text-3xl font-bold">No product found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
