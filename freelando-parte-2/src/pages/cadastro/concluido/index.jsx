import { Tipografia } from "../../../components/Tipografia/Tipografia";
import concluido from "../../../assets/img/concluido.png"
import { Botao } from "../../../components/Botao/Botao";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import HeaderTitles from "../../../components/HeaderTitles";

export default function Concluido() {
  return (
    <div style={{ textAlign: "center" }}>
      <HeaderTitles
        title={'Seu perfil está completo'}
        subtitle={'Agora é só começar a se conectar com os melhores freelancers do mercado!'}
      />
      <img src={concluido} alt="Imagem ilustrativa de uma pessoa" style={{
        width: "100%"
      }} />
      <div style={{ textAlign: 'center', paddingTop: "10px" }}>
        <Link to="..">
          <Botao variante="secundaria">
            <div style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <FaArrowLeft />
              voltar para a home
            </div>
          </Botao>
        </Link>
      </div>
    </div>
  )
}