import kind from '@enact/core/kind';
import hoc from '@enact/core/hoc';
import Button from '@enact/moonstone/Button';
import {adaptEvent, forward, handle} from '@enact/core/handle';
import PropTypes from 'prop-types';
import React from 'react';


interface countableStateProps {
 count : number,
}

interface configInterface {
    prop: 'data-count',
    count: 0,
    increment? : string,
    decrement ? : string,
    reset ? : string
}
interface countType {
    [key:string] : any
}
const defaultConfig: countType = {
    prop: 'data-count',
    count: 0,
    increment:  void 0,
    decrement: void 0,
    reset : void 0
}

//Counter component using HOC (Higher order component)
const Countable = hoc({defaultConfig}, (config: configInterface, Wrapped: React.ComponentType<countType>) => {
	return class extends React.Component < {}, countableStateProps> {
	    state = {
			count: 0
		};
        inc = () => this.setState({count: this.state.count + 1})
        dec = () => this.setState({count: this.state.count - 1})
        reset = () => this.setState({count: 0})
		render () {
			const props: countType = Object.assign({}, this.props, {
                [config.prop]: this.state.count,
            });
            if (config.increment) props[config.increment] = this.inc
            if (config.decrement) props[config.decrement] = this.dec
            if (config.reset) props[config.reset] = this.reset

			return <Wrapped {...props} />
		}
	}
});

const CounterBase = kind({
	name: 'Counter',

	propTypes: {
        onIncrementClick: PropTypes.func.isRequired,
        onResetClick: PropTypes.func.isRequired,
        onDecrementClick : PropTypes.func.isRequired,
        count: PropTypes.number
	},

	defaultProps: {
        count: 0
    },

    handlers: {
		onIncrementClick: handle(adaptEvent(() => ({type: 'onClick'}), forward('onIncrementClick'))),
        onDecrementClick: handle(adaptEvent(() => ({type: 'onClick'}), forward('onDecrementClick'))),
        onResetClick: handle(adaptEvent(() => ({type: 'onClick'}), forward('onResetClick')))
    },

	render: ({onIncrementClick, onDecrementClick, onResetClick, count}) => (
        <div>
            <h1>{count}</h1>
            <Button onClick={onIncrementClick}>Increment ++</Button>
            <Button onClick={onResetClick}>Reset</Button>
            <Button onClick={onDecrementClick}>Decrement --</Button>
        </div>
	)
});

const Counter = Countable({prop: 'count', increment: 'onIncrementClick', decrement: 'onDecrementClick', reset: 'onResetClick'}, CounterBase);

export default Counter;
export {
    Counter,
    CounterBase,
    Countable
};
