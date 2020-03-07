// React
import React from 'react'

// Prop Types
import PropTypes from 'prop-types'

// Components
import Default from './defaultView'

const TopView = ({ restaurantDetails }) => {
  let finalData = []

  const getYearsDisplay = () => {
    const data = restaurantDetails.filter(item => item['Top Ten'].includes('#'))
    const updatedData = data.map(item => {
      return {
        ...item,
        topYear: parseInt(item['Top Ten'].split('#')[0].trim()),
        topRank: parseInt(item['Top Ten'].split('#')[1].trim()),
      }
    })
    const years = []
    updatedData.forEach(item => years.push(item.topYear))
    const uniqueYears = [...new Set(years)]

    uniqueYears.forEach(item => {
      finalData.push(updatedData.filter(obj => item === obj.topYear))
    })
    finalData.forEach(item => {
      item.sort((a, b) => a.topRank - b.topRank)
    })
  }

  return (
    <>
      {getYearsDisplay()}
      {finalData.length > 0 &&
        finalData.map(item => {
          return (
            <>
              <Default restaurantDetails={item} key={item} />
            </>
          )
        })}
    </>
  )
}

TopView.propTypes = {
  restaurantDetails: PropTypes.arrayOf(PropTypes.object),
}

export default TopView
