import { useEffect, useState } from "react";

// Custom hook for debouncing a value
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after a delay
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout on unmount or when value or delay changes
    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
