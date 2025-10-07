'use client';

import Link from 'next/link';
import { useLogin } from './hooks/useLogin';

export default function Home() {
  const { form, handleChange, handleLogin } = useLogin();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo!</h1>
      <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            value={form.username}
            onChange={handleChange}
            className="border p-2 rounded w-64 text-black"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded w-64 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500 px-6 py-2"
        >
          Entrar
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <Link href="/registro" className="text-blue-500 hover:underline">
          Não tem uma conta? Cadastre-se
        </Link>
      </div>
    </div>
  );
}
