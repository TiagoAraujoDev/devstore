import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

import { Product } from "~/@types";
import { api } from "~/data/api";
import { env } from "~/env";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const getProductDetails = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const product = await response.json();
  return product;
};

export default async function ImageOG({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductDetails(params.slug);
  const productImageUrl = new URL(product.image, env.APP_URL).toString();
  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageUrl} style={{ width: "100%" }} alt="" />
      </div>
    ),
    {
      ...size,
    },
  );
}
