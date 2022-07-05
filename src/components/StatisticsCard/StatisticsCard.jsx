import css from './StatisticsCard.module.css';
import { randomColor } from 'components/utils/randomColor';

export const StatisticsCard = ({ label, percentage }) => {
  const color = randomColor();
  return (
    <li className={css.item} style={{ backgroundColor: `#${color}` }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
