import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

 // const { loading, login } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(userName, password);
//   }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
                        backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-white-500">DetChan</span>
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">
                                Username
                            </span>
                        </label>
                        <input type='text' placeholder="Enter Username" className="w-full input input-bordered h-10"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                        />
                        <label className="label">
                            <span className="text-white label-text">Password</span>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter password"
                        className="w-full input input-bordered h-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                    <Link href={"/signup"} className="text-sm text-white hover:underline hover:text-gray-600 mt-2 inline block">
                        {"Don't"} have an account
                    </Link>

                    <div>
                        {/* <button className="btn btn-block btn-sm mt-2"
                            disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button> */}
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Login;


// STARTER CODE FOR THIS FILE
/*
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
                        backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-white-500">DetChan</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">
                                Username
                            </span>
                        </label>
                        <input type='text' placeholder="Enter Username" className="w-full input input-bordered h-10"/>
                        <label className="label">
                            <span className="text-white label-text">Password</span>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter password"
                        className="w-full input input-bordered h-10"    
                        />
                    </div>
                    <a href="#" className="text-sm text-white hover:underline hover:text-gray-600 mt-2 inline block">
                        {"Don't"} have an account
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">
                            Login
                        </button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Login
*/