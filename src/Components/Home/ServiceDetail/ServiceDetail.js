import React from 'react';

const ServiceDetail = ({ service }) => {
    return ( 
        <div className="col-md-4 text-center mb-5" style={{cursor:'pointer'}}>
          <a href="/client" style={{textDecoration:'none'}}>
          <img style={{height: '50px'}} src={service.image} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary pl-1 pr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias at nemo provident labore incidunt culpa?  debiti</p>
          </a>
       </div>
    );
};

export default ServiceDetail;