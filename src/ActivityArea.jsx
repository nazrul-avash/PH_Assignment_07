import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ActivityCard from './ActivityCard';
import EmptyState from './EmptyState';

const ActivityArea = () => {
    const {  filteredData } = useOutletContext();
     if(!filteredData || filteredData.length === 0){
        return <EmptyState  title="No activity found"
        message="Try searching or changing filters."></EmptyState>;
    }
    return (
        <div>
             {
                filteredData.map((item)=><ActivityCard item={item}></ActivityCard>)
            }
        </div>
    );
};

export default ActivityArea;