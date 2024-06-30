

import Navbar from "../components/Navbar";
import Sport_Wear from "../components/Sport_Wear";
import Sport_Menu from "../components/Sport_Menu";





export default function SportWear() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
  
    <Sport_Wear/>
    <Sport_Menu/>
 
   
 

     
    </div>

    
 
 

  
   
    </main>
    <Navbar />
    </section>

  );
}