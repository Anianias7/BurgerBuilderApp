import React from 'react'

import classes from './Button.css'

const button = ({
                    btnType,
                    clicked,
                    children
                }) => (
    <button
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clicked}>
        {children}
    </button>

);

export default button;