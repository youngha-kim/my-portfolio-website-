type props = {
  title: string;
  txtColor: string;
};

const Subtitle = ({ title, txtColor }: props) => {
  return (
    <>
      <div className="text-decoration: underline text-5xl font-black text-center">
        <p className={txtColor}>{title}</p>
      </div>
    </>
  );
};

export default Subtitle;
