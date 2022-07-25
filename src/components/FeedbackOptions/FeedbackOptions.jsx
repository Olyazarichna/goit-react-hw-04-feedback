import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map((option, index) => {
        return (
          <li key={index} className={css.items}>
            <button
              className={css.feedback}
              type="button"
              onClick={onLeaveFeedback}
            >
              {toUpperCase(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function toUpperCase(value) {
  let text = value.split('');
  let firstLeter = text[0].toUpperCase();
  text.splice(0, 1, firstLeter).join('');
  return text;
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
