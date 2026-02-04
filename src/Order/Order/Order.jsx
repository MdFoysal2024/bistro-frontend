import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../../pages/Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    //category কে path: 'order/:category' থেকে ডিসটাকচার করা হইছে
    console.log(category);

    const inisialIndex = categories.indexOf(category)
    console.log(inisialIndex);

    const [tabIndex, setTabIndex] = useState(inisialIndex);


    const [menu] = useMenu();
    console.log(menu.length)

    ;
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");



    return (
        <div>
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover
                img={orderImg}
                title={'Choice Your Food'}
                details={'Would you like to try a dish?'}
            ></Cover>

            <div className=''>

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList className='flex items-center justify-center my-12'>

                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>


                    <TabPanel>
                        <OrderTab
                            items={salad}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </TabPanel>


                </Tabs>
            </div>




        </div>
    )
}

export default Order
