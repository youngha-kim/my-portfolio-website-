const Intro = () => {
  return (
    <>
    <div className="position bg-[#3C6997] border-black border-b-2">
      <div className="flex-col items-center text-center">
        <div className="font text-5xl text-white pt-2 font-black">
          <p> - 김영하 -</p>
          <p className="mt-5">웹 프론트엔드 포트폴리오</p>
        </div>

        <br />
        <p className="text-5xl font-black text-[#d77f8d] ">ㅡ</p>

        <br />
        <p className="text-xl text-[#e0dee8] font-mono">
          {" "}
          안녕하세요
          <br />
          동작원리를 파악하는 것을 좋아하는 프론트엔드 개발자 입니다
          <br />
          항상 best-practice를 찾기 위해 고민합니다.
        </p>
        <button className="border-2 border-white mt-14 mb-10 rounded-xl bg-[#3C6997] px-10 py-6 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#d77f8d]/100 ">
          더 알아보기
        </button>
      </div>
      </div>
    </>
  );
};

export default Intro;
