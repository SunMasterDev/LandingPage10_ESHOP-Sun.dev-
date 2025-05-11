import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold
            tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, facere.
            </p>
            <p className="text-gray-500 mt-4">Code By Sun.dev</p>
            <a
              href="https://fastwork.co/user/sun_dev/web-development-41186065?badges=&position=3&source=web_marketplace_profile-menu_profile_user&username=sun_dev"
              className="inline-block bg-primary/90 text-white py-2
          px-4 mt-4 text-sm rounded-full"
            >
              Visit My Freelance Work Here
            </a>
          </div>
          {/* footer links */}
          <div
            className="col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 dark:hover:text-white
                    hover:text-black duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 dark:hover:text-white
                    hover:text-black duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Compony Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Bangkok</p>
                  <p>Thailand</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+66 123456789</p>
                </div>
                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary
                    duration-300"/>
                  </a>
                  <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary
                    duration-300"/>
                  </a>
                  <a href="#">
                  <FaTwitter className="text-3xl hover:text-primary
                    duration-300"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
