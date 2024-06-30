

import Navbar from "../components/Navbar";
import Sport_Coach_Collection from "../components/Sport_Coach_Collection";
import Sport_Collection_Coach from "../components/Sport_Collection_Coach";




export default function Sport_Coach() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
  
    <Sport_Coach_Collection/>
    <Sport_Collection_Coach/>
    </div>
   
    </main>
    <Navbar />
    </section>

  );
}