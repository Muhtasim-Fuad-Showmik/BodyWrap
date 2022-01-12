import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

class Home extends React.Component {
    render() { 
        return (
            <div>
                <Announcement />
                <Navbar />
                <Slider />
                <Categories />
                <Products />
            </div>
        );
    }
}
 
export default Home;