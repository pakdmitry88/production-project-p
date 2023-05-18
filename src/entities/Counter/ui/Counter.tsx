/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable i18next/no-literal-string */
import { useDispatch } from 'react-redux';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        // dispatch(counterActions.increment());
        increment();
    };

    const handleDec = () => {
        // dispatch(counterActions.decrement());
        decrement();
    };

    const handleAddFive = () => {
    // dispatch(counterActions.decrement());
        add(5);
    };
    // @ts-ignore
    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button
                theme={ThemeButton.BACKGROUND}
                data-testid="increment-btn"
                onClick={handleInc}
            >
                increment
            </Button>
            <Button
                theme={ThemeButton.BACKGROUND}
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                decrement
            </Button>
            <Button
                theme={ThemeButton.BACKGROUND}
                data-testid="decrement-btn"
                onClick={handleAddFive}
            >
                addFive
            </Button>
        </div>
    );
};
