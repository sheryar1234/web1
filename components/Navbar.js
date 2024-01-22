// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { toggleMenu } from './logic';
import { Link } from 'react-router-dom';// IMPORTED
import logo1 from '../img/hamb.png';
// import logo2 from '../img';
import image1 from '../img/pasted-image-0-4.png';
import l1 from '../img/LOGOIPSUM-02.png'
import l2 from '../img/logo-05.webp';
// import '/About.js';
// import Contact from './Contact';
// import Contact from './Contact';
import Contact from '../pages/Contact';

function Navbar() {
    return (


        <section className='body' class="body">
            <nav class="navbar">



                <div class="l">
                    <button class="hamburger" onClick={toggleMenu}>
                        <img src={logo1} class="himg" alt="Hamburger Menu" />
                    </button>
                    <h3>📐LogoIpsm</h3>
                </div>

                <div class="r">
                    {/* <Link to="/Home"> */}
              <a class="a" href="/page">home</a>
            {/* </Link> */}
                    <Link class="a" to="/">home</Link>
                    <a class="a" href="/contac">contact</a>
                    <a class="a" href="">service</a>
                    <a class="a" href="">About</a>

                </div>

                <div class="corner">
                    <button class="quote">
                        Get A Quote
                    </button>
                </div>
            </nav>


            <div class="right1">
                <div class="upper">
                    <h1 className='h11'  class="h11">Digital Agency That Thrives on Your Success</h1>
                </div>
                <div class="lower">
                    <p class="para1">
                        If you are looking for an agency to help
                        you create a remarkable presence online,
                        you’ve come to theright place. We can help
                        you take your business to the next level.
                    </p>
                </div>
                <div class="l1">
                    Find Out How!
                </div>
            </div>
            <div class="main">

                <h1 class="mainh">Hire For Us</h1>

                <div class="container2">
                    <div class="first">
                        <h2 class="h22" >Design</h2>
                        <p class="para">Our web design team has ample years of experience in the core areas of design to build a
                            website that you need. </p>
                    </div>
                    <div class="second">
                        <h2 class="h22">Design</h2>
                        <p class="para">Our web design team has ample years of experience in the core areas of design to build a
                            website that you need. </p>
                    </div>
                    <div class="third">
                        <h2 class="h22">Design</h2>
                        <p class="para">Our web design team has ample years of experience in the core areas of design to build a
                            website that you need. </p>
                    </div>
                </div>

            </div>


            <div class="container3">
                <div class="info-cont">
                    <div class="info1">
                        <h2 class="heading">About Us</h2>
                        <p class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Esse fugiat laudantium ex?Repudiandae placeat ullam eveniet non
                            eaque voluptas voluptate ex earum deserunt.</p>
                    </div>
                    <div class="info2">
                        <h2 class="heading">Mission</h2>
                        <p class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Esse fugiat laudantium ex?Repudiandae placeat ullam eveniet non
                            eaque voluptas voluptate ex earum deserunt.</p>
                    </div>
                    <div class="info3">
                        <h2 class="heading">Vision</h2>
                        <p class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Esse fugiat laudantium ex?Repudiandae placeat ullam eveniet non
                            eaque voluptas voluptate ex earum deserunt.</p>
                    </div>


                </div>
                <div class="photo">
                    <img src={image1} alt="" class="photoimg" />
                </div>
            </div>

            <div class="container4" id='cont4'>
                <div class="parta">
                    <h2 class="heading4a">Clients We Worked With</h2>
                </div>


                <div class="partb">
                    <img src={l2} class="image4" alt="" />
                    <img src={l1} class="image4" alt="" />
                    <img src={l2} class="image4" alt="" />
                    <img src={l1} class="image4" alt="" />
                </div>
                <div class="partc">
                    <div class="headingdiv">

                        <h2 class="heading4b">Why Choose Us?</h2>
                    </div>
                    <strong>

                        <p class="p4">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Suscipit ipsa </p>

                    </strong>
                    <p class="p4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus libero quis enim maiores fuga sunt dignissimos, ad quasi,
                        eligendi optio voluptates similique amet, ea incidunt.</p>

                </div>
            </div>

            <footer>
                <div className="foot">

                    <h4>sheryar732@gmail.com</h4>
                    <h4>@CopyRight</h4>
                    <h4>123</h4>
                </div>
            </footer>

        </section>



    );
}

export default Navbar;