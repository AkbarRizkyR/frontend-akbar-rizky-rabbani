import React from "react";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

const StaticTable = () => {
  return (
    <Table className="min-w-full divide-y border-2 divide-accent">
      <TableHeader className="bg-primary">
        <TableRow>
          <TableCell className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Nama Barang</TableCell>
          <TableCell className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Jumlah Barang</TableCell>
          <TableCell className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Harga</TableCell>
          <TableCell className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Berhasil Terjual</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-primary divide-y divide-accent">
        <TableRow className="hover:bg-gray-100">
          <TableCell className="px-6 py-4 whitespace-nowrap">Barang A</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">10</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">Rp 100.000</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">5</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-100">
          <TableCell className="px-6 py-4 whitespace-nowrap">Barang B</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">20</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">Rp 200.000</TableCell>
          <TableCell className="px-6 py-4 whitespace-nowrap">15</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StaticTable;