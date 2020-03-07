// React
import React from 'react'

const DefaultView = ({ restaurantDetails }) => {
  const data = restaurantDetails.map(item => {
    return (
      <>
        <div className="card" key={item.Brand}>
          <h3>{item.Brand}</h3>
          <p>{item.Variety}</p>
          <p>{item.Style}</p>
          <p>{item.Country}</p>
          <p>{item.Stars}</p>
          <p>{item['Top Ten']}</p>
        </div>
      </>
    )
  })
  return data
}

export default DefaultView
