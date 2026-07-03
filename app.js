// Important: DO NOT remove this ErrorBoundary component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado</h1>
            <p className="text-gray-600 mb-4">Pedimos desculpas, ocorreu um erro inesperado.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-md"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/5547996980353?text=Vim%20do%20Google%20e%20Quero%20Fazer%20um%20Or%C3%A7amento." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Fale conosco no WhatsApp"
        >
          <div className="icon-message-square text-3xl"></div>
        </a>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);