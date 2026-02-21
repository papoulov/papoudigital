"use client";
import React, { useState } from 'react';
import blogLp1 from "../../../public/assets/images/blog/lp-1-1.jpg";
import blogLp2 from "../../../public/assets/images/blog/lp-1-2.jpg";
import blogLp3 from "../../../public/assets/images/blog/lp-1-3.jpg";
import blogIcon from "../../../public/assets/images/icon/sidebar-title-icon.png";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    name: string;
    count: number;
    active?: boolean;
    link: string;
}

interface RecentPost {
    id: number;
    image: string | StaticImageData;
    title: string;
    date: string;
    link: string;
}

const BlogListSidebar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Searching for "${searchTerm}"...`);
    };
    const categories: Category[] = [
        { id: 1, name: "Web Design & Development", count: 15, link: "/inner/blog-details" },
        { id: 2, name: "Products Design", count: 20, link: "/inner/blog-details", active: true },
        { id: 3, name: "Artificial Intelligence", count: 42, link: "/inner/blog-details" },
        { id: 4, name: "Technology", count: 89, link: "/inner/blog-details" },
    ];

    const recentPosts: RecentPost[] = [
        {
            id: 1,
            image: blogLp1,
            title: "Adapting to Digital Marketing Trends: Staying Ahead of the Curve",
            date: "March 25, 2025",
            link: "/inner/blog-details",
        },
        {
            id: 2,
            image: blogLp2,
            title: "Standing Out in a Competitive Market",
            date: "Aug 15, 2025",
            link: "/inner/blog-details",
        },
        {
            id: 3,
            image: blogLp3,
            title: "The Importance of Accurate Performance Reporting",
            date: "July 22, 2025",
            link: "/inner/blog-details",
        },
    ];

    const tags: string[] = [
        "Development",
        "Innovation",
        "Analytics",
        "Marketing",
        "Technology",
        "UI Design",
    ];

    return (
        <div className="col-xl-4 col-lg-5">
            <div className="sidebar">

                {/* ====== Search Box ====== */}
                <div className="sidebar__single sidebar__search">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} width={24} height={19} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Search</h3>
                    </div>
                    <p className="sidebar__search-text">
                        Search blogs to discover a vast world of online content on countless topics.
                    </p>
                    <form onSubmit={handleSearch} className="sidebar__search-form">
                        <input
                            type="search"
                            placeholder="Search Blogs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <i className="icon-search-1"></i>
                        </button>
                    </form>
                </div>

                {/* ====== Categories ====== */}
                <div className="sidebar__single sidebar__category">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Category</h3>
                    </div>
                    <ul className="sidebar__category-list list-unstyled">
                        {categories.map((cat: Category) => (
                            <li key={cat.id} className={cat.active ? "active" : ""}>
                                <Link href={cat.link}>
                                    {cat.name} <span>({cat.count})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ====== Recent Posts ====== */}
                <div className="sidebar__single sidebar__post">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Recent Posts</h3>
                    </div>
                    <ul className="sidebar__post-list list-unstyled">
                        {recentPosts.map((post: RecentPost) => (
                            <li key={post.id}>
                                <div className="sidebar__post-image">
                                    <Image src={post.image} width={80} height={80} alt={post.title} />
                                </div>
                                <div className="sidebar__post-content">
                                    <h3>
                                        <Link href={post.link}>{post.title}</Link>
                                    </h3>
                                    <p className="sidebar__post-date">
                                        <span className="fas fa-calendar-alt"></span> {post.date}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ====== Tags ====== */}
                <div className="sidebar__single sidebar__tags">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Keywords</h3>
                    </div>
                    <div className="sidebar__tags-list">
                        {tags.map((tag, index) => (
                            <a key={index} href="#">
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ====== Subscribe Box ====== */}
                <div className="sidebar__single sidebar__subscribe">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Subscribe</h3>
                    </div>
                    <p className="sidebar__subscribe-text">
                        Get the latest updates and articles straight to your inbox.
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Subscription successful!");
                        }}
                        className="sidebar__subscribe-form"
                    >
                        <div className="sidebar__subscribe-email">
                            <div className="sidebar__subscribe-email-icon">
                                <span className="far fa-envelope"></span>
                            </div>
                            <input type="email" placeholder="Enter Your Email" required />
                        </div>
                        <button type="submit" className="thm-btn sidebar__subscribe-btn">
                            SUBSCRIBE NOW <i className="icon-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogListSidebar;