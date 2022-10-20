// import {ChevronRightIcon, HomeIcon} from "@heroicons/react/outline";
// import {GetServerSideProps} from "next";
// import Link from "next/link";
// import dbConnect from "../../lib/dbConnect";
// import Room from "../../models/Room";

// export default function Breadcrumb(room) {
//   return (
//     <>
//       <div className="bg-white  mt-11 p-2 rounded-lg shadow-md flex">
//         <HomeIcon className="h-7 w-7" />
//         <Link href="/">
//           <a className=" cursor-pointer font-semibold  mt-1 ml-1"> Home </a>
//         </Link>
//         <ChevronRightIcon className="h-5 w-5 mt-2 ml-1" />
//         <p className="font-semibold mt-1">
//           {room.building}
//           {room.number}
//         </p>
//       </div>
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async ({params}) => {
//   await dbConnect();
//   const room = await Room.findById(params.id).lean();
//   return {props: {room: {...room, _id: room._id.toString()}}};
// };
interface BreadcrumbProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
  building: string;
  number: string;
}

export default function Breadcrumb(props: BreadcrumbProps) {
  const {icon, building, number} = props;
  return (
    <>
      <div className="bg-white  mt-11 p-2 rounded-lg shadow-md flex">
        {icon}
        <p className="font-semibold mt-1">
          {building}
          {number}
        </p>
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({params}) => {
//   await dbConnect();
//   const room = await Room.findById(params.id).lean();
//   return {props: {room: {...room, _id: room._id.toString()}}};
// };
