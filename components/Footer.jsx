const Footer = () => {

    const date = new Date();

    return (
        <footer className="py-4 mt-auto">
            <p className="text-center text-gray-400"> &copy; copyright {date.getFullYear()} Ukhang Marma. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;