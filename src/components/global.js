import React,{ Component } from 'react';
class Global extends Component {
search(){
  console.log('search');
}


  render()
  {
    return(
      <form>
      <div className="Global">
     <label htmlFor="exampleInputPassword1">BOOK</label>
     <input type="text" class="form-control" id="exampleInputPassword" placeholder="BOOK NAME"></input>
   </div>
   <button type="button" class="btn btn-primary" onclick=search()>Search</button>
     </form>
    )
  }
}
export default Global;
