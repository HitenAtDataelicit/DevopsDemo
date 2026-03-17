import { useState, useEffect } from "react"
import { getItems, addItem } from "../api"

export default function Items() {

  const [items, setItems] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const data = await getItems()
    setItems(data)
  }

  const submit = async () => {
    await addItem(name)
    setName("")
    load()
  }

  return (
    <div>
      <h2>Items</h2>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={submit}>
        Add
      </button>

      <ul>
        {items.map(i => (
          <li key={i._id}>{i.name}</li>
        ))}
      </ul>
    </div>
  )
}