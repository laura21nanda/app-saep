'use client';

import { withAuth } from '@/app/components/withAuth';
import NavBar from '../components/Navbar';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <>
      <NavBar texto="Dashboard" />
      <section>
        {userName && (
          <h1 className="text-4xl font-bold m-6 text-center text-gray-700">
            Seja Bem-vindo, {userName}!
          </h1>
        )}
      </section>
    </>
  );
}

// Protege a página do Dashboard com o HOC de autenticação
export default withAuth(Dashboard);
