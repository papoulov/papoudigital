export interface AdminBlogPost {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminBlogPostInput {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  link?: string;
}
