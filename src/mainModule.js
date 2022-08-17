import './style.css';
import Icon from './mendle-logo.jpg';
import { loadContent as landingContent } from './landing';
import { loadContent as menuContent } from './menu';
import { loadContent as aboutContent } from './about';


const updateContent = (tabName) => {
  const contentContainer = document.getElementById("content");
  const tabContent = document.createElement('div');
  tabContent.classList.add("tabContent")

  if(tabName == "home") {
    if(document.querySelector('.tabContent') != null) {
      const prevContent = document.querySelector('.tabContent');
      prevContent.innerHTML = " ";
      console.log(prevContent)
      prevContent.remove();
    }
    const content = landingContent();
    tabContent.appendChild(content);
    contentContainer.appendChild(tabContent).focus();
    tabContent.focus();
  } else if(tabName == "menu") {
    const prevContent = document.querySelector('.tabContent');
    prevContent.innerHTML = " ";
    prevContent.remove();
    const content = menuContent();
    tabContent.appendChild(content);
    contentContainer.appendChild(tabContent);
    tabContent.focus();
  } else {
    const prevContent = document.querySelector('.tabContent');
    prevContent.innerHTML = " ";
    prevContent.remove();
    const content = aboutContent();
    tabContent.appendChild(content);
    contentContainer.appendChild(tabContent)
    tabContent.focus();
  }
}

const load = (tabName) => {
  const contentContainer = document.getElementById("content");
  
  const headerLogo = document.createElement('div');
  const navBar = document.createElement('nav');

  const myIcon = new Image(300, 300);
  myIcon.src = Icon;

  const navList = document.createElement('ul');
  const nav1 = document.createElement('li');
  nav1.classList.add("tab");
  nav1.id = "home";
  nav1.innerHTML = 'Home';
  navList.appendChild(nav1);
  const nav2 = document.createElement('li');
  nav2.innerHTML = 'Menu';
  nav2.id = "menu";
  nav2.classList.add("tab");
  navList.appendChild(nav2);
  const nav3 = document.createElement('li');
  nav3.innerHTML = 'About';
  nav3.id = "about";
  nav3.classList.add("tab");
  navList.appendChild(nav3);

  navBar.appendChild(navList);

  headerLogo.appendChild(myIcon);
  contentContainer.appendChild(headerLogo);
  contentContainer.appendChild(navBar);

  updateContent(tabName);

}

export { load, updateContent };