import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
//   <div>
//   <div>{props.portfolio.project_name}</div>
//   <div>{props.portfolio.description}</div>
//   <div>{props.portfolio.type}</div>
// </div>
const PortfolioCard = (props) => {
    const { classes } = props;
    return (

        <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.portfolio.type}
              </Typography>
              <Typography variant="h5" component="h2">
                {props.portfolio.project_name}
              </Typography>
              <Typography component="p">
                {props.portfolio.description}
              </Typography>
            </CardContent>
          </Card>
    );
}

export default withStyles(styles)(PortfolioCard);