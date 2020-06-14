import React from 'react';

const HocForAbout = (WrappedComponent) => {
    const colors = ['red', 'blue', 'pink', 'black', 'green' , 'yellow']
    const randomColor = colors[Math.floor(Math.random() * 5)]
    const className = randomColor + '-text'

    return (props) => {
        return (
            <div className={className}>
            <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default HocForAbout;
