"use client"

import ItemList from "./item-list";
import { sortByName } from "./item-list";
import NewItem from "../week-6/new-item";
import itemsData from "./items.json";



export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) =>{
      setItems([...items, item]);
    }

    return (
      <main className="bg-slate-950">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList />
      </main>
    );
  }