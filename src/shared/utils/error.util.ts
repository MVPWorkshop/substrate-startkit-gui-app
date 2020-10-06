import { EErrorTypes, RestErrorType } from '../types/error.types';
import { errorMessages } from '../constants/error.constants';
import { IApiErrorResponse } from '../../services/rest/restService.types';

export class BaseError extends Error {
  public type: EErrorTypes;

  constructor(errorType: EErrorTypes, message?: string) {
    super(message);

    this.type = errorType;
    this.message = message || errorMessages[errorType];
  }
}

export class RestError extends BaseError {
  public httpCode: string;
  public httpMessage: string;
  public errorsList: any[] | undefined;

  constructor(restErrorType: RestErrorType, errorResponse: IApiErrorResponse, customMessage?: string) {
    super(
      restErrorType,
      customMessage
    );

    this.httpCode = errorResponse.error.code.toString();
    this.httpMessage = errorResponse.error.message;
    this.errorsList = errorResponse.details;
  }
}

export class NotFoundError extends RestError {
  constructor(error: IApiErrorResponse, message?: string) {
    super(EErrorTypes.REST_NOT_FOUND_ERROR, error, message);
  }
}

export class AuthorizationError extends RestError {
  constructor(error: IApiErrorResponse, message?: string) {
    super(EErrorTypes.REST_AUTHORIZATION_ERROR, error, message);
  }
}

export class AuthenticationError extends RestError {
  constructor(error: IApiErrorResponse, message?: string) {
    super(EErrorTypes.REST_AUTHENTICATION_ERROR, error, message);
  }
}

export class UnknownError extends BaseError {
  constructor() {
    super(EErrorTypes.UNKNOWN_ERROR);
  }
}

export class GithubLoginError extends BaseError {
  constructor() {
    super(EErrorTypes.GITHUB_LOGIN_ERROR);
  }
}
