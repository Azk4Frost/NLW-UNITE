let participantes = [
 {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 20),
    dataCheckIn: null,
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 12, 30, 19, 23),
    dataCheckIn: new Date(2024, 12, 11, 20, 20),
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 15, 10, 30),
    dataCheckIn: new Date(2024, 0, 20, 15, 45),
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 3, 01, 14, 10),
    dataCheckIn: new Date(2024, 3, 05, 18, 30),
  },
  {
    nome: "Juliana Santos",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 4, 10, 12, 05),
    dataCheckIn: null,
  },
  {
    nome: "Rafaela Lima",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 6, 03, 17, 20),
    dataCheckIn: new Date(2024, 6, 07, 21, 15),
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 7, 12, 11, 45),
    dataCheckIn: null,
  },
  {
    nome: "Carolina Silva",
    email: "carolina@gmail.com",
    dataInscricao: new Date(2024, 8, 25, 13, 55),
    dataCheckIn: new Date(2024, 8, 30, 18, 20),
  },
  {
    nome: "Marcelo Santos",
    email: "marcelo@gmail.com",
    dataInscricao: new Date(2024, 9, 08, 09, 10),
    dataCheckIn: new Date(2024, 9, 12, 12, 30),
  },
  {
    nome: "Aline Costa",
    email: "aline@gmail.com",
    dataInscricao: new Date(2024, 10, 18, 15, 40),
    dataCheckIn: null,
  }
];

const criarNovoParticipante = (participante) => {
const dataInscricao = dayjs (Date.now()).to(participante.dataInscricao)
let dataCheckIn = dayjs (Date.now()).to(participante.dataCheckIn)

if(participante.dataCheckIn == null){
  dataCheckIn = `
  <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
  Confirmar Check-in
  </button>
  `
}

  return `
  <tr>
      <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}
const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  document.querySelector('tbody').innerHTML = output
  //pesquisa através do seletor (nome da tag)
} //Arrow Function

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find (
    (p) => {
      return p.email == participante.email
    }
  )

    if(participanteExiste) {
      alert("EMAIL JA CADASTRADO")
      return
    }

  participantes = [participante, ...participantes]
  atualizarLista (participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  if (confirm ("tem certeza que deseja realizar o check in?") == false ){
    return
  }

  const participante = participantes.find((p) =>{
    return p.email == event.target.dataset.email 
  })

  participante.dataCheckIn = new Date ()

  atualizarLista(participantes)
}