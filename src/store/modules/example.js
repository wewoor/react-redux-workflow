// 按模块的action, reducer整合体
import Api from '../../api'
const GET_EXAMPLE = 'GET_EXAMPLE'

// Action
export function getExample(params) {
    return dispatch => {
        Api.getExample().then(data => {
            return dispatch({
                type: GET_EXAMPLE,
                data: data
            })
        })
    }
}

// Reducer
export function example(state = {}, action) {
    switch (action.type) {
        case GET_EXAMPLE:
          return action.data;
        default:
          return state;
    }
}