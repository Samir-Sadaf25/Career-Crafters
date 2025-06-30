import React from 'react';
import Banner from '../Components/Banner';
import Jobs from '../Components/Jobs';
import BestCompanies from '../Components/BestCompanies';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Jobs></Jobs>
            <BestCompanies></BestCompanies>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;