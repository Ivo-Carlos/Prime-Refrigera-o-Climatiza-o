function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Diferenciais', href: '#features' },
        { name: 'Serviços', href: '#services' },
        { name: 'Galeria', href: '#gallery' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
            data-name="navbar"
            data-file="components/Navbar.js"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/e72eb9dc-9f55-434f-ac63-0c5c25024526.jpeg" 
                        alt="Prime Logo" 
                        className="h-[60px] w-auto rounded-md shadow-sm"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`font-semibold hover:text-[var(--primary-color)] transition-colors ${isScrolled ? 'text-[var(--text-dark)]' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-secondary text-sm px-5 py-2">
                        Pedir Orçamento
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-[var(--primary-color)] text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={isMenuOpen ? "icon-x" : "icon-menu"}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[var(--text-dark)] font-medium p-2 hover:bg-gray-50 rounded-md"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full mt-2">
                        Pedir Orçamento
                    </a>
                </div>
            )}
        </nav>
    );
}