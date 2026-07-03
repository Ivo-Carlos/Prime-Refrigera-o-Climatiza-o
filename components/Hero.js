function Hero() {
    return (
        <section 
            id="home" 
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            data-name="hero"
            data-file="components/Hero.js"
        >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/47ea816b-fb29-4db3-9cc6-9eb7eed49d07.jpeg" 
                    alt="Manutenção de Equipamentos" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/40"></div>
            </div>

            <div className="relative z-10 section-padding w-full">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1 bg-[var(--secondary-color)] text-[var(--text-dark)] font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                        Especialista no Vale do Itajaí
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Seus eletrodomésticos em <span className="text-[var(--secondary-color)]">boas mãos.</span>
                    </h1>
                    <div className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                        Assistência técnica especializada na manutenção de refrigeradores e lavadoras. Em: 
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Itajaí', 'Balneário Camboriú', 'Itapema', 'Porto Belo', 'Navegantes', 'Camboriú', 'Penha', 'Balneário Piçarras', 'Barra Velha', 'Brusque', 'Ilhota', 'Bombinhas'].map(city => (
                                <span key={city} className="bg-[var(--secondary-color)] text-[var(--text-dark)] px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/5547996980353?text=Vim%20do%20Google%20e%20Quero%20Fazer%20um%20Or%C3%A7amento." target="_blank" className="btn-secondary text-lg">
                            <div className="icon-message-square text-xl"></div>
                            Chamar no WhatsApp
                        </a>
                        <a href="#services" className="btn-primary bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 text-lg">
                            Ver Nossos Serviços
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                                <div className="icon-check text-white"></div>
                            </div>
                            <span className="font-semibold italic">Peças Originais</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                                <div className="icon-shield-check text-white"></div>
                            </div>
                            <span className="font-semibold italic">Garantia no Serviço</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                                <div className="icon-clock text-white"></div>
                            </div>
                            <span className="font-semibold italic">Atendimento Rápido</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[var(--bg-light)]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
}