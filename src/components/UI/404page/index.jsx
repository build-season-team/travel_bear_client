
import ReactDOM from 'react-dom';
import './Errorpage.css'
import ErrorImage from '../../../assets/images/404_Error.png'
import Header from '../Header'


function ErrorPage() {
  
  return (

    
    <div>
      <Header />
       <div className='Error_page'>
            <img src={ErrorImage} alt="Logo" />
            <h2 className='head_1'>Oops...no page found</h2>
            <p className='head_2'>The page you are looking for does'nt exist or <br /> other error occured!</p>
            <button  className='click'>Go home</button>
              </div>
       
    </div>


  );

}




export default ErrorPage