"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogListSidebar from "./BlogListSidebar";
import type { AdminBlogPost } from "@/types/adminBlog";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const BlogListMain: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [blogItems, setBlogItems] = useState<AdminBlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const ITEMS_PER_PAGE = 3;
    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(blogItems.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        const fetchManagedPosts = async () => {
            try {
                const response = await fetch("/api/blog-posts", { cache: "no-store" });
                if (!response.ok) return setBlogItems([]);

                const data = (await response.json()) as { posts?: AdminBlogPost[] };
                setBlogItems(data.posts ?? []);
                setCurrentPage(1);
            } catch {
                setBlogItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        void fetchManagedPosts();
    }, []);

    // Page change handler
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    {/* ===== LEFT SIDE: BLOG LIST ===== */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {isLoading && (
                                <p style={{ marginBottom: 20 }}>{t("common.blogLoading")}</p>
                            )}

                            {!isLoading && blogItems.length === 0 && (
                                <div style={{ marginBottom: 20 }}>
                                    <h3 style={{ marginBottom: 12 }}>{t("common.blogEmptyTitle")}</h3>
                                    <p>{t("common.blogEmptyText")}</p>
                                </div>
                            )}

                            {!isLoading && currentBlogs.map((blog) => (
                                <div key={blog.id} className="blog-list__single">
                                    <div className="blog-list__img-box">
                                        <div className="blog-list__img">
                                            <Image src={blog.image} width={692} height={361} alt={blog.title} />
                                            <div className="blog-list__plus">
                                                <Link href={blog.link || "/inner/blog-details"}>
                                                    <span className="icon-plus"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-list__content">
                                        <div className="blog-list__date-and-comment">
                                            <div className="blog-list__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> {blog.date}
                                                </p>
                                            </div>
                                            <div className="blog-list__comment">
                                                <p>
                                                    <span className="far fa-comment"></span> 0 Comments
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="blog-list__title">
                                            <Link href={blog.link || "/inner/blog-details"}>{blog.title}</Link>
                                        </h3>
                                        {blog.subtitle && (
                                            <p style={{ marginBottom: 8, fontWeight: 600 }}>{blog.subtitle}</p>
                                        )}

                                        <p className="blog-list__text">{blog.description}</p>

                                        <div className="blog-list__client-info">
                                            <div className="blog-list__client-img">
                                                <Image src="/assets/images/blog/blog-list-client-img-1.jpg" width={38} height={38} alt="PapouDigital Team" />
                                            </div>
                                            <div className="blog-list__client-content">
                                                <span>Post By</span>
                                                <p>PapouDigital Team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* ===== PAGINATION ===== */}
                            {!isLoading && blogItems.length > 0 && (
                                <div className="blog-list__pagination">
                                    <ul className="pg-pagination list-unstyled d-flex justify-content-center">
                                        <li>
                                            <button
                                                className="pg-btn"
                                                disabled={currentPage === 1}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                «
                                            </button>
                                        </li>

                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`count ${currentPage === i + 1 ? "active" : ""}`}>
                                                <button className="pg-btn" onClick={() => handlePageChange(i + 1)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li>
                                            <button
                                                className="pg-btn"
                                                disabled={currentPage === totalPages}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                »
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ===== RIGHT SIDE: SIDEBAR ===== */}
                    <BlogListSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogListMain;
