
const reducer = (state, action) => {
    const { good, neutral, bad } = state
    if (action.type === 'good') return { ...state, good: good + action.payload }
    if (action.type === 'neutral') return { ...state, neutral: neutral + action.payload }
    if (action.type === 'bad') return { ...state, bad: bad + action.payload }
}

export default reducer