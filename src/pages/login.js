import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && user.username === storedUser.username && user.password === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-blue-600">Login</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-md"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
}
