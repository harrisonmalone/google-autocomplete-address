import React from 'react'

class App extends React.Component {
  state = {predictions: null}

  onInputChange = async (e) => {
    const response = await fetch(`http://localhost:5000?search=${e.target.value}`)
    const data = await response.json()
    this.setState({predictions: data.predictions})
  }

  renderPredictions = () => {
    return this.state.predictions.map((prediction) => {
      return <li>{prediction.description}</li>
    })
  }

  render() {
    const { predictions } = this.state
    return (
      <>
        <form>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" id="search" onChange={this.onInputChange}/>
        </form>
          {predictions && (
            <ul>
              {this.renderPredictions()}
            </ul>
          )}
      </>
    )
  }
}

export default App