import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../api/users'

export function User({ id }) {
  const userInfoQUery = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserInfo(id),
  })
  const userInfo = userInfoQUery.data ?? {}
  return <strong>{userInfo?.username ?? id}</strong>
}
