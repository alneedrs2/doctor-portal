import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='container mx-auto'>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;