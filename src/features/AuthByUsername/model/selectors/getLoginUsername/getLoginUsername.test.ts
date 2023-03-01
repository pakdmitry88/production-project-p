import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return username string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'abc',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('abc');
    });

    test('should work with empty quotes', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
