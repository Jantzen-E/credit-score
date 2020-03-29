import React from 'react';

class Factor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="factors">
                <details>
                    <summary>Credit History</summary>
                    <p>This is affected by the age of your oldest credit account</p>
                    <p>They can also take into account the average age of all your credit accounts</p>
                </details>
                <details>
                    <summary>Payment History</summary>
                    <p>Do you pay your bills on time?  Being past due can negatively affect your credit score</p>
                </details>
                <details>
                    <summary>Credit Availability</summary>
                    <p>How much credit do you have available to you right now that you can use if you wanted?</p>
                    <p>Having higher limits will raise your credit score over time</p>
                    <p>Don't cancel accounts or credit cards if you want your score to increase</p>
                </details>
                <details>
                    <summary>Credit Card Balances</summary>
                    <p>Do you have several cards and a balance on all of them?  That can lower your credit score.  If you have several cards, 
                        try to have a balance on the least amount of cards possible
                    </p>
                </details>
                <details>
                    <summary>Credit used</summary>
                    <p>If you have a credit card with a limit of $1000.00, don't use more than 30% of that limit.</p>
                    <p>In other words, with that credit limit, don't have a balance of any higher than $330.00.</p>
                    <p>Going over the 30% will lower your credit score</p>
                </details>
                <details>
                    <summary>Credit Inquiries</summary>
                    <p>Every time someone checks your credit, it will lower your score temporarily</p>
                    <p>Typically, you do not want your credit score checked more than 2 times a year</p>
                    <p>If you sign up for a new credit card, your credit will be checked and it will bring your score down temporarily, but your credit limit will increase so 
                        it has the potential to increase if you watch all of the other factors
                    </p>
                </details>
                <details>
                    <summary>Debt</summary>
                    <p>If you have a significant amount of loan debt and/or credit card debt, that will negatively impact your credit score</p>
                    <p>loans can help your credit score but keep the amounts to a minimum</p>
                </details>
                <details>
                    <summary>Credit Variety</summary>
                    <p>If you have a good mix of credit accounts, your score will go up</p>
                    <p>Do you use credit cards and take loans out or do you just use one or the other?</p>
                </details>
            </div>
        )
    }
}

export default Factor;