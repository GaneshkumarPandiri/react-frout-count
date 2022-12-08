import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMangoCount = () => {
    this.setState(prevMangoCount => ({mango: prevMangoCount.mango + 1}))
  }

  eatBananaCount = () => {
    this.setState(prevMangoCount => ({banana: prevMangoCount.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="count-style">{mango}</span> mangoes{' '}
            <span className="count-style">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="sub-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-style"
              />
              <button
                type="button"
                className="btn-style"
                onClick={this.eatMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="sub-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-style"
              />
              <button
                type="button"
                className="btn-style"
                onClick={this.eatBananaCount}
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
