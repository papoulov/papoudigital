import SignupMain from '@/sections/products/SignupMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <React.Suspense fallback={null}>
            <SignupMain />
        </React.Suspense>
    );
};

export default page;
