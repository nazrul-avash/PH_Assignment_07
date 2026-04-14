import React, { use } from 'react';
import FriendCard from './FriendCard';
const friendsDataPromise = fetch('/friends.json').then(res =>res.json());
const AllFriends = () => {
    const friendData = use(friendsDataPromise);
    return (
  <div className='shadow-sm pb-4 mb-5 px-7'>
     <h1 className='text-3xl pb-5'>Your Friends</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                 
          {
            friendData.map((friend) => (<FriendCard friend={friend}></FriendCard>))
          }
        </div>
  </div>
    );
};

export default AllFriends;