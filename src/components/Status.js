import React from 'react';
//import _ from 'lodash';

class Status extends React.Component {

  state={ 
    upStream : [],
    downStream: [],
    upCount: [],
    downCount: [],
    currentFloor: 0,
    direction: 'UP',
    previousFloor: '',
    liftCounter:0,
    totalTime:0
  };

  timer(up) {
    var time = 0;
    var count=0;

    var next=up;
    // var next = up.sort(function (a,b) {
    //   return a>b;
    // });
    console.log("next is");
    console.log(next);
    console.log("length of next");
    console.log(next.length);
    // for(var i=0;i<next[next.length -1];i++){
    //   count=count+1;
    //   for(var j=0;j<=next.length;j++){
    //     console.log("under if");
    //     if(i==next[j]){
    //       count=count+1;
    //     }
    //   }
    // }
    var c=0;
    var cc=0;
    if(next.length>1){
      c = parseInt(next[next.length-1])-parseInt(next[next.length-2]);
      cc=c;
      if(c<0){
        c=-c;
        this.setState({direction:'DOWN'});
      }
      else{
        this.setState({direction:'UP'});
      }
      //console.log("c if is "+c);
    }
    else{
      c=parseInt(next[next.length-1]);
      console.log("c  else is "+c);
    }
    console.log(next);
    var i=0;
      var x = setInterval(() => {
        if(cc<0){
          count=this.state.liftCounter-1;
        }
        else{
          count=this.state.liftCounter+1;
        }

      time=this.state.totalTime+1;
      this.setState({liftCounter:count,totalTime:time});
      for(var j=0;j<next.length;j++){
        console.log("under if");
        if(count===next[j]){
          console.log("hi");
          time=this.state.totalTime+1;
          this.setState({totalTime:time})
        }
      }
      console.log("total time");
      console.log(count);
      i++;
    }, 1000);
    setTimeout(() => {clearInterval(x)}, (c)*1000);
    
  }

  componentWillReceiveProps(nextProps) {
    console.log("Recieving new props");
    console.log(nextProps);
    var {up, down} = this.findDirection(nextProps);
    this.move(up, down, nextProps);
  }

  move = (up, down, nextProps) => {
    // if(this.state.direction === 'UP') {
    //   this.timer(up);
    // }
    this.timer(up);
    
  };

  findLiftStatus = () =>{
    let lift=null;
    if(this.state.liftCounter!=null){
      lift=(<h4>{this.state.liftCounter}</h4>)
    }
    return(
      <div>{lift}</div>
    )
  };


  findDirection = nextProps => {
    var up=[], down=[];
    if(nextProps.userFloor !== this.state.previousFloor){
      this.setState({ previousFloor: nextProps.userFloor });
      if(nextProps.userFloor - this.state.currentFloor > 0) {
        up = [ ...this.state.upStream, nextProps.userFloor ];
        console.log(up);
        this.setState({ upStream: up });
      } else {
        down = [ ...this.state.downStream, nextProps.userFloor ];
        console.log(down);
        this.setState({ downStream: down });
      }

      return { up, down };

    }
  };

  render() {
    console.log("status render");
    //this.findDirection();
    return (
      <div className="ui segment">
        <h4>Current floor: {this.state.liftCounter}</h4>
        <h4>Direction: {this.state.direction}</h4>
        <h4>Door status: Close</h4>
        <h4>Total Time : {this.state.totalTime}</h4>
        {/*<button onClick={this.findLiftStatus}>Status</button>*/}
      </div>
    );
  }
}

export default Status;