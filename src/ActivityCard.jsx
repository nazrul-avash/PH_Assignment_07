import React from 'react';
import Call from "./assets/call.png";
import Text from "./assets/text.png";
import Video from "./assets/video.png";
const ActivityCard = ({item}) => {
     const imageSrc = {
            Call,
            Text,
            Video,
        };
        
    return (
       
        <div className='bg-white shadow-md text-center px-15 py-4 rounded-xl mb-10  mx-auto'>
               
                  <div className='flex items-center gap-3 '>
                    <div><img src={imageSrc[item.activityType]}></img></div>
                    <div>
                    <h1 className='text-[#244D3F] font-semibold text-[20px]'>{`${item.activityType} with ${item.name} `}</h1>
                    <p className='text-left'>{item.time.toLocaleString()}</p>
                  </div>
               
                  </div>
               
               
        </div>
     
    );
};

export default ActivityCard;