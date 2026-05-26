import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function MainLayout({ children }) {

  return (
    <div className="bg-[#111827] min-h-screen">

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;