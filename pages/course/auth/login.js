import React from 'react';
import Link from 'next/link';

import { useAuth } from '@/hooks/use-auth';

export default function Login() {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <h1>Login</h1>
      目前登入： {auth.id > 0 ? '己登入' : '未登入'}
      <button
        onClick={() => {
          setAuth({ id: 123, name: 'Lily', token: 'xxx' });
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setAuth({ id: 0, name: '', token: '' });
        }}
      >
        登出
      </button>
      <hr />
      <Link href="/course/auth/user">User頁</Link>
    </>
  );
}
