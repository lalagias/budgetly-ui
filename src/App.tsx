import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TransactionsWrapper from "./components/Transactions/TransactionsWrapper";

const App: React.FC = () => {
  return (
    <div className="bg-light-background h-screen w-screen flex ">
      <Navbar />
      <main className="main-layout w-full pt-10 pr-10 pb-10 pl-20">
        <Header />
        <TransactionsWrapper />
      </main>
    </div>
  )
}

export default App;
