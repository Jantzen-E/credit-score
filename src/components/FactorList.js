import React from 'react';
import Factor from './Factor';
import '../Responsive.css';

//This is a stateful component example in case I want to add state and a backend to this react app in the future

// class FactorList extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="factorList">
//                 <Factor />
//             </div>
//         )
//     }
// }

function FactorList() {
    return (
        <div className="factorList">
            <Factor />
        </div>
    );
}

export default FactorList;