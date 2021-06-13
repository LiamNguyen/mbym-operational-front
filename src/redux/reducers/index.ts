import { combineReducers } from 'redux'

import { AppStateTypes } from '../../types/AppTypes'
// import { IErrorObject } from '../../constants/ErrorObject'
import alert from './alert'

export const handlePutError = (
  // { error }: { error: IErrorObject },
  state: AppStateTypes
): AppStateTypes => ({
  ...state,
  // error,
  // loading: false
})

const createRootReducer = () =>
  combineReducers({ alert })

export default createRootReducer
