import {Component} from 'react';
import Balance from './../Balance';

class App extends Component {
   constructor() {
      super();
      this.state = {
         balance: 0,
      }
   }
   
   onIncrease = () => {
      this.setState({
         balance: this.state.balance + 1
      })
   }

   onВecrease = () => {
      this.setState({
         balance: this.state.balance - 1
      })
   }


   render () {
      return (
         <div>
            <Balance balance={this.state.balance}/>
            <button onClick={this.onIncrease}>Додати 1</button>
            <button onClick={this.onВecrease}>Відняти 1</button>
         </div>
      )
   }
}

export default App;