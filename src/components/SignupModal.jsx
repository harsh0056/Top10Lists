
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="modal-container relative z-50">
        <div className="bg-indigo-700 text-center p-5 h-96 w-[500px] rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase text-white">Create Account</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup} className='px-4'>
            <div className="mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
              Sign Up
            </button>
          </form>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-8">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
