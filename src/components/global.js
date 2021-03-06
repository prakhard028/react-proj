import React,{ Component } from 'react';
import Gallery from'./Gallery';
export default class Global extends Component {

  constructor(props){
    super(props);
    this.state ={
      text:'',
      items:[]
    };
    this.handleChange = this.handleChange.bind(this);

  }
search(){
  const BASE_URL='https://www.googleapis.com/books/v1/volumes?q=';
fetch(`${BASE_URL}${this.state.text}`,{method:'GET'})
.then(response =>response.json())
.then(json=>{
  let{items }=json;
  this.setState({items})
});
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


   <button type="button" className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
<Gallery items={this.state.items}/>
      </div>
     </form>
    )
  }
}
