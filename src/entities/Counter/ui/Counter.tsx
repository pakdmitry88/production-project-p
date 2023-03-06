/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    // @ts-ignore
    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button
                theme={ThemeButton.BACKGROUND}
                data-testid="increment-btn"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                theme={ThemeButton.BACKGROUND}
                data-testid="decrement-btn"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
