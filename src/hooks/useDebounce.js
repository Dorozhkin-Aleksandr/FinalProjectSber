import { useEffect, useState } from "react"


export const useDebounce = (value, ms = 0) => {
    const [debouncedState, setDebouncedState] = useState(value)

useEffect(() => {
    const id = setTimeout(() => {
        setDebouncedState(value)
    }, ms)
    return () => clearTimeout(id)
}, [ms, value])
return debouncedState
}