import React from 'react';
import FactorList from './FactorList';
import '../Responsive.css';
import Footer from './Footer';

//This is a stateful component example in case I want to add state and a backend to this react app in the future

// class Page extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="page">
//                 <h1>What factors affect your credit score?</h1>
//                 <FactorList />
//             </div>
//         )
//     }
// }


function Page() {
    return (
        <div className="page">
            <h1>What factors affect your credit score?</h1>
            <FactorList />
            <Footer />
        </div>
    );
}

export default Page;