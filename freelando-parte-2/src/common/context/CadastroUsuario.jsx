import { createContext, useContext, useState } from "react";
import { estadosBrasileiros } from "../../pages/PaginaInicial";

const usuarioInicial = {
  interesse: '',
  nomeCompleto: '',
  uf: '',
  cidade: '',
  email: '',
  senha: '',
  senhaConfirmada: ''
}

export const CadastroUsuarioContext = createContext({
  usuario: usuarioInicial,
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirmada: () => null,
  possoSelecionarInteresse: () => null,
  submeterUsuario: () => null
});
CadastroUsuarioContext.displayName = 'Usuario'

export default function CadastroUsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(usuarioInicial);

  const setPerfil = (perfil) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, perfil }))
  }
  const setInteresse = (interesse) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, interesse }))
  }
  const setNomeCompleto = (nomeCompleto) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, nomeCompleto }))
  }
  const setUf = (uf) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, uf }));
  }
  const setCidade = (cidade) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, cidade }));
  }
  const setEmail = (email) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, email }));
  }
  const setSenha = (senha) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, senha }));
  }
  const setSenhaConfirmada = (senhaConfirmada) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, senhaConfirmada }));
  }

  const possoSelecionarInteresse = () => {
    return !!usuario.perfil
  }

  const submeterUsuario = (usuario) => {
    setUsuario(estadoAnterior => ({ ...estadoAnterior, ...usuario }))
  }


  return (
    <CadastroUsuarioContext.Provider value={{
      usuario,
      setPerfil,
      setInteresse,
      setNomeCompleto,
      setCidade,
      setEmail,
      setSenha,
      setSenhaConfirmada,
      setUf,
      possoSelecionarInteresse,
      submeterUsuario
    }}>
      {children}
    </CadastroUsuarioContext.Provider>
  )
}

export const useCadastroUsuario = () => {
  const {
    usuario,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    setUf,
    possoSelecionarInteresse,
    submeterUsuario
  } = useContext(CadastroUsuarioContext)

  return {
    usuario,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    setUf,
    possoSelecionarInteresse,
    submeterUsuario
  }
}