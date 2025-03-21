import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

function Leaderboards() {
  const rows = [
    {
      user: {
        id: "users-1",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
      score: 10,
    },
    {
      user: {
        id: "users-2",
        name: "Jane Doe",
        email: "jane@example.com",
        avatar: "https://generated-image-url.jpg",
      },
      score: 5,
    },
  ];

  const columns = [
    {
      key: "score",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <MainLayout>
      {/* TITLE */}
      <Helmet>
        <title>Leaderboards</title>
      </Helmet>

      {/* MAIN CONTENT */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Leaderboards</h1>
      </div>
      <div className="mt-6">
        <Table aria-label="Example table with dynamic content" classNames={{ wrapper: "smooth-shadow" }}>
          <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
          <TableBody items={rows}>
            {(item) => <TableRow key={item.user.id}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>}
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
}

export default Leaderboards;
