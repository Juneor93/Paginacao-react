import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      width: '100%',
      maxWidth: 920,
      marginLeft: 215,
    },
    text:{
      marginLeft: 215,
      marginBottom: 0,   
      fontSize: 17,   
    }
  }),
);

function Main() {
  const classes = useStyles();
  return (
    <Fragment>        
        <Box p={2} bgcolor="background.paper">
        </Box>
        <h5 className={classes.text} style={{ fontFamily: 'Quando', color:'GrayText' }}>Livros</h5>
        <Divider  className={classes.divider} /> 
    </Fragment>
  );
}

export default Main;
