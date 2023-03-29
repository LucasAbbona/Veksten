import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const form = useRef();
    const [validator,setValidator]=useState(false)
    const [InputsForm,SetInputs]=useState({
        name:'',
        lastname:'',
        email:'',
        company:'',
        position:'',
        country:'',
        message:''
    })
    const inputsHandler = (event) =>{
        switch (event.target.id) {
            case 'name':
                SetInputs({...InputsForm, name:event.target.value})        
                break;
            case 'lastname':
                SetInputs({...InputsForm, lastname:event.target.value})        
                break;
                case 'email':
                    SetInputs({...InputsForm, email:event.target.value})        
                    break;
                case 'company':
                    SetInputs({...InputsForm, company:event.target.value})        
                    break;
                case 'position':
                    SetInputs({...InputsForm, position:event.target.value})        
                    break;
                case 'country':
                    SetInputs({...InputsForm, country:event.target.value})        
                    break;
                case 'message':
                    SetInputs({...InputsForm, message:event.target.value})        
                    break;
            default:
                    SetInputs({
                        ...InputsForm
                    })
                break;
        }
        
    }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(validator)
        if(validator === false ){return ;}
        SetInputs({
            name:'',
        lastname:'',
        email:'',
        company:'',
        position:'',
        country:'',
        message:''
        })
        emailjs.sendForm('service_jop2k16', 'template_aqpzt85', form.current, 'mDCnJSvh69rwX6HJ2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        toast.success('Email sended successfully');
      };
  return (
    <div className="w-full px-12 md:px-20 bg-Secundario pt-20 pb-20 flex flex-col lg:flex-row items-center lg:items-start ">
        <Toaster />
        <h2 className="text-xl md:text-3xl lg:pl-10 text-white font-bold lg:w-1/2">How can we help you</h2>
        <form id='Contact' className="flex flex-col w-3/5 lg:w-2/5 lg:ml-10 gap-8 mt-5 lg:mt-0" onSubmit={sendEmail} ref={form}>
            <div className="flex flex-col md:flex-row gap-2 justify-between">   
                <input type='text' placeholder="Name" name='name_from' id='name' value={InputsForm.name} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
                <input type='text' placeholder="Lastname" name='lastname' id='lastname' value={InputsForm.lastname} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between">
                <input type='text' placeholder="Email" name='email_from' id='email' value={InputsForm.email} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
                <input type='text' placeholder="Company" name='company' id='company' value={InputsForm.company} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between">
                <input type='text' placeholder="Country" name='country' id='country' value={InputsForm.country} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
                <input type='text' placeholder="Position" name='position' id='position' value={InputsForm.position} onChange={inputsHandler} className="px-4 py-3 rounded-md"/>
            </div>
            <input type='text' placeholder="How can we help you?" name='message' id='message' value={InputsForm.message} onChange={inputsHandler} className="px-4 py-3 rounded-md w-full"/>
            <div className="flex gap-2">
                <input type='checkbox' onChange={(e)=>setValidator(e.target.checked)}/>
                <p className="text-white text-xs md:text-sm font-normal">I accept the Privacy policy*</p>
            </div>
                <button type='submit' className="sm:w-2/5 py-2 rounded-3xl bg-white text-Secundario text-base md:text-lg font-regular hover:bg-gray-300 transition-colors">Start Evolution</button>
        </form>
    </div>
    
  )
}

export default ContactForm