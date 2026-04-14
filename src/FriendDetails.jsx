import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendCard2 from './FriendCard2';

const FriendDetails = () => {
  const expectedfriend = useLoaderData();
    return (
        <div className='flex gap-5 pt-20 mb-10'>
          <div className='basis-[30%]'>
              <FriendCard2 friend = {expectedfriend}></FriendCard2>

          </div>
          <div className='basis-[70%]'>
               <div className='grid grid-cols-3 gap-5 mb-10'>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>{expectedfriend.days_since_contact}</h1>
                <p>Days Since Contact</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>{expectedfriend.goal}</h1>
                <p>Goal (Days)</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>{expectedfriend.next_due_date}</h1>
                <p>Next Due</p>
            </div>
         
        </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl mb-4'>
                <div className='flex justify-between'>
                  <h1 className='text-[#244D3F] font-semibold text-[18px]'>Relationship Goal</h1>
                  <button className='btn'>Edit</button>
                </div>
                <p className='text-left'>Connect Every <span className='font-bold'>{expectedfriend.goal} days</span></p>
            </div>
        <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl mb-4'>
                <h1 className='text-[#244D3F] font-semibold text-[32px]'>10</h1>
                <p>Total Friends</p>
            </div>
        
          </div>
        </div>
    );
};

export default FriendDetails;