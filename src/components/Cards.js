import React from 'react'
import Card from './Card'

import image1 from '../assets/1081329.png'
import image2 from '../assets/ESXKQVzWAAAxsad.jpg'
import image3 from '../assets/wp4923981.jpg'


const cards = [
  {
    id: 1,
    title: "React",
    image: image1,
    url: 'https://es.reactjs.org',
  },
  {
    id: 2,
    title: "Vue",
    image: image2,
    url: 'https://es.vuejs.org',
  },
  {
    id: 3,
    title: "ReactIngles",
    image: image3,
    url: 'https://reactjs.org',
  },


]

function Cards() {
  console.log(cards)
  return (
    <div className="container d-flex justify-content-center align-items-center h-100" >
      <div className="row">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title} image={card.image} url={card.url} text={card.text} />
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Cards
