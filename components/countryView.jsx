// React
import React, { useState } from 'react'

// Prop Types
import PropTypes from 'prop-types'

// Components
import Default from './defaultView'
import Button from './button/button'

const CountryView = ({ restaurantDetails }) => {
  let countryList = []
  const details = restaurantDetails

  const [updatedRestaurantDetails, setUpdatedRestaurantDetails] = useState(
    details
  )

  details.forEach(item => {
    countryList.push(item.Country)
  })

  countryList = [...new Set(countryList)]

  const handleClick = e => {
    if (e === 'clear') {
      setUpdatedRestaurantDetails(details)
      return
    }
    const data = details.filter(
      item => item.Country.toLowerCase() === e.toLowerCase().trim()
    )
    setUpdatedRestaurantDetails(data)
  }

  return (
    <>
      <div className="country-container">
        <p className="search-text">( Select the name of a country )</p>
        {countryList.length > 0 && (
          <div className="filters">
            {countryList.map(item => {
              return (
                <Button
                  color="secondary"
                  text={item}
                  handleClick={handleClick}
                  handleClickType={`${item}`}
                  key={item}
                />
              )
            })}
            <Button
              color="primary"
              text="clear"
              handleClick={handleClick}
              handleClickType={'clear'}
              key="clear"
            />
          </div>
        )}
      </div>
      <Default restaurantDetails={updatedRestaurantDetails} />
      <style jsx>
        {`
          .country-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .search-text {
            display: flex;
            justify-content: center;
          }

          .filters {
            display: grid;
            grid-template-columns: auto auto;
            text-align: center;
          }

          @media (min-width: 500px) {
            .filters {
              grid-template-columns: auto auto auto auto;
            }
          }
        `}
      </style>
    </>
  )
}

CountryView.propTypes = {
  restaurantDetails: PropTypes.arrayOf(PropTypes.object),
}

export default CountryView
