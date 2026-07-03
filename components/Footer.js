function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-8" data-name="footer" data-file="components/Footer.js">
            <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-white/10 mb-8 pb-12">
                <div>
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/e72eb9dc-9f55-434f-ac63-0c5c25024526.jpeg" 
                        alt="Prime Logo" 
                        className="h-16 w-auto rounded-md mb-6 grayscale brightness-200"
                    />
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Assistência técnica especializada em manutenção de Refrigeradores e Lavadoras. Atendimento domiciliar em todo o Vale do Itajaí.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/primerefrigeracaoeclimatizacao/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-color)] transition-all">
                            <div className="icon-instagram"></div>
                        </a>
                        <a href="https://www.facebook.com/share/1DvzHZ7tuM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-color)] transition-all">
                            <div className="icon-facebook"></div>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-black mb-6 border-l-4 border-[var(--secondary-color)] pl-3">Links Rápidos</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#home" className="hover:text-[var(--secondary-color)] transition-all">Início</a></li>
                        <li><a href="#features" className="hover:text-[var(--secondary-color)] transition-all">Diferenciais</a></li>
                        <li><a href="#services" className="hover:text-[var(--secondary-color)] transition-all">Serviços</a></li>
                        <li><a href="#gallery" className="hover:text-[var(--secondary-color)] transition-all">Galeria</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-black mb-6 border-l-4 border-[var(--secondary-color)] pl-3">Nossos Serviços</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li>Manutenção de Geladeiras</li>
                        <li>Reparo de Freezers</li>
                        <li>Conserto de Máquinas de Lavar</li>
                        <li>Assistência Lava e Seca</li>
                        <li>Instalação de Eletrodomésticos</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-black mb-6 border-l-4 border-[var(--secondary-color)] pl-3 uppercase leading-tight">
                        Conserto de Refrigeradores e Lavadoras
                    </h4>
                    <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
                        {['Itajaí', 'Balneário Camboriú', 'Itapema', 'Porto Belo', 'Navegantes', 'Camboriú', 'Penha', 'Balneário Piçarras', 'Barra Velha', 'Brusque', 'Ilhota', 'Bombinhas'].map((city, idx, arr) => (
                            <React.Fragment key={city}>
                                <a href="#services" className="hover:text-[var(--secondary-color)] transition-all">
                                    {city}
                                </a>
                                {idx < arr.length - 1 && <span className="opacity-30">•</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-black mb-6 border-l-4 border-[var(--secondary-color)] pl-3">Fale Conosco</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="icon-phone text-[var(--secondary-color)]"></div>
                            <span>(47) 99698-0353</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="icon-mail text-[var(--secondary-color)]"></div>
                            <span>assistenciaprimerefrigeracao@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="icon-map-pin text-[var(--secondary-color)]"></div>
                            <span>Vale do Itajaí - SC</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding py-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>© {currentYear} Prime Refrigeração e Climatização. Todos os direitos reservados.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Privacidade</a>
                    <a href="#" className="hover:text-white">Termos de Serviço</a>
                </div>
            </div>
        </footer>
    );
}