import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { validateProfileError } from '../../const/consts';

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
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first name and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('oncorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            validateProfileError.INCORRECT_AGE,
        ]);
    });

    test('oncorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            validateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('oncorrect country', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.INCORRECT_AGE,
            validateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
