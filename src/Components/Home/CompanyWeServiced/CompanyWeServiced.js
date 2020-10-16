import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const CompanyWeServiced = () => {
    return (
        <section>
           <div className="d-flex justify-content-center">
               <img style={{width:"7vw", margin:"3vw"}} src={slack} alt=""/>
               <img style={{width:"7vw", margin:"3vw"}} src={google} alt=""/>
               <img style={{width:"7vw", margin:'3vw'}} src={uber} alt=""/>
               <img style={{width:"7vw", margin:"3vw"}} src={netflix} alt=""/>
               <img style={{width:"7vw", margin:"3vw"}} src={airbnb} alt=""/>
           </div>
        </section>
    );
};

export default CompanyWeServiced;