import { User } from '@/types'
import { atom } from 'jotai'

export const userAtom = atom<User | null>(null)
export const loadingAtom = atom<boolean>(true)
