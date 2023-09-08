import './App.css';
import Form from './Form';
import Header from './Header';



function App() {
  return (
    
    <div className='App'>
      
       <section className="bg-gray-50">
        
       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
       <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> 
       <Header></Header>
       <Form></Form> 
       </div>

       
       
       </div>
       </div>
       </section>

    </div>
      
       
  );
}

export default App;
