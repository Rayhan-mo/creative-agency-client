import React from 'react';
import OrderService from '../OrderService';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';

const Client = () => {
    return (
        <div>
            <OrderService></OrderService>
            <ServiceList></ServiceList>
            <Review></Review>
        </div>
    );
};

export default Client;