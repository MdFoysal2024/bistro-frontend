
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;

    const handleAddToCart = food => {
        console.log(food)
    }



    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="">
                    <img
                        src={image}
                        alt="image loading..." />
                </figure>
                <p className="absolute bg-gray-700 px-2 text-yellow-400 font-medium right-0 mt-2 mr-4 ">${price}</p>
                <div className="card-body flex justify-center items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>


                    <div className=' flex justify-center mt-10 mx-auto '>
                        <button
                            onClick={()=>handleAddToCart(item)}
                            className='btn btn-outline bg-slate-700 hover:bg-slate-400  hover:text-black border-0 border-b-4 rounded-lg'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
