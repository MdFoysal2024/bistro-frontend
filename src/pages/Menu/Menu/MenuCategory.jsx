import { Link } from "react-router-dom"
import Cover from "../../Shared/Cover/Cover"
import MenuItem from "../../Shared/MenuItem/MenuItem"

const MenuCategory = ({ item, coverImg, title, details }) => {
    return (
        <div className="my-24">
 
            {
                title && <Cover img={coverImg} title={title} details={details}></Cover>
            }

            <div className="my-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {item.slice(0, 4).map(item => (
                        <MenuItem key={item._id} item={item} />
                    ))}
                </div>
                <div className=' flex justify-center mt-10 mx-auto '>
                    <Link to={`/order/${title}`}>
                        <button className='btn btn-outline  border-0 border-b-4 rounded-lg'>VIEW FULL MENU</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuCategory
