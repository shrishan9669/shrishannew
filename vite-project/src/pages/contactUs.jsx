import { useState } from "react";
import Footer from "../components/footer";
import axios from "axios";

export default function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const[confirmation,setConfirmation] = useState('')
    return (
        <div>
<div className="flex justify-center items-center mt-[200px] ">
            <div className=" flex flex-col gap-10  md:flex-row">


                <div className="flex flex-col gap-4">
                    <input 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    placeholder="Enter name" className="p-2 w-[350px] rounded-lg" type="text" style={{border:"2px solid gray"}}/>
                    <input 
                     onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    placeholder="Enter email" type="email" style={{border:"2px solid gray"}} className="w-[350px] rounded-lg p-2"/>
                    <input
                     onChange={(e)=>{
                        setPhone(e.target.value)
                    }}
                    placeholder="Enter phone number" style={{border:"2px solid gray"}} type="number" className="w-[350px]  rounded-lg p-2"/>
                    <textarea 
                     onChange={(e)=>{
                        setMessage(e.target.value)
                    }}
                    placeholder="Message" style={{border:"2px solid gray"}} className="  rounded-lg w-[350px] p-2"></textarea>

                    <button
                    onClick={async()=>{
                      const info =   await axios({
                            method:'post',
                            url:'http://localhost:3000/contactUs',
                            data:{
                                email,phone,name,message
                            }
                        })
                        console.log(info.data)
                        if(info.data){
                            setConfirmation(info.data)
                        }
                    }}
                    className="hover:bg-blue-700 bg-blue-500 px-2 py-2 w-[100px] rounded-full text-white">Submit</button>
                    <span className="text-green-500">{confirmation + ''}</span>
                </div>


                <div className="flex justify-start flex-col   bg-blue-950 px-12 h-[400px] text-white -translate-y-14">
                    <h1 className="mt-11 text-3xl font-semibold">Contact Address</h1>
                    <div className="flex flex-col mt-5 items-center">
                    <span>A - 503, Kukreja Plaza,</span>
                    <span>Sector 11, CBD Belapur,</span>
                    <span>M : +91 96191 23020</span>
                    <span>E : contact@airpix.in</span>
                    <span>Navi Mumbai, MH 400614.</span>
                    </div>
                   
                </div>


                <div className=" -translate-y-7">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0928006757053!2d73.03821380935042!3d19.015631982102228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ace1cde5e5%3A0x9550eaf039128a37!2sAirpix!5e0!3m2!1sen!2sin!4v1728048630877!5m2!1sen!2sin" width="400" height="350" style={{border:'0px'}}  loading="lazy" ></iframe>
                </div>

            </div>
           
        </div>
        <Footer/>
        </div>
        
    )
}