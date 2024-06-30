

import Navbar from "../components/Navbar";
import Sport_Collection_Woman from "../components/Sport_Collection_Woman";
import Sport_Woman_Collection from "../components/Sport_Woman_Collection";




export default function SportWoman() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
    
    <Sport_Woman_Collection />
    <Sport_Collection_Woman />
  
    </div>
   
    </main>
    <Navbar />
    </section>

  );
}