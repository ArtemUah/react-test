
export const Statistic = ({good, neutral, bad, total, positivePercentage }) => {
    console.log(positivePercentage);
    console.log(total);
        return (
              <>
        {/* <h2>Please leave feedback</h2>
    <ul onClick={this.changeStat}>
            <li><button>Good</button></li>
            <li><button>Neutral</button></li>
            <li><button>Bad</button></li>
    </ul> */}
                <h3>Statistics</h3>
                <p>Good: { good}</p>
            <p>Neutral: {neutral} </p>
                <p>Bad: {bad} </p>
                <p>Total: {total} </p>
            <p>Posivite: {positivePercentage ? positivePercentage : '0'}% </p>
            </>
        )
}