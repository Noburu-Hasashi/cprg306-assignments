export default function Item({ id, name, quantity, category } ) {
    return(
        <main>
            <div className="bg-slate-900 max-w-sm p-2 m-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>Buy {quantity} in {category}</p>
            </div>
        </main>
    );
}