import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return total() >= 1 ? (
    <ul className={css.listItem}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive feedback: {percent()} %</li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};