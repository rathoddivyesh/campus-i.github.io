const panoImage = new PANOLENS.ImagePanorama("images/img.jpg");
const imageContainer = document.querySelector(".img_container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    // autoRotateSpeed: 0.9
});
viewer.add(panoImage);