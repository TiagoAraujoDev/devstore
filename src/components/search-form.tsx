"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback } from "react";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const query = data.q;

    if (!query) return null;

    router.push(`/search?q=${query}`);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        name="q"
        defaultValue={query ?? ""}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        placeholder="Search for product..."
      />
    </form>
  );
};

export { SearchForm };
