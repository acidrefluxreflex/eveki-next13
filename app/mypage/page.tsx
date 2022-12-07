"use client";
import UserGuard from "../../src/guards/user-guard";
import styles from "../page.module.css";
import { logout } from "../../lib/Firebase/config/auth";

const Mypage = () => {
  return (
    <UserGuard>
      {(user) => (
        <div className={styles.container}>
          <h2>hello</h2>
          <h2>{user.email}</h2>
          <button className="btn" onClick={logout}>Button</button>
        </div>
      )}
    </UserGuard>
  );
};

export default Mypage;
