function Features() {
    const features = [
        {
            title: "Diagnóstico Preciso",
            description: "Equipamentos de ponta para identificar o problema real do seu aparelho sem adivinhações.",
            icon: "icon-search",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Transparência Total",
            description: "Orçamentos detalhados e honestos. Explicamos cada etapa do reparo necessário.",
            icon: "icon-file-text",
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            title: "Profissionais Certificados",
            description: "Técnicos treinados e com ampla experiência no mercado de refrigeração e lavadoura.",
            icon: "icon-badge-check",
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Toda a Região",
            description: "Atendemos o Vale do Itajaí com a mesma agilidade e eficiência.",
            icon: "icon-map-pin",
            color: "bg-red-50 text-red-600"
        },
        {
            title: "Orçamento Grátis",
            description: "Nós visitamos a sua residência e fazemos o orçamento sem nenhum custo adicional.",
            icon: "icon-calculator",
            color: "bg-purple-50 text-purple-600"
        }
    ];

    return (
        <section id="features" className="bg-[var(--bg-light)]" data-name="features" data-file="components/Features.js">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Por que escolher a <span className="text-[var(--primary-color)]">Prime?</span></h2>
                    <div className="w-20 h-1.5 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Nosso compromisso é devolver a tranquilidade do seu lar consertando o que parou. Focamos em durabilidade e satisfação do cliente.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="card p-8 flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                                <div className={`${feature.icon} text-3xl`}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}