

// import './App.css';


import React, { Component } from 'react'

export default class HigherOrderFunctions extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    template (head,data){
        return(
                // instead of a parent div tag, we can also use React.Fragment
                  <React.Fragment>
                    <h1>{head}</h1>
                    <div className="display-box">
                    <ul>{data} </ul>
                    </div>
                  </React.Fragment>
        )
    }

    renderItems = (data) => {
       
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                    <br></br>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderUserName(){
      let name=this.state.userData.filter((elts)=>
      elts.user_type==="Designer");
      return this.renderItems(name);
    }
     renderj(){
      let jname=this.state.userData.filter((elts)=>
      elts.name[0]==="J");
      return this.renderItems(jname)
     }
     
     renderUserAge(){
      let age=this.state.userData.filter((elts)=>
      elts.age>28 && elts.age<50);
      return this.renderItems(age)
     }
     renderExperince(){
      return this.state.userData.filter((elts)=>
      elts.user_type==="Designer").reduce((sum,elts)=>{
        return sum+=elts.years;
      },0)
     }
  render() {
    return (
      <div>
        {this.template("Display all items",this.renderItems(this.state.userData))}
        {this.template("Display based on user type",this.renderUserName())}
        {this.template("Filter all data starting with J ",this.renderj())}
        {this.template("Filter all data based on age greater than 28 and less than or equal to 50 ",this.renderUserAge())}
        {this.template("Find the total years of the designers", this.renderExperince())}
      </div>
    )
  }
}

