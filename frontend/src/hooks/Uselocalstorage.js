import { useState } from "react";

function useLocalStorage(key, initialValue) {

    //set the state to store the value
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        
        try {
            //gets the "key" that is parssed thorugh the function call
            const item = window.localStorage.getItem(key)
            // if there is a key its getting parsed if there is no key it returns the value
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {

            //allwos the value to be a function so its the same API as useState
            const valueToStore = 
            value instanceof Function ? value(storedValue) : value

            //saves the state
            setStoredValue(valueToStore)

            //saves the state to local storage
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage