

// assinatura do componente
const BoasVindas = ({ nome, genero }) => {
  // logica do componente

  // jsx do componente
  return (
    <h1>Bem-vind{genero == 'f' ? 'a' : 'o'} {nome}</h1>
  )
}

const App = () => {

  const alunos = [
    {
      nome: "Levi",
      genero: "m"
    },
    {
      nome: "Alexandre",
      genero: "m"
    },
    {
      nome: "Nayara",
      genero: "f"
    },
    {
      nome: "Liana",
      genero: "f"
    },
  ]

  return (
    <>
      {/* <BoasVindas nome="Levi" genero="m" />
      <BoasVindas nome="Alexandre" genero="m" />
      <BoasVindas nome="Nayara" genero="f" />
      <BoasVindas nome="Liana" genero="f" /> */}

      {
        alunos.map(aluno => (
          <BoasVindas 
            nome={aluno.nome} 
            genero={aluno.genero} 
          />
        ))
      }
    </>
  )
}

export default App;