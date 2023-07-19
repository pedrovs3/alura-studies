import GrupoRadio from "../../components/GrupoRadio";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import options from '../../common/data/interesses'
import { useState } from "react";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom/dist";

export default function Interesses() {
  const [opcao, setOpcao] = useState('');

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h3">
        Qual a área de interesse?
      </Tipografia>
      <GrupoRadio opcoes={options} onChange={setOpcao} valor={opcao} />
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