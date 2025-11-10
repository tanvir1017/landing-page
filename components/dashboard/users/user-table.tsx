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

import Image from "next/image";
import { PaginationComponent } from "./pagination";
import { UserDeleteDialog } from "./user-delete-dialog";

export function UserTable() {
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
            Filter{" "}
          </Button>
        </div>
      </div>
      <Table className="bg-white w-full!">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="py-3 px-6 flex items-end space-x-3">
              <Checkbox id="DEL_ID" className="block" />
              <Label htmlFor="DEL_ID" className="block">
                Deal ID
              </Label>
            </TableHead>
            <TableHead className="py-3 px-6 ">Customer</TableHead>
            <TableHead className="py-3 px-6 ">Product/Service</TableHead>
            <TableHead className="py-3 px-6 ">Deal Value</TableHead>
            <TableHead className="py-3 px-6 text-center">Close Date</TableHead>
            <TableHead className="py-3 px-6 text-center">Status</TableHead>
            <TableHead className="py-3 px-6 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="">
              <TableCell className="font-medium py-3.5 px-6 flex items-center space-x-3">
                <Checkbox id={`del_id_${invoice.invoice}`} />
                <Label htmlFor={`del_id_${invoice.invoice}`}>
                  {invoice.invoice}
                </Label>
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6  relative ">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full relative overflow-hidden w-10 h-10 ">
                    <Image
                      className="absolute object-cover p-0.5 rounded-full "
                      blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                      placeholder="blur"
                      fill
                      alt={""}
                      src="/assets/john.png"
                    />
                  </div>
                  <div>
                    <p>John Doe</p>
                    <p>johndeo@gmail.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6 text-center">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6 text-center">
                1
              </TableCell>
              <TableCell className="font-medium py-3.5 px-6 text-center flex items-center justify-center ">
                <UserDeleteDialog />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-white rounded-b-xl w-full! border-t">
        <div className="flex items-center justify-between pl-5">
          <div>Showing 1 to 10 of 114</div>
          <div>
            <PaginationComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
