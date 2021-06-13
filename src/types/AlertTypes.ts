export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export enum AlertSeverity {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success'
}

export type ShowAlert = {
  type: typeof SHOW_ALERT
  payload: {
    severity: AlertSeverity
    message: string
  }
}

export type HideAlert = {
  type: typeof HIDE_ALERT
}

export type AlertActions = ShowAlert | HideAlert

export type AlertState = {
  open: boolean
  message: string
  severity: AlertSeverity
}
