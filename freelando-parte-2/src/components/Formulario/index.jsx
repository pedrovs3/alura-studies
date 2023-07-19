import { Col, Row } from "react-grid-system";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSupensa } from "../ListaSuspensa/ListaSuspensa";
import { estadosBrasileiros } from "../../pages/PaginaInicial";

export default function Formulario() {
  return (
    <>
      <Row>
        <Col>
          <CampoTexto titulo="Nome Completo" />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <CampoTexto titulo="Cidade" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="E-mail" />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto titulo="Senha" />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto titulo="Repita a Senha" />
        </Col>
      </Row>
    </>
  )
}