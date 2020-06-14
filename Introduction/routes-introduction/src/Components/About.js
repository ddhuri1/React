import React from 'react';
import HocForAbout from '../HOC/HocForAbout';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">ABOUT</h4>
        <p>When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on. Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan weavers and their families. The company breaks down different pieces of the story into sections that combine words and easily digestible graphics, painting a picture instead of big chunks of text. They're clear about why they're different: "Not a Charity," the page reads. And then: "This is the basis for a brighter future, built on a hand up, not a handout."</p>
        </div>
    )
}

export default HocForAbout(About);
