import { AlertState } from './AlertTypes'

export type AppState = {
  alert: AlertState
}

export type Error = {
  errorCode: number
  errorMessage: string
}

export type AppStateTypes = AlertState
