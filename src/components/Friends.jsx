import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map(friend => {
            return (<li className="item" key={friend.id}>
  <span className="status"></span>
  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name }</p>
</li>)
        })}
</ul>)
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}