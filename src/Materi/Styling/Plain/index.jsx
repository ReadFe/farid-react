import React from "react";
import './index.css'

export default class Plain extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header-left">
                        <p>Hello, my name</p>
                        <h1>FARID FERDIYANTO</h1>
                        <h3>Web Programmer</h3>
        
                        <div className="cv">
                            <div className="cv1">Download CV</div>
                            <div className="cv2">Play Video</div>
                        </div>
                    </div>
                    <div className="header-right">
                        <img src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg" alt=""></img>
                    </div>
                </div>  
        
                <section>
                    <div class="pre-title">
                        <h1>ABOUT ME</h1>
                    </div>
                    <div className="about">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QqpevBBRn2-zNyUD-XDL9kVI6o4f6OB2a-hviuc_5D-Ds4r3NU_0gC97wVflo7va9uo&usqp=CAU" alt=""/>
                        <div className="about-description">
                            <h3>Web Programmer & Web Developer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci quas neque quisquam voluptatem iusto molestiae ex eos eaque porro temporibus harum, fugit voluptates ipsam esse! Pariatur dolorum maxime nihil!</p>
                            <div class="about-list">
                                <ul>
                                    <li><b>Name</b>: Farid Ferdiyanto</li>
                                    <li><b>Degree</b>: Student</li>
                                    <li><b>Phone</b>: 0858275436</li>
                                    <li><b>Address</b>: Jl Diponegoro No 5</li>
                                </ul>
                                <ul>
                                    <li><b>Birthday</b>: 06 February 2006</li>
                                    <li><b>Experienced</b>: 1 Year</li>
                                    <li><b>Email</b>: ferdiyantofarid@gmail.com</li>
                                    <li><b>Freelance</b>: Available</li>
                                </ul>
                            </div>
                            <div className="options">
                                <ul>
                                    <li className="first">Hire Me</li>
                                    <li>Learn More</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pre-title">
                        <h1>MY SKILLS</h1>
                    </div>
                    <div className="skills">
                        {/* <!-- 1 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>HTML</h5>
                                <h5>95%</h5>
                            </div>
                            <div className="bar">
                                <div className="blue"></div>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>Javascript</h5>
                                <h5>90%</h5>
                            </div>
                            <div className="bar">
                                <div className="red"></div>
                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>CSS</h5>
                                <h5>85%</h5>
                            </div>
                            <div className="bar">
                                <div className="yellow"></div>
                            </div>
                        </div>

                        {/* <!-- 4 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>AngularJS</h5>
                                <h5>95%</h5>
                            </div>
                            <div className="bar">
                                <div className="black"></div>
                            </div>
                        </div>

                        {/* <!-- 5 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>PHP</h5>
                                <h5>90%</h5>
                            </div>
                            <div className="bar">
                                <div className="red"></div>
                            </div>
                        </div>

                        {/* <!-- 6 --> */}
                        <div className="skill-card">
                            <div className="title">
                                <h5>Wordpress</h5>
                                <h5>85%</h5>
                            </div>
                            <div className="bar">
                                <div className="cyan"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pre-title">
                        <h1>EDUCATION</h1>
                    </div>
                    <div className="educations">
                        <div className="education-card">
                            <div className="line"></div>
                            <div className="content">
                                <b>Harvard University</b>| 2021-2024
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae voluptate magni porro! Ea nihil quam molestias ipsum optio. Ipsa quasi reiciendis nemo repudiandae magni! Voluptatibus laboriosam dicta ea praesentium.</p>
                            </div>
                        </div>
                        <div className="education-card">
                            <div className="line"></div>
                            <div className="content">
                                <b>Soft Company</b>| Excellent
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae voluptate magni porro! Ea nihil quam molestias ipsum optio. Ipsa quasi reiciendis nemo repudiandae magni! Voluptatibus laboriosam dicta ea praesentium.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pre-title">
                        <h1>MY PORTOFOLIO</h1>
                    </div>
                    <div className="options center">
                        <ul>
                            <li className="first">All</li>
                            <li>Design</li>
                            <li>Development</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    <div className="images">
                        <img src="https://acom.pk/cdn/shop/articles/Best-Laptops-For-Adobe-Illustrator_1200x.jpg?v=1652298809" alt=""/>
                        <img src="https://www.reliancedigital.in/wp-content/uploads/2017/11/cover_image_grapphic.jpg" alt=""/>
                        <img src="https://burst.shopifycdn.com/photos/coding-on-laptop.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt=""/>
                        <img src="https://c0.wallpaperflare.com/preview/428/871/775/school-coding-data-software-development.jpg" alt=""/>
                        <img src="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=1024x1024&w=is&k=20&c=idsKSHxHHX86-1kB1EkNPbt9oR6Ta_o5_UD4Fme4ZOQ=" alt=""/>
                        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/MarketingPlanEx_resized-583690554.jpg?v=1636567942" alt=""/>
                    </div>
                </section>

                <section>
                    <div className="pre-title">
                        <h1>CONTACT ME</h1>
                    </div>
                    <form action="https://formspree.io/f/xwkgwjwz" method="POST">
                        <div className="form-container">
                            <div className="flex">
                                <input type="text" placeholder="Your Name" name="name"/>
                                <input type="email" placeholder="Your Email" name="email"/>
                            </div>
                            <input type="email" placeholder="Subject" name="subject"/>
                            <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Massage" ></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Send Massage</button>
                    </form>
                </section>

                {/* <!-- Footer --> */}
                <div className="footer">
                    <div className="icon-area">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                    </div>

                    <div className="more-opt">
                        <a href="">Privacy</a>  |  <a href="">Terms</a>  |  <a href="">FAQs</a>  |  <a href="">Help</a>
                    </div>

                    <p>&copy; <span>Read</span> All Right Reserved Designed by <span>Read</span> </p>
                </div>
            </div>
        )
    }
}