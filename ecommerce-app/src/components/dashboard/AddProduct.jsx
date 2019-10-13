import React, { Component } from 'react';
import  Shop  from "../Shop";
import  Menu  from "../Menu";

export default class AddProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            price:'',
            description:'',
            file: '',
            imagePreviewUrl: '',
            proData:[]
       
          }
        this.AddProSubmit = this.AddProSubmit.bind(this);
        this.fieldHandler = this.fieldHandler.bind(this);

    }

    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
       reader.readAsDataURL(file)
    }

    
  AddProSubmit = event =>{
     event.preventDefault();
     //  alert('Title: '+ this.state.title);
      this.state.proData.push({
              title:this.state.title, 
              price:this.state.price,
              imagePreviewUrl:this.state.imagePreviewUrl,
              description:this.state.description
      }); 
 
    this.setState({
      title: '',    
      price: '',    
      description: ''
    });
     
  }
    fieldHandler(e){
        this.setState({
            [e.target.name]:e.target.value    
        });    
    }
 
render() {
    return (
    <div> 

      <Menu />
        <h1>Dashboard</h1>      

         <h2>Add Product</h2>

    <form onSubmit={this.AddProSubmit} enctype="multipart/form-data">
            <label>
            Title
            <br />
            <input type="text" name="title" placeholder="Add Title"  value={this.state.title} onChange={this.fieldHandler}  />
            </label>
            <br />
            <br />
            <label>
            Price
            <br />
            <input type="text" name="price" value="" placeholder="Add Prices"  value={this.state.price} onChange={this.fieldHandler}  />
            </label>
            <br />
            <br />
            <label>
            Description
            <br />
            <textarea name="description" placeholder="Add Description"  value={this.state.description} onChange={this.fieldHandler} ></textarea>
            </label>
            <br />
            <label>
            Image
            <br />
              <input className="fileInput"   type="file" onChange={(e)=>this._handleImageChange(e)} />
            </label>
            <br />
            <br />
            <input type="submit"  value="Submit" />
            
 </form>
 <div className="imgPreview">
 {/* {$imagePreview} */}
        </div>
      
      <Shop  productResult={this.state} />
     

      </div>
    );
  }
}