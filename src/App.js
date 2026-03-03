import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { isKnownRoute, useAppRouter } from './routing/router';
const routeToTitle = {
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
            return _jsx(HomePage, {});
        case '/services':
            return _jsx(ServicesPage, {});
        case '/testimonials':
            return _jsx(TestimonialsPage, {});
        case '/clients':
            return _jsx(ClientsPage, {});
        case '/about':
            return _jsx(AboutPage, {});
        case '/contact':
            return _jsx(ContactPage, {});
        case '/portal/candidate':
            return _jsx(CandidatePortalPage, {});
        case '/portal/client':
            return _jsx(ClientPortalPage, {});
        case '/auth/login':
            return _jsx(LoginPage, {});
        default:
            return _jsx(NotFoundPage, {});
    }
}
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-fog text-ink", children: [_jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(37,99,235,0.12),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,0.08),transparent_45%),linear-gradient(to_bottom,#ffffff,#f8fafc_35%,#f1f5f9)]" }), _jsx(SiteHeader, {}), _jsx(RoutedPage, {}), _jsx(SiteFooter, {})] }));
}
export default App;
