import DarkModeToggle from "@/components/DarkModeToggle";
import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <DarkModeToggle />
        <div className="flex flex-col items-center gap-8">
          <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
          <LinkList links={profile.links} />
        </div>
      </div>
    </main>
  );
}
