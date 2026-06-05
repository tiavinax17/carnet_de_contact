
const ButtonAdd = ({open, setOpen}) => {
  return (
    <div className='cursor-pointer hover:bg-purple-700 p-3 rounded-full bg-[#5d0b83] w-[50px] h-[50px] flex items-center justify-center -mt-[100px] lg:-mr-[400px] -mr-[250px] border-2 border-black shadow-[5px_5px_0px_0px_black]'
    onClick={() =>setOpen(!open)}
    >
        <h1 className='font-schoolbell text-6xl font-normal  text-white'>
            +
        </h1>
    </div>
  )
}

export default ButtonAdd