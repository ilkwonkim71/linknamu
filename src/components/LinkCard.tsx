import type { LinkItem } from "@/types/profile";

interface LinkCardProps {
  link: LinkItem;
  count: number;
  onClick?: () => void;
}

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-medium text-slate-900 no-underline shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      {link.label}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal text-slate-400 dark:text-slate-500">
        {count}회
      </span>
    </a>
  );
}