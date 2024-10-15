import MenuExperience from '../components/MenuExperience.jsx';
import MenuActivity from '../components/MenuActivity.jsx';
import MenuDrink from '../components/MenuDrink.jsx';
import MenuDessert from '../components/MenuDessert.jsx';
import MenuDessertTitle from '../components/MenuDessertTitle.jsx';
import Footerr from '../components/Footerr.jsx';



const Menu =()=>{
    return(
        <div>
            <MenuDessertTitle />
            <MenuDessert />
            <MenuDrink />
            <MenuExperience />
            <MenuActivity />
            <Footerr />
            {/* 可以添加其他組件 */}
        </div>
    );
};

export default Menu;