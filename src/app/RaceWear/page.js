import Navbar from "../components/Navbar";
import Race_Menu from "../components/Race_Menu";
import Race_Wear from "../components/Race_Wear";






export default function SportWear() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
    <Race_Wear/>
    <Race_Menu />

   
   
 

     
    </div>

    
 
 

  
   
    </main>
    <Navbar />
    </section>

  );
}