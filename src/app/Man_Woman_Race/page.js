

import Mx_Man_Woman from "../components/Mx_Man_Woman";
import Mx_Collection_Man_Woman from "../components/Mx_Collection_Man_Woman";
import Navbar from "../components/Navbar";






export default function SportWear() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
  
    <Mx_Man_Woman />
    <Mx_Collection_Man_Woman/>
    



     
    </div>
 
   
    
    

    
 
 

  
   
    </main>
    <Navbar />
    </section>

  );
}