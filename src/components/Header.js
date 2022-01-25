import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {arraySize: 10, speed: 2};
      }
    
    render() {
      let BubbleSort = this.props.BubbleSort;
      let changeArray = this.props.changeArray;
      let changeSpeed = this.props.changeSpeed;
      let QuickSort = this.props.QuickSort;
      return (
        <ul>
            <li><button className="button" onClick={() => BubbleSort()}>Bubble Sort (10 ms Delay)</button></li>
            <li><button className="button" onClick={() => console.log('click')}>Merge Sort (Not Implemented)</button></li>
            <li><button className="button" onClick={() => QuickSort()}>Quick Sort (1000 ms Delay)</button></li>
            <input type="range" min="5" max="200" defaultValue={this.state.arraySize} onChange={(e) => changeArray(e.target.value)} className="slider2" id="myRange" />
            <span>Array Size: {this.props.array.length}</span>
            <input type="range" min="1" max="5" defaultValue={this.state.speed} onChange={(e) => changeSpeed(e.target.value)} className="slider2" id="speed" />
            <span>Algorithm Speed: {this.props.speed}x</span>
        </ul>
      )
    }
  }

  export default Header;