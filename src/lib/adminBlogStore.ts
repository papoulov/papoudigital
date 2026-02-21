import { promises as fs } from "node:fs";
import path from "node:path";
import type { AdminBlogPost, AdminBlogPostInput } from "@/types/adminBlog";
import { adminDb } from "@/lib/firebase/admin";

const BLOG_STORE_PATH = path.join(process.cwd(), "src", "data", "admin-blog-posts.json");
const BLOG_COLLECTION = "adminBlogPosts";

const ensureStoreFile = async (): Promise<void> => {
  await fs.mkdir(path.dirname(BLOG_STORE_PATH), { recursive: true });
  try {
    await fs.access(BLOG_STORE_PATH);
  } catch {
    await fs.writeFile(BLOG_STORE_PATH, "[]\n", "utf8");
  }
};

const normalizePost = (post: Partial<AdminBlogPost>): AdminBlogPost => ({
  id: post.id ?? crypto.randomUUID(),
  title: post.title ?? "",
  subtitle: post.subtitle ?? "",
  description: post.description ?? "",
  tags: Array.isArray(post.tags) ? post.tags : [],
  date: post.date ?? "",
  image: post.image ?? "",
  link: post.link ?? "/inner/blog-details",
  createdAt: post.createdAt ?? new Date().toISOString(),
  updatedAt: post.updatedAt ?? new Date().toISOString(),
});

const readAdminBlogPostsFromFile = async (): Promise<AdminBlogPost[]> => {
  await ensureStoreFile();
  const raw = await fs.readFile(BLOG_STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as Partial<AdminBlogPost>[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizePost);
  } catch {
    return [];
  }
};

export const readAdminBlogPosts = async (): Promise<AdminBlogPost[]> => {
  if (!adminDb) return readAdminBlogPostsFromFile();

  try {
    const snapshot = await adminDb.collection(BLOG_COLLECTION).orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc) =>
      normalizePost({
        ...(doc.data() as Partial<AdminBlogPost>),
        id: doc.id,
      })
    );
  } catch {
    return readAdminBlogPostsFromFile();
  }
};

export const writeAdminBlogPosts = async (posts: AdminBlogPost[]): Promise<void> => {
  if (!adminDb) {
    await ensureStoreFile();
    await fs.writeFile(BLOG_STORE_PATH, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
    return;
  }

  const batch = adminDb.batch();
  const collection = adminDb.collection(BLOG_COLLECTION);
  const existing = await collection.get();
  existing.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  posts.forEach((post) => {
    const ref = collection.doc(post.id);
    batch.set(ref, {
      title: post.title,
      subtitle: post.subtitle,
      description: post.description,
      tags: post.tags,
      date: post.date,
      image: post.image,
      link: post.link,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    });
  });

  await batch.commit();
};

export const createAdminBlogPost = async (input: AdminBlogPostInput): Promise<AdminBlogPost> => {
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const newPost: AdminBlogPost = {
    id,
    title: input.title,
    subtitle: input.subtitle,
    description: input.description,
    tags: input.tags,
    date: input.date,
    image: input.image,
    link: input.link ?? "/inner/blog-details",
    createdAt: now,
    updatedAt: now,
  };

  if (adminDb) {
    await adminDb.collection(BLOG_COLLECTION).doc(id).set({
      title: newPost.title,
      subtitle: newPost.subtitle,
      description: newPost.description,
      tags: newPost.tags,
      date: newPost.date,
      image: newPost.image,
      link: newPost.link,
      createdAt: newPost.createdAt,
      updatedAt: newPost.updatedAt,
    });
  } else {
    const posts = await readAdminBlogPostsFromFile();
    posts.unshift(newPost);
    await writeAdminBlogPosts(posts);
  }

  return newPost;
};

export const updateAdminBlogPost = async (
  id: string,
  input: AdminBlogPostInput
): Promise<AdminBlogPost | null> => {
  if (adminDb) {
    const docRef = adminDb.collection(BLOG_COLLECTION).doc(id);
    const existing = await docRef.get();
    if (!existing.exists) return null;

    const existingData = normalizePost({
      ...(existing.data() as Partial<AdminBlogPost>),
      id,
    });

    const updated: AdminBlogPost = {
      ...existingData,
      title: input.title,
      subtitle: input.subtitle,
      description: input.description,
      tags: input.tags,
      date: input.date,
      image: input.image,
      link: input.link ?? existingData.link,
      updatedAt: new Date().toISOString(),
    };

    await docRef.set(
      {
        title: updated.title,
        subtitle: updated.subtitle,
        description: updated.description,
        tags: updated.tags,
        date: updated.date,
        image: updated.image,
        link: updated.link,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      },
      { merge: true }
    );

    return updated;
  }

  const posts = await readAdminBlogPostsFromFile();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return null;

  const updated: AdminBlogPost = {
    ...posts[index],
    title: input.title,
    subtitle: input.subtitle,
    description: input.description,
    tags: input.tags,
    date: input.date,
    image: input.image,
    link: input.link ?? posts[index].link,
    updatedAt: new Date().toISOString(),
  };

  posts[index] = updated;
  await writeAdminBlogPosts(posts);
  return updated;
};

export const deleteAdminBlogPost = async (id: string): Promise<boolean> => {
  if (adminDb) {
    const docRef = adminDb.collection(BLOG_COLLECTION).doc(id);
    const existing = await docRef.get();
    if (!existing.exists) return false;
    await docRef.delete();
    return true;
  }

  const posts = await readAdminBlogPostsFromFile();
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) return false;
  await writeAdminBlogPosts(next);
  return true;
};
