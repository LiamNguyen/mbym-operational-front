import { fork, all, put } from 'redux-saga/effects'

import { SHOW_ALERT, AlertSeverity } from '../../types/AlertTypes'
import { IErrorObject } from '../../constants/ErrorObject'

export function* handleUnexpectedError(error: IErrorObject, stateType: string) {
  yield put({
    type: stateType,
    payload: {
      error
    }
  })
  yield put({
    type: SHOW_ALERT,
    payload: {
      severity: AlertSeverity.error,
      message: error.errorMessage
    }
  })
}

export default function* rootSaga() {
  yield all([])
}
