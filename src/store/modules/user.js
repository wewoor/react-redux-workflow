// 按模块的action, reducer整合体
export const SET_USER = 'SET_USER'
// Action
export function setUser(user) {
    return {
        type: SET_USER,
        user: user
    }
}

// Reducer
export function user( state = {}, action) {
      switch (action.type) {
        case SET_USER:
          return action.user;
        default:
          return state;
      }
}