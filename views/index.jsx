import React from 'react';
class MyComponent extends React.Component {
}
MyComponent.propTypes = {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
};
export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}
class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo title="Learn React">15:00</Todo>
                    </tbody>
                </table>
            </div>
        );
    }
}
class Todo extends React.Component {
    constructor(props) {
        super(props);
     this.state={checked:false};
    }
    handleChange(e){
        this.setState({checked:e.target.checked});
    }
    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                </td>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
}
}



//#test 2

/*import React from 'react';
 export default class TodoBox extends React.Component {
 render() {
 return (
 <div className="todoBox">
 <h1>Todos</h1>
 <TodoList />
 <TodoForm />
 </div>
 );
 }
 }
 class TodoList extends React.Component {
 render() {
 return (
 <div className="todoList">
 I am a TodoList.
 </div>
 );
 }
 }
 class TodoForm extends React.Component {
 render() {
 return (
 <div className="todoForm">
 I am a TodoForm.
 </div>
 );
 }
 }*/

//#test1
/*import React from 'react';

 export default class TodoBox extends React.Component{
 render() {
 return <div className="todoBox">
 Hello, world!
 </div>
 }
 }*/
