import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../components/Tipografia/Tipografia"
import cliente from '../../assets/img/cliente.png'
import freela from '../../assets/img/freela.png'
import { Link } from "../../components/Link/Link"
import { Link as RouterLink } from "react-router-dom/dist"

export default function SelecaoCliente() {

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante={"h1"} componente={"h1"}>
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante={"h3"} componente={"h2"}>
        Como podemos te ajudar?
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <img src={cliente} alt="Cliente" />
          <Tipografia variante="body" componente="body">
            Sou cliente e preciso de um freela!
          </Tipografia>
        </Col>
        <Col md={6} sm={12}>
          {/* RouterLink (Link router dom) serve para redirecionamento entre telas  */}
          <RouterLink to={'interesses'}>
            <img src={freela} alt="Freelancer" />
            <Tipografia variante="body" componente="body">
              Sou um freela e preciso de clientes!
            </Tipografia>
          </RouterLink>
        </Col>
      </Row>
      <div>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Link variante="secundaria">
            Faça login!
          </Link>
        </p>
      </div>
    </div>
  )
}