import { Badge } from "../ui/badge";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-xl">
      <Badge className="px-1 border rounded bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white">
        N
      </Badge>
      <h1 className="font-bold">
        Next
        <span className="bg-linear-to-r from-[#3525CD] to-[#831ADA] bg-clip-text text-transparent">
          Event
        </span>
      </h1>
    </div>
  );
};

export default Logo;
