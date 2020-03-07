// React
import React, { useState } from 'react'

// Prop Types
import PropTypes from 'prop-types'

// Components
import Default from './defaultView'
import TextField from './textField/texField'

const SearchView = ({ restaurantDetails }) => {
  const details = restaurantDetails

  const [updatedRestaurantDetails, setUpdatedRestaurantDetails] = useState(
    details
  )

  const handleChange = e => {
    if (e.target.value === '') {
      setUpdatedRestaurantDetails(details)
      return
    }

    const data = details.filter(
      item => item.Brand.toLowerCase() === e.target.value.toLowerCase().trim()
    )
    setUpdatedRestaurantDetails(data)
  }

  return (
    <>
      <div className="form">
        <div className="search-container">
          <TextField handleChange={handleChange} />
        </div>
        <p className="search-text">( Type the full name of the Restaurant )</p>
      </div>
      {updatedRestaurantDetails.length > 0 ? (
        <Default restaurantDetails={updatedRestaurantDetails} />
      ) : (
        <div className="card" key="not found">
          <h3>No Results</h3>
          <p>Restaurant not found, please try entering the full name</p>
        </div>
      )}
      <style jsx>
        {`
          .form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .search-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .search-text {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

SearchView.propTypes = {
  restaurantDetails: PropTypes.arrayOf(PropTypes.object),
}

export default SearchView
