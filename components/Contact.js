function Contact() {
  const cities = ['Itajaí','Balneário Camboriú','Itapema','Porto Belo','Navegantes','Camboriú','Penha','Balneário Piçarras','Barra Velha','Brusque','Ilhota','Bombinhas'];
  const [status, setStatus] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = key => String(data.get(key) || '').trim();
    const message = `*Solicitação de avaliação técnica - Site*\n\n*Nome:* ${value('name')}\n*Cidade:* ${value('city')}\n*Endereço:* ${value('address')}\n*Equipamento:* ${value('device')}\n*Marca:* ${value('brand') || 'Não informada'}\n*Defeito:* ${value('problem')}\n*Quando precisa:* ${value('urgency')}\n\n*Origem:* Site / Google Ads`;
    const url = `https://wa.me/5547996980353?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    setStatus('redirecting');
  };
  const field = 'w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] outline-none';
  return <section id="contact" className="bg-[var(--bg-muted)]"><div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    <div><span className="text-sm font-bold text-[var(--primary-color)] uppercase tracking-wide">Atendimento no Vale do Itajaí</span><h2 className="text-3xl md:text-5xl font-black mt-3 mb-5">Seu eletrodoméstico apresentou defeito?</h2><p className="text-lg text-gray-600 mb-6">Conte o que aconteceu e onde o equipamento está. Nossa equipe poderá avaliar sua solicitação e orientar sobre os próximos passos.</p><div className="space-y-3 text-gray-700"><p>✓ Atendimento para geladeiras, freezers, lavadoras e secadoras</p><p>✓ Solicitação direta pelo WhatsApp</p><p>✓ Informe o endereço para verificar a região de atendimento</p></div><h3 className="font-bold mt-8 mb-3">Cidades atendidas</h3><div className="flex flex-wrap gap-2">{cities.map(city => <span key={city} className="bg-white border rounded-full px-3 py-1 text-sm">{city}</span>)}</div><p className="mt-7 text-sm text-gray-600">WhatsApp: (47) 99698-0353</p></div>
    <div className="bg-white p-6 md:p-9 rounded-3xl shadow-xl border border-gray-100"><h3 className="text-2xl font-black mb-2">Solicite uma avaliação técnica</h3><p className="text-sm text-gray-600 mb-6">Preencha os dados para enviar sua solicitação pelo WhatsApp.</p><form onSubmit={handleSubmit} className="space-y-4">
      <div><label htmlFor="name" className="block font-semibold mb-1">Seu nome *</label><input id="name" name="name" autoComplete="name" required maxLength="100" className={field} placeholder="Como podemos chamar você?" /></div>
      <div><label htmlFor="city" className="block font-semibold mb-1">Cidade do atendimento *</label><select id="city" name="city" required defaultValue="" className={field}><option value="" disabled>Selecione sua cidade</option>{cities.map(city=><option key={city} value={city}>{city}</option>)}</select></div>
      <div><label htmlFor="address" className="block font-semibold mb-1">Endereço do atendimento *</label><input id="address" name="address" autoComplete="street-address" required minLength="8" maxLength="180" className={field} placeholder="Rua, número, bairro e complemento" /></div>
      <div><label htmlFor="device" className="block font-semibold mb-1">Qual equipamento precisa de conserto? *</label><select id="device" name="device" required defaultValue="" className={field}><option value="" disabled>Selecione o equipamento</option><option>Geladeira / Refrigerador</option><option>Freezer</option><option>Máquina de lavar roupas</option><option>Lava e seca</option><option>Secadora de roupas</option><option>Outro equipamento (consultar disponibilidade)</option></select></div>
      <div><label htmlFor="brand" className="block font-semibold mb-1">Marca do equipamento (opcional)</label><input id="brand" name="brand" maxLength="70" className={field} placeholder="Ex.: Brastemp, Electrolux, LG" /></div>
      <div><label htmlFor="problem" className="block font-semibold mb-1">O que está acontecendo? *</label><textarea id="problem" name="problem" rows="3" required minLength="10" maxLength="800" className={field} placeholder="Ex.: Minha geladeira liga, mas não está gelando" /></div>
      <div><label htmlFor="urgency" className="block font-semibold mb-1">Quando precisa de atendimento? *</label><select id="urgency" name="urgency" required className={field}><option>O quanto antes</option><option>Nos próximos dias</option><option>Estou pesquisando opções</option></select></div>
      <p className="text-xs text-gray-500">Ao continuar, você será direcionado ao WhatsApp com os dados preenchidos. O envio só será concluído quando você enviar a mensagem na conversa.</p>
      <button type="submit" className="w-full btn-primary py-4 text-lg">Continuar no WhatsApp →</button>{status === 'redirecting' && <p className="text-sm text-center">Abrindo o WhatsApp para você confirmar o envio...</p>}
    </form></div>
  </div></section>;
}
