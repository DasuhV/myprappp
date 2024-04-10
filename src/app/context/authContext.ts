import { createContext } from 'react'
export interface AuthContext {
	isAuth: boolean
}
export const AuthContext = createContext(	null)