// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isOpened: false}

  showContent = () => {
    const {isOpened} = this.state
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }))
    console.log('isOpened', isOpened)
  }

  render() {
    const {content} = this.props
    const {questionText, answerText} = content
    const {isOpened} = this.state

    // let isTrue = false
    //   const {isActive} = state
    //   isTrue = isActive
    // if (activeId === id) {
    //   this.showContent()
    // }

    // const changeType = () => {
    //   viewContent(id)
    // }

    return (
      <li className="card-item">
        <div className="card-head">
          <h1 className="heading">{questionText}</h1>
          <button className="open" type="button" onClick={this.showContent}>
            {isOpened ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="logo"
              />
            )}
          </button>
        </div>
        {isOpened && (
          <>
            <hr />
            <p className="para">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
