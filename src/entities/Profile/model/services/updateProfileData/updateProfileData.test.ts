import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsynkThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { validateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
    username: 'admin',
    age: 34,
    country: Country.Tajikistan,
    lastname: 'Pak',
    first: 'Dima',
    city: 'Busan',
    currency: Currency.RUB,
    id: '1',
};
// @ts-ignore
describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            validateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
