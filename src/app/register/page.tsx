'use client';

import Link from 'next/link';
import { useRegistro } from '@/app/hooks/useRegistro';

export default function Registro() {
  const { form, handleChange, handleRegister } = useRegistro();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Crie sua conta</h1>
      <form onSubmit={handleRegister} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name" 
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-64 text-black"
          />
        </div>
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
          className="bg-green-600 text-white rounded cursor-pointer hover:bg-green-500 px-6 py-2"
        >
          Cadastrar
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <Link href="/" className="text-blue-500 hover:underline">
          Já tem uma conta? Faça o login
        </Link>
      </div>
    </div>
  );
}