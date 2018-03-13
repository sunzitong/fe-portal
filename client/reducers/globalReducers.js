import * as ActionTypes from '../actions/global'

/* eslint-disable */
export const title = (state = '', { type, title }) => {
  if (type === ActionTypes.SET_TITLE) {
    return title
  }
  return state
}
