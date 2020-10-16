import React from 'react';
import image1 from '../../../../images/icons/service4.png';
import image2 from '../../../../images/icons/service5.png';
const ServiceList = () => {
    return (
        <div className="">
            <div className="mt-5 pl-5 ml-5 row col-md-4">
            <h2 style={{color:'green'}}>Your previous orders</h2>
                <div>
                   <img style={{ width:'50px'}} src={image1} alt=""/>
                    <h3>Web & mobile design</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.</h5>
                </div>
                <div className="mt-2">
                    <img src={image2} style={{width:'50px'}} alt=""/>
                    <h3>Grapics design</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laudantium?</h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;