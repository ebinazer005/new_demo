import question  from "../question";
import { useState,useCallback } from "react";
import  CompleteImg  from '../assets/quiz-complete.png';
import QuestinTimer from './quetionsTime';
const Quiz = () => {

    
    const [useanswer,setAnswer] =useState([]);
    const [answerState,setAnswerState] = useState('');
    const [style ,setStyle] = useState();
    const acriveIndex = useanswer.length;
   
    const quizComplete = acriveIndex === question.length;
    console.log(useanswer);


    // console.log()
   

    const getAnswer = useCallback(
         function getAnswer(selectedAnswer){
            setAnswerState('selected');
            setStyle(selectedAnswer);
            

              
            
        setAnswer((preAnswer)=>{
             return [...preAnswer,selectedAnswer];
        });

       
    },[])



    const handleskipAnswer= useCallback(() => getAnswer(null), [getAnswer]);
   
 

   

    if(quizComplete){
        return(<div id='summary'>
            <img src={CompleteImg}/>
            <p>quiz is complete</p>
        </div>)
    }

     const suffleAnswer = [...question[acriveIndex].answers];
    suffleAnswer.sort(() => Math.random() - 0.5);
    
    
    return ( <div id="quiz">
                <QuestinTimer key ={acriveIndex}  timeout={10000} onTimeout={handleskipAnswer}/>
                {<h2 className="question">{question[acriveIndex].text}</h2>}
                
                <ul className="answers">
                    {suffleAnswer.map((data)=>(
                        <p key={data} className="answer">
                            <button  onClick={() => getAnswer(data)} >{data}</button>
                        </p>
                    
                    ))}
                </ul>
                
              
        </div> );
}
 
export default Quiz;


