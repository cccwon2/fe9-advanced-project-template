import apiClient from './client'

export const getUserProfile = async () => {
  const response = await apiClient.get('/user/profile')
  return response.data
}

export const updateUserProfile = async (userData: Record<string, unknown>) => {
  const response = await apiClient.put('/user/profile', userData)
  return response.data
}
