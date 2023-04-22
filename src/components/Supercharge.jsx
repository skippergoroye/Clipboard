import React from 'react'
import Blacklist from '../images/icon-blacklist.svg'
import Icon from '../images/icon-text.svg'
import Preview from '../images/icon-preview.svg'

const Supercharge = () => {
  return (
    <>
      <section>
        <div class="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p class="section-content mb-16 text-xl">We've got the tools to boost your productivity</p>


          {/* <!--------  Items container ------> */}
          <div class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">


            {/* <!-------  Item 1 -------> */}
            <div class="flex flex-col items-center space-y-5">
              <img src={Blacklist} alt="" class="mb-6" />
              <h5>Create Blacklists</h5>
              <p class="max-w-md text-grayishBlue">Easily search your snippets by content, category, web address,
                application, and more.</p>
            </div>


            {/* <!-------  Item 2 --------> */}
            <div class="flex flex-col items-center space-y-5">
              <img src={Icon} alt="" class="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p class="max-w-md text-grayishBlue">Remove unwanted formatting from copied text for a consistent look..</p>
            </div>


            {/* <!-------  Item 3 --------> */}
            <div class="flex flex-col items-center space-y-5">
              <img src={Preview} alt="" class="mb-6" />
              <h5>Sneak Preview</h5>
              <p class="max-w-md text-grayishBlue">Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Supercharge