import React from 'react';
import Factor from './Factor';

class FactorList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="factorList">
                <Factor />
            </div>
        )
    }
}

export default FactorList;