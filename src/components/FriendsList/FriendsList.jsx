import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./styles.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
export default FriendsList;