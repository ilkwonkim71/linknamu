import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  const initial = name.trim().charAt(0) || "?";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        {avatarUrl ? (
          <Image src={avatarUrl} alt={name} fill sizes="96px" className="object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-3xl font-semibold text-slate-500 dark:text-slate-400">
            {initial}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{bio}</p>
      </div>
    </div>
  );
}
