const APIKEY = 'DDZWy8kVajLLod7xV8HpdY6UXbK8vQ3o9JUa7eDy'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

const fetcher = async (queryParams?: string ) => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${APIKEY}${queryParams ? `&${queryParams}` : ''}`)
    const data = await response.json()

    return data
  } catch (error) {
    Promise.reject(error  )
  }
}

export default fetcher;
