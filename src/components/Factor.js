import React from 'react';
import '../Responsive.css';

//This is a stateful component example in case I want to add state and a backend to this react app in the future

// class Factor extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="factors">
//                 <details>
//                     <summary>Credit History</summary>
//                     <p>The age of your oldest credit account directly affects your credit score.  The longer you have been using credit, the higher your score can be.</p>
//                     <p>The average age of all your credit accounts is also taken into account so do not cancel credit lines or old accounts if you want to increase your credit score.</p>
//                 </details>
//                 <details>
//                     <summary>Payment History</summary>
//                     <p>Do you pay your bills on time?  Do you pay the off the full balance every time?  Being past due can negatively affect your credit score.</p>
//                     <p>Set up alerts in your calendar or pay every 20 or 25 days instead of every 30 days so that you never have a late payment.</p>
//                 </details>
//                 <details>
//                     <summary>Credit Availability</summary>
//                     <p>How much credit do you have available to you right now that you can use if you wanted?  The higher amount you have access to, the higher your credit score can be.</p>
//                     <p>Having higher limits will raise your credit score over time.</p>
//                     <p>Don't cancel accounts or credit cards if you want your score to increase.</p>
//                 </details>
//                 <details>
//                     <summary>Credit Card Balances</summary>
//                     <p>Do you have several credit cards?  If so, how many of them have a balance at the same time?</p>
//                     <p>
//                        The best practice is to carry a balance on the least number of credit cards as possible.  If you have 5 cards, and all of them have a balance, that can lower your 
//                        credit score.
//                     </p>
//                 </details>
//                 <details>
//                     <summary>Credit Utilized</summary>
//                     <p>If you have a credit card with a limit of $1000.00, don't use more than 30% of that limit.</p>
//                     <p>With that credit limit, don't make your balance any higher than $330.00.</p>
//                     <p>Going over the 30% will lower your credit score.</p>
//                 </details>
//                 <details>
//                     <summary>Credit Inquiries</summary>
//                     <p>Every time someone checks your credit, it will lower your score temporarily.</p>
//                     <p>Typically, you do not want your credit score checked more than 2 times a year so that your score is not impacted too much.</p>
//                     <p>
//                         If you sign up for a new credit card, your credit will be checked and it will bring your score down temporarily, but your credit limit/credit availability 
//                         will increase so it has the potential to increase if you are careful with all of the other factors that can affect your credit.
//                     </p>
//                 </details>
//                 <details>
//                     <summary>Debt</summary>
//                     <p>If you have a significant amount of loan debt and/or credit card debt, that will negatively impact your credit score.</p>
//                     <p>Loans can help your credit score but keep the amounts to a minimum if possible.</p>
//                 </details>
//                 <details>
//                     <summary>Credit Variety</summary>
//                     <p>Do you use credit cards and take out loans or do you just use one or the other?</p>
//                     <p>If you have a good mix of credit accounts, your score will go up as long as you are careful with the other factors that affect credit scores.</p>
//                 </details>
//                 <details> 
//                     <summary>Benefits of a high credit score</summary>
//                     <p>Easier to qualify for loans</p>
//                     <p>You recieve lower interest rates on loans because you are perceived as being lower risk</p>
//                     <p>
//                         A low credit score can show up in a background check that can be looked up by future employers, landlords, insuranc agencies, etc.
//                         Your credit score can affect several aspects of your life so keep all of these things in mind to improve your score.  If your credit score
//                         is not where you want it to be, just make sure that your score is moving in the right direction.  Good luck!
//                     </p>
//                 </details>
//             </div>
//         )
//     }
// }

function Factor() {
    return (
        <div className="factors">
            <details>
                <summary>Credit History</summary>
                <p>The age of your oldest credit account directly affects your credit score.  The longer you have been using credit, the higher your score can be.</p>
                <p>The average age of all your credit accounts is also taken into account so do not cancel credit lines or old accounts if you want to increase your credit score.</p>
            </details>
            <details>
                <summary>Payment History</summary>
                <p>Do you pay your bills on time?  Do you pay the off the full balance every time?  Being past due can negatively affect your credit score.</p>
                <p>Set up alerts in your calendar or pay every 20 or 25 days instead of every 30 days so that you never have a late payment.</p>
            </details>
            <details>
                <summary>Credit Availability</summary>
                <p>How much credit do you have available to you right now that you can use if you wanted?  The higher amount you have access to, the higher your credit score can be.</p>
                <p>Having higher limits will raise your credit score over time.</p>
                <p>Don't cancel accounts or credit cards if you want your score to increase.</p>
            </details>
            <details>
                <summary>Credit Card Balances</summary>
                <p>Do you have several credit cards?  If so, how many of them have a balance at the same time?</p>
                <p>
                    The best practice is to carry a balance on the least number of credit cards as possible.  If you have 5 cards, and all of them have a balance, that can lower your 
                    credit score.
                </p>
            </details>
            <details>
                <summary>Credit Utilized</summary>
                <p>If you have a credit card with a limit of $1000.00, don't use more than 30% of that limit.</p>
                <p>With that credit limit, don't make your balance any higher than $330.00.</p>
                <p>Going over the 30% will lower your credit score.</p>
            </details>
            <details>
                <summary>Credit Inquiries</summary>
                <p>Every time someone checks your credit, it will lower your score temporarily.</p>
                <p>Typically, you do not want your credit score checked more than 2 times a year so that your score is not impacted too much.</p>
                <p>
                    If you sign up for a new credit card, your credit will be checked and it will bring your score down temporarily, but your credit limit/credit availability 
                    will increase so it has the potential to increase if you are careful with all of the other factors that can affect your credit.
                </p>
            </details>
            <details>
                <summary>Debt</summary>
                <p>If you have a significant amount of loan debt and/or credit card debt, that will negatively impact your credit score.</p>
                <p>Loans can help your credit score but keep the amounts to a minimum if possible.</p>
            </details>
            <details>
                <summary>Credit Variety</summary>
                <p>Do you use credit cards and take out loans or do you just use one or the other?</p>
                <p>If you have a good mix of credit accounts, your score will go up as long as you are careful with the other factors that affect credit scores.</p>
            </details>
            <details> 
                <summary>High credit score benefits</summary>
                <p>Easier to qualify for loans</p>
                <p>You recieve lower interest rates on loans because you are perceived as being lower risk</p>
                <p>
                    A low credit score can show up in a background check that can be looked up by future employers, landlords, insuranc agencies, etc.
                    Your credit score can affect several aspects of your life so keep all of these things in mind to improve your score.  If your credit score
                    is not where you want it to be, just make sure that your score is moving in the right direction.  Good luck!
                </p>
            </details>
        </div>
    );
}

export default Factor;