import { Tipografia } from "../Tipografia/Tipografia";

export default function HeaderTitles({ title, subtitle }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        {title}
      </Tipografia>
      {subtitle ? (
        <Tipografia variante="body" componente="body">
          {subtitle}
        </Tipografia>
      ) : (<></>)}
    </div>
  )
}