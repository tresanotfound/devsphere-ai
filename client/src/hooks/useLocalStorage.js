import { useState } from 'react';

function useLocalStorage(key, initialValue) {

  const [storedValue, setStoredValue]
    = useState(initialValue);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;