import { AllKeysRequired, DynamicObject } from '../types/util.types';
import { EErrorTypes } from '../types/error.types';

export const errorMessages: DynamicObject<string, EErrorTypes, AllKeysRequired> = {
  [EErrorTypes.UNKNOWN_ERROR]: 'Sorry, an unknown error occurred',
  [EErrorTypes.REST_ERROR]: 'An error occurred on our servers',
  [EErrorTypes.REST_NOT_FOUND_ERROR]: 'Resource not found',
  [EErrorTypes.REST_AUTHORIZATION_ERROR]: 'You\'re not authorized to perform this action',
  [EErrorTypes.REST_AUTHENTICATION_ERROR]: 'You have to be authenticated to perform this action',
  [EErrorTypes.GITHUB_LOGIN_ERROR]: 'There was an error trying to log you into Github'
};
