

import Navbar from "../components/Navbar";
import Sport_Man_Collection from "../components/Sport_Man_Collection";
import Sport_Collection_Man from "../components/Sport_Collection_Man";




export default function Man_Sport() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>
  
    <Sport_Man_Collection />
    <Sport_Collection_Man />

    </div>
   
    </main>
    <Navbar />
    </section>

  );
}