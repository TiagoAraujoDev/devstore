"use client";

import React, { useCallback } from "react";

import { useCart } from "~/contexts/cart-context";

interface AddToCartButtonProps {
  productId: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  const { addToCart } = useCart();
  const handleAddToCart = useCallback(() => {
    addToCart(String(productId));
  }, []);
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
    >
      Adicionar ao carrinho
    </button>
  );
};

export { AddToCartButton };
