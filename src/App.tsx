function App() {
  return (
    <div className="p-3 mb-2 bg-primary text-white min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="card bg-secondary text-white border-0 shadow-lg p-4 text-center" style={{ maxWidth: '500px' }}>
        
        {/* Logo officiel Dependabot */}
        <div className="mb-3">
          <img 
            src="https://images.seeklogo.com/logo-png/44/1/dependabot-logo-png_seeklogo-444840.png"
              alt="Dependabot Logo" 
            className="img-fluid rounded-circle shadow"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
        </div>

        {/* Titre principal */}
        <h4 className="fw-bold mb-2">Dependabot Demo</h4>
        <h1 className="fw-bold mb-2">By Madou & Mouhamad</h1>
        <p className="text-light-50 mb-4">
          Projet de démonstration pour l'automatisation de la gestion des dépendances et de la sécurité avec GitHub.
        </p>

        {/* Badge & Statut */}
        <div className="d-flex justify-content-center gap-2 mb-4">
          <span className="badge bg-success px-3 py-2 fs-6">CI / Status : Active</span>
          <span className="badge bg-info text-dark px-3 py-2 fs-6">Vite + React</span>
        </div>

        {/* Bouton d'action vers GitHub */}
        <a 
          href="https://github.com/Diakayeteba/demo-dependabotv1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-lg fw-bold shadow-sm"
        >
          Voir le Dépôt GitHub
        </a>
      </div>

      <footer className="mt-4 text-muted text-center fs-7">
        Cours DevOps — M1 SIGLIS
      </footer>
    </div>
  );
}

export default App;