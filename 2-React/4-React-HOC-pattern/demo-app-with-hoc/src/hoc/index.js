import React, {
    Component
} from 'react';

import store from '../store';


function withSubscription(WrappedComponent, callback) {

    class Container extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: callback(store, props)
            }
        }

        componentDidMount() {
            // Subscribe to changes
            store.subscribe(this.handleChange);
        }

        componentWillUnmount() {
            // Clean up listener
            store.unsubscribe(this.handleChange);
        }

        handleChange() {
            // Update component state whenever the data source changes
            this.setState({
                data: callback(store, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }

    }

    function getDisplayName(WrappedComponent) {
        return Container.displayName || WrappedComponent.name || 'Component';
    }

    //Container.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    Container.displayName = "generated-container"


    return Container;

}

export { withSubscription };