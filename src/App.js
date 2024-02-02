import './App.css';
import { SlEnvolope } from "react-icons/sl";
import { FaCertificate } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import logoimg from './images/creative-logo-blue.svg';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { PiQuotesFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import footimg from './images/creative-white.svg';
function App() {
  return (
    <><section className='menu'>
      <div className="container">
        <div className="flex">
          <div className='flex'>
            <p><SlEnvolope></SlEnvolope> info@cdmi.in</p>
            <p><FaCertificate></FaCertificate>Verify Certificate</p>
          </div>
          <div>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div className='flex fnt'>
            <p><FaFacebookF></FaFacebookF></p>
            <p><FaTwitter></FaTwitter></p>
            <p><IoLogoGoogleplus></IoLogoGoogleplus></p>
            <p><CiLinkedin></CiLinkedin></p>
            <p><BsInstagram></BsInstagram></p>
            <p><IoLogoYoutube></IoLogoYoutube></p>
            <p><BsWhatsapp></BsWhatsapp></p>
          </div>
        </div>
      </div>

    </section>
      <header className='cd_menu'>
        <div className='container'>
          <div className='flex'>
            <div>
              <img src={logoimg} width={200}></img>
            </div>
            <div>
              <ul className='main-menu flex'>
                <li style={{ color: "#ffbc46" }}>HOME</li>
                <li>COURSES</li>
                <li>ACTIVITIES</li>
                <li>BLOG</li>
                <li>KNOW US</li>
                <li>GET IN TOUCH</li>
                <li>STUDENT ZONE</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className='imgs space'>
          <img src={require(`./images/slider.webp`)}></img>
        </div>
      </section>

      {/*  offered courses  */}
      <section>
        <div className='container'>
          <div className='heading'>
            <div className='line'></div>
            <h5>CREATIVE COURSE</h5>
            <h3 className='sub-title'>OFFERED COURSES</h3>
          </div>

          <div className='mt'>
            <div className='d-flex'>
              <div className='box'>
                <img src={require(`./images/b-1.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
              <div className='box'>
                <img src={require(`./images/b-2.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
              <div className='box'>
                <img src={require(`./images/b-3.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <div className='box'>
                <img src={require(`./images/b-4.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
              <div className='box'>
                <img src={require(`./images/b-5.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
              <div className='box'>
                <img src={require(`./images/b-6.webp`)} className='img-cen'></img>
                <div className='inn-box'>
                  <p className='title b-bottom'>Development Courses</p>
                  <div className='flex'>
                    <span className='reating'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></span>
                    <button className='btn'>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='center text-center space-x'>
            <button className='cr-btn'>View All Courses <MdOutlineArrowRightAlt className='arrow'></MdOutlineArrowRightAlt></button>
          </div>

        </div>

      </section>
      {/*  offered courses  End */}


      {/* About Us */}
      <div className='space-x'>
        <div className='flex sec'>
          <div className='f-sec'>
            <h5>ABOUT US</h5>
            <p>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            <p className='text-justify'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>

            <button>Enroll Now..!<MdOutlineArrowRightAlt></MdOutlineArrowRightAlt></button>

          </div>
          <div className='s-sec'>
            <img src={require(`./images/about-us.webp`)}></img>
          </div>
        </div>
      </div>

      {/* Section cornner */}
      <section className='space-y space-x count'>
        <div className='bg-img'>
          <div className='container'>
            <div className='flex'>
              <div className='data-box w-25'>
                <PiStudent className='count-icon'></PiStudent>
                <p>18000+</p>
                <p>HAPPY STUDENT</p>
              </div>
              <div className='data-box w-25'>
                <FaPencilAlt className='count-icon'></FaPencilAlt>
                <p>10+</p>
                <p>HAPPY STUDENT</p>
              </div>
              <div className='data-box w-25'>
                <FaChalkboardTeacher className='count-icon'></FaChalkboardTeacher>
                <p>100+</p>
                <p>HAPPY STUDENT</p>
              </div>
              <div className='data-box w-25'>
                <PiStudentBold className='count-icon'></PiStudentBold>
                <p>12000+</p>
                <p>HAPPY STUDENT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAPPY Students */}

      <section className='space-x space-y'>
        <div className='container'>
          <div className='flex pr-wid'>
            <div className='info'>
              <div className='std-heading'>
                <h5>HAPPY STUDENTS</h5>
                <p>ALUMNI SPEAK</p>
              </div>
              <p><PiQuotesFill className='quot'></PiQuotesFill></p>
              <div className='inf'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <div className='pr-img d-flex'>
                  <img src={require(`./images/pr-1.jpg`)}></img>
                  <div className='pr-inf'>
                    <p>PABADIYA JAYMIN</p>
                    <span>UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='pic'>
              {/* */}
              <div className='d-flex p-relative'>
              <img src={require('./images/pr-org.webp')}></img> 
              <img src={require('./images/pr-sp.png')} className='p-abs'></img> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CREATIVE */}

      <section className='bg-them'>
        <div className='container'>
          <div className='dif-heading'>
            <p>READ OUR DIFFERENCE</p>
            <h4>WHY CHOOSE CREATIVE</h4>
          </div>
          <div className='flex'>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='dif-box'>
              <p><GiTeacher className='dif-icon'></GiTeacher></p>
              <div className="txt">
                <h3>Industry Experts As Trainers</h3>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WCC end */}

      {/* student placement */}

      <section className='space-x space-y'>
        <div className='container'>
          <div className='plc-heading'>
            <p>STUDENT PLACEMENT</p>
            <h4>OUR RECRUITMENT PARTNERS</h4>
          </div>
          <div className='flex'>
            <div className='bg-ln'>
              <img src={require(`./images/cp-1.png`)}></img>
            </div>
            <div className='bg-ln'>
              <img src={require(`./images/cp-2.png`)}></img>
            </div>
            <div className='bg-ln'>
              <img src={require(`./images/cp-3.png`)}></img>
            </div>
            <div className='bg-ln'>
              <img src={require(`./images/cp-4.png`)}></img>
            </div>
            <div className='bg-ln'>
              <img src={require(`./images/cp-5.png`)}></img>
            </div>
            <div className='bg-ln'>
              <img src={require(`./images/cp-6.png`)}></img>
            </div>
          </div>
        </div>
      </section>

      {/* student placement end */}

      {/* our courses start */}

      <section className='space-x space-y'>
        <div className='container'>
          <p className='dm'>Our Demanded Course -</p>
          <button>Best Java Training Institute In Surat</button>
          <button> Best Php Training In Mota Varachha  </button>
          <button>  Video Editing Training Institute </button>
          <button> Python Training In Surat  </button>
          <button>  Best Java Training Institute In Surat </button>
          <button>  Advance Java Training Institute In Varachha </button>
          <button>  Web Design Training In Mota Varachha </button>
          <button> Python Training In Surat   </button>
          <button> Best Php Training In Mota Varachha  </button>
          <button>  Video Editing Training Institute </button>
          <button> Python Training In Surat  </button>
          <button>  Best Java Training Institute In Surat </button>
          <button>  Advance Java Training Institute In Varachha </button>
          <button>  Web Design Training In Mota Varachha </button>
          <button> Python Training In Surat   </button>
        </div>
      </section>

      {/* our courses end */}

      {/* footer start */}

      <section className='space-x'>
        <footer>
          <div className='container'>
            <div className='d-flex'>
              <div className='fst'>
                <img src={footimg} width={200}></img>
                <p>
                  Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                </p>
                <p className='slm'>FOLLOW AS ON</p>
                <ul className='d-flex social'>
                  <li><FaFacebookF></FaFacebookF></li>
                  <li><FaTwitter></FaTwitter></li>
                  <li><IoLogoGoogleplus></IoLogoGoogleplus></li>
                  <li><CiLinkedin></CiLinkedin></li>
                  <li><BsInstagram></BsInstagram></li>
                  <li><IoLogoYoutube></IoLogoYoutube></li>
                  <li><BsWhatsapp></BsWhatsapp></li>
                </ul>
              </div>
              <div className='spc'>
                <p>FEATURE LINKS</p>
                <ul className='lspc'>
                  <li>About Us</li>
                  <li>ABlogs</li>
                  <li>Join Us</li>
                  <li>Company Login</li>
                  <li>Certificate Verification</li>

                </ul>
              </div>
              <div className='third'>
                <p className='th-sides'>CONTACT US</p>
                <ul className='th-side'>
                  <li className='head-off'>HEAD OFFICE - YOGICHOWK</li>
                  <li>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</li>
                  <li>Mo : +91 90333 16003</li>
                </ul>
                <ul className='th-side'>
                  <li className='brnc'>OTHER BRANCHES</li>
                  <li> Katargam</li>
                  <li>Mota Varachha</li>
                  <li>Adajan</li>
                  <li>Navsari</li>
                </ul>
              </div>
            </div>

          </div>
        </footer>
      </section>

      {/* footer end */}

    </>


  );
}

export default App;