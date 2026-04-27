export const VisitorCard = ({ visitor }) => {
  return (
    <div className="visitor-card">
      <h3>{visitor.name}</h3>
      <p>Email: {visitor.email}</p>
      <p>Phone: {visitor.phone}</p>
      <p>Purpose: {visitor.purpose}</p>
      <span className={`status ${visitor.status}`}>{visitor.status}</span>
    </div>
  )
}
