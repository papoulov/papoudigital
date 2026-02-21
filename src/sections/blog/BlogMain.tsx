"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPage } from "@/contents/blog/blogType";
import type { AdminBlogPost } from "@/types/adminBlog";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const BlogMain: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [blogItems, setBlogItems] = useState<BlogPage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated blogs
    const totalPages = Math.max(1, Math.ceil(blogItems.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        const fetchManagedPosts = async () => {
            try {
                const response = await fetch("/api/blog-posts", { cache: "no-store" });
                if (!response.ok) return setBlogItems([]);

                const data = (await response.json()) as { posts?: AdminBlogPost[] };
                if (!data.posts || data.posts.length === 0) return setBlogItems([]);

                const managedBlogs: BlogPage[] = data.posts.map((post, index) => ({
                    id: 100000 + index,
                    image: post.image,
                    date: post.date,
                    tags: post.tags.length > 0 ? post.tags : ["Blog"],
                    title: post.title,
                    subtitle: post.subtitle,
                    description: post.description,
                    link: post.link || "/inner/blog-details",
                }));

                setBlogItems(managedBlogs);
                setCurrentPage(1);
            } catch {
                setBlogItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        void fetchManagedPosts();
    }, []);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-page">
            <div className="container">
                {isLoading ? (
                    <div className="row">
                        <div className="col-12 text-center">
                            <p style={{ margin: "40px 0" }}>{t("common.blogLoading")}</p>
                        </div>
                    </div>
                ) : blogItems.length === 0 ? (
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 style={{ marginBottom: 12 }}>{t("common.blogEmptyTitle")}</h3>
                            <p>{t("common.blogEmptyText")}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="row">
                            {currentBlogs.map((blog: BlogPage) => (
                                <div key={blog.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-two__single">
                                        <div className="blog-two__img">
                                            <Image src={blog.image} width={362} height={240} alt={blog.title} />
                                            <div className="blog-two__plus">
                                                <Link href={blog.link}>
                                                    <span className="icon-plus"></span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="blog-two__content">
                                            <div className="blog-two__date">
                                                <p>
                                                    {blog.date} <span className="icon-calendar"></span>
                                                </p>
                                            </div>

                                            <div className="blog-two__content-inner">
                                                <ul className="list-unstyled blog-two__tag">
                                                    {blog.tags.map((tag, index) => (
                                                        <li key={index}>
                                                            <p>{tag}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <h3 className="blog-two__title">
                                                    <Link href={blog.link}>{blog.title}</Link>
                                                </h3>
                                                {blog.subtitle && (
                                                    <p style={{ marginBottom: 8, fontWeight: 600 }}>{blog.subtitle}</p>
                                                )}
                                                <p className="blog-two__text">{blog.description}</p>
                                            </div>

                                            <div className="blog-two__read-more">
                                                <div className="blog-two__read-more-line"></div>
                                                <Link href={blog.link} className="blog-two__read-more-text">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="row">
                            <div className="blog-list__pagination">
                                <ul className="pg-pagination list-unstyled d-flex justify-content-center">
                                    <li className="prev">
                                        <button
                                            className="pg-btn"
                                            onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                            disabled={currentPage === 1}
                                        >
                                            «
                                        </button>
                                    </li>

                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <li
                                            key={index}
                                            className={`count ${currentPage === index + 1 ? "active" : ""}`}
                                        >
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                                className="pg-btn"
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}

                                    <li className="next">
                                        <button
                                            className="pg-btn"
                                            onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}
                                            disabled={currentPage === totalPages}
                                        >
                                            »
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default BlogMain;
