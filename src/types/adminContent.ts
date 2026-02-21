export interface AdminContentBlock {
  id: string;
  key: string;
  title: string;
  body: string;
  section: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminContentBlockInput {
  key: string;
  title: string;
  body: string;
  section: string;
}
