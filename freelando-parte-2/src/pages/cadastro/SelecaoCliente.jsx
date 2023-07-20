import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../components/Tipografia/Tipografia"
import cliente from '../../assets/img/cliente.png'
import freela from '../../assets/img/freela.png'
import { Link } from "../../components/Link/Link"
import { Link as RouterLink } from "react-router-dom/dist"
import { useNavigate, Navigate } from "react-router-dom/dist"
import HeaderTitles from "../../components/HeaderTitles"
import { useCadastroUsuario } from "../../common/context/CadastroUsuario"

export default function SelecaoCliente() {
  const { setPerfil } = useCadastroUsuario();

  return (
    <div style={{ textAlign: "center" }}>
      <HeaderTitles
        title={'Crie seu cadastro'}
        subtitle={'Como podemos te ajudar?'}
      />
      <Row>
        <Col md={6} sm={12}>
          {/* RouterLink (Link router dom) serve para redirecionamento entre telas  */}
          <RouterLink to={'interesses'} onClick={() => setPerfil('cliente')}>
            <img src={cliente} alt="Cliente" />
            <Tipografia variante="body" componente="body">
              Sou cliente e preciso de um freela!
            </Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12}>
          <img src={freela} alt="Freelancer" />
          <Tipografia variante="body" componente="body">
            Sou um freela e preciso de clientes!
          </Tipografia>
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