import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile design',
        image: service1
    },  {
        name: 'Graphic design',
        image: service2
    },  {
        name: 'Web development',
        image: service3
    },
];

const Services = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
          
            <h2>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
        </div>
        <div className="d-flex justify-content-center">
         <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Services;