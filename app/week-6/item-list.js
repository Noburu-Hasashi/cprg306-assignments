"use client"

import Item from "./item";
import itemData from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const items = itemData.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }});

    return(
        <main>
        <div>
            <label htmlFor="sort">Sort by:</label>
            <button className={`bg-${sortBy === "name" ?  "orange-500" : "orange-700"} p-1 m-2 w-28 text-white`} onClick={() => setSortBy("name")}>Name</button>
            <button className={`bg-${sortBy === "category" ?  "orange-500" : "orange-700"} p-1 m-2 w-28 text-white`} onClick={() => setSortBy("category")}>Category</button>
        </div>
        {items.map((item) => (
            <Item name={item.name} quantity={item.quantity} category={item.category} />
        ))}
        </main>
    );}