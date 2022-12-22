import React from 'react'


export default function Joke(props){
  const [isShown, setIsShown] = React.useState(false)
  const toggle=()=>{
    setIsShown(prevIsShown => !prevIsShown)
    
  }
  return (
    <>
      {props.setup && <h1 className="joke-setup">{props.setup}</h1>}      
      <br />
      {isShown && <p className="joke-punchLine">{props.punchline}</p>}      
      <br />
      <button onClick={toggle} className="joke--btn">{isShown ? 'Hide' : 'Show'} Punchline</button>
      <hr className="joke--hr"/> 
    </>
  );
}