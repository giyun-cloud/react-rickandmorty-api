import React from 'react'

function Character({ name, status, species, type, gender, picture }) {
  return (
    <div className="character">
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <p>
        {species} / {gender}
      </p>
      <p>{type === '' ? 'none' : type}</p>
      <p>status : {status}</p>
    </div>
  )
}

export default Character
