import React,{ Component } from 'react';
export default class Global extends Component {

  constructor(props){
    super(props);
    this.state ={
      text:''
    };
  }
search(){
  console.log('search');
}
handleChange(event) {
 var text = event.target.value;
 console.log(text);
 this.setState({text: event.target.value});
  }


  render()
  {
    return(
      <form>
      <div className="Global">
     <label htmlFor="exampleInputPassword1">BOOK</label>
     <input type="text" className="form-control" id="exampleInputPassword" placeholder="BOOK NAME" text={this.state.text}
      onChange={this.handleChange}></input>


   <button type="button" className="btn btn-primary" onClick={this.search}>Search</button>
      </div>
     </form>
    )
  }
}
