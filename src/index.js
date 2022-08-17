import { load, updateContent } from './mainModule'

load("home");

const list = document.querySelectorAll('.tab');

list.forEach((element => {
  element.addEventListener("click", event => {
    updateContent(event.target.id);
  })
}))

