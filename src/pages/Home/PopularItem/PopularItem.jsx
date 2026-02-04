
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularItem = () => {

    //data  load by custom hooks--->
    const [menu] = useMenu();
    console.log(menu.length)

    const popular = menu.filter(item => item.category === "popular");
    console.log(popular);


    // *direct data  load*------------------------------------------------->



    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         // .then(data => setMenu(data))
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular");
    //             setMenu(popularItems)
    //         })
    // }, []);

    // console.log(menu);
    // console.log(menu.length);

    //------------------------------------------>


    return (
        <div className='my-24'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>

            {/* {menu.length} */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {popular.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>

            <div className=' flex justify-center mt-10 mx-auto '>

                <button className='btn btn-outline  border-0 border-b-4 rounded-lg'>VIEW FULL MENU</button>
            </div>

        </div>
    )
}

export default PopularItem
