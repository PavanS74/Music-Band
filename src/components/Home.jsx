import React from 'react';


function Home(props){
    return(
        <section className='wrapper'>
            <div className="container">
            <header>
                <h1>DJos</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Album</li>
                    <li>Blog</li>
                    <li>Content</li>
                    <li>Tours</li>
                </ul>
                <button>Buy Tickets</button>
            </header>
            <div className="content">
                <h1 id='h11'>The Electro-vibes</h1>
                <h1 id='h22'>TAILOR LACHIRI</h1>
                <p>Lorem, ipsum dolor sit amet consectetur  quidem qui ratione, voluptatem quia ipsum. Nulla beatae facilis natus, itaque officia animi doloremque quae.</p>
                <button>Buy Tickets</button>
            </div>  

        </div>
        <div className="container2">
            <h1>UPCOMING EVENTS</h1>
            <div className="event">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/events/event-3.jpg.webp" alt="no image" />
                    <button>Dec 15,2019</button>
                    <h2>David Guetta maimi ultra</h2>
                    <h3>Rajaji Nagar,Bangaluru </h3>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/events/event-2.jpg.webp" alt="no image" />
                    <button>Dec 15,2019</button>
                    <h2>David Guetta maimi ultra</h2>
                    <h3>Rajaji Nagar,Bangaluru </h3>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/events/event-1.jpg.webp" alt="no image" />
                    <button>Dec 15,2019</button>
                    <h2>David Guetta maimi ultra</h2>
                    <h3>Rajaji Nagar,Bangaluru </h3>
                </div>
            </div>
        </div>
        <div className="contact">
            <img src="https://preview.colorlib.com/theme/djoz/img/about/about.png.webp" alt="" />
            <div className="con">
                <h1>About Me</h1>
                <h2>DJ ALEXANDRA RUD</h2>
                <p>DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t enough to sustain.</p>
                <button>Contact Me</button>
            </div>
        </div>
        <div className="video">
            <div className="flex1">
                <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8&t=9s"><img src="https://toppng.com/uploads/preview/facebook-play-button-png-clip-art-white-video-play-butto-11562848811ou9gl8ilch.png" alt="" /></a>
            </div>
            <section>
                <div className="fcard1"> <h1>Wedding</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div className="fcard2"> <h1>Clubs and bar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div>
                <div className="fcard2"> <h1>Corporate events</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div>
                <div className="fcard1"><h1>DJ lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div>
            </section>
        </div>
        <div className="container2">
            <h1>LATEST TRACKS</h1>
            <div className="event">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/youtube/youtube-1.jpg.webp" alt="no image" />
                   
                    <h2>David Guetta Miami Ultra </h2>
                    <h3>Music Festival 2019</h3>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/youtube/youtube-2.jpg.webp" alt="no image" />
                    
                    <h2>David Guetta maimi ultra</h2>
                    <h3>SLAM!Koningsdag</h3>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/djoz/img/youtube/youtube-3.jpg.webp" alt="no image" />
                    
                    <h2>David Guetta maimi ultra</h2>
                    <h3>Like Mike’s “3 Are Legend” </h3>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="foot">
                <div className="footIn">
                    <div className='con2'>
                        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" />
                        <h1>Phone <br />
                            1-677-124-44227
                        </h1>
                    </div>
                    <div className='con2'>
                        <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg" alt="" />
                        <h1>Email <br />
                            DJ.Music@gmail.com</h1>
                    </div>
                    
                </div>
                <div className="footIn">
                    <h1>DJoz</h1>
                    <div>
                        <img src="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?size=626&ext=jpg" alt="" />
                        <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="" />
                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" />
                        <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg" alt="" />
                    </div>
                </div>
                <div className="footIn" id='foot1'>
                    <h1>Stay With me</h1>
                    <input type="email" placeholder='Email'/>
                    <button>Submit</button>
                </div>
            </div>
            <p>Copyright © 2023 All rights reserved | This template is made with love by Colorlib</p>
        </div>
        
        </section>
        
        
    )
}

export default Home