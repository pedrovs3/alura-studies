export default function UserPage({ params }) {
  const { name } = params
  return (
    <h1>{name}</h1>
  )
}