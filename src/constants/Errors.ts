import { IErrorObject } from './ErrorObject'

export const UnexpectedError: IErrorObject = {
  errorCode: 'unexpected-error',
  errorMessage:
    'Đã xảy ra lỗi hệ thống. Xin vui lòng thử lại sau giây lát hoặc liên lạc trực tiếp với Mintchie Shop qua Instagram hoặc Facebook'
}

export const UserBlockedError: IErrorObject = {
  errorCode: 'user-blocked',
  errorMessage:
    'Tài khoản của bạn hiện đang bị khoá bởi Mintchie Shop. Nếu là một sự nhầm lẫn, xin bạn thông cảm và vui lòng liên lạc trực tiếp với Mintchie Shop qua Instagram hoặc Facebook'
}

export const BackendErrors = [UnexpectedError, UserBlockedError]
