import CtaCommon from '@/sections/about/CtaCommon';
import PortfolioDMain from '@/sections/portfolio/PortfolioDMain';
import React from 'react';

const page:React.FC = () => {
    return (
        <>
            <PortfolioDMain />
            <CtaCommon />
        </>
    );
};

export default page;