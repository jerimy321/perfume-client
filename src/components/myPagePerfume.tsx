export default function MyPagePerfume() {
  return (
    <div className="flex flex-row items-start gap-2">
      <input type="checkbox" />
      <div className="flex flex-col items-center px-5 pb-10">
        <img
          src={`${process.env.PUBLIC_URL}/images/perfumeIMG.jpg`}
          className="w-[150px]"
          alt="perfume"
        />
        <div>제품명</div>
      </div>
    </div>
  );
}
