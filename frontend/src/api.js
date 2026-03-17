const API = "http://localhost/api"

export const getItems = async () => {
  const res = await fetch(`${API}/items`)
  return res.json()
}

export const addItem = async (name) => {
  await fetch(`${API}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })
}