import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import salaImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../hooks/useMenu"
import MenuItem from "../../Shared/MenuItem/MenuItem"
import MenuCategory from "./MenuCategory"

const Menu = () => {

    const [menu] = useMenu();
    console.log(menu.length)


    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    // console.log(offered)
    // console.log(dessert)
    // console.log(pizza)
    // console.log(salad)
    // console.log(soup)



    return (
        <div className="">
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'OUR MENU'}
                details={'Would you like to try a dish?'}
            ></Cover>

            <SectionTitle
                heading={"Today's Offer"}
                subHeading={"Don't miss"}
            ></SectionTitle>


            {/* offered section------------> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {offered.slice(0, 4).map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>


            {/* cover এবং menuCategory এক সাথে একই ফাইল থেকে */}

              {/* dessert section------------> */}
            <MenuCategory
                item={dessert}
                title={'dessert'}
                details={'Dessert you like to try a dish?'}
                coverImg={dessertImg}
            ></MenuCategory>

            {/*pizza section------------> */}
            <MenuCategory
                item={pizza}
                title={'pizza'}
                details={'Pizza you like to try a dish?'}
                coverImg={pizzaImg}
            ></MenuCategory>



            {/*salad section------------> */}
            <MenuCategory
                item={salad}
                title={'salad'}
                details={'Salad you like to try a dish?'}
                coverImg={salaImg}
            ></MenuCategory>


            {/* soup section------------> */}
            <MenuCategory
                item={soup}
                title={'soup'}
                details={'soup you like to try a dish?'}
                coverImg={soupImg}
            ></MenuCategory>


        </div>
    )
}

export default Menu
