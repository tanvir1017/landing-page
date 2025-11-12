"use client";

import ArrowLeft from "@/components/assets/svgs/arrow-left";
import FilterIcon from "@/components/assets/svgs/filter";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetchData from "@/hooks/useFetchData";
import { cn } from "@/lib/utils";
import { T_Deal } from "@/types";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5); // Items per page
  const [totalPages, setTotalPages] = useState<number>(1); // Total number of pages

  const {
    data: users,
    loading,
    error,
  } = useFetchData<T_Deal[]>(
    "https://69102d7545e65ab24ac5d435.mockapi.io/users"
  );

  const [filteredUsers, setFilteredUsers] = useState<T_Deal[] | undefined>([]);

  useEffect(() => {
    if (users) {
      setFilteredUsers(users);
      setTotalPages(Math.ceil(users?.length / itemsPerPage));
    }
  }, [users]);

  // Filter users based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = users?.filter(
        (user) =>
          user.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.dealId.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
      setCurrentPage(1); // Reset to first page after search
    } else {
      setFilteredUsers(users);
      setTotalPages(Math.ceil(users?.length / itemsPerPage));
    }
  }, [searchQuery, users]);

  // Paginate the data for current page
  const currentPageData = filteredUsers?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (id: string) => {
    toast.promise(
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

        // Re-fetch the data or remove from local state
        setFilteredUsers(filteredUsers.filter((user) => user.dealId !== id));
        return { id };
      },
      {
        loading: "Deleting user...",
        success: (data) => `${data.id}'s user has been deleted`,
        error: "Failed to delete user",
      }
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPagesArray = Array.from(
    { length: totalPages },
    (_, idx) => idx + 1
  );

  return (
    <div>
      <div className="bg-white rounded-t-xl py-4 px-6 flex items-center justify-between">
        <div>
          <p className="leading-7 tracking-[-0.2px] text-[18px] font-bold text-[#1D2939]">
            All Users
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 py-3.5 pr-4 w-[320px] h-11 rounded-[12px] border-[#D0D5DD] border"
            />
          </div>
          <StyledButtons.Icons
            onClick={() => toast.info("Not implemented yet!!")}
            className="py-4 px-3 space-x-1 cursor-pointer h-11 rounded-[12px]"
          >
            <FilterIcon className="text-[#344054]" />
            <p className="text-[#344054] leading-5 text-sm tracking-[-0.02px]">
              Filter
            </p>
          </StyledButtons.Icons>
        </div>
      </div>

      <Table className="bg-white w-full">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Deal ID
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Customer
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Product/Service
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Deal Value
            </TableHead>
            <TableHead className="text-center py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Close Date
            </TableHead>
            <TableHead className="text-center py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Status
            </TableHead>
            <TableHead className="text-center py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentPageData?.map((user) => (
            <TableRow key={user.dealId}>
              <TableCell className="py-3.5 px-6">{user.dealId}</TableCell>
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

      <div className="flex items-center justify-between py-4 px-6 bg-white border-t rounded-b-xl">
        <div className="pl-5">
          <p className="text-sm text-[#667085]">
            Showing{" "}
            <span className="font-medium text-[#344054]">
              {currentPageData?.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#344054]">
              {filteredUsers?.length}
            </span>{" "}
            results
          </p>
        </div>
        <div className="flex space-x-2">
          <StyledButtons.Icons
            className=" px-3! py-2 rounded-[14px] cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowLeft />
          </StyledButtons.Icons>

          {totalPagesArray.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              className={cn(
                "bg-white text-[#344054] leading-5 text-sm p-3 rounded-xl size-10 hover:bg-white cursor-pointer ",
                {
                  "bg-[#3758F9] hover:bg-[#3758F9] text-white":
                    currentPage === page,
                }
              )}
            >
              {page}
            </Button>
          ))}

          <StyledButtons.Icons
            className="text-black px-3! py-2 rounded-[14px] cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ArrowLeft className="rotate-180" />
          </StyledButtons.Icons>
        </div>
      </div>
    </div>
  );
}
