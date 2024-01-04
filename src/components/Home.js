import React from 'react'
import "../index.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_gf5hd5i";
const TEMPLATE_ID = "bryant";
const USER_ID = 'Yer2UVodigFQcmEds';


    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
          })
        }, 
        
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          })
        });
      e.target.reset()
    }

const Home = () => {
    return (
        <body className="min-h-screen bg-blue-950 bg-cover bg-center">
         

        <div className='flex flex-col items-center mx-5 mt-10 font-cinzel text-xl text-white'>
        <p>The Bryant Law Firm is a Limited Practice specializing in Criminal Defense and Personal Injury Law.</p>
        </div>


        <div className=" min-h-screen bg-blue-950 bg-cover">
        <section className='flex flex-col items-center'>
            <div className='max-w-sm rounded overflow-hidden bg-red-950 border-4 border-amber-400 shadow-xl mt-5 mb-5'>
                <img className='w-full border-b-4 border-amber-400' src='https://res.cloudinary.com/dxnwbl21t/image/upload/v1688583797/rickbryant_tz70qx.jpg' alt='Rick Bryant in courtroom'></img>
                <div className='px-8 py-4'>
                    <div className='font-bold text-xl text-white text-center font-cinzel'>Rick Bryant</div>
                </div>
            </div>
        </section>

        <hr />


        <div className='ml-10 mt-5 mb-5 items-start font-cinzel text-xl text-white'>
            <h1 className='underline font-cinzel'>Personal History</h1>
            <ul>
                <li>Raised in Lake Charles, Louisiana</li>
                <li>Graduate of LaGrange High School and McNeese State University</li>
                <li>Graduate of Paul M. Hebert LSU Law School</li>
            </ul>

            <h1 className='mt-5 underline font-cinzel'>Work History</h1>
            <ul>
                <li>1977- Attorney for Southwest Louisiana Legal Services--worked as an attorney assisting clients who could not afford council</li>
                <li>1979- Hired by the newly elected District Attorney as an Assitant DA handling misdemeanor matter.</li>
                <li>1980- Promoted to handle felony cases, 1 of only 4 attorneys in his division.</li>
                <li>1983- Promoted to be Chief of the Felony Division at the Calcasieu Parish District Attorney's Office</li>
            </ul>
        </div>

        <hr />

        


        <div className="flex flex-col items-center  min-h-screen bg-cover bg-center bg-blue-950">
        <section className="bg-white mt-8 border-4 border-red-900">
        <div className="py-8 lg-py-16 px-20 mx-auto max-w-screen-md ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='user_email'
                placeholder='Your Email Address Here...'
                required
                icon='mail'
                iconPosition='left'
                 />
                 <Form.Field
                id='form-input-control-phone'
                control={Input}
                label='Phone Number'
                name='user_phone'
                placeholder='(XXX)XXX-XXXX'
                required
                icon='phone'
                iconPosition='left'
                 />
                <Form.Field
                id='form-input-control-name'
                control={Input}
                label='Name'
                name='from_name'
                placeholder='Full Name Here…'
                required
                icon='user circle'
                iconPosition='left'
                 />
            <Form.Field
                 id='form-textarea-control-opinion'
                control={TextArea}
                label=''
                name='message'
                placeholder='Tell us about your case...'
                required
            />
             <Button type='submit' color= 'blue'>Submit</Button>
            </Form>
        
        </div>
        </section>
        
      </div>
        </div>


        
        
      

        

        </body>


    )
}

export default Home;
 
