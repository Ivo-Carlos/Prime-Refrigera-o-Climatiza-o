function Contact() {
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const device = formData.get('device');
        const problem = formData.get('problem');

        const message = `*Novo Orçamento via Site*\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Aparelho:* ${device}\n*Problema:* ${problem}`;
        const whatsappUrl = `https://wa.me/5547996980353?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
            setStatus('success');
            window.open(whatsappUrl, '_blank');
            e.target.reset();
        }, 800);
    };

    return (
        <section id="contact" className="bg-[var(--bg-muted)]" data-name="contact" data-file="components/Contact.js">
            <div className="section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Fale <span className="text-[var(--primary-color)]">Agora</span> Conosco</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Não deixe o seu eletrodoméstico parado por mais tempo. Agende uma visita técnica hoje mesmo e tenha a garantia de um serviço de excelência.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)] flex items-center justify-center flex-shrink-0">
                                    <div className="icon-map-pin text-white text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Localização</h4>
                                    <p className="text-gray-600 mb-3">Atendemos todo o Vale do Itajaí:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Itajaí', 'Balneário Camboriú', 'Itapema', 'Porto Belo', 'Navegantes', 'Camboriú', 'Penha', 'Balneário Piçarras', 'Barra Velha', 'Brusque', 'Ilhota', 'Bombinhas'].map(city => (
                                            <span key={city} className="bg-[var(--primary-color)] text-white px-2 py-1 rounded text-xs font-bold shadow-sm">
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <div className="icon-message-square text-white text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">WhatsApp</h4>
                                    <p className="text-gray-600">(47) 99698-0353</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center flex-shrink-0">
                                    <div className="icon-clock text-white text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Horário de Atendimento</h4>
                                    <p className="text-gray-600">Segunda à Sexta: 08:00 - 18:00<br/>Sábado: 08:00 - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-black mb-8">Envie sua mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                                    <input name="name" type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition-all" placeholder="Seu nome"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                                    <input name="phone" type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition-all" placeholder="(47) 90000-0000"/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Aparelho com Defeito</label>
                                <select name="device" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition-all">
                                    <option>Refrigerador / Freezer</option>
                                    <option>Lavadora / Secadora</option>
                                    <option>Ar Condicionado</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Descreva o Problema</label>
                                <textarea name="problem" rows="4" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition-all" placeholder="Ex: A geladeira parou de gelar na parte de baixo..."></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className={`w-full btn-primary py-4 text-lg ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar Solicitação'}
                                {status === 'success' && <div className="icon-check ml-2"></div>}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 font-bold text-center animate-bounce">
                                    Mensagem enviada! Retornaremos em breve.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}