import CtaCommon from '@/sections/about/CtaCommon';
import TeamDetailsMain from '@/sections/team/TeamDetailsMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <TeamDetailsMain />
            <CtaCommon />
        </>
    );
};

export default page;