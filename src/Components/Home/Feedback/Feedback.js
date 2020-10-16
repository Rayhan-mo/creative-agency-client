import React from 'react';
import feedback1 from '../../../images/customer-1.png';
import feedback2 from '../../../images/customer-2.png';
import feedback3 from '../../../images/customer-3.png';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbackData = [
    {
        name: 'Nash Patrik',
        position: 'CEO, Manpol',
        image: feedback1
    },  {
        name: 'Miriam Barron',
        position: 'CEO, Manpol',
        image: feedback2
    },  {
        name: 'Bris Malone',
        position: 'CEO, Manpol',
        image: feedback3
    },
];

const Feedback = () => {
    return (
        <section className=" mt-5">
        <div className="text-center">
          
            <h2>Clients<span style={{color: '#7AB259'}}>feedback</span></h2>
        </div>
        <div>
         <div className="row d-flex justify-content-center mt-5 pt-5">
            {
                feedbackData.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name}></FeedbackDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Feedback;