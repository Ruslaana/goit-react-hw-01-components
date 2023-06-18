import PropTypes from 'prop-types';
import styles from './Data.module.css';

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const Data = () => {
  const stats = [
    { id: '1', label: '.docx', percentage: 22 },
    { id: '2', label: '.pdf', percentage: 4 },
    { id: '3', label: '.mp3', percentage: 17 },
    { id: '4', label: '.psd', percentage: 47 },
  ];

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <div className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <div
            key={id}
            className={`${styles.item} ${styles[label.toLowerCase()]}`}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

Data.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Data;
