export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <div>
      <label htmlFor='sortBy'>排列方式</label>
      <select
        name='sortBy'
        id='sortBy'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {fields.map((field) => {
          return (
            <option value={field} key={field}>
              {field}
            </option>
          )
        })}
      </select>
      {' / '}
      <label htmlFor='sortOrder'>排列顺序</label>
      <select
        name='sortOrder'
        id='sortOrder'
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
      >
        <option value='ascending'>ascending</option>
        <option value='descending'>descending</option>
      </select>
    </div>
  )
}
