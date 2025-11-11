"use client";

import ArrowLeft from "@/components/assets/svgs/arrow-left";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetchData from "@/hooks/useFetchData";
import { T_Deal } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { UserDeleteDialog } from "./user-delete-dialog";

const SkeletonLoader = () => (
  <TableBody>
    {[...Array(5)].map((_, idx) => (
      <TableRow key={idx}>
        <TableCell className="py-3.5 px-6">
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
          </div>
        </TableCell>
        <TableCell className="py-3.5 px-6">
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </TableCell>
        <TableCell className="py-3.5 px-6">
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </TableCell>
        <TableCell className="py-3.5 px-6">
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
          </div>
        </TableCell>
        <TableCell className="py-3.5 px-6 text-center">
          <div className="animate-pulse h-6 w-1/2 bg-gray-200 rounded mx-auto"></div>
        </TableCell>
        <TableCell className="py-3.5 px-6 text-center">
          <div className="animate-pulse h-6 w-1/2 bg-gray-200 rounded mx-auto"></div>
        </TableCell>
        <TableCell className="py-3.5 px-6 text-center">
          <div className="animate-pulse flex justify-center items-center space-x-2">
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export function UserTable() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 5;

  const {
    data: users,
    loading,
    error,
  } = useFetchData<T_Deal[]>(
    `https://69102d7545e65ab24ac5d435.mockapi.io/users?page=${page}&limit=${limit}`
  );

  // Update the URL when page or limit changes
  const updatePage = (newPage: number) => {
    router.push(`?page=${newPage}&limit=${limit}`);
  };

  useEffect(() => {
    // This ensures when page or limit changes, it refetch data
  }, [page, limit]);

  const handleDelete = async (id: string) => {
    // Show loading toast
    toast.promise(
      // The promise to be wrapped in toast
      async () => {
        const response = await fetch(
          `https://69102d7545e65ab24ac5d435.mockapi.io/users/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        return { id };
      },
      {
        loading: "Deleting user...", // Loading state message
        success: (data) => `${data.id}'s user has been deleted`, // Success state message
        error: "Failed to delete user", // Error state message
      }
    );

    // Optionally re-fetch data after deletion
    router.push(`?page=${page}&limit=${limit}`); // Reload after deletion
  };

  if (loading) {
    return (
      <div className="">
        <div className="bg-white rounded-t-xl py-4 px-6 flex items-center justify-between">
          <div>All Users</div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search" />
            <Button className="bg-white hover:bg-inherit shadow text-black px-4 py-3 border">
              <Image
                src="/assets/filter.svg"
                alt="filter"
                width={20}
                height={20}
              />
              Filter
            </Button>
          </div>
        </div>
        <Table className="bg-white w-full">
          <SkeletonLoader />
        </Table>
      </div>
    );
  }

  if (error) {
    return <div>Error loading users: {error}</div>;
  }

  const isPrevValid = page > 1;

  return (
    <div className="">
      <div className="bg-white rounded-t-xl py-4 px-6 flex items-center justify-between">
        <div>All Users</div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search" />
          <Button className="bg-white hover:bg-inherit shadow text-black px-4 py-3 border">
            <Image
              src="/assets/filter.svg"
              alt="filter"
              width={20}
              height={20}
            />
            Filter
          </Button>
        </div>
      </div>

      <Table className="bg-white w-full">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="py-3 px-6 flex items-end space-x-3">
              <Checkbox id="DEL_ID_ALL" className="block" />
              <Label htmlFor="DEL_ID_ALL" className="block">
                Deal ID
              </Label>
            </TableHead>
            <TableHead className="py-3 px-6">Customer</TableHead>
            <TableHead className="py-3 px-6">Product/Service</TableHead>
            <TableHead className="py-3 px-6">Deal Value</TableHead>
            <TableHead className="py-3 px-6 text-center">Close Date</TableHead>
            <TableHead className="py-3 px-6 text-center">Status</TableHead>
            <TableHead className="py-3 px-6 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user.dealId}>
                <TableCell className="py-3.5 px-6 flex items-center space-x-2 ">
                  <Checkbox id={`del_id_${user.dealId}`} />
                  <Label htmlFor={`del_id_${user.dealId}`} className="mt-1">
                    {user.dealId}
                  </Label>
                </TableCell>
                <TableCell className="py-3.5 px-6">{user.customer}</TableCell>
                <TableCell className="py-3.5 px-6">{user.product}</TableCell>
                <TableCell className="py-3.5 px-6">{user.dealValue}</TableCell>
                <TableCell className="py-3.5 px-6 text-center">
                  {user.closeDate}
                </TableCell>
                <TableCell className="py-3.5 px-6 text-center">
                  {user.status}
                </TableCell>
                <TableCell className="py-3.5 px-6 text-center">
                  <UserDeleteDialog
                    onDelete={handleDelete}
                    userId={user.dealId}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div className="bg-white rounded-b-xl w-full border-t">
        <div className="flex items-center justify-end pl-5">
          {/* <div>
            Showing {(page - 1) * limit + 1} to {page * limit} of{" "}
            {users && users.length}
          </div> */}
          <div className="p-4">
            <Button
              className={`${isPrevValid ? "" : "disable"} cursor-pointer `}
              disabled={!isPrevValid}
              onClick={() => updatePage(isPrevValid ? page - 1 : page)}
            >
              <ArrowLeft />
            </Button>

            <Button
              className={`${
                users && users.length < limit ? "disable" : ""
              } cursor-pointer `}
              disabled={page === 4}
              onClick={() => updatePage(page + 1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
