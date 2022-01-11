import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

class Home extends React.Component {
    render() { 
        return (
            <div>
                <Announcement />
                <Navbar />
                <Slider />
                <h1>Home Page</h1>
            </div>
        );
    }
}
 
export default Home;