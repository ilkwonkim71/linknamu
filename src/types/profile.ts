export interface LinkItem {
  id: string;
  label: string;
  url: string;
  clickCount?: number;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
}
