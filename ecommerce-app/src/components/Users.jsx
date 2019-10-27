import React, { Component } from "react";
import SignUp from "./SignUp";
import * as firebase from "firebase";

export default class Registered extends Component {
  //constructor(props) {
   // super(props);
    state = {
      data: [],
      testData:"hello"
    };
 // }

  componentDidMount() {
    // fetching data in firebase
    firebase
      .database()
      .ref("users")
      .on("value", snapshot => {
        snapshot.forEach(res => {
          let dataShow = [];
          this.state.data.push({
            id: res.key,
            ...res.val()
          });
          this.setState({ data: dataShow });
  //         console.log(this.state);
        });
      });
  }

  // handleParentData = (formModel) => {
  //     this.setState({...formModel});
  // }sta
  render() {
    // alert('sdfsdfsdf');
    console.log("state data 1" + this.state);
    return (
      <div>
        {this.state.data.map(res => (
          <div>
            <p>{res.name}</p>
            <p>{res.email}</p>
            <p> {res.password}</p>
          </div>
        ))}

        {/* <SignUp  handleData={this.handleParentData}/> */}
        <h1>Registered Users</h1>

        <table width="100%" style={{ textAlign: "center" }}>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{this.state.name}</td>
            <td>{this.state.email}</td>
            <td>{this.state.password}</td>
          </tr>
        </table>
      </div>
    );
  }
}
