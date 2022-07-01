import { AuthContextProvider } from './contexts/auth/AuthContext'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <NavigationProvider>
        <Dripsy>{children}</Dripsy>
      </NavigationProvider>
    </AuthContextProvider>
  )
}
