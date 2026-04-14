import React, { Suspense } from 'react';
import Banner from './Banner';
import StatusGrid from './StatusGrid';
import AllFriends from './AllFriends';

const CenterWindow = () => {
    
    return (
        <div>
            <Banner></Banner>
            <StatusGrid></StatusGrid>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
                <AllFriends></AllFriends> 
            </Suspense> 
        </div>
    );
};

export default CenterWindow;