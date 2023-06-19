import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import generateRandomColor from './HeplerColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.statList}>
        {stats.map(el => (
          <div
            key={el.id}
            className={`${styles.item} ${styles[el.label.toLowerCase()]}`}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
