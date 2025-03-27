import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        `border border-solid py-[10px] border-[#eeeeee]
        shadow-[0px_8px_15px_#1414141f,0px_0px_4px_#1414141a]
        rounded-md `,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
