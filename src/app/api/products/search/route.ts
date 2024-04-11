import type { NextRequest } from "next/server";
import { z } from "zod";

import data from "../data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = z.string().parse(searchParams.get("q"));

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  if (products.length === 0) {
    return Response.json({ message: "No product found" }, { status: 400 });
  }

  return Response.json(products);
}
