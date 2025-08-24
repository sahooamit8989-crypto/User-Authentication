import React from "react";
import { Link } from 'react-router-dom';



const Dashboard = () => {
  return (
           <>

           <h1>Welcome</h1>
           <p style={{ maxWidth: "500px", margin: "20px auto", fontSize: "1.1rem", color: "#444" }}>
            We’re so glad to have you back! ✨  
            Remember, this space is all about **you** — explore freely, stay creative, 
            and make the most of your journey with us.  
            Let today be another step toward something amazing 🚀
            </p>

           <button ><p><Link to="/login">Logout</Link></p></button>
           </>
            
           
  );

}
export default Dashboard;


