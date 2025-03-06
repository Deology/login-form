import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import '@/styles/globals.css'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/login");
  };

  if (!loggedIn) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-3xl font-semibold text-green-600">Welcome to the Landing Page!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300 mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
