import Page_7 from "../components/Page_7";
import Navbar from "../components/Navbar";

export default function kid() {
  return (
   <section className="w-full">

      <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
        <div>
          <Page_7/>
        </div>
      </main>
        <Navbar />
    </section>

  );
}