'use client';
import NewItem from "./new-item";

export default function Page(Item) {
    return (
        <main className="text-black m-4">
            <div>
                <NewItem />
            </div>
        </main>
    );
}