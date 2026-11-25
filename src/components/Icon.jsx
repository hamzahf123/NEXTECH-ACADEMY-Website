const base = import.meta.env.BASE_URL;

export default function Icon({ name, size = 18, className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <use href={`${base}assets/img/icons.svg#i-${name}`} />
    </svg>
  );
}
