export function useParams(): Record<string, string> {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return { slug: decodeURIComponent(segments.at(-1) ?? "") };
}
