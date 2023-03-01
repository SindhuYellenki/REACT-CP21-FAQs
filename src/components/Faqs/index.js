import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {showAnswerList: []}

  showAnswer = id => {
    const {faqsList} = this.props
    this.setState(p => ({showAnswerList: [...p.showAnswerList, id]}))
  }

  hideAnswer = id => {
    console.log('minus Clicked')
    const {showAnswerList} = this.state
    const newList = showAnswerList.filter(each => each !== id)
    console.log(newList)
    this.setState({showAnswerList: newList})
  }

  render() {
    const {showAnswerList} = this.state
    console.log(showAnswerList)
    const {faqsList} = this.props
    let status = false
    return (
      <div className="bg-container">
        <div className="FAQ-container">
          <h1 className="heading">FAQs</h1>
          <ul className="listContainer">
            {faqsList.map(each => {
              if (showAnswerList.includes(each.id)) {
                status = true
              } else {
                status = false
              }
              return (
                <FaqItem
                  details={each}
                  key={each.id}
                  show={status}
                  showAnswer={this.showAnswer}
                  hideAnswer={this.hideAnswer}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
