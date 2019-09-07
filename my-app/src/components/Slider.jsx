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
                    fontSize: '75px',
                    fontWeight: '800',
                    clear:'both',
                    color:'#fff',
                    lineHeight:1.5

                 },    
                 homeSlideh5:{
                     fontSize: '24px',
                     clear:'both',     
                     color:'#fff',
                }, 
                 homeSlidepara:{
                    fontSize: '16px',
                    clear:'both',     
                    color:'#fff',
               },
               homesliderbtn:{
                    marginTop: '20px',
                    float:'left',
                    fontWeight:'700',
                    fontSize: '18px',
                    padding: '14px 60px',
               }     
    
          };
   
   
     return (
 <section id="home" className="homeslider" style={homeSlider.homeSldierbg}>
      <div className="container">
          <div className="col-md-8">
          <h5>Lorem Ipsum is simply dummy text</h5>    
          <h1 style={homeSlider.homeSlideh1}>Website Design</h1>
          <p style={homeSlider.homeSlidepara}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </p>
          <a style={homeSlider.homesliderbtn} href="javascript:void(0);" class="btn btn-large btn-white btn-rounded">Read More</a>
          </div>
          <div className="col-md-4">


          </div>

      </div>



</section> 

    );
  }
}
