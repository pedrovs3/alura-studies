import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom/dist";
import Formulario from "../../components/Formulario";
import HeaderTitles from "../../components/HeaderTitles";

export default function DadosPessoais() {
  return (
    <div>
      <HeaderTitles
        title={'Crie seu cadastro'}
        subtitle={'Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.'}
      />
      <Formulario />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'left' }}>
            <Link to="/cadastro/interesses">
              <Botao variante="secundaria">
                Anterior
              </Botao>
            </Link>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <Link to={'/cadastro/concluido'}>
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