import React from 'react';
import headerImage from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#111430'}}>Let's Grow Your <br/>Brand To The<br/> Next Level</h1>
                <h5>Lorem ipsum dolor sit amet consectetur ex. Autem obcaecati error praesentium voluptatibus repellendus vel consequa</h5>
                <button className="btn btn-dark">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid"/>
            </div>
    </main>
    );
};

export default HeaderMain;