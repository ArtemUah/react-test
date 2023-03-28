import PropTypes from 'prop-types';

export const StatisticsList = ({stats}) => {
   return stats.map(({id, label, percentage }) => {
    return (<li className="item" key={id}>
    <span className="label">{label }</span>
    <span className="percentage">{ percentage}%</span>
    </li>)
    })
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })),
}