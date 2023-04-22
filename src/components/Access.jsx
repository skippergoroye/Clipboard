import React from 'react'
import Devices from '../images/image-devices.png'

const Access = () => {
  return (
    <>
     <section id="access">
      <div class="section-container my-20">
        <h3>Acess Clipboard Anywhere</h3>
        <p class="section-content mb-24 text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <img src={Devices} alt="" class="mx-auto" />
      </div>
    </section>
    </>
  )
}

export default Access