import React from 'react';
import './App.css'
import Primeiro from './components/basics/Primeiro';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import Fragmento from './components/basics/Fragments';
import SegundoComParametro from './components/basics/SegundoComParametro';
import Aleatorio from './components/basics/Aleatorio';
import Card from './components/layout/Card';
import ListaAluno from './components/repeticao/ListaAluno';
import TabelaProduto from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsarioInfo';
import ComunicacaoDireta from './components/comunicacao/DiretaPai';
import ComunicacaoIndireta from './components/comunicacao/IndiretaPai.jsx';
import Inputs from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/megasena/Mega';

export default _ => {
  const tag = <strong>Olá React!!!</strong>;
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="Conceito #14: Mega Números" >
        < Mega />
      </Card>
      <Card titulo="Conceito #13: Contador" >
        < Contador numeroInicial={100}/>
      </Card>
      <Card titulo="Conceito #12: Componentes Controlados" color="#6659C1">
        < Inputs />
      </Card>
      <Card titulo="Conceito #11: Estados do Componente" >
        < ComunicacaoIndireta />
      </Card>
      <Card titulo="Conceito #10: Comunicação Direta" >
        < ComunicacaoDireta />
      </Card>
      <Card titulo="Conceito #9: Renderização Condicional" color="#6659C1">
        < ParOuImpar numero={20} />
        < UsuarioInfo usuario={{ nome: 'Fernando', sobrenome: 'de Souza' }} />
      </Card>
      <Card titulo="Conceito #8: Repetição 2" color="#6659C1">
        < TabelaProduto />
      </Card>
      <Card titulo="Conceito #7: Repetição" >
        < ListaAluno />
      </Card>
      <Card titulo="Conceito #6: Componentes com Filhos" >
        <Familia sobrenomeDaMae="Silva" sobrenomeDoPai="Souza">
          <FamiliaMembro filho="Arthur" filha="Maria"/>  
        </Familia>
        <Familia sobrenomeDaMae="Oliveira" sobrenomeDoPai="de Souza">
          <FamiliaMembro filho="Joan Pedro" filha="Carla Beatriz"/>
        </Familia>
      </Card>
      <p />
      <Card titulo="Conceito #5: Aleatório" >
        < Aleatorio min = { 1000 } max = { 2000 }/>
      </Card>
      <p />
      <Card titulo="Conceito #3: Tag">
        { tag }
      </Card>
      <p />
      <Card titulo="Conceito #3: React Fragment" color="#6659C1">
        <Fragmento />
      </Card>
      <p />
      <Card titulo="Conceito #2: Component Params" color="#6659C1">
      < SegundoComParametro 
        titulo = "Segundo Componente"
        subtitulo = "Com parâmetro"
        nota = {10}
      />
      </Card>
      <p />
      <Card titulo="Conceito #1: Components">
        < Primeiro />
      </Card>

    </div>
    </div>
  )
}