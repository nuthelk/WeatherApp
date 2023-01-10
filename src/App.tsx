import Content from "./components/Content"
import TitleBar from "./components/TitleBar"

function App() {


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100 dark:bg-gray-900">
      <main className="h-[90%] w-[1000px] bg-white dark:bg-gray-700 shadow-md rounded-xl overflow-auto">
        <TitleBar />
        <Content />
      </main>
    </div>
  )
}

export default App
