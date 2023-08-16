import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ul className={styles.point}>
      <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img
          className={styles.avatarr}
          src={avatar}
          alt=""
          width="48"
          height="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    </ul>
  );
}

export default FriendListItem;
