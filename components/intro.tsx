const Intro = () => {
  return (
    <>
      <div className="flex-col items-centerm text-center">
        <div className="font text-5xl text-white mt-20 font-black">
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
          동작원리를 파악하는 것을 좋아하는 웹 개발자 입니다
          <br />
          매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다
        </p>
        <button className="border-2 border-white mt-14 mb-10 rounded-xl bg-gradient-to-br from-[#e070e6] to-[#6025F5] px-10 py-6 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/100 ">
          더 알아보기
        </button>
      </div>
    </>
  );
};

export default Intro;
