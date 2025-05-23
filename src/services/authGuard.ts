import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const auth = getAuth()

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe()

    if (user) {
      next()
    } else {
      next('/home')
    }
  })
}
