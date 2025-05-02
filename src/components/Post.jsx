import { User } from './User'
export function Post({ title, contents, author }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <em>
          <br />
          作者：
          <User id={author} />
        </em>
      )}
    </article>
  )
}
