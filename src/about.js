const loadContent = () => {
    const about = document.createElement("div");
    about.classList.add("about");
    about.innerHTML = "<h1>About</h1>";

    const aboutDesc = document.createElement("h4");
    aboutDesc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam. Massa id neque aliquam vestibulum morbi blandit. Sagittis aliquam malesuada bibendum arcu vitae. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Felis donec et odio pellentesque diam volutpat commodo sed. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Arcu vitae elementum curabitur vitae nunc. Dignissim diam quis enim lobortis. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent."

    about.appendChild(aboutDesc);

    return about;
  }
  
  export {loadContent};