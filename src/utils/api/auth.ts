import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function login(payload: { username: string; password: string }) {
  try {
    const { data } = await api({
      url: `/auth/login/`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

// export async function getUser(id: number) {
//   try {
//     const { data } = await api({
//       url: `/auth/user/${id}/`,
//       // data: payload,
//     })

//     return data
//   } catch (error) {
//     throw error
//   }
// }

export async function logout() {
  try {
    const { data } = await api({
      url: `/logout`,
      method: 'POST',
    })

    return data
  } catch (error) {
    throw error
  }
}
