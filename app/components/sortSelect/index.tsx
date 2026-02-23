"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") ?? "";

  return (
    <select
      defaultValue={currentSort}
      className="rounded border px-2 py-1"
      onChange={(e) => {
        const value = e.target.value;
        router.push(value ? `?sort=${value}` : "/products");
      }}
    >
      <option value="">Default</option>
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
  );
}
