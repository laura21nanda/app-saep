// produtos/editar/[id]/page.tsx

'use client'

import NavBar from '@/app/components/navbar';
import FormularioProduto from '../../../../../components/FormularioProduto';
import { withAuth } from '@/app/components/withAuth';

function PaginaEdicao({ params }: { params: { id: string } }) {
  // O formulário vai saber que está em modo "edição"
  return (
    <section className='h-screen'>
      <NavBar texto={"Edição de Produto"} />
      <FormularioProduto id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);
