const users = [
  { email: 'admin@bb.com', password: '123', role: 'admin' },
  { email: 'user@bb.com', password: '123', role: 'user' },
]

export function login(email: string, password: string) {
  return users.find(u => u.email === email && u.password === password)
}

export function register(email: string, password: string, role: string) {
  users.push({ email, password, role })
}