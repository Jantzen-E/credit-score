import React from 'react';
import Factor from './Factor';

class FactorList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="factorList">
                <h2>Here is where the list starts</h2>
                <Factor />
            </div>
        )
    }
}

export default FactorList;