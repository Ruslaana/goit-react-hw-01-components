import styles from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    ></span>
    <div className={styles.avatarContainer}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
    </div>
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
