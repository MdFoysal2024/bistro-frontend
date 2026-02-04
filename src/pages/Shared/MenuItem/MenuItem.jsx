
const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="flex gap-4 bg-base-200 p-6 rounded-lg">
            <img src={image} alt={name} className="w-30 rounded-tr-full rounded-br-full rounded-bl-full" />

            <div>
                <h3 className="uppercase font-semibold">{name} ----------</h3>
                <p className="text-sm text-gray-500">{recipe}</p>
            </div>

            <p className="text-yellow-500 font-bold">${price}</p>
        </div>
        
    )
}

export default MenuItem
