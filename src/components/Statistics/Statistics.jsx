function Statistics ({ good, neutral, bad, total, positiveFeedbacks }) {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedbacks}%</p>
        </div>
    )
}

export { Statistics };