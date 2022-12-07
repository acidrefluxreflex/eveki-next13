"use client";
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useAuth } from '../../lib/Firebase/context/GAuth'
import { User } from '../types/user';

type Props = {
  children: ((user: User) => ReactNode) | ReactNode;
};

const UserGuard = ({ children }: Props) => {
  const user = useAuth();
  const router = useRouter();

  // 未ログインであればリダイレクト
  if (user === null) {
    router.push('/');
    return null;
  }

  // 認証確認中であれば空表示
  if (!user) {
    return null;
  }

  if (typeof children === 'function') {
    // 関数であればユーザー情報を渡して実行
    return <>{children(user)}</>;
  } else {
    // Nodeであればそのまま表示
    return <>{children}</>;
  }
};

export default UserGuard;