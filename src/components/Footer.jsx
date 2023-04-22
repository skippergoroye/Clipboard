import React from 'react'
import Logo from '../images/logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-twitter.svg'
import Twitter from '../images/icon-instagram.svg'


const Footer = () => {
  return (
    <> 
      <footer class="bg-gray-50">
      <div class="section-container">
        <div class="flex flex-col items-center justify-between md:flex-row">
          {/* <!-------  Image ---------> */}
          <img src={Logo} alt="" class="scale-50" />
  

         {/* <!------- Container for Menus & Social -------> */}
        <div class="flex flex-col justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
          {/* <!---------  Menus -------> */}
          <div class="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
            {/* <!------  Menu 1  -----> */}
            <div class="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" class="hover:text-strongCyan">FAQS</a>
              </div>
              <div>
                <a href="#" class="hover:text-strongCyan">Contact Us</a>
              </div>
            </div>


             {/* <!------  Menu 2  -----> */}
             <div class="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" class="hover:text-strongCyan">Privacy Policy</a>
              </div>
              <div>
                <a href="#" class="hover:text-strongCyan">Press Kit</a>
              </div>
            </div>


            {/* <!------  Menu 3 -----> */}
            <div class="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" class="hover:text-strongCyan">Install Guide</a>
              </div>
            </div>
          </div>
        </div>
       
        {/* <!-- Social Icons --> */}
        <div class="flex justify-between w-32 py-1">
          <a href="#"><img src={Facebook} alt="" class="duration-200 ficon" /></a>
          <a href="#"><img src={Instagram} alt="" class="duration-200 ficon" /></a>
          <a href="#"><img src={Twitter} alt="" class="duration-200 ficon" /></a>
        </div>
      
          <div>
        </div>
      </div>
      </div>
    </footer>
    </>
  )
}

export default Footer