import axios from "axios";
import { useEffect, useState } from "react";

export function JokeCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios.get<string[]>('https://api.chucknorris.io/jokes/categories')
      .then(response =>  setCategories(response.data))
  }, []);

  return <ul>
    {categories.map(category => <li key={category}>{category}</li>)}
  </ul>
}
