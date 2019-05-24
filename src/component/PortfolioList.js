import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import PortfolioCard from './PortfolioCard';
//import './PortfolioList.css';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 500,
        height: 450,
    }
})

const PortfolioList = (props) => {
    const { classes } = props;
    // const portfolios = props.portfolios.map((portfolio) => {
    //     return <PortfolioCard portfolio={portfolio} />
    // });

    return (
        <div className={classes.root}>
            <Grid container spacing={24} style={{padding: 24}}>
                {props.portfolios.map((portfolio) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <PortfolioCard portfolio={portfolio} />
                    </Grid>
                ))}
            </Grid>
        </div>
        // <div className={classes.root}>
        //     <GridList cellHeight={180} className={classes.gridList}>
        //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        //   <ListSubheader component="div">December</ListSubheader>
        // </GridListTile>
        //     {portfolios}
        //     </GridList>
        // </div>
    );
}

PortfolioList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(PortfolioList);