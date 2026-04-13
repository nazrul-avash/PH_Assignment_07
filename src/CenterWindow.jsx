import React from 'react';
import Banner from './Banner';
import StatusGrid from './StatusGrid';
import AllFriends from './AllFriends';

const CenterWindow = () => {
    
    return (
        <div>
            <Banner></Banner>
            <StatusGrid></StatusGrid>
            <AllFriends></AllFriends>  
        </div>
    );
};

export default CenterWindow;