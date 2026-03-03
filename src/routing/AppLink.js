import { jsx as _jsx } from "react/jsx-runtime";
import { useAppRouter } from './router';
const isExternalLink = (to) => /^(https?:|mailto:|tel:)/.test(to);
export function AppLink({ to, onClick, target, rel, ...props }) {
    const { navigate } = useAppRouter();
    const handleClick = (event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (event.button !== 0 ||
            event.metaKey ||
            event.altKey ||
            event.ctrlKey ||
            event.shiftKey ||
            target === '_blank' ||
            isExternalLink(to)) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    return _jsx("a", { href: to, target: target, rel: rel, onClick: handleClick, ...props });
}
