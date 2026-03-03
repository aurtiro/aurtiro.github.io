import { useEffect } from 'react';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { AboutPage } from './pages/AboutPage';
import { CandidatePortalPage } from './pages/CandidatePortalPage';
import { ClientsPage } from './pages/ClientsPage';
import { ClientPortalPage } from './pages/ClientPortalPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { isKnownRoute, useAppRouter, type AppPath } from './routing/router';

const routeToTitle: Record<AppPath, string> = {
  '/': 'Aurtiro | Technical Staffing Platform',
  '/services': 'Aurtiro | Services',
  '/testimonials': 'Aurtiro | Testimonials',
  '/clients': 'Aurtiro | Past Clients',
  '/about': 'Aurtiro | About',
  '/contact': 'Aurtiro | Contact',
  '/portal/candidate': 'Aurtiro | Candidate Portal',
  '/portal/client': 'Aurtiro | Client Portal',
  '/auth/login': 'Aurtiro | Login'
};

function RoutedPage() {
  const { path } = useAppRouter();

  useEffect(() => {
    if (isKnownRoute(path)) {
      document.title = routeToTitle[path];
      return;
    }

    document.title = 'Aurtiro | Page Not Found';
  }, [path]);

  switch (path) {
    case '/':
      return <HomePage />;
    case '/services':
      return <ServicesPage />;
    case '/testimonials':
      return <TestimonialsPage />;
    case '/clients':
      return <ClientsPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/portal/candidate':
      return <CandidatePortalPage />;
    case '/portal/client':
      return <ClientPortalPage />;
    case '/auth/login':
      return <LoginPage />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  return (
    <div className="min-h-screen bg-fog text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(37,99,235,0.12),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,0.08),transparent_45%),linear-gradient(to_bottom,#ffffff,#f8fafc_35%,#f1f5f9)]" />
      <SiteHeader />
      <RoutedPage />
      <SiteFooter />
    </div>
  );
}

export default App;
