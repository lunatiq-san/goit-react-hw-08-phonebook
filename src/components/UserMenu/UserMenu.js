import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { green } from '@material-ui/core/colors';
import styles from './UserMenu.module.css';

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {name}</p>
      <ColorButton
        className={styles.btn}
        type="button"
        variant="contained"
        color="primary"
        endIcon={<MeetingRoomIcon />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </ColorButton>
    </div>
  );
}
