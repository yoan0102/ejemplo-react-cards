import React from 'react'
import PropTypes from 'prop-types'

import './card.css';


function Card({ title, image, text, url }) {
  console.log();
  return (
    <div className="card text-center bg-dark " style={{ width: "18rem" }}>
      <div className="overflow">
        <img src={image} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto exercitationem qui ab, error, nemo harum accusantium quos et dolorum, ut modi dolores laboriosam autem. Quia porro recusandae natus labore.'
          }
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
          Go to this website
        </a>
      </div>
    </div >
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
}

export default Card
