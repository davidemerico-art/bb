type UserRole = 'admin' | 'user';

type User = {
  email: string;
  password: string;
  role: UserRole;
};

const users: User[] = [
  { email: 'admin@bb.com', password: '123', role: 'admin' },
  { email: 'user@bb.com', password: '123', role: 'user' },
];

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function login(email: string, password: string) {
  const normalizedEmail = normalizeEmail(email);
  const sanitizedPassword = password.trim();
  return users.find(
    (user) => user.email === normalizedEmail && user.password === sanitizedPassword
  );
}

export function register(email: string, password: string, role: UserRole = 'user') {
  const normalizedEmail = normalizeEmail(email);
  const sanitizedPassword = password.trim();

  if (!normalizedEmail || !sanitizedPassword) {
    return { ok: false, message: 'Email e password sono obbligatorie.' } as const;
  }

  const alreadyExists = users.some((user) => user.email === normalizedEmail);
  if (alreadyExists) {
    return { ok: false, message: 'Email gia registrata.' } as const;
  }

  users.push({ email: normalizedEmail, password: sanitizedPassword, role });
  return { ok: true } as const;
}