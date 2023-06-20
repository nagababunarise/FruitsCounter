import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mangos, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span">{mangos}</span> mangoes
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="two-container">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="mango-button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="mango-button"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
