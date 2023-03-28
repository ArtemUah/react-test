import { StatisticsList } from "./Statitstics-list"
import PropTypes from 'prop-types'


export const Statistics = ({ stats }) => {
    return (<section className="statistics">
  <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            <StatisticsList stats={stats} />
  </ul>
</section>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}
