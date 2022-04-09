import { useRouter } from "next/dist/client/router";
import ButtonLink from "./ButtonLink";

export default function Navigation({
  pages
}) {
  const router = useRouter();
  return (
    <div className="navigation w-full justify-between px-4">
      <div>
        {pages.map((page) => {
          return (
            <ButtonLink
              linkProps={{
                href: page.href,
                key: page.href
              }}
              aProps={{
                className: `${router.route === page.href ? "selected text-theme-7" : ""} cursor-pointer`,
                transition: { duration: 0.2 },
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.8 },
              }}
            >
              {page.name}
            </ButtonLink>
          );
        })}
      </div>
      <ButtonLink
        linkProps={{
          href: '/rsvp',
          key: '/rsvp'
        }}
        aProps={{
          className: `${router.route === '/rsvp' ? "selected text-theme-7" : ""} cursor-pointer`,
          transition: { duration: 0.2 },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.8 },
        }}
      >
        RSVP
      </ButtonLink>
    </div>
  );
}