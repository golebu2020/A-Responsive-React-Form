import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Hero from './components/Hero'
import Joke from './components/Joke'
import jokesData from './jokesData'
import Form from './components/Form'


const App = ()=>{



  // const [unread, setUnread] = React.useState(['a','b'])

  // return (
  //   <div>
  //     <h1>{unread.length>0 ? 
  //     (unread.length==1 ? `You have an unread message` : `You have ${unread.length} unread messages`) : 
  //     `You're all caught up!`}
  //   </h1>
      
  //   </div>
  // )
 
  // return (
  //   <div> 
  //     <Header/>
      
  //     {/* <Hero/>
  //     <Main/> */}
  //     <Main/>
  //   </div>
  // )
  return (
    <Form />
  )
}

export default App

