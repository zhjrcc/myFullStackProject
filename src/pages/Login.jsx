import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../api/users'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [, setToken] = useAuth()

  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: () => login({ username, password }),
    onSuccess: (data) => {
      setToken(data.token)
      navigate('/')
    },
    onError: () => console.log('登录失败'),
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    loginMutation.mutate()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Link to='/'>返回主页</Link>
      <div>
        <label htmlFor='create-username'>用户名：</label>
        <input
          type='text'
          name='create-username'
          id='create-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-password'>密码：</label>
        <input
          type='password'
          name='create-password'
          id='create-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <input
        type='submit'
        value={loginMutation.isPending ? '登录中...' : '登录'}
        disabled={!username || !password || loginMutation.isPending}
      />
    </form>
  )
}
