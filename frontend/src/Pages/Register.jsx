import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create an Account
        </h2>
        <form action="">
          <div className="">
            <label className="block mb-2 text-gray-700">Name</label>
            <input
            value={name}
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e)=>setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus-ring-2 focus:ring-blue-500 focus outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <input
             type="email"
            value={email}
            placeholder="Enter your Email"
              required
              onChange={(e)=>setEmail(e.target.value)}

             className="w-full border border-gray-300 rounded-lg p-2 focus-ring-2 focus:ring-blue-500 focus outline-none"
            />
            
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
