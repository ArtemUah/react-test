import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
    return (
        <>
          <div className="description">
    <img
      src={user.avatar}
      alt={user.name}
      className="avatar"
    />
    <p className="name">{user.name}</p>
            <p className="tag">@{user.tag }</p>
            <p className="location">{ user.location}</p>
        </div>
    <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
                <span className="quantity">{user.stats.likes }</span>
    </li>
  </ul></>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    }).isRequired,
}