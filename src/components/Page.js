import React from 'react';
import FactorList from './FactorList';

class Page extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>What factors affect your credit score?</h1>
                <FactorList />
            </div>
        )
    }
}

export default Page;