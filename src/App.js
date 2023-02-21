import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import characters, { Rick } from './data.js'
import Header from './components/Header'
import styled from 'styled-components'
import img from './img/595000.jpg'

const Divprincipal = styled.div `
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white; 
  font-family: courier;
 
  

`

const DivCard = styled.div `
  
  
`

const DivCards = styled.div `
  display: flex;
  flex-direction:row;
  justify-content: center;
  

`

/*background-image: url("../img/1_11050.jpg"); */

function App () {
  return (
    <Divprincipal className='App' style={{ padding: '25px' }}>
      <Header/>
      <DivCard>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </DivCard>
      <hr />
      <DivCards>
        
        <Cards
          characters={characters}
        />
        
      </DivCards>
      <hr />
    </Divprincipal>
  )
}

export default App
