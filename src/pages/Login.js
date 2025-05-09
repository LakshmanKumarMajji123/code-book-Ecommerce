import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  /**1. asynchornous function have all information
   * 2. call to login end point
   * 3. check the accessToken
   * 4. accessToken there navigate to "products" or else show error
   */
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  async function handleLogin(event) {
    event.preventDefault();

    const authDetail = {
      email: email.current.value,
      password: password.current.value
    }

    const requestOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetail) //converting to json
    }

    const response = await fetch("http://localhost:8000/login", requestOptions); //this is 'post' request we are sending whole obj "authDetail"
    const data = await response.json();
    console.log("Login data is....", data);

    /**register ayna email, pswd tho login avuthey email,pswd match avuthey then u get accessToken and registration details like name,email,pswd */
    
    //if my data currently holds "accessToken" then im going to navigated or else toastify message display
    data.accessToken ? navigate("/products") : toast.error(data);


    //if i have 'accessToken' i store the accessToken & userid in 'sessionstorage'
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("userId", JSON.stringify(data.user.id));
    }

  }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required autoComplete="off" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
      </form>
      {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
    </main>
  )
}
