import React from 'react';
import FlipMove from 'react-flip-move';

class TodoItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item)
    {
        return(
            <li onClick={function() {this.delete_task(item.key)}.bind(this)} key={item.key}>{item.text}</li>
        );
    }

    delete_task(key)
    {
        this.props.delete(key);
    }

    render()
    {
        var entries = this.props.entries;
        var Items = entries.map(this.createTasks);

        return(
            <ul className="main-list">
                <FlipMove duration={250} easing="ease-out">{Items}</FlipMove>
            </ul>
        );
    }
}

export default TodoItem;