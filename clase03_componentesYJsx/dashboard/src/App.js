import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    
   <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div className="container-fluid">
        {/* <!-- Comment --> */}
        </div>        
      </div>
      <Footer />
      
    </div>


   </div>
  );
}

export default App;
