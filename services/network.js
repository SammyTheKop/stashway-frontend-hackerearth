// This File Contains the Resuable Service Call for the Application
import axios from 'axios'

const makeApiRequest = async ({ method, url }) => {
  const payload = await axios({
    method,
    url,
    'Access-Control-Allow-Origin': '*',
    Host: 'starlord.hackerearth.com',
    'Content-Type': 'application/json'
  })
  return payload
}

export default makeApiRequest
