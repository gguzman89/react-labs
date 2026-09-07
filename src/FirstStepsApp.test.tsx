import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";


const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="ItemCounter" />;
})


vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));


describe('FirstStepApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {

        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    })

    test('should render the correct number of ItemCounter components', () => {

        render(<FirstStepsApp />);

        const itemsCounters = screen.getAllByTestId('ItemCounter');

        expect(itemsCounters.length).toBe(3);
    })

    test('should render ItemCounter with correct props', () => {

        render(<FirstStepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Pro Controller', quantity: 3 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Super Smash', quantity: 5 });
    })
})


