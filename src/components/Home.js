import React from 'react'
import "../index.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

// NEED TO USE .ENV
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
         
{/* Hero */}
        <div className='flex flex-col items-center mx-5 mt-10 font-cinzel text-xl text-white'>
        <p>The Bryant Law Firm is a Limited Practice specializing in Criminal Defense and Personal Injury Law.</p>
        </div>

        

{/* Main Image */}
        <div className=" min-h-screen  bg-blue-950 bg-cover">
        <section className='flex flex-col items-center'>
            <div className='max-w-sm rounded overflow-hidden bg-red-950 border-4 border-amber-400 shadow-xl mt-5 mb-10'>
                <img className='w-full  border-b-4 border-amber-400' src='https://res.cloudinary.com/dxnwbl21t/image/upload/v1688583797/rickbryant_tz70qx.jpg' alt='Rick Bryant in courtroom'></img>
                <div className='px-8 py-4'>
                    <div className='font-bold text-xl text-white text-center font-cinzel'>Rick Bryant</div>
                </div>
            </div>
        </section>

        <hr />

{/* Personal History */}
        <div className='ml-10 mt-5 mb-5 items-start font-cinzel text-xl text-white'>
            <h1 className='underline font-cinzel'>Personal History</h1>
            <ul>
                <li>Raised in Lake Charles, Louisiana</li>
                <li>Graduate of LaGrange High School and McNeese State University</li>
                <li>Graduate of Paul M. Hebert LSU Law School</li>
            </ul>

            <h1 className='mt-5 underline font-cinzel'>Military History</h1>
            <ul>
                <li>Served in the United States Army from 1967 to 1970</li>
                <li>Two Tours of Duty in South Vietnam</li>
                <li>Awarded the Army Commendation Medal and the Bronze Star</li>
            </ul>

            <h1 className='mt-5 underline font-cinzel'>Work History</h1>
            <ul>
                <li>Served as Legal Counsel at Southwest Louisiana Legal Services</li>
                <li>Hired in 1979 by District Attorney Leonard Knapp as Chief of Felony Prsecution Divison</li>
                <li>Hired in 1985 by District Attorney Richard Ieyoub as Chief of Felony Prosecution Division and later became First Assistant District Attorney.</li>
                <li>Elected as District Attorney in 1990 and served for 3 terms unopposed. </li>
            </ul>

            <h1 className='mt-5 underline font-cinzel'>Accomplishments as District Attorney</h1>
            <ul>
                <li>Set up the first Pre-Trial Diversion Program in Louisiana</li>
                <li>Established the Ropes Course</li>
                <li>Set up the first Misdemeanor Probation Division</li>
                <li>Created IDFY (International Drug Free Youth) as a follow up to the D.A.R.E. program.</li>
            </ul>

            <h1 className='mt-5 underline font-cinzel'>Miscellaneou Accomplishments</h1>
            <ul>
                <li>Joined with YMBC to create the Rick Bryant/YMBC Golf tournament to raise money for Wishing Well.</li>
                <li>President of the Boy Scouts for 2 years--awarded the Silver Beaver Award (Highest Civilian Honor)</li>
                <li>Louisiana House of Representatives Distingueshed Citizen Award</li>
                <li>Kiwanis Club Man of the Year</li>
                <li>Louisiana Crime Victims District Attorney of the Year</li>
            </ul>
        </div>

        <hr />
        
        <div className='ml-10 mt-5 mb-5 items-start font-cinzel text-xl text-white'>
            <p>During his career, Rick Bryant has prosecuted nearly 200 felony cases--losing only once. He has prosecuted more capital cases than any other District Attorney in history including such high profile cases as:</p>
            <ul className='mt-5 mb-5'>
                <li>Leslie Dale Martin (Christina Burgin)</li>
                <li>Ricky Langley (Jeremy Guillory)</li>
                <li>Thomas Cisco (KK's Corner)</li>
                <li>Jason Reeves (Mary Jean Thigpen)</li>
            </ul>
            <p>and many others. In 2007 he was elected as the 14th Judicial Court Judge and later returned to private practice in 2010, eventually becoming in-house counsel for Patriot Disaster Relief Specialists. </p>
        </div>

        <hr />
        
        

        

{/* Contact Form */}
        <div className="flex flex-col items-center  min-h-screen bg-cover bg-center bg-blue-950">
        <section className="bg-white mt-20 border-4 border-red-900">
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
 
