function Services() {
    const services = [
        {
            title: "Refrigeradores",
            subtitle: "Geladeiras e Freezers",
            description: "Manutenção preventiva e corretiva de geladeiras de todas as marcas. Troca de gás, conserto de placas, borracha, motor e muito mais.",
            image: "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/81e2c038-2e89-4f86-b17c-abc43113fb8f.jpeg",
            tags: ["Samsung", "LG", "Brastemp", "Consul", "Electrolux"]
        },
        {
            title: "Lavadoras",
            subtitle: "Lava e Seca, Tanquinhos",
            description: "Reparo especializado em máquinas de lavar. Problemas com centrifugação, vazamentos, barulhos estranhos ou falhas eletrônicas.",
            image: "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/80b6827a-f277-4448-aadc-23ff1100da46.jpeg",
            tags: ["Lava e Seca", "Carregamento Topo", "Instalação", "Higienização"]
        }
    ];

    return (
        <section id="services" className="bg-[var(--bg-muted)]" data-name="services" data-file="components/Services.js">
            <div className="section-padding">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Serviços <span className="text-[var(--primary-color)]">Especializados</span></h2>
                        <div className="w-20 h-1.5 bg-[var(--secondary-color)] rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg italic">Atendimento técnico em domicílio com horário agendado.</p>
                    </div>
                    <a href="https://wa.me/5547996980353?text=Vim%20do%20Google%20e%20Quero%20Fazer%20um%20Or%C3%A7amento." target="_blank" className="btn-primary">
                        Solicitar Assistência
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row min-h-[400px]">
                            <div className="w-full md:w-2/5 overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                                <span className="text-[var(--primary-color)] font-bold uppercase tracking-tighter text-sm mb-1">{service.subtitle}</span>
                                <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500">#{tag}</span>
                                    ))}
                                </div>
                                <button className="text-[var(--primary-color)] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                    Saiba mais detalhes <div className="icon-arrow-right"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}