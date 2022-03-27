import './User.scss';

export default function User({ user }) {
    return (
        <div className="user">
            Logged in as <span className="user-name">{user.name}</span>
        </div>
    )
}