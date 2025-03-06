import { useState } from "react";
import { useRouter } from "next/router";
import '@/styles/globals.css'


export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! You can now log in.");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-blue-600">Sign Up</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
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
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-500 hover:underline">
            Log in here
          </a>
        </div>
      </div>
    </div>
  );
}
