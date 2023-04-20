import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { userActions } from '@/entities/User';
import { TestAsynkThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 34,
    country: Country.Tajikistan,
    lastname: 'Pak',
    first: 'Dima',
    city: 'Busan',
    currency: Currency.RUB,
};
// @ts-ignore
describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
