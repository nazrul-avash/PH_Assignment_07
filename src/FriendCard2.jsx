import React from 'react';

const FriendCard2 = ({friend}) => {
  function colorDefiner(status){
    if(status ==="overdue"){
      return "bg-red-400";
    }
    if(status ==="almost due"){
      return "bg-yellow-400";
    }
    else return "bg-green-400";
  }
    return (
        <div className='mb-2' >
            <div className="card card-side bg-base-100 shadow-md p-4 items-center gap-4 flex flex-col justify-center">

  {/* Avatar */}
  <div className="avatar">
    <div className="w-20 rounded-full">
      <img src={friend.picture} />
    </div>
  </div>

  {/* Content */}
  <div className="flex flex-col text-center">
    <h2 className="font-bold text-[20px] ">{friend.name}</h2>
    <p className="text-sm text-gray-500 pb-3">{friend.days_since_contact} day ago</p>
    <div className='flex gap-2 pb-3 justify-center '>
       {friend.tags.map((tag)=><div className="badge bg-green-300/40">{tag}</div>)}
    </div>
    <div>
      <p className={`badge rounded-2xl p-4 text-white ${colorDefiner(friend.status)}`}>{friend.status}</p>
      <p className='text-gray-500'>{friend.bio}</p>
      <p className='text-gray-500'>perfered:email</p>
    </div>
  </div>

</div>
        </div>
    );
};
export default FriendCard2;