import comp from '../components/comp'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <comp>
        <p className="text-xl font-bold text-gray-700"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button1
        </button></p>
      </comp>
    </div>
  )
}

export default Home