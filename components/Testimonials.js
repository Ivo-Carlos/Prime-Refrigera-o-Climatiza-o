function Testimonials() {
    const feedbacks = [
        {
            name: "Ricardo Silva",
            role: "Itajaí - SC",
            text: "Serviço nota 10! Minha geladeira Brastemp parou de gelar no final de semana e o técnico da Prime veio prontamente. Resolve o problema rápido e o preço foi justo.",
            stars: 5
        },
        {
            name: "Ana Cláudia",
            role: "Balneário Camboriú",
            text: "Minha máquina de lavar estava fazendo um barulho horrível. O atendimento foi super profissional e agora a máquina parece nova. Recomendo muito!",
            stars: 5
        },
        {
            name: "Marcos Pereira",
            role: "Barra Velha - SC",
            text: "Muito satisfeito com a honestidade da equipe. Em vez de empurrarem peças desnecessárias, focaram no defeito real da placa. Ganharam um cliente fiel.",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="bg-gradient-to-br from-[var(--primary-color)] to-[#005a8a] text-white" data-name="testimonials" data-file="components/Testimonials.js">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 italic">O que dizem nossos clientes</h2>
                    <div className="w-20 h-1.5 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((f, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-4 text-[var(--secondary-color)]">
                                    {[...Array(f.stars)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-100 italic mb-6 leading-relaxed">"{f.text}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                                    {f.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{f.name}</h4>
                                    <span className="text-sm opacity-70">{f.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}