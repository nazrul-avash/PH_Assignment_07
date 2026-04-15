import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ActivityContext = createContext();
 const ActivityProvider = ({children}) => {
    const [activityItems, setActivityItems] = useState([]);
    function handleActivity(friendName,activityType, time){
            const tempActivity = {
                name:friendName,
                activityType: activityType,
                time: time,
            };
            setActivityItems([...activityItems,tempActivity]);
            toast.success(`${activityType} with ${friendName}`);
    }
    const data = {activityItems,setActivityItems,handleActivity};
         {console.log(data)}
      
    return (
   
        <ActivityContext.Provider value={data}>{children}</ActivityContext.Provider>
    );
};
export default ActivityProvider;