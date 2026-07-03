function Gallery() {
    const images = [
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/adddd40c-cf27-4777-83f0-da0b7a0a2eef.jpeg",
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/41bdd96c-d166-4ca4-924f-ad49475618a6.jpeg",
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/9f75c395-421c-4cd1-a882-0ff3975a61c3.jpeg",
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/0799a2ba-a775-40eb-aad3-77a3727bf3dd.jpeg",
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/1f901468-c5a1-4885-8685-801dfd1b7257.jpeg",
        "https://app.trickle.so/storage/public/images/usr_1d1a77c340000001/eb6618fa-bebb-48ac-8a1d-dd5aa1b2be88.jpeg"
    ];

    return (
        <section id="gallery" className="bg-[var(--bg-light)]" data-name="gallery" data-file="components/Gallery.js">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Nossa <span className="text-[var(--primary-color)]">Rotina de Trabalho</span></h2>
                    <div className="w-20 h-1.5 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600">Fotos reais de atendimentos e peças genuínas que utilizamos.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-xl group">
                            <img 
                                src={img} 
                                alt={`Trabalho Prime ${idx + 1}`} 
                                className="w-full h-auto object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[var(--primary-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <div className="icon-zoom-in text-white text-4xl"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}