import './style.css';
import Icon from './mendle-logo.jpg';
import { loadContent } from './landing';

const load = () => {
  const headerLogo = document.createElement('div');
  const contentContainer = document.getElementById("content");
  const navBar = document.createElement('nav');

  const myIcon = new Image(300, 300);
  myIcon.src = Icon;

  const navList = document.createElement('ul');
  const nav1 = document.createElement('li');
  nav1.innerHTML = 'Home';
  navList.appendChild(nav1);
  const nav2 = document.createElement('li');
  nav2.innerHTML = 'Menu';
  navList.appendChild(nav2);
  const nav3 = document.createElement('li');
  nav3.innerHTML = 'About';
  navList.appendChild(nav3);

  navBar.appendChild(navList);

  headerLogo.appendChild(myIcon);
  contentContainer.appendChild(headerLogo);
  contentContainer.appendChild(navBar);

  const content = loadContent();
  contentContainer.appendChild(content)
}

export { load };