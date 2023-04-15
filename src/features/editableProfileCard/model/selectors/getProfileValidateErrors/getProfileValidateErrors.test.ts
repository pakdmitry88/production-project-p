import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { validateProfileError } from '../../const/consts';

describe('getProfileValidateErrors.test', () => {
    test('should work with field state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    validateProfileError.SERVER_ERROR,
                    validateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([validateProfileError.SERVER_ERROR,
            validateProfileError.INCORRECT_AGE]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
