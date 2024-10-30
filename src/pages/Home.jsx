import Main from "../comps/Main";

export default function Home() {
  return (
    <div className="">
      <div className="text-center">
        <p className="font-thin text-2xl">TODO APP</p>
        <h1 className="text-lg md:text-2xl font-bold">
          Hello, <span className="nameDay text-4xl md:text-8xl">Start Planning Today</span>
        </h1>
      </div>
      <div className="mx-10">
        <Main />
      </div>
    </div>
  );
}
