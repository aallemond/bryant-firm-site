import React from "react";
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

const Contact= () => {
    return(
        // <div className="flex flex-col items-center  h-screen bg-cover bg-center bg-blue-950">
        //     <section className="bg-white mt-8 border-4 border-red-900">
        //         <div className="py-8 lg-py-16 px-20 mx-auto max-w-screen-md ">
        //             <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
        //             <form action="#" className="space-y-8 justify-items-start">
        //                 <div>
        //                     <label for='email' className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
        //                     <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your email address here" required></input>                    
        //                 </div>
        //                 <div>
        //                     <label for='name' className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        //                     <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your name here" required></input>                    
        //                 </div>
        //                 <div>
        //                     <label for='phone' className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
        //                     <input type="phone" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="(xxx)xxx-xxxx" required></input>                    
        //                 </div>
        //                 <div class="sm:col-span-2">
        //                     <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Additional Comments</label>
        //                     <textarea id="message" rows="6" class="block p-2.5 w-full text-sm bg-white text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Comments"></textarea>
        //                  </div>
        //                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Submit</button>
        //             </form>
        //         </div>
        //     </section>
        // </div>

        

        <div className="flex flex-col items-center  h-screen bg-cover bg-center bg-blue-950">
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
            placeholder='Additional Info Here...'
            required
          />
          <Button type='submit' color= 'blue'>Submit</Button>
        </Form>
        
        </div>
        </section>
        
      </div>
    );
}

export default Contact;