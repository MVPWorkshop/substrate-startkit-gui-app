import { DynamicObject } from '../types/util.types';
import { EErrorTypes } from '../types/error.types';

export const errorMessages: DynamicObject<string, EErrorTypes> = {
  [EErrorTypes.UNKNOWN_ERROR]: 'Sorry, an unknown error occurred'
};
