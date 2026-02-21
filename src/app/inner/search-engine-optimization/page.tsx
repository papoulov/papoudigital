import CtaCommon from '@/sections/about/CtaCommon';
import SearchEngineMain from '@/sections/services/SearchEngineMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <SearchEngineMain />
            <CtaCommon />
        </>
    );
};

export default page;