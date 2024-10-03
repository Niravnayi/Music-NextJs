import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white px=5 h-fit max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="px-4">
          <h4 className="text-2xl font-semibold mb-5 ">About Us</h4>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div className="px-4">
          <h4 className=" mb-5">Quick Links</h4>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <h4 className=" mb-5">Follow Us</h4>
          <ul className="flex gap-4">
            <li>
              <a href="#"> Facebook</a>
            </li>
            <li>
              <a href="#"> Twitter</a>
            </li>
            <li>
              <a href="#"> Instagram</a>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <h4 className=" mb-5">Contact Us </h4>
          <div className="flex flex-col gap-2">
          <p>Kadi,Gujrat</p>
          <p>Email: niravlimbachia031@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>

      <div className="text-white  py-10 bg-black w-full text-center">
        <p>&copy; Music School. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
