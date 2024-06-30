import Kid from "../components/Kid";
import Navbar from "../components/Navbar";

export default function kid() {
  return (
   <section className="w-full">

      <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
        <div>
          <Kid />
        </div>
      </main>
        <Navbar />
    </section>

  );
}