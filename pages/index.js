// React
import React, { useState, useEffect } from 'react'

// Components
import Footer from '../components/footer'
import Navbar from '../components/navbar/navbar'
import Header from '../components/header'
import Default from '../components/defaultView'
import Search from '../components/searchView'
import Top from '../components/topView'
import Button from '../components/button/button'
import Country from '../components/countryView'

// Service Import
// import makeApiRequest from '../services/network'
// API Request Failing due to CORS Issue.

// Mock Data
import mockData from '../services/mock/mockData'

const Home = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [currentView, setCurrentView] = useState('default')

  const getRestaurantDetails = async () => {
    let data = []

    // API Request Failing due to CORS Issue.
    // data = await makeApiRequest({
    //   method: 'get',
    //   url: 'http://starlord.hackerearth.returncom/TopRamen',
    // })

    if (restaurantDetails.length === 0) {
      data = mockData
    }
    setRestaurantDetails(data)
  }

  useEffect(() => {
    getRestaurantDetails()
  }, [])

  const handleClick = type => {
    setCurrentView(type)
  }

  const getCurrentView = type => {
    switch (type) {
      case 'top':
        return <Top restaurantDetails={restaurantDetails} />
      case 'search':
        return <Search restaurantDetails={restaurantDetails} />
      case 'country':
        return <Country restaurantDetails={restaurantDetails} />
      default:
        return <Default restaurantDetails={restaurantDetails} />
    }
  }

  return (
    <div className="container">
      <Header />
      <Navbar header="Ramen of the World">
        <main>
          <h1 className="title">StashAway</h1>
          <p className="description">
            <code>Front End Challenge</code>
          </p>
        </main>
        <div className="buttons-grid">
          <div className="buttons">
            <Button
              color="primary"
              text="Default View"
              handleClick={handleClick}
              handleClickType="default"
            />
            <Button
              color="secondary"
              text="Top View"
              handleClick={handleClick}
              handleClickType="top"
            />
            <Button
              color="primary"
              text="Search View"
              handleClick={handleClick}
              handleClickType="search"
            />
            <Button
              color="secondary"
              text="Country View"
              handleClick={handleClick}
              handleClickType="country"
            />
          </div>
          <hr />
          <div className="grid">{getCurrentView(currentView)}</div>
        </div>
      </Navbar>
      <Footer />
      <style jsx>{`
        .buttons {
          display: grid;
          grid-template-columns: auto auto;
          text-align: center;
          background-color: whitesmoke;
        }

        @media (min-width: 500px) {
          .buttons {
            grid-template-columns: auto auto auto auto;
          }
        }

        .button {
          border: none;
          color: white;
          padding: 15px 32px;
          margin: 16px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }

        .button-red {
          background-color: #f44336; /* Red */
        }

        .button-green {
          background-color: #4caf50; /* Green */
        }

        .button-blue {
          background-color: #008cba; /* Blue */
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: whitesmoke;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 90%;
          height: 272px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}

export default Home
