"use client";
import { onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "@firebase/firestore";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../config/firebase";
import { User } from "../../../src/types/user";

type UserContextType = User | null | undefined;

const AuthContext = createContext<UserContextType>(undefined);

export const useAuthContext = () => useContext(AuthContext);

// 以下のコードを追加
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // 配布したいデータの定義
  const [user, setUser] = useState<UserContextType>();

  useEffect(() => {
    // ログイン状態を監視し、変化があったら発動
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // ログインしていた場合、ユーザーコレクションからユーザーデータを参照
        const ref = doc(db, `user/${firebaseUser.uid}`);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          // ユーザーデータを取得して格納
          const appUser = (await getDoc(ref)).data() as User;
          setUser(appUser);
        } else {
          const date = Date;
          // ユーザーが未作成の場合、新規作成して格納
          const appUser: User = {
            userID: firebaseUser.uid,
            name: firebaseUser.displayName!,
            photoURL: firebaseUser.photoURL!,
            email: firebaseUser.email!,
            createDate: serverTimestamp(),
          };

          // Firestoreにユーザーデータを保存
          setDoc(ref, appUser).then(() => {
            // 保存に成功したらコンテクストにユーザーデータを格納
            setUser(appUser);
          });
        }
      } else {
        // ログインしていない場合、ユーザー情報を空にする
        setUser(null);
      }

      // このコンポーネントが不要になったら監視を終了する
      return unsubscribe;
    });
  }, []);

  // プロバイダーを作成し、配布物を格納する
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
