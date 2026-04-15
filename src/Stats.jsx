import React, { useContext} from 'react';
import { ActivityContext } from './ActivityContext';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import EmptyActivity from './EmptyActivity';

const Stats = () => {
   
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    const {activityItems} = useContext(ActivityContext);
   
     function countActivity(){
        let call = 0; 
        let text = 0;
        let video = 0 ;
            for (let item of activityItems){
                if(item.activityType === "Call"){
                    call = call+1;
                }
                else if(item.activityType === "Text"){
                    text = text + 1;
                }
                else if(item.activityType === "Video"){
                    video = video + 1;
                } 
                
            }
            return [
                    { name: "Call", value: call },
                    { name: "Text", value: text },
                    { name: "Video", value: video }
                    ];    
    }
    
    if(!activityItems || activityItems.length ===0){
        return <EmptyActivity></EmptyActivity>;
    }
    const data = countActivity();
    return  (
        
        <div>
            
       <PieChart width={600} height={600}>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={100}
    fill="#8884d8"
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
</PieChart>

        </div>
    );
};

export default Stats;