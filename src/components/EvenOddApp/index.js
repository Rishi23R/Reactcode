// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component{

    state={count:0,}

     onIncrement = () =>
            this.setState((prevState)=>({count:((Math.random()*10)+prevState.count)})
       

      render() {
          
         const {count}=this.state
       
        return (
            
            let evenodd
            if (count%2===0){
                evenodd="even"
            }else{
                evenodd="odd"
            }
            <div className="home-bg">
                <div className="evenodd-card">
                        <h1>Count {count}</h1>
                        <h1>Count is {evenodd} </h1>
                        <button className="button" type="button" onClick={this.onIncrement}>Increment</button>
                        <p>*Increase by random number between 0 to 100</p>
                </div>
            </div>
        )
    }

} 
export default EvenOddApp