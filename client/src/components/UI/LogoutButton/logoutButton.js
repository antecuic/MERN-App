import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    left: '2rem',
    bottom: '1.5rem',
    position: 'absolute',
    
  },
}));

const LogoutButton = ({ clicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={clicked}>
      <IconButton aria-label="logout" >
        <ExitToAppOutlinedIcon style={{fontSize: '45px', color: '#f97068'}}/>
      </IconButton>
    </div>
  );
}
export default LogoutButton