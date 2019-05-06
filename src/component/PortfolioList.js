import React from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioList.css';

const PortfolioList = (props) => {
    const portfolios = props.portfolios.map((portfolio) => {
        return <PortfolioCard portfolio={portfolio} />
    });

    return (
        <div >{portfolios}</div>
    );
}

export default PortfolioList;