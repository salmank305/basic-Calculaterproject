import React from 'react'
import { useState } from 'react'
import "./Calculate.css";

export const Calculater = () => {
    const [result,setResult]=useState('');
    const handler=(e)=>{
        setResult(result.concat(e.target.name))
    }
    const clear=()=>{
      setResult('')
    }
    const backspace=()=>{
      setResult(result.slice(0,-1))
    }
    let cssStyle={}
    const calculate=()=>{
      try{
        setResult(eval(result).toString()+" ")
      }catch(err){
        setResult(`error `)
      }
     
    }

  return (
   
    <>
     <h1>Calculater</h1>
     <div className='container' >
        <form>
            <input type="text" value={result} />
        </form>
        <div className='keypad'>
            <button className="clr" onClick={clear} id="clear">Clear</button>
            <button onClick={backspace}>C</button>
            <button className='mathOp' name="/" onClick={handler}>&divide;</button>           
            <button name="1" onClick={handler}>1</button>
            <button name="2" onClick={handler}>2</button>
            <button name="3" onClick={handler}>3</button>
            <button className='mathOp' name="*" onClick={handler}>&times;</button>           
            <button name="4" onClick={handler}>4</button>
            <button name="5" onClick={handler}>5</button>
            <button name="6" onClick={handler}>6</button>
            <button className='mathOp'name="-" onClick={handler}>&ndash;</button>       
            <button name="7" onClick={handler}>7</button>
            <button name="8" onClick={handler}>8</button> 
            <button name="9" onClick={handler}>9</button>
            <button className='mathOp' name="+" onClick={handler}>+</button>
            <button className="dot" name="." onClick={handler}>.</button>
            <button name="0" onClick={handler}>0</button>          
            <button className="sum" onClick={calculate} id="result">=</button> 
        </div>
     </div>


    </>
  )
}
