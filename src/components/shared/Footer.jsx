import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white p-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <aside className="text-center md:text-left mb-4 md:mb-0">
        <p>
          Copyright © {new Date().getFullYear()} - Sebastián Macharette |
          Programador Full Stack | Especializado en Frontend | Diseñador UX/UI
        </p>
      </aside>
      <nav className="flex justify-center space-x-4">
      <a href="https://github.com/sebastianjmacharette" className="text-white" target="_blank" rel="noopener noreferrer">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="fill-current">
  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.774.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.311.47-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.876.12 3.18.77.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.81 1.1.81 2.22v3.293c0 .32.218.694.824.576C20.565 21.798 24 17.303 24 12c0-6.63-5.37-12-12-12z"/>
</svg>

        </a>
        <a href="https://www.youtube.com/@sebastianmacharette1123" className="text-white" target="_blank" rel="noopener noreferrer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/seba-macha/" className="text-white" target="_blank" rel="noopener noreferrer">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="fill-current">
  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.723v20.554C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.277V1.723C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.679c-1.14 0-2.06-.926-2.06-2.065 0-1.14.92-2.066 2.06-2.066s2.06.926 2.06 2.066c0 1.139-.92 2.065-2.06 2.065zM20.452 20.452h-3.56v-5.599c0-1.337-.026-3.06-1.867-3.06-1.867 0-2.154 1.46-2.154 2.966v5.693h-3.56V9h3.414v1.56h.05c.475-.9 1.637-1.85 3.367-1.85 3.6 0 4.265 2.367 4.265 5.448v6.294z"/>
</svg>

        </a>
      </nav>
    </div>
  </footer>
  )
}

export default Footer