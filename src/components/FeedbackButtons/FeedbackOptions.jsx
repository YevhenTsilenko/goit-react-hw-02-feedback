import { Fragment } from 'react';
import shortid from 'short-id';
function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <Fragment>
            {options.map((btnName) => (
                <button key={shortid.generate()} name={btnName} onClick={onLeaveFeedback}>{btnName}</button>
            ))}
        </Fragment>
        
        
    )
}

export { FeedbackOptions };