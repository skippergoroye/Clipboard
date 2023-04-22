import React from 'react'
import Google from '../images/logo-google.png'
import Ibm from '../images/logo-ibm.png'
import Microsoft from '../images/logo-microsoft.png'
import Hp from '../images/logo-hp.png'
import Vector from '../images/logo-vector-graphics.png'

const References = () => {
  return (
    <>
    <section id="references">
      <div class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src={Google} alt="" />
        <img src={Ibm} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Hp} alt="" />
        <img src={Vector} alt="" />
      </div>
    </section>
    </>
  )
}

export default References