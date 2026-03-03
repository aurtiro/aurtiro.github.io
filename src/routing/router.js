import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
export const routePaths = [
    '/',
    '/services',
    '/testimonials',
    '/clients',
    '/about',
    '/contact',
    '/portal/candidate',
    '/portal/client',
    '/auth/login'
];
const RouterContext = createContext(null);
const normalizePath = (pathname) => {
    if (!pathname) {
        return '/';
    }
    const trimmed = pathname.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
};
const parseDestination = (to) => {
    const url = new URL(to, window.location.origin);
    return {
        path: normalizePath(url.pathname),
        hash: url.hash
    };
};
const scrollToHash = (hash) => {
    if (!hash) {
        return;
    }
    const id = hash.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
export function AppRouterProvider({ children }) {
    const [path, setPath] = useState(() => normalizePath(window.location.pathname));
    useEffect(() => {
        const handlePopState = () => {
            setPath(normalizePath(window.location.pathname));
            if (window.location.hash) {
                window.requestAnimationFrame(() => scrollToHash(window.location.hash));
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);
    const value = useMemo(() => ({
        path,
        navigate: (to, options = {}) => {
            const { path: nextPath, hash } = parseDestination(to);
            const destination = `${nextPath}${hash}`;
            if (options.replace) {
                window.history.replaceState(null, '', destination);
            }
            else {
                window.history.pushState(null, '', destination);
            }
            setPath(nextPath);
            window.requestAnimationFrame(() => {
                if (hash) {
                    scrollToHash(hash);
                    return;
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }), [path]);
    return _jsx(RouterContext.Provider, { value: value, children: children });
}
export function useAppRouter() {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useAppRouter must be used within AppRouterProvider');
    }
    return context;
}
export function isKnownRoute(path) {
    return routePaths.includes(path);
}
