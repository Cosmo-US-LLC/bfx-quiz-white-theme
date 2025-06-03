import Logo from "../assets/header/logo.png"

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#121212]">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Loading
