/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { classNames } from './classNames';

describe('classNames', () => {
    test('with onlu first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additionla class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });

    // eslint-disable-next-line arrow-body-style
    test('one of mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });

    // eslint-disable-next-line arrow-body-style
    test('one of mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
