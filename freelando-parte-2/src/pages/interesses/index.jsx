import GrupoRadio from "../../components/GrupoRadio";
import options from '../../common/data/interesses'
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link, useNavigate } from "react-router-dom/dist";
import { useCadastroUsuario } from "../../common/context/CadastroUsuario";
import HeaderTitles from "../../components/HeaderTitles";

export default function Interesses() {
  const [opcao, setOpcao] = useState('');
  const { setInteresse, possoSelecionarInteresse } = useCadastroUsuario()
  const navigate = useNavigate()

  const handleClick = () => {
    setInteresse(options.find((item) => item.valor === opcao).label)
  }

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navigate('/cadastro')
    }
  }, [possoSelecionarInteresse, navigate])

  return (
    <>
      <HeaderTitles title={'Crie seu cadastro'} subtitle={'Qual a área de interesse?'} />
      <div style={{ textAlign: "center" }}>
        <GrupoRadio opcoes={options} onChange={setOpcao} valor={opcao} />
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: 'left' }}>
              <Link to="..">
                <Botao variante="secundaria">
                  Anterior
                </Botao>
              </Link>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: 'right' }} onClick={handleClick}>
              <Link to={'/cadastro/dados-pessoais'}>
                <Botao>
                  Próxima
                </Botao>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}