import React from "react";
import Header from "../component/Menu/Header";
import Folder from "../component/Menu/Folder";
import Footer from "../component/Menu/Footer";
import TopSection from "../component/Menu/TopSection";
import ProducHeader from "../component/product/ProductHeader";
import ProductContainer from "../component/product/ProductContainer";

function Home() {
  const id =
    window?.location?.href?.split("/")[
      window.location.href.split("/").length - 1
    ];
  return (
    <section className=" flex min-[1700px]:ml-[50%]  min-[1700px]:translate-x-[-50%] ">
      <section
        className={`w-[30%] max-[850px]:absolute top-0 left-0 flex-shrink-0 max-[850px]:w-full px-3 max-[850px]:mx-0 max-[650px]:my-0 duration-500 ease-in-out
      max-[650px]:px-5 max-[850px]:py-5 max-[850px]:border-none mx-3 rounded-xl my-4 py-4 border
      max-[1050px]:py-8 max-[1050px]:px-4 max-w-[450px]
      max-[1050px]:w-[30%] overflow-hidden ${
        id === "product" ? "max-[850px]:translate-x-[-100%]" : ""
      }`}
      >
        <Header />
        <TopSection />
        <Folder />
        <Footer />
      </section>
      {id && (
        <section
          className={`w-[70%] max-[850px]:absolute top-0 left-0 max-[850px]:w-full max-[850px]:mx-0 max-[650px]:m-0 duration-700 ease-in-out
      max-[650px]:px-0 max-[650px]:py-5 max-[650px]:border-none mx-3 rounded-xl my-4 border
      max-[1050px]:w-[70%] overflow-hidden ${
        id === "product" ? "" : "max-[850px]:translate-x-[-100%]"
      }`}
        >
          <ProducHeader />
          <ProductContainer />
        </section>
      )}
    </section>
  );
}

export default Home;
