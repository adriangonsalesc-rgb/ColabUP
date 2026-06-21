/* ==========================================================================
   ColabUp — Auth simulation (localStorage based)
   Provides a tiny "users db" + session handling so login/register/dashboard
   behave like a real authenticated flow without a backend.
   ========================================================================== */
const ColabAuth = (() => {
  const USERS_KEY = 'colabup_users';
  const SESSION_KEY = 'colabup_session';

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  // Seed a demo account so the login page is usable on a fresh browser.
  function seedDemoUser() {
    const users = getUsers();
    if (!users.find(u => u.email === 'demo@colabup.app')) {
      users.push({
        name: 'Usuario Demo',
        email: 'demo@colabup.app',
        password: 'ColabUp2026!',
        createdAt: new Date().toISOString(),
      });
      saveUsers(users);
    }
  }

  function findUser(email) {
    return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  function register({ name, email, password }) {
    const users = getUsers();
    if (findUser(email)) {
      return { ok: false, error: 'Ya existe una cuenta registrada con ese correo.' };
    }
    users.push({ name, email, password, createdAt: new Date().toISOString() });
    saveUsers(users);
    return { ok: true };
  }

  function login({ email, password, remember }) {
    const user = findUser(email);
    if (!user || user.password !== password) {
      return { ok: false, error: 'Correo o contraseña incorrectos.' };
    }
    const session = { email: user.email, name: user.name, loginAt: new Date().toISOString() };
    if (remember) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }
    return { ok: true };
  }

  function getSession() {
    try {
      const fromLocal = JSON.parse(localStorage.getItem(SESSION_KEY));
      const fromSession = JSON.parse(sessionStorage.getItem(SESSION_KEY));
      return fromLocal || fromSession || null;
    } catch {
      return null;
    }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  }

  function requireAuth(redirectTo = 'login.html') {
    if (!getSession()) {
      window.location.href = redirectTo;
    }
  }

  function redirectIfAuthed(redirectTo = 'dashboard.html') {
    if (getSession()) {
      window.location.href = redirectTo;
    }
  }

  seedDemoUser();

  return { register, login, getSession, logout, requireAuth, redirectIfAuthed, findUser };
})();
