const BASE_URL = 'http://localhost:3000'
const api = async ({
  endpoint,
  method = 'GET',
  body = null,
  headers
}) => {
  try {
    const url = `${BASE_URL}${endpoint}`
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...!!body && { body: JSON.stringify(body) }
    })
    const result = await response.json()
    return result
  }
  catch(err) {
    console.log(err)
  }
}

export default api;