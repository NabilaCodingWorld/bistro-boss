import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import photos from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

const [menu] = useMenu();

const dessert = menu.filter(item => item.category === 'dessert')
const soup = menu.filter(item => item.category === 'soup')
const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')
const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Menu </title>
            </Helmet>

            <Cover img={photos} title={"our menu"}></Cover>

             {/* main cover */}
            <SectionTitle subHeading={"Don't miss todays Offer"} heading={"Today's Offer"} ></SectionTitle>

             
             {/* offered menu */}
            <MenuCategory items={offered}></MenuCategory>


            {/* dessert menu */}
            <MenuCategory
            items={dessert}
            title={"dessert"}
            img = {dessertImg}
            ></MenuCategory>

            {/* soup menu */}
            <MenuCategory
            items={soup}
            title={"soup"}
            img = {soupImg}
            ></MenuCategory>

            {/* salad menu */}
            <MenuCategory
            items={salad}
            title={"salad"}
            img = {saladImg}
            ></MenuCategory>

            {/* pizza menu */}
            <MenuCategory
            items={pizza}
            title={"pizza"}
            img = {pizzaImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;
