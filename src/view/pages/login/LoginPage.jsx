import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    // For example, check if username and password are not empty
    if (!username || !password) {
      alert("Username and password are required!");
      return;
    }

    // Send form data to server using axios
    axios.post("https://example.com/login", { username, password, remember })
      .then((response) => {
        // Handle successful login
        console.log("Login successful", response.data);
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed", error);
      });
  };

  return (
    <main className="content" id="content">
      <div class="titlebar bg-gray-400 py-5">
        <div class="titlebar-inner">
          <div class="container mx-auto">
            <div class="flex justify-center">
              <div class="titlebar-col">
                <h1 class="text-4xl lg:text-5xl text-white">Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="login-wrap bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div id="login-form" className="login-form">
            <form
              name="login"
              id="login"
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate="novalidate">
              <div className="log-form-group">
                <label
                  htmlFor="userusername"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="userusername"
                  id="userusername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  title="Please enter username"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="log-form-group">
                <label
                  htmlFor="userpassword"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="userpassword"
                  id="userpassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  title="Please enter password"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="log-form-group">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <div className="login-submit">
                <input
                  type="submit"
                  value="Login"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="log-form-group extra-links mt-4">
                <a
                  href="/forgot-password"
                  className="text-blue-500 hover:text-blue-700 mr-2">
                  Lost Password?
                </a>{" "}
                |
                <a
                  href="/"
                  className="text-blue-500 hover:text-blue-700 ml-2">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;

{
  /* 
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    if (!emailIsValid) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email" }));
    }

    if (!passwordIsValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
    }

    if (emailIsValid && passwordIsValid) {
      axios
        .post("/api/login", {
          email,
          password,
        })
        .then((response) => {
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }; */
}
