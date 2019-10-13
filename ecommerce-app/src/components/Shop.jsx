import React, { Component } from 'react';
import AddProduct from './dashboard/AddProduct';
import Checkout from './Checkout'


class Shop extends Component {
    constructor(props){
        super(props)
        this.state = ({ 
          totalPrice: 0
        })
        this.finalPrice = this.finalPrice.bind(this);
      }
    
    finalPrice(price){
    // alert(price+ 'final price')
     this.setState({ totalPrice: this.state.totalPrice + price  });
    }
       
    render() {
      //   console.log(this.props.productResult.proData);
     
      // if (this.props.productResult.proData === null ) {
        // return(

        // document.write('No Product Added')
   
        // );   
   
      // } else {
  
    

      let {imagePreviewUrl} = this.state;
    /*  let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
      */

    const products = this.props.productResult.proData.map(( proitem , index ) => {
      return <ProItemChild  title ={proitem.title} price={proitem.price} key ={index} 
      finalPrice ={this.finalPrice}  image={this.props.productResult.imagePreviewUrl} 
        description={proitem.description}  active={proitem.active}       />

      /* <div key={index}>
         {proitem.title} <br />
        {proitem.price} <br />
          {proitem.description}
         {this.finalPrice}
      </div>
*/

     });

   return (
      <div> 

          <div className="product-area">
          <h2>Shop Page</h2>
            {products}          
          
          <h1 style={ {clear:'both'} }>Total: {this.state.totalPrice}</h1>
        
          </div>
     
{/*      <h3>Title: {this.props.productResult.title}</h3>
          <h3>Price: {this.props.productResult.price}</h3>
          <h3>Price: {this.props.productResult.description}</h3> 

          <Checkout cartItem={this.props.productResult.price} />
*/}
      </div>
    );
    
  } 
  // } 



}

class ProItemChild extends Component {
  constructor(props){
    super(props)
    this.state = {
      active:false,
      totalValuePrice:0
    }
    this.totalClick = this.totalClick.bind(this);
  } 

  totalClick(){ 
  //  alert(this.props.price);
    var priceItem = this.props.price;
    var active0 = ! this.state.active;
    this.setState({ active:active0   });
    //this.props.finalPrice(active0 ? this.props.price : - this.props.price)
    this.props.finalPrice(active0 ? priceItem : - priceItem)

  }

render() {

const divItemStyle = {
  divItemStyleItem : {
    width: '25%',
    float:'left'
  },
  divItemImage :{
    maxWidth: '100%',
  }
}

    return (
      <div> 
      <div style={divItemStyle.divItemStyleItem} className=""> 
      {/* <button onClick={this.totalClick}> Click Button</button>    */}
      <img  style={divItemStyle.divItemImage}  src={this.props.image} alt={this.props.title } />
      <h4>{this.props.title } </h4>
      <p>{this.props.price } </p>
      <p>{this.props.description } </p>
      <button onClick ={this.totalClick} > Add to Cart  </button>
      </div>
      </div>
    );
  }
}

export default Shop;