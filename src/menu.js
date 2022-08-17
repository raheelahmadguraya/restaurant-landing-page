import pastry from './Pastry.jpg';
import painting from './Boy_with_apple.jpg'

const loadContent = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = "<h1>MENU</h1>";

    const myIcon = new Image(400, 300);
    myIcon.src = pastry;
    const menuItem1 = document.createElement("h4");
    menuItem1.innerHTML = "<i>Courtesan au Chocolat</i><br>1 Klubeck"

    const myIcon2 = new Image(400, 300);
    myIcon2.src = pastry;
    const menuItem2 = document.createElement("h4");
    menuItem2.innerHTML = "<i>Pastry-Covered Hammer</i><br>Please Inquire in Store"

    const myIcon3 = new Image(300, 400);
    myIcon3.src = painting;
    const menuItem3 = document.createElement("h4");
    menuItem3.innerHTML = "<i>Boy with Apple</i><br>Missing"

    menu.appendChild(myIcon);
    menu.appendChild(menuItem1);
    menu.appendChild(myIcon2);
    menu.appendChild(menuItem2);
    menu.appendChild(myIcon3);
    menu.appendChild(menuItem3);
  
    return menu;
  }
  
  export {loadContent};