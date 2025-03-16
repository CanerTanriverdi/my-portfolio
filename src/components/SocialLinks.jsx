import React from "react";

export default function SocialLinks({ links, containerClass, iconClass }) {
  return (
    <div className={containerClass}>
      {links.map((links) => (
        <a
          key={links.id}
          href={links.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={links.icon}
            alt={links.id}
            className={iconClass}
          />
        </a>
      ))}
    </div>
  );
}
