import { useState } from 'react';
import OtpAutocomplete from './components/OtpAutocomplete';

function OptPage() {
  const [isOptValid, setIsOptValid] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-column justify-center items-center">
      <div className="w-3/3 h-3/4">
        <h1 className="text-3xl">OPT input autocomplete</h1>
        <h3 className="text-2xl">Basic example</h3>

        <OtpAutocomplete callback={setIsOptValid} />

        <div className="text-right">
          <button
            type="button"
            disabled={!isOptValid}
            className="bg-white disabled:opacity-50 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow mt-6"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptPage;
