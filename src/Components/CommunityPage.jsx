import React from 'react'
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const CommunityPage = ({ setJustRegistered }) => {
    const [isLogin, setIsLogin] = useState(false);
     const [user, setUser] = useState(null);
      const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });
          return () => unsubscribe();
        }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

    const handleLogout = async () => {
        await signOut(auth);
        toast.success('Logged out successfully!');
        setUser(null);
        setIsLogin(true);
      };

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            if (isLogin) {
              const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
              );
              toast.success('Login successful!');
              console.log('User logged in:', userCredential.user);
              
            } else {
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
              );
              toast.success('Registration successful! Please log in.');
              setJustRegistered(true); // <-- trigger state for Navbar
              setIsLogin(true); 
              console.log('User registered:', userCredential.user);
        
              // Log out the user after registration
              await signOut(auth);
              setIsLogin(true); // switch to login form
            }
          } catch (error) {
            toast.error(error.message);
            console.error(error);
          }
        };


  return (
    <>
    <div className="flex flex-wrap justify-center pt-20 items-center sm:gap-10 gap-4">
        <div>

        <img src="/Images/c1.png" alt="" className='md:w-[700px] h-[440px] w-[330px] lg:mt-9 ' />
        </div>
        {/* Form section */}
    
        {!user ? (
        <div className="lg:w-1/3 md:max-w-[50%] sm:max-w-[360px] max-w-[280px] h-[440px] sm:h-auto rounded-2xl lg:mt-20 mt-10 bg-gray-900 sm:p-12 p-8 ">
          <div className="w-full lg:max-w-md">
            <h2 className="sm:text-3xl text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4 sm:text-justify">
                  <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-4 sm:py-2 py-1 bg-gray-700 border border-gray-600 rounded-md"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {isLogin ? 'Username or email' : 'Email'}
                </label>
                <input
                  type={isLogin ? 'text' : 'email'}
                  id="email"
                  name="email"
                  className="w-full px-4 sm:py-2 py-1 bg-gray-700 border border-gray-600 rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 sm:py-2 py-1 bg-gray-700 border border-gray-600 rounded-lg"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 px-4 rounded-lg font-medium mb-4"
              >
                {isLogin ? 'LOGIN' : 'REGISTER'}
              </button>

              <div className="text-sm text-center">
                {isLogin ? (
                  <>
                    <a href="#" className="text-blue-400 hover:underline">Forgotten your password?</a>
                    <p className="mt-2">
                      Don't have an account?{' '}
                      <button type="button" onClick={() => setIsLogin(false)} className="text-blue-400 hover:underline">
                        Register
                      </button>
                    </p>
                  </>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button type="button" onClick={() => setIsLogin(true)} className="text-blue-400 hover:underline">
                      Login
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center mx-auto hidden">
          <h2 className="sm:text-3xl text-xl font-bold lg:mt-0 mt-8">Welcome,<br /> {user.email}</h2>
          
        </div>
      )}
        
    </div>
    </>
  )
}

export default CommunityPage
