"use client";
import ArrowLeft from "@/src/assets/svgs/arrow-left";
import FilterIcon from "@/src/assets/svgs/filter";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import useFetchData from "@/src/hooks/useFetchData";
import { cn } from "@/src/lib/utils";
import { T_Deal } from "@/types";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import UserTableSkeleton, {
  Skeleton,
} from "../../style-componenets/skeletons/user-table-skeleton";
import { UserDeleteDialog } from "./user-delete-dialog";

export function UserTable() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filteredUsers, setFilteredUsers] = useState<T_Deal[] | undefined>([]);

  const {
    data: users,
    loading,
    error,
  } = useFetchData<T_Deal[]>(
    "https://69102d7545e65ab24ac5d435.mockapi.io/users"
  );

  useEffect(() => {
    if (users) {
      setFilteredUsers(users);
      setTotalPages(Math.ceil(users?.length / itemsPerPage));
    }
  }, [users]);

  // Filtering users based on search query ✌
  useEffect(() => {
    if (searchQuery) {
      const filtered = users?.filter(
        (user) =>
          user.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.dealId.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
      // @ts-ignore
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
      setCurrentPage(1); // Reset to first page after search
    } else {
      // @ts-ignore
      setFilteredUsers(users);
      // @ts-ignore
      setTotalPages(Math.ceil(users?.length / itemsPerPage));
    }
  }, [searchQuery, users]);

  // Paginate the data for current page 😎
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
        // @ts-ignore
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

  let content = null;
  if (loading) {
    content = <UserTableSkeleton />;
  } else if (error) {
    content = (
      <div className="text-2xl text-center py-10">Error loading users.</div>
    );
  } else {
    content = (
      <>
        {currentPageData?.map((user) => (
          <TableRow key={user.dealId}>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox />
                <Label>{user.dealId}</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full cursor-pointer relative overflow-hidden w-10 h-10 ">
                <Image
                  className="absolute object-cover p-0.5 rounded-full "
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt={user.customer ?? ""}
                  src={user.avatar}
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  {user.customer}
                </p>
                <p className="text-[#667085]">{user.email}</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">{user.product}</TableCell>
            <TableCell className="py-3.5 px-6">{user.dealValue}</TableCell>
            <TableCell className="py-3.5 px-6">{user.closeDate}</TableCell>
            <TableCell className="py-3.5 px-6">{user.status}</TableCell>
            <TableCell className="py-3.5 px-6">
              <UserDeleteDialog onDelete={handleDelete} userId={user.dealId} />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-t-xl py-4 md:px-6 px-3 flex items-center justify-between">
        <div>
          <p className="leading-7 tracking-[-0.2px] text-[18px] font-bold text-[#1D2939]">
            All Users
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative md:block hidden">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
            <Input
              placeholder="Search..."
              value={searchQuery}
              disabled={loading}
              onChange={handleSearch}
              className="pl-10 py-3.5 pr-4 md:w-[320px] h-11 rounded-[12px] border-[#D0D5DD] border"
            />
          </div>
          <StyledButtons.Icons
            onClick={() =>
              toast.info("Search not implemented for mobile devices!")
            }
            className="py-4 px-3 space-x-1 cursor-pointer h-11 rounded-[12px] md:hidden block"
          >
            <SearchIcon className="text-[#344054]" />
            <p className="text-[#344054] leading-5 text-sm tracking-[-0.02px] md:block hidden">
              Search
            </p>
          </StyledButtons.Icons>

          <StyledButtons.Icons
            onClick={() => toast.info("Not implemented yet!!")}
            className="py-4 px-3 space-x-1 cursor-pointer h-11 rounded-[12px]"
          >
            <FilterIcon className="text-[#344054]" />
            <p className="text-[#344054] leading-5 text-sm tracking-[-0.02px] md:block hidden">
              Filter
            </p>
          </StyledButtons.Icons>
        </div>
      </div>

      <Table className="bg-white w-full">
        <TableHeaders />
        <TableBody>{content}</TableBody>
      </Table>

      <div className="flex items-center justify-between py-4 md:px-6 px-3 bg-white border-t rounded-b-xl">
        <div className="pl-5">
          {!loading && (
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
          )}
          {loading && <Skeleton className="h-3.5 w-20" />}
        </div>
        <div className="flex space-x-2">
          <StyledButtons.Icons
            className=" px-3! py-2 rounded-[14px] cursor-pointer"
            disabled={currentPage === 1 || loading}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowLeft />
          </StyledButtons.Icons>

          {loading
            ? null
            : totalPagesArray.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "bg-white text-[#344054] leading-5 text-sm p-3 rounded-xl size-10 hover:bg-white cursor-pointer md:block hidden",
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
            disabled={currentPage === totalPages || loading}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ArrowLeft className="rotate-180" />
          </StyledButtons.Icons>
        </div>
      </div>
    </div>
  );
}
const TableHeaders = () => {
  return (
    <TableHeader className="bg-[#F9FAFB]">
      <TableRow>
        <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
          <div className="flex items-center space-x-1.5">
            <Checkbox />
            <Label>Deal ID</Label>
          </div>
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
        <TableHead className=" py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
          Close Date
        </TableHead>
        <TableHead className=" py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
          Status
        </TableHead>
        <TableHead className=" py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
          Action
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};
