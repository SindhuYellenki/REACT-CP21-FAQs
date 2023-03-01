import './index.css'

const FaqItem = props => {
  const {details, showAnswer, show, hideAnswer} = props
  const {id, questionText, answerText} = details

  const plusButtonClicked = () => {
    showAnswer(id)
  }

  const minusButtonClicked = () => {
    hideAnswer(id)
  }

  return (
    <li className="listItemContainer">
      <div className="question-button">
        <h1 className="question">{questionText}</h1>

        {!show && (
          <button className="button" onClick={plusButtonClicked} type="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        )}
        {show && (
          <button className="button" onClick={minusButtonClicked} type="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
      </div>
      {show && (
        <div className="showContainer">
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
