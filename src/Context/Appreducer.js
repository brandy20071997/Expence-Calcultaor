export default (state, action) => {
   

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                Transcation: state.Transcation.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
            return {
                ...state,
                Transcation:[action.payload,...state.Transcation]
            }
        default: 
            return state
    }
}
