import type { Profile } from "@/types/profile";

// TODO: MongoDB Atlas 연동 전까지 사용하는 임시 데이터
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  links: [
    { id: "1", label: "Instagram", url: "https://instagram.com" },
    { id: "2", label: "GitHub", url: "https://github.com" },
    { id: "3", label: "Blog", url: "https://example.com/blog" },
  ],
};
