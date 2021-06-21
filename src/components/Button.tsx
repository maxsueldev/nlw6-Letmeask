import { useState } from "react"

export function Button() {
  const [counter, setCounter] = useState(0); //Estado do componente

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}