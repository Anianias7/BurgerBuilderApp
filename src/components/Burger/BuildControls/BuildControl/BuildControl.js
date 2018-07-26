import React from 'react'

import classes from './BuildControl.css'

const buildControl = ({
                          label,
                          removed,
                          disable,
                          added
                      }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less}
                onClick={removed}
                disabled={disable}>Less
        </button>
        <button className={classes.More}
                onClick={added}>More
        </button>

    </div>
);

export default buildControl;