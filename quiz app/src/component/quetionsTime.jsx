import { useState,useEffect } from "react";

const QuestinTimer = ({timeout,onTimeout}) => {

const [remainingTime,setRemainingTime] =useState(timeout)

    useEffect(()=>{
        console.log("time");
        
       const timeTimeout= setTimeout(onTimeout,timeout);

         return()=>clearTimeout(timeTimeout);
    },[timeout,onTimeout])
    


   
    useEffect(()=>{
          console.log("interval");
        const interval = setInterval(()=>{
        setRemainingTime(preRemainingTime => preRemainingTime -100);
    },100)
    
    
    return ()=>{clearInterval(interval)}
    },[])
  
    return ( <div>
        <progress id="question-id" max={timeout} value={remainingTime}/>
    </div> );
}
 
export default QuestinTimer;