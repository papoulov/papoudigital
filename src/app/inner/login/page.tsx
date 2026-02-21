import LoginMain from '@/sections/products/LoginMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <React.Suspense fallback={null}>
            <LoginMain />
        </React.Suspense>
    );
};

export default page;
