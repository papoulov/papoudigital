
import blogPostImg1 from '../../../public/assets/images/blog/blog-2-1.jpg';
import blogPostImg2 from '../../../public/assets/images/blog/blog-2-2.jpg';
import blogPostImg3 from '../../../public/assets/images/blog/blog-2-3.jpg';
import type { BlogCarouselItem, BlogOnePost, BlogPage, BlogPost, BlogsListItem } from './blogType';
import blogImg1 from "../../../public/assets/images/blog/blog-2-1.jpg"
import blogImg2 from "../../../public/assets/images/blog/blog-2-2.jpg"
import blogImg3 from "../../../public/assets/images/blog/blog-2-3.jpg"
import blogImg4 from "../../../public/assets/images/blog/blog-2-4.jpg"
import blogImg5 from "../../../public/assets/images/blog/blog-2-5.jpg"
import blogImg6 from "../../../public/assets/images/blog/blog-2-6.jpg"
import blogImg7 from "../../../public/assets/images/blog/blog-2-7.jpg"
import blogImg8 from "../../../public/assets/images/blog/blog-2-8.jpg"
import blogImg9 from "../../../public/assets/images/blog/blog-2-9.jpg"
// blog List
import blogListImg1 from "../../../public/assets/images/blog/blog-list-1-1.jpg";
import blogListImg2 from "../../../public/assets/images/blog/blog-list-1-2.jpg";
import blogListImg3 from "../../../public/assets/images/blog/blog-list-1-3.jpg";
import client1 from "../../../public/assets/images/blog/blog-list-client-img-1.jpg";
import client2 from "../../../public/assets/images/blog/blog-list-client-img-2.jpg";
import client3 from "../../../public/assets/images/blog/blog-list-client-img-3.jpg";
import client4 from "../../../public/assets/images/blog/blog-list-client-img-4.jpg";
import shape1 from "../../../public/assets/images/shapes/blog-list-single-shape-1.png";
import shape2 from "../../../public/assets/images/shapes/blog-list-single-shape-2.png";
//blog carousel
import blogCarouselImg1 from "../../../public/assets/images/blog/blog-1-1.jpg";
import blogCarouselImg2 from "../../../public/assets/images/blog/blog-1-2.jpg";
import blogCarouselImg3 from "../../../public/assets/images/blog/blog-1-3.jpg";
import userImg1 from "../../../public/assets/images/blog/blog-one-user-1-1.jpg";
import userImg2 from "../../../public/assets/images/blog/blog-one-user-1-2.jpg";
import userImg3 from "../../../public/assets/images/blog/blog-one-user-1-3.jpg";


export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blogPostImg2,
        date: 'August 20, 2025',
        tags: ['Productivity', '★', 'Tech Innovation'],
        title: `Future of Artificial Intelligence: What's Next in 2025?`,
        text: 'As we move towards 2025, the landscape of artificial intelligence continues to evolve',
        link: '/inner/blog-details',
    },
    {
        id: 2,
        image: blogPostImg1,
        date: 'March 15, 2025',
        tags: ['Technology', '★', 'Wellness'],
        title: '5 Essential Wellness Tips for a Healthier Lifestyle',
        text: "Achieving a healthier lifestyle doesn't have to be complicated.",
        link: '/inner/blog-details',
    },
    {
        id: 3,
        image: blogPostImg3,
        date: 'July 10, 2025',
        tags: ['Sustainability', '★', 'Eco-Friendly'],
        title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
        text: 'This guide covers sustainable fabrics, ethical brands, and mindful shopping',
        link: '/inner/blog-details',
    },
    {
        id: 4,
        image: blogPostImg1,
        date: 'October 2, 2025',
        tags: ['AI', '★', 'Innovation'],
        title: 'The Power of Automation in Modern Business',
        text: 'Automation is reshaping industries by improving efficiency and reducing costs.',
        link: '/inner/blog-details',
    },
];

export const blogs: BlogPage[] = [
    {
        id: 1,
        image: blogImg1,
        date: "August 20, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "Future of Artificial Intelligence: What's Next in 2025?",
        description: "We move towards 2025, the landscape of artificial intelligence.",
        link: "/inner/blog-details",
    },
    {
        id: 2,
        image: blogImg2,
        date: "March 15, 2025",
        tags: ["Technology", "★", "Tech Innovation"],
        title: "5 Essential Wellness Tips for a Healthier Lifestyle",
        description: "Achieving a healthier lifestyle doesn't have to be complicated.",
        link: "/inner/blog-details",
    },
    {
        id: 3,
        image: blogImg3,
        date: "August 20, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
        description: "This guide covers sustainable fabrics, ethical brands.",
        link: "/inner/blog-details",
    },
    {
        id: 4,
        image: blogImg4,
        date: "October 3, 2025",
        tags: ["Marketing", "★", "Digital Growth"],
        title: "Mastering the Art of Adapting to Changing Digital Marketing",
        description: "Learn how to adjust your campaigns effectively to maintain visibility.",
        link: "/inner/blog-details",
    },
    {
        id: 5,
        image: blogImg5,
        date: "March 3, 2025",
        tags: ["Content", "★", "Creativity"],
        title: "Engaging a Diverse Audience: Tips for Creating Inclusive Content",
        description: "This blog provides insights into addressing diverse audience needs.",
        link: "/inner/blog-details",
    },
    {
        id: 6,
        image: blogImg6,
        date: "April 3, 2025",
        tags: ["Business", "★", "Finance"],
        title: "Balancing Your Digital Marketing Budget Strategies",
        description: "This post offers practical advice on balancing cost constraints.",
        link: "/inner/blog-details",
    },
    {
        id: 7,
        image: blogImg7,
        date: "Sept 5, 2025",
        tags: ["Productivity", "★", "Tech Innovation"],
        title: "The Importance of Accurate Performance Reporting in Digital Marketing",
        description: "Find out how to track key metrics effectively and use data for improvements.",
        link: "/inner/blog-details",
    },
    {
        id: 8,
        image: blogImg8,
        date: "Sept 12, 2025",
        tags: ["Marketing", "★", "Innovation"],
        title: "Standing Out in a Competitive Market: Strategies for Differentiation",
        description: "Learn strategies for creating a unique marketing presence.",
        link: "/inner/blog-details",
    },
    {
        id: 9,
        image: blogImg9,
        date: "Nov 26, 2025",
        tags: ["Tech", "★", "Digital Trends"],
        title: "Adapting to Digital Marketing Trends: Staying Ahead of the Curve",
        description: "Stay informed about the latest digital marketing trends and strategies.",
        link: "/inner/blog-details",
    },
];


export const blogPostsThree: BlogPost[] = [
    {
        id: 1,
        image: blogImg1,
        date: 'August 20, 2025',
        tags: ['Productivity', '★', 'Tech Innovation'],
        title: `Future of Artificial Intelligence: What's Next in 2025?`,
        text: 'As we move towards 2025, the landscape of artificial intelligence continues to evolve',
        link: '/inner/blog-details',
    },
    {
        id: 2,
        image: blogImg2,
        date: 'March 15, 2025',
        tags: ['Technology', '★', 'Wellness'],
        title: '5 Essential Wellness Tips for a Healthier Lifestyle',
        text: "Achieving a healthier lifestyle doesn't have to be complicated.",
        link: '/inner/blog-details',
    },
    {
        id: 3,
        image: blogImg3,
        date: 'July 10, 2025',
        tags: ['Sustainability', '★', 'Eco-Friendly'],
        title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
        text: 'This guide covers sustainable fabrics, ethical brands, and mindful shopping',
        link: '/inner/blog-details',
    }
];

export const blogsListItems: BlogsListItem[] = [
    {
        id: 1,
        title: "Mastering the Art of Adapting to Changing Digital Marketing Algorithms",
        description:
            "Explore strategies for staying ahead in the ever-evolving world of digital advertising algorithms. Learn how to adjust your campaigns effectively to maintain visibility and performance.",
        date: "March 8, 2025",
        comments: 34,
        image: blogListImg1,
        clientImage: client1,
        author: "Alisa Olivia",
        shape: shape1,
        link: "/inner/blog-details",
    },
    {
        id: 2,
        title: "Balancing Your Digital Marketing Budget: Strategies for Maximizing ROI",
        description:
            "Learn how to balance marketing investments and ROI through data-driven digital strategies. Understand cost-efficient ways to scale campaigns effectively.",
        date: "April 12, 2025",
        comments: 28,
        image: blogListImg2,
        clientImage: client2,
        author: "Thomas Alison",
        shape: shape2,
        link: "/inner/blog-details",
    },
    {
        id: 3,
        title: "Standing Out in a Competitive Market: Strategies for Differentiation",
        description:
            "Discover how to build a distinctive brand presence with modern marketing tools and techniques that capture audience attention.",
        date: "May 18, 2025",
        comments: 42,
        image: blogListImg3,
        clientImage: client3,
        author: "Sarah Caine",
        shape: shape1,
        link: "/inner/blog-details",
    },
    {
        id: 4,
        title: "Future of AI in Marketing: How Machine Learning is Changing Everything",
        description:
            "AI-driven marketing is the future. Learn how automation and predictive analytics can transform audience engagement.",
        date: "June 10, 2025",
        comments: 21,
        image: blogImg1,
        clientImage: client4,
        author: "Smith Jhon",
        shape: shape1,
        link: "/inner/blog-details",
    },
];



export const blogCarouselData: BlogCarouselItem[] = [
    {
        id: 1,
        title: "Top Strategies for Effective Time Management",
        description:
            "Discover actionable tips and techniques to enhance your productivity and manage your",
        image: blogCarouselImg1,
        userImage: userImg1,
        userName: "Michael Johnson",
        date: "August 15, 2025",
        tags: ["Digital", "Technology"],
        link: "/inner/blog-details",
    },
    {
        id: 2,
        title: "The Future of Technology: Emerging Trends to Watch in 2025",
        description:
            "Explore the latest technology innovations shaping the future and how they’ll impact everyday life.",
        image: blogCarouselImg2,
        userImage: userImg2,
        userName: "Michael Johnson",
        date: "December 5, 2023",
        tags: ["Digital", "Technology"],
        link: "/inner/blog-details",
    },
    {
        id: 3,
        title: "Healthy Eating Made Simple: Quick and Nutritious Recipes for Busy Lives",
        description:
            "Practical recipes designed for fast-paced lifestyles — nutritious, delicious,",
        image: blogCarouselImg3,
        userImage: userImg3,
        userName: "Michael Johnson",
        date: "June 22, 2025",
        tags: ["Health", "Lifestyle"],
        link: "/inner/blog-details",
    },
    {
        id: 4,
        title: "Healthy Eating Made Simple: Quick and Nutritious Recipes for Busy Lives",
        description:
            "Practical recipes designed for fast-paced lifestyles — nutritious, delicious,",
        image: blogCarouselImg3,
        userImage: userImg3,
        userName: "Michael Johnson",
        date: "June 22, 2025",
        tags: ["Health", "Lifestyle"],
        link: "/inner/blog-details",
    },
];


export const blogOnePosts: BlogOnePost[] = [
    {
        id: 1,
        image: blogCarouselImg1,
        tags: ["Digital", "Technology"],
        title: "Top Strategies for Effective Time Management",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg1
        },
        date: "August 15, 2025",
        link: "/inner/blog-details"
    },
    {
        id: 2,
        image: blogCarouselImg2,
        tags: ["Digital", "Technology"],
        title: "The Future of Technology Emerging Trends to Watch in 2025",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg2
        },
        date: "December 5, 2023",
        link: "/inner/blog-details"
    },
    {
        id: 3,
        image: blogCarouselImg3,
        tags: ["Digital", "Technology"],
        title: "Healthy Eating Made Simple Quick and Nutritious Recipes for",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg3
        },
        date: "June 22, 2025",
        link: "/inner/blog-details"
    },
    {
        id: 4,
        image: blogCarouselImg1,
        tags: ["Digital", "Technology"],
        title: "Top Strategies for Effective Time Management",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg1
        },
        date: "August 15, 2025",
        link: "/inner/blog-details"
    },
    {
        id: 5,
        image: blogCarouselImg2,
        tags: ["Digital", "Technology"],
        title: "The Future of Technology Emerging Trends to Watch in 2025",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg2
        },
        date: "December 5, 2023",
        link: "/inner/blog-details"
    },
    {
        id: 6,
        image: blogCarouselImg3,
        tags: ["Digital", "Technology"],
        title: "Healthy Eating Made Simple Quick and Nutritious Recipes for",
        text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
        author: {
            name: "Michael Johnson",
            image: userImg3
        },
        date: "June 22, 2025",
        link: "/inner/blog-details"
    }
];
