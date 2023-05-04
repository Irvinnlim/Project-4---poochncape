import { HashLoader } from "react-spinners";

export default function Spinner({ fullWidth }) {
  if (fullWidth) {
    return (
      <div className="w-full flex justify-center">
        <HashLoader color={"#4FD1C5"} speedMultiplier={2} />;
      </div>
    );
  }
  return <HashLoader color={"#4FD1C5"} speedMultiplier={2} />;
}
