import { useState,useEffect } from "react";
const TestComponent = () => {
    const[buttonClick,setButtonClick] = useState(false);
    useEffect(() => {  
        console.log("component is mounted");
        return ()=>{
            console.log();
        }
     }, []);
      useEffect(() => {  
        console.log("component is updated");
     }, [buttonClick === true]);

      const setButtonClickedTrue = ()=>{
        setButtonClick(true);
      };
    return ( <>
        <button onClick = {setButtonClickedTrue}>ComponentTest</button>
    </> );
}
 
export default TestComponent;