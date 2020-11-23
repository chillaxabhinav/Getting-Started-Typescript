import React,{ useRef } from 'react';

type NewTodoProp = {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProp> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;  // This ! mark tells that this won't be null that is our HTML Element
        props.onAddTodo(enteredText);
    }

    return (
        <>
            <form onSubmit={todoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text"><h4>Todo Text</h4></label>
                    <input type="text" id="todo-text" ref={textInputRef}/>
                </div>
                <button type="submit">Add todo</button>
            </form>
        </>
    )
}

export default NewTodo;