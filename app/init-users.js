// Se ejecuta al inicio de la app para crear usuarios de ejemplo
if (typeof window !== "undefined") {
  const existing = localStorage.getItem("users:v1");
  if (!existing) {
    localStorage.setItem("users:v1", JSON.stringify([
      { name: "Admin", email: "admin@test.com", password: "1234" },
      { name: "Juan", email: "juan@test.com", password: "abcd" },
      { name: "test", email: "test@test.com", password: "test" }
    ]));
  }
}