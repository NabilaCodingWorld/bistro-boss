import React, { useState } from 'react';

import orderImg from '../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import './Order.css'; 
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    
    
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>

            <Helmet>
                <title> Bistro Boss | Order </title>
            </Helmet>

            <Cover img={orderImg} title={"OUR SHOP"}></Cover> <br /> <br />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>offered</Tab>
                </TabList> <br /> <br />

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>

                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>

                <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>

                <TabPanel><OrderTab items={offered}></OrderTab></TabPanel>
            </Tabs>
            <br /> <br />
        </div>
    );
};

export default Order;