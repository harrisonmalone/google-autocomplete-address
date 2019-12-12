const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get("/", async (req, res) => {
  const { search } = req.query
  console.log(search)
  const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_API_KEY}&input=${search}`)
  res.send(response.data)
})

app.listen(5000, () => console.log("listening on port 5000"))