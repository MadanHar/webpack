import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

export default () => {
    let image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
};



