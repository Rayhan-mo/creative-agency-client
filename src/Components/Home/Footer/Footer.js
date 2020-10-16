import React from 'react';
import { useForm } from "react-hook-form";
import './Footer.css';

const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <main className="footer-container">
        <section className="row ">
        <div className="col-md-6 mt-5 text-style">
            <h2 style={{color:'#2D2D2D'}}>Let us handle your <br/> project, professionally.</h2>
            <h6 className="text-secondary">With well written codes, we build amazing apps for all <br/>platforms, mobile and web apps in general.</h6>
        </div>
        <div className="mt-5 pl-5">
                <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="form-control form-input" name="email" type="email" placeholder="your email address" ref={register ({ required:true })} /><br/>
        
        {/* include validation with required or other standard HTML validation rules */}
        <input className="form-control form-input" name="name" type="text" placeholder="your name/company name" ref={register({ required: true })} /> <br/>
        <textarea className="form-control form-input" rows="5" placeholder="your message"></textarea>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <button className="bg-dark text-white pl-5 pr-5 mt-1 btn btn-dark">send</button>
        </form>
        </div>
    </section>
    <p className="text-center" style={{backgroundColor:"#FBD062", marginTop:'7em'}}>copyright Orange lab 2020</p>
   </main>
    );
};

export default Footer;