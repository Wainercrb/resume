import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen w-screen p-6">
      <h1 className="text-3xl font-bold">List of technical alignments!</h1>
      <ul className="list-disc pl-6 mt-6">
        <li>
          <Link
            className="text-blue-600 visited:text-purple-600"
            to="/otp-autocomplete"
          >
            OTP List Autocomplete
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
