import {
  AlertActions,
  SHOW_ALERT,
  HIDE_ALERT,
  AlertState,
  AlertSeverity
} from '../../types/AlertTypes'

export default (
  state: AlertState = initialAlertState,
  action: AlertActions
): AlertState => {
  switch (action.type) {
    case SHOW_ALERT: {
      const {
        payload: { severity, message }
      } = action
      return { open: true, severity, message }
    }
    case HIDE_ALERT: {
      return { ...state, open: false }
    }
    default:
      return state
  }
}

export const initialAlertState = {
  open: false,
  message: '',
  severity: AlertSeverity.info
}
