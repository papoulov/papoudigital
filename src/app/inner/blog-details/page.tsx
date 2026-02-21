import React from 'react';
import BlogDetailsCarousel from '@/sections/blog/BlogDetailsCarousel';
import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';

const page: React.FC = () => {
    return (
        <>
            <BlogDetailsMain />
            <BlogDetailsCarousel />
        </>
    );
};

export default page;