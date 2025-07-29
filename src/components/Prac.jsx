import { useState } from "react"
const Prac=()=>{
const [formdata,setformdata]=useState({name:"",email:"",message:""})
const [success,setsuccess]=useState(false)
const handlechange=(e)=>{
setformdata((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const handlesubmit=(e)=>{
e.preventDefault();
setsuccess(true);
setTimeout(()=>setsuccess(false),3000);
setformdata({name:"",email:"",message:""})
}
  return(
<div>
  <form onSubmit={handlesubmit}>
    <input type="text" name="name" value={formdata.name} onChange={handlechange} placeholder="Your name"/>
    <input type="email" name="email" value={formdata.email} onChange={handlechange} placeholder="Your Email"/>
    <textarea name="message" value={formdata.message} onChange={handlechange} placeholder="Your Message" />
    <button type="submit">Submit</button>
    {success&& <p>thanks for submitting</p>}
  </form>
</div>)
}
export default Prac;
