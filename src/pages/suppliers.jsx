import Image from "next/image";


export default function TravelAndStay() {
  return (
    <div className="page">
      {/* <h1>Suppliers</h1> */}
      <div style={{height: 300, width: 500, display: 'block'}}>
        <Image src={'/suppliers/onTheEve.jpeg'} width={300} height={300} layout="fixed" />
      </div>
    </div>
  );
}