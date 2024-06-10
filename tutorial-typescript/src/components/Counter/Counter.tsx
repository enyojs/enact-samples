import {adaptEvent, forward, handle} from '@enact/core/handle';
import kind from '@enact/core/kind';
import Button from '@enact/sandstone/Button';
import Changeable from '@enact/ui/Changeable';

interface Props {
	count? : number,
	onCounterChange? : void
}

type HandlerFunctionType = (count: number) => number;

const createHandler = (fn: HandlerFunctionType) => {
	return handle(
		adaptEvent((ev, {count}) => ({
			type: 'onCounterChange',
			count: fn(count)
		}), forward('onCounterChange'))
	);
};

const CounterBase = kind<Props>({
	name: 'Counter',

	handlers: {
		onDecrementClick: createHandler(count => count - 1),
		onIncrementClick: createHandler(count => count + 1),
		onResetClick: createHandler(() => 0)
	},

	render: ({onIncrementClick, onDecrementClick, onResetClick, count = 0, ...rest}) => {
		delete rest.onCounterChange;
		return (
			<div {...rest}>
				<h1>{count}</h1>
				<Button onClick={onDecrementClick}>Decrement --</Button>
				<Button onClick={onResetClick}>Reset</Button>
				<Button onClick={onIncrementClick}>Increment ++</Button>
			</div>
		);
	}
});

const Counter = Changeable({prop: 'count', change: 'onCounterChange'}, CounterBase);

export default Counter;
export {
	CounterBase,
	Counter
};

