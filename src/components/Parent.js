import React from 'react';
import '../styles/App.css';

import Header from './Header';
import Array from './Array';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.changeArray.bind(this);
        this.BubbleSort.bind(this);
        this.state = {
            array: [],
            speed: 2,
            isActive: null,
            isNext: null,
            canSort: true
            };
      }

    generateArray(size) {
        var array = []
        while (array.length < size) {
            var randomInt = Math.floor(Math.random() * size);
            if(array.indexOf(randomInt) === -1) array.push(randomInt);
        }
        return array;
    }

    changeArray(size) {
        this.setState({
            array: this.generateArray(size)
        })
    }

    changeSpeed(newSpeed) {
        this.setState({
            speed: newSpeed
        })
    }

    componentDidMount() {
        this.setState({
            array: this.generateArray(10)
        })
    }

    async Delay(Time) {
        return new Promise(r => setTimeout(r, (Time / this.state.speed)));
    }

    async BubbleSort() {
        // check if sort is currently running
        if (this.state.canSort) {
            // set state variable to false so other sorting instances won't overlap
            this.setState({
                canSort: false
            })

            // Define variables for bubble sort
            var arr = this.state.array;
            var n = arr.length;

            var i, j;
            // loops for bubble sort
            for (i = 0; i < n-1; i++)
            {
            for (j = 0; j < n-i-1; j++)
            {
                // Delay to help visualise sorting process
                await this.Delay(10);
                if (arr[j] > arr[j+1])
                {
                this.swap(arr,j,j+1);
                
                }
                //this.setState({array: arr,isActive: j,isNext: j+1})
            }
            }
            // After array is fully sorted allow another sorting method to be run
            console.log(arr);
            this.setState({
                canSort: true,
                isActive: null,
                isNext: null
            })
    }

    }

    async QuickSort() {
        // check if sort is currently running
        if (this.state.canSort) {
            // set state variable to false so other sorting instances won't overlap
            this.setState({
                canSort: false
            })
            let quickSortArray = this.quickSortFunction(this.state.array, 0, this.state.array.length - 1);
            // Code for QuickSort goes here
            // ...
            quickSortArray.then(value => {console.log(value)});
            // After array is fully sorted allow another sorting method to be run
            this.setState({
                canSort: true,
                isActive: null,
                isNext: null
            })
    }

    }

    async quickSortFunction(items, left, right) {
        var index;
        await this.Delay(1000);
        if (items.length > 1) {
            index = this.partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSortFunction(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSortFunction(items, index, right);
            }
        }
        return items;
    }

    partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    swap(arr, xp, yp) {
            var temp = arr[xp];
            arr[xp] = arr[yp];
            arr[yp] = temp;
            this.setState({
                array: arr,
                isActive: xp,
                isNext: yp
            })
        }
    
    render() {
        let changeArray = this.changeArray;
        let changeSpeed = this.changeSpeed;
        let BubbleSort = this.BubbleSort;
        let QuickSort = this.QuickSort;
      return (
        <div className="App-header">
        <Header changeArray={changeArray.bind(this)} changeSpeed={changeSpeed.bind(this)} QuickSort={QuickSort.bind(this)} BubbleSort={BubbleSort.bind(this)} array={this.state.array} speed={this.state.speed}/>
        <Array isNext={this.state.isNext} isActive={this.state.isActive} array={this.state.array}/>
        </div>
      )
    }
  }

  export default Parent;