"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../../../lib/Firebase/context/Auth";
import { auth } from "../../../lib/Firebase/config/firebase";
import { Login } from "../../../lib/Firebase/context/GAuthContext";

const Signup = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const isLoggedIn = !!user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
  };
  const handleClose = async () => {
    await router.push("/");
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <div>
      <div className="alert alert-info shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </div>
      </div>

      <h2>ユーザー登録</h2>
      <button onClick={() => Login()}>ログイン</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            type="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <input
            name="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            type="password"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Signup;
