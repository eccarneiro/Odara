import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-dominant mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input type="email" className="border border-gray-300 rounded p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Senha:</label>
            <input type="password" className="border border-gray-300 rounded p-2 w-full" />
          </div>
          <button className="bg-dominant text-white py-2 px-4 rounded w-full">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
