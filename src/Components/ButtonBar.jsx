function ButtonBar(props) {
  return (
    <a
      href={props.href}
      className='px-2 md:px-4 py-2 hover:bg-slate-200 hover:rounded-md text-blue-800 text-center'
    >
      <div className='grid justify-center'>{props.children}</div>
      <div>{props.text}</div>
    </a>
  )
}

export default ButtonBar
