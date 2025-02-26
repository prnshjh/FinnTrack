import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white font-bold py-4 hidden md:block">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
                
                {/* Follow Us Section */}
                <div className="text-left md:w-1/2">
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-xl hover:text-blue-100"><FaFacebook /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaTwitter /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaInstagram /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaLinkedin /></a>
                        <a href="https://github.com/prnshjh/FinnTrack" className="text-xl hover:text-blue-100"><FaGithub /></a>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="text-left md:w-1/2">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-xl hover:text-blue-100"><FaEnvelope /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaPhone /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaAddressCard /></a>
                        <a href="#" className="text-xl hover:text-blue-100"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto text-center mt-8">
                <p className="text-xs">&copy; {new Date().getFullYear()} FinnTrack</p>
            </div>
        </footer>
    );
};

export default Footer;
