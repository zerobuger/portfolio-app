import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, CardActions } from '@material-ui/core';
 
//   <div>
//   <div>{props.portfolio.project_name}</div>
//   <div>{props.portfolio.description}</div>
//   <div>{props.portfolio.type}</div>
// </div>
const PortfolioCard = (props) => {
    return (
        <Card>
          <CardMedia />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {props.portfolio.type}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.portfolio.project_name}
            </Typography>
            <Typography component="p">
              {props.portfolio.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href="google.com" target="_blank">
              조회
            </Button>
          </CardActions>
        </Card>
    );
}

export default PortfolioCard;