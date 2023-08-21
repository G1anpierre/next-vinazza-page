import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, sede = [], ...props }) {
  return (
    <ul role="list" {...props}>
      {sede.map((oneSede) => (
        <li key={oneSede.title}>
          <Office name={oneSede.title} invert={invert}>
            {oneSede.description}
          </Office>
        </li>
      ))}
    </ul>
  )
}
