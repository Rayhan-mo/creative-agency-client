import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const Contact = () => {
    return (
       <section>
       <Navbar></Navbar>
          <h2 className="text-center mt-4" style={{color:'green'}}>How can we help you??</h2>
               <form style={{ margin:'0 10vw '}}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Your name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                      <button btn btn-dark>submit</button>
                    </form>
        
  
       </section>
    );
};

export default Contact;