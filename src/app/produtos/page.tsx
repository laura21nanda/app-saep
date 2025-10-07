// produtos/page.tsx

'use client';

import NavBar from '../components/navbar';
import { withAuth } from '../components/withAuth';
import { useProdutos } from '../hooks/useProdutos';

function PaginaProdutos() {
  const { produtos, handleDelete, handleAdd, handleEdit } = useProdutos();

  return (
    <section>
      <NavBar texto={"Produtos"} />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Produtos</h1>
          <button onClick={handleAdd} className="bg-blue-600 text-white rounded-full w-12 h-12 text-2xl">+</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Nome</th>
                <th className="py-3 px-4 text-left">Preço</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{produto.nome}</td>
                  <td className="py-3 px-4">R$ {produto.preco.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleEdit(produto.id)} className="text-blue-500 font-semibold mr-4">Editar</button>
                    <button onClick={() => handleDelete(produto.id)} className="text-red-500 font-semibold">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
