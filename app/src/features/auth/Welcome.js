import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  const content = (
    <section className='welcome'>
      <p>{today}</p>
      <h1>Welcome {username}!</h1>
      <p>
        <Link to='/dash/calories'>View Calories</Link>
      </p>
      <p>
        <Link to='/dash/calories/new'>Add New Calorie</Link>
      </p>

      <p>
        <Link to='/dash/invite'>Invite a friend</Link>
      </p>

      {(isManager || isAdmin) && (
        <p>
          <Link to='/dash/users'>View User Settings</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p>
          <Link to='/dash/users/new'>Add New User</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p>
          <Link to='/dash/users/reports'>User reports</Link>
        </p>
      )}
    </section>
  );

  return content;
};

export default Welcome;
