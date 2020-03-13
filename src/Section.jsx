import React, { Component } from 'react';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: '',
            date:"**/**",
            name:"FOULEN",
         }
    }
    changeNumber=(e)=> {
        const regex = /[0-9]/g
        if((this.state.number.length<=20) &&(regex.test(e.target.value)))
        {
    
        this.setState({
          number: e.target.value
        })}
      }
    
      changeDate=(e)=> {
        if(e.target.value.substring(0,2)<=12){
      
        this.setState({
          date: e.target.value.substring(0,2)+'/'+e.target.value.substring(2,4)
        })}
        else { this.setState({date: '0'+ e.target.value.substring(0,1)+'/'+e.target.value.substring(1,3)})
          }
      }

      changeNom=(e)=> {

        
       
            this.setState({
        name: e.target.value.toUpperCase()
        })
      }

    render() { 
        return ( <div className="bigDiv">
                    <div className="card"> 
                        <span className='id' >{this.state.number.padEnd(20,"*")}</span>
                        <span className='date' >{this.state.date.padEnd(4,"*")}</span>
                        <span className='name' >{(this.state.name.match(/^[A-Za-z\D]+$/g)||this.state.name=="")?this.state.name.padEnd(16,"*"):alert("please add a valid name ") }</span>
                    
                    </div>
                    <div className="input">
                    <input maxLength='20' placeholder='number' onChange={this.changeNumber}></input>
                    <input placeholder='date' onChange={this.changeDate}></input>
                    <input placeholder='name' onChange= {this.changeNom}></input>

                    </div>
                    


        </div> );
    }
}
 
export default Index;