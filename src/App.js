import logo from './logo.svg';
import './App.css';
//import CommentDetail from './CommentDetail'
//import ApprovalCard from './ApprovalCard'
//import faker from 'faker'
import React from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component {
  state={
    lat:null,
    error:''
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({error:err.message})
    )
  }
  render(){
    if (this.state.error && !this.state.lat){
      return <div>Error : {this.state.error} 
      </div>
      }
      if(!this.state.error && this.state.lat){
      return <SeasonDisplay  lat={this.state.lat}/>
      }
          
  return(
  <Spinner message='Enable GeoLocation'/>) 
  
  };

  
   // <div className='ui container comments'>
   //   <ApprovalCard>
     // <CommentDetail author='Sam' time='6:00PM' text='Oke'image={faker.image.avatar()}/>
     // </ApprovalCard>
     // <CommentDetail author='June' time='9:00PM' text='Poke' image={faker.image.avatar()}/>
     // <CommentDetail author='Dam' time='10:00PM' text='DOke' image={faker.image.avatar()}/>
    //</div>
    

  
}

export default App;
