import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white font-bold py-4 hidden md:block">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

                {/* Follow Us Section (Left) */}
                <div className="md:w-1/3 text-left">
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-xl hover:text-blue-100"><FaFacebook /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaTwitter /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaInstagram /></a>
                       
                        <a href="https://github.com/prnshjh/FinnTrack" className="text-xl hover:text-blue-100"><FaGithub /></a>
                    </div>
                </div>

                {/* Footer Bottom (Center) */}
                <div className="md:w-1/3 text-center mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold text-white">FinnTrack</h1>
                    <p className="text-sm text-gray-200">Your Financial Assistant</p>


                    <p className="text-xs">&copy; {new Date().getFullYear()} FinnTrack</p>
                </div>

                {/* Contact Us Section (Right) */}
                <div className="md:w-1/3 text-right">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <div className="flex justify-end gap-4 mt-4">
                        <a href="#" className="text-xl hover:text-blue-100"><FaEnvelope /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaPhone /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaAddressCard /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
