export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", //set no-store karena ingin mendapat data lebih real time
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log(e);
    }
    throw new Error(errorMessage);
  }
  return res.json();
}

export function getImageUrl(path: string | null | undefined) {
  if (!path) return "/images/placeholder-product.png"; // Gambar cadangan jika data kosong
  if (path.startsWith("http")) return path;

  // Pastikan NEXT_PUBLIC_API_ROOT sudah benar di .env
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}
