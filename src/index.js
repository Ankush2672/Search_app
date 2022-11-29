import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Ankush extends React.Component
{
     
     state = {
      value : [{name : "ankush", location : "sonipat"},{name : "gourav", location : "haryana"},{name : "ashu", location : "karnal"},{name : "nishu", location : "delhi"},{name : "vagish",location : "gohana"},{name : "dewyanshu",location : "panipat"},{name : "sourav",location : "sonipat"},{name : "mohit",location : "bhiwani"},{name : "anuj",location : "samalkha"}],
      data : "",
      original : [{name : "ankush", location : "sonipat"},{name : "gourav", location : "haryana"},{name : "ashu", location : "karnal"},{name : "nishu", location : "delhi"},{name : "vagish",location : "gohana"},{name : "dewyanshu",location : "panipat"},{name : "sourav",location : "sonipat"},{name : "mohit",location : "bhiwani"},{name : "anuj",location : "samalkha"}]
     }

     handle = (event) =>
     {
       this.state.data = event.target.value;
       this.state.value = this.state.original;
       let a = this.state.data;
  
     
      let ab = this.state.value.filter(function(add){
        if(add.name.includes(a))
        {
          return add;
        }

      });
      this.setState({value : ab});
     }

      render()
      {
        return(<>
        <div id="main">
        <input type = "text" id="inp" placeholder='enter name' onChange={this.handle}></input>
        <div id="area">
          <div className='item1'><span className='head'>Name</span><span className='head'>Location</span></div>
          {
            this.state.value.map(function(add,index){
             
                 return  <div className='item' key = {index}><span className='text'>{add.name}</span><span className='text'>{add.location}</span></div>
               
            })
          }
        </div>
        </div> 
        </>
        )
      }

}
root.render(
  <Ankush />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
