import React, { useState } from 'react';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted:', { email: formData.email, password: formData.password });
      // Add your login logic here
    } else {
      console.log('Register submitted:', formData);
      // Add your registration logic here
    }
  };

  return (
    <>
    <div className=" lg:flex lg:items-center lg:justify-center  text-white pt-22 ">
      {/* Left Side - Hero Section */}
      <div className=" mx-auto text-center lg:text-justify">
        <div className="lg:max-w-sm  ">
          <h1 className="md:text-6xl  sm:text-5xl text-3xl font-bold mb-4">Welcome To <br/>WebXV</h1>
          <p className="text-lg mb-8">
            Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>
          {!isLogin && (
  <button 
    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium cursor-pointer"
    onClick={() => setIsLogin(true)}
  >
   {!isLogin ? 'LOGIN' : 'REGISTER'}
  </button>
)}
          {isLogin && (
            <button 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
             {isLogin ? 'REGISTER' : 'LOGIN'}
            </button>
          )}
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="lg:w-1/3 md:max-w-[50%] sm:max-w-[360px] max-w-[280px] sm:h-auto   rounded-2xl lg:mt-20 mt-10 bg-gray-900  sm:p-12 p-8 mx-auto">
        <div className="w-full lg:max-w-md">
          <h2 className="sm:text-3xl text-2xl font-bold mb-6 text-center">{isLogin ? 'Welcome back' : 'Create account'}</h2>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4 sm:text-justify">
                <label htmlFor="username" className="block text-sm font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full  px-4 sm:py-2 py-1  bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 "
                  value={formData.username}
                  onChange={handleChange}
                  required={!isLogin}
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
                className="w-full px-4 sm:py-2 py-1  bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 sm:py-2 py-1  bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 px-4 rounded-lg font-medium mb-4 cursor-pointer"
            >
              {isLogin ? 'LOGIN' : 'REGISTER'}
            </button>

            <div className="text-sm text-center">
              {isLogin ? (
                <>
                  <a href="#" className="text-blue-400 hover:underline">Forgotten your password?</a>
                  <p className="mt-2">
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => setIsLogin(false)} 
                      className="text-blue-400 hover:underline"
                    >
                      Register
                    </button>
                  </p>
                </>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    onClick={() => setIsLogin(true)} 
                    className="text-blue-400 hover:underline"
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>



    </>

  );
};

export default Form;
