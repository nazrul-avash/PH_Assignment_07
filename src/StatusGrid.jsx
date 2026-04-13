import React from 'react';

const StatusGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>10</h1>
                <p>Total Friends</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>10</h1>
                <p>Total Friends</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>10</h1>
                <p>Total Friends</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>10</h1>
                <p>Total Friends</p>
            </div>
        </div>
    );
};

export default StatusGrid;