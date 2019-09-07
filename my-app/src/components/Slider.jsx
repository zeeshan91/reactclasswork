import React, { Component } from 'react';

export default class Slier extends Component {
     render() {
         
          const homeSlider = {
                homeSldierbg:{
                    background: '#3264f5',
                    background: '-moz-linear-gradient(left, #3264f5 2%, #7202bb 82%)',
                    background: '-webkit-linear-gradient(left, #3264f5 2%,#7202bb 82%)',
                    background: 'linear-gradient(to right, #3264f5 2%,#7202bb 82%)',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center', 
                    color:'#fff',

                },    
                homeSlideh1:{
                    fontSize: '50px',
                    fontWeight: '800',
                    clear:'both',
                    color:'#fff',     

                 },    
                 homeSlideh5:{
                     fontSize: '24px',
                     clear:'both',     
                     color:'#fff',
                  }   
    
          };
   
   
     return (
 <section id="home" className="homeslider" style={homeSlider.homeSldierbgs}>
      <div className="container">
          <div className="col-md-6">
          <h5>Lorem Ipsum is simply dummy text</h5>    
          <h1 style={homeSlider.homeSlideh1}>Website Design</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </p>
          </div>
          <div className="">


          </div>

      </div>



</section> 

    );
  }
}
