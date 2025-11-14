import { cn } from "@/src/lib/utils";
import { TableCell, TableRow } from "../../ui/table";

const UserTableSkeleton = () => {
  return (
    <>
      {[...Array(5)]?.map((_, index) => (
        <TableRow key={index}>
          <TableCell className="py-3.5 px-6 ">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6 ">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6 ">
            <Skeleton className="w-24 h-8" />
          </TableCell>
          <TableCell className="py-3.5 px-6 ">
            <Skeleton className="w-24 h-8" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(`h-4 w-24 bg-gray-200 rounded-md animate-pulse`, className)}
    />
  );
};

export default UserTableSkeleton;
