import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom/dist";
import Formulario from "../../components/Formulario";

export default function DadosPessoais() {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="body" componente="body">
        Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
      </Tipografia>
      <Formulario />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'left' }}>
            <Botao variante="secundaria">
              Anterior
            </Botao>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <Link to={'/cadastro/dados-pessoais'}>
              <Botao>
                Próxima
              </Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}