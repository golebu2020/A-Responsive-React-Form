import Card from './Card'
import data from '../data'
import jokesData from '../jokesData'
import Joke from './Joke'

const Main = ()=>{
  const cards = data.map((item) =>{
    return <Card
     key = {item.id}
    //  item = {item}
    {...item}
    />
  })

  const jokes = jokesData.map(joke=>{
    return <Joke setup={joke.setup} punchline = {joke.punchline}/>
  })


  return (
    <main className="main">      
     {/* {cards} */}
     
     {jokes}
    </main>
  )
}
export default Main