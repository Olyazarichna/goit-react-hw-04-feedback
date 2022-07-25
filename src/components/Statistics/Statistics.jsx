import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticList}>
      <li className={css.statisticListItems}>Good: {good}</li>
      <li className={css.statisticListItems}>Neutral: {neutral}</li>
      <li className={css.statisticListItems}>Bad: {bad}</li>
      <li className={css.statisticListItems}>Total: {total}</li>
      <li className={css.statisticListItems}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
