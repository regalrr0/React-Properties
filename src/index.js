import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// showcase transferring props between components
// props can only be transferred in one direction, from parent to child
// can ease use with the ... (aka, spread operator)
// note: not most efficient way to pass properties

class Display extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}

// with spread operator
class Label extends React.Component{
    render() {
        return (
            <Display {...this.props}/>
            );
    }
}

class Shirt extends React.Component{
    render() {
        return (
            <div>
                <Label {...this.props}/>
            </div>
            );
    }
}


// OLD WAY
// class Label extends React.Component{
//     render() {
//         return (
//             <Display color={this.props.color}
//                      num={this.props.num}
//                      size={this.props.size}
//             />
//             );
//     }
// }

// class Shirt extends React.Component{
//     render() {
//         return (
//             <div>
//                 <Label color={this.props.color}
//                        num={this.props.num}
//                        size={this.props.size}
//                 />
//             </div>
//             );
//     }
// }

ReactDOM.render(
    <div>
        <Shirt color="steelblue" num="3.14" size="medium" />
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
