import React from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {items: []};
        this.AddItem = this.AddItem.bind(this);
        this.DeleteItem = this.DeleteItem.bind(this);
    }

    AddItem(event)
    {
        if(this.InputElement.value != "")
        {
            var new_Item = {
                text: this.InputElement.value,
                key: Date.now()
            };

            this.setState(function(prevState)
            {
                return {
                    items: prevState.items.concat(new_Item)
                }
            }.bind(this));

            this.InputElement.value = "";
            console.log(this.state.items);
        }

        event.preventDefault();
    }

    DeleteItem(key)
    {
        var filtered = this.state.items.filter(function(item)
        {
            return(item.key != key);
        });

        this.setState({items: filtered});
    }

    render()
    {
        return(
            <div className="main-todo">
                <div className="header">
                    <form onSubmit={this.AddItem}>
                        <input type="text" ref={function(a) {this.InputElement = a}.bind(this)} placeholder="Enter a Task..."/>
                        <input type="submit" value="Add"/>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.DeleteItem}/>
            </div>
        );
    }
}

export default TodoList;