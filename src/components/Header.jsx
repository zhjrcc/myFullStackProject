import { jwtDecode } from 'jwt-decode'
import { User } from './User'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export function Header() {
  const [token, setToken] = useAuth()
  if (token) {
    const { sub } = jwtDecode(token)
    return (
      <div>
        当前用户：
        <User id={sub} />
        <br />
        <button onClick={() => setToken(null)}>退出登录</button>
      </div>
    )
  }
  return (
    <div>
      <Link to='/login'>登录</Link> | <Link to='/signup'>注册</Link>
    </div>
  )
}
