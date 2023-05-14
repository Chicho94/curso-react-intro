import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
        if (localStorageItem) {
          setItem(JSON.parse(localStorageItem));
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { id: 1, text: "Wild Boar - Tenderloin", completed: false },
//   { id: 2, text: "Glass - Juice Clear 5oz 55005", completed: true },
//   { id: 3, text: "Wine - Peller Estates Late", completed: false },
//   { id: 4, text: "Nut - Walnut, Pieces", completed: true },
//   { id: 5, text: "Gherkin", completed: false },
//   { id: 6, text: "Pineapple - Regular", completed: false },
//   { id: 7, text: "Cocktail Napkin Blue", completed: true },
//   { id: 8, text: "Sachet", completed: true },
//   { id: 9, text: "Banana", completed: false },
//   { id: 10, text: "Daikon Radish", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
