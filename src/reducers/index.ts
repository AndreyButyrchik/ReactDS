const initialState = {
    rating: JSON.parse((localStorage.getItem('rating') || null) as any) || {},
};

const todos = (state = initialState as any, action: any) => {
    switch (action.type) {
      case 'LIKE_GIRL':
        return {
            ...state,
            rating: {
                ...state.rating,
                [action.id]: (state.rating[action.id] || 0) + 1,
            }
        }
      default:
        return state;
    }
  }
  
  export default todos