import ProgressLoader from "./components/ProgressLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ProgressLoader />
    </div>
  );
}
