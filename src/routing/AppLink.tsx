import { type AnchorHTMLAttributes, type MouseEvent } from 'react';
import { useAppRouter } from './router';

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
};

const isExternalLink = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

export function AppLink({ to, onClick, target, rel, ...props }: AppLinkProps) {
  const { navigate } = useAppRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      target === '_blank' ||
      isExternalLink(to)
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return <a href={to} target={target} rel={rel} onClick={handleClick} {...props} />;
}
