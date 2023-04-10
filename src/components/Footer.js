import React from 'react'
export default function Footer() {
  return (
    <div>
     <footer className="text-center text-lg-start" style={{backgroundcolor: "#db6930"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 " style={{backgroundcolor: "#54456b"}}>
        <img src="./facebook.png" alt=".."  style={{ width: '25px', height: '25px' }}/>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundcolor: "#54456b"}}>
        <img src="./youtube.png" alt=".."  style={{ width: '25px', height: '25px' }}/>   
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundcolor: "#54456b"}}>
        <img src="./instagram.png" alt=".."  style={{ width: '25px', height: '25px' }}/>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundcolor: "#54456b"}}>
        <img src="./twitter.png" alt=".."  style={{ width: '25px', height: '25px' }}/>
      </button>
    </div>


    <div className="text-center text-blue p-2"  style={{backgroundcolor: '#ee836c'}}>
            © 2023 Copyright:
      <a className="text-blue" href="./">Passo.com</a>
    </div>

  </footer>
  
</div>

 
  )
}
