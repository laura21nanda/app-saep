// components/FormulárioProduto.tsx
'use client';

import { useFormularioProduto } from '../hooks/useFormularioProduto';

export default function FormularioProduto({ id }: { id?: string }) {
  const { form, isEditMode, handleChange, handleSubmit, handleCancel } = useFormularioProduto(id);

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isEditMode ? 'Editar Produto' : 'Cadastrar Produto'}
        </h1>

        <div className="mb-4">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={form.preco}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="url">URL da Imagem</label>
          <input
            type="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-200 py-2 px-4 rounded"
          >
            Cancelar
          </button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            {isEditMode ? 'Atualizar' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  );
}
