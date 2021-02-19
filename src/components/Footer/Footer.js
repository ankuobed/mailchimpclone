import './Footer.css';

export default function Footer() {
    return (
        <div className='footer container'>
            <div>
                <div className='footer-item'>
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Why Mailchimp?</a></li>
                        <li><a href="#">Product Updates</a></li>
                        <li><a href="#">Email Marketing</a></li>
                        <li><a href="#">Websites</a></li>
                        <li><a href="#">Transactional Email</a></li>
                        <li><a href="#">How We Compare</a></li>
                        <li><a href="#">GDPR Compliance</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Mobile App</a></li>
                    </ul>
                </div>

                <div className='footer-item'>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Guides & Tutorials</a></li>
                        <li><a href="#">Marketing Tips</a></li>
                        <li><a href="#">Marketing Glossary</a></li>
                        <li><a href="#">Browse by Topic</a></li>
                        <li><a href="#">Integrations Directory</a></li>
                    </ul>
                </div>

                <div className='footer-item'>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Agencies & Freelance</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>

                <div className='footer-item'>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Annual Report</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className='footer-item'>
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Hire an Expert</a></li>
                    </ul>
                </div>

                <div className='footer-item'>
                    <img alt='mailchimp presents' src='https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?q=95'/>
                    <p>Films, podcasts and original series that celebrate the entrepreneurial spirit.</p>
                    <a>Check it out</a>
                </div>

                <div className='footer-item'>
                    <img alt='mailchimp' src='https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?q=95' />
                    <p>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</p>
                    <a>Learn More</a>
                </div>
                
            </div>

            <div>
                <div className='download'>
                    <img src='https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?q=95' />
                </div>

                <div className='social'>
                    <img src='https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?q=95' />
                    <img src='https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?q=95' />
                </div>

                <div className='rights'>
                    <select>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>Portuguese</option>
                        <option>Dutch</option>
                    </select>

                    <p>©2001-2021 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <span>Privacy & Terms</span></p>
                </div>
            </div>
            
        </div>
    )
}
