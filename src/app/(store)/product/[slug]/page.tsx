import Image from "next/image";

import { Product } from "~/@types";
import { api } from "~/data/api";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const getProductDetails = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const product = await response.json();
  return product;
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = params;
  const product = await getProductDetails(slug);
  const sizes = ["P", "M", "G", "GG"];
  return (
    <div className="relative grid max-h-[690px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image src={product.image} width={1000} height={1000} alt="" />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 to-zinc-400 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="flex items-center justify-center rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(product.price)}
          </span>
          <span className="to-zinc-400 text-sm">
            Em 12x s/juros de{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price / 12)}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            {sizes.map((size) => {
              return (
                <button
                  key={size}
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-700 text-sm font-semibold"
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
