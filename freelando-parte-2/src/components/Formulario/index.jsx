import { Col, Row } from "react-grid-system";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSupensa } from "../ListaSuspensa/ListaSuspensa";
import { estadosBrasileiros } from "../../pages/PaginaInicial";
import { useCadastroUsuario } from "../../common/context/CadastroUsuario";

export default function Formulario() {
  const {
    usuario,
    setNomeCompleto,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    setUf
  } = useCadastroUsuario();

  return (
    <>
      <Row>
        <Col>
          <CampoTexto titulo="Nome Completo" value={usuario.nomeCompleto} onChange={setNomeCompleto} type='text' />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} value={usuario.uf} onChange={setUf} />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <CampoTexto titulo="Cidade" value={usuario.cidade} onChange={setCidade} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="E-mail" value={usuario.email} onChange={setEmail} type={'email'} />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto titulo="Senha" value={usuario.senha} onChange={setSenha} type={'password'} />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto titulo="Repita a Senha" value={usuario.senhaConfirmada} onChange={setSenhaConfirmada} type={'password'} />
        </Col>
      </Row>
    </>
  )
}