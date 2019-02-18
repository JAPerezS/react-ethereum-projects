import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click Me!';
    const style = { backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter text :D ';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>      
            <input id="name" type="text" />
            <button style={style}>
            {buttonText}
            </button>    
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);