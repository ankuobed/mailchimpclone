import './Hero.css';
import heroImage from '../../images/heroimage.png';

export default function Hero() {
    return (
        <div className='hero container'>
            <div>
                <p>Marketing smarts for big ideas</p>
                <p>Mailchimp helps small businesses do big things, with the right tools and guidance every step of the way.</p>
                <button>Pick A Plan</button>
            </div>
            <img alt='hero' src={heroImage} />
        </div>
    )
}
