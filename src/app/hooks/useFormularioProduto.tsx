// hooks/useFormularioProduto.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { ProdutoForm } from '../type/ProdutoForm';

export function useFormularioProduto(id?: string) {
  const router = useRouter();
  const [form, setForm] = useState<ProdutoForm>({
     nome: '', 
     descricao: '',
      preco: '',
       url: '' 
    });
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      api.get(`/produtos/${id}`)
        .then(response => setForm(response.data))
        .catch(() => {
          Swal.fire('Erro', 'Produto não encontrado', 'error').then(() => router.push('/produtos'));
        });
    }
  }, [id, isEditMode, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCancel = () => {
    router.push('/produtos');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const produtoParaEnviar = { ...form, preco: Number(form.preco) };
    const method = isEditMode ? 'put' : 'post';
    const url = isEditMode ? `/produtos/${id}` : '/produtos/';
    const successMessage = `Produto ${isEditMode ? 'atualizado' : 'cadastrado'} com sucesso!`;

    api[method](url, produtoParaEnviar)
      .then(() => Swal.fire('Sucesso', successMessage, 'success'))
      .then(() => router.push('/produtos'))
      .catch(error => {
        console.error("Falha ao salvar o produto:", error);
        Swal.fire('Erro', 'Não foi possivel salvar o produto.', 'error');
      });
  };

  return { form, isEditMode, handleChange, handleSubmit, handleCancel };
}