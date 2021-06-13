export interface IErrorObject {
  errorCode: string
  errorMessage: string
}

class ErrorObject implements IErrorObject {
  errorCode: string
  errorMessage: string

  constructor(error: IErrorObject) {
    const { errorCode, errorMessage } = error

    this.errorCode = errorCode
    this.errorMessage = errorMessage
  }
}

export default ErrorObject
