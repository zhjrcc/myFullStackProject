export function PostFilter({ field, value, onChange }) {
  return (
    <div>
      <h3>过滤</h3>
      <label htmlFor={`filter-${field}`}>{field}:</label>
      <input
        type='text'
        name={`filter-${field}`}
        id={`filter-${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
