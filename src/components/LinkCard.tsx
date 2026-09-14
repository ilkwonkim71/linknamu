import type { LinkItem } from "@/types/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-medium text-slate-900 no-underline shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      {link.label}
    </a>
  );
}