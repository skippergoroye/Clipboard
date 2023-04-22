import React from 'react'

const Button = () => {
  return (
    <> 
      <section id="button">
      <div class="section-container my-20">
        <h3>Clipboard for iOS and MacOs</h3>
        <p class="section-content mb-10 text-xl">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>

        {/* <!--------- Button container -------> */}
          <div class="button-container">
            <a href="" class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">Download on IOS</a>
            <a href="" class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">Download for Mac</a>
          </div>
      </div>
    </section>
    </>
  )
}

export default Button