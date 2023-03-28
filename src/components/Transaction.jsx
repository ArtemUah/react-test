import PropTypes from 'prop-types';
export const TransactionList = ({ transactions }) => {
    return transactions.map(transaction => {
        return (<tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>)
    })
};

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}