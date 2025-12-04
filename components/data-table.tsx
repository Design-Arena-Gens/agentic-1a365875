"use client";

import { MarketInsight } from "@/lib/data";
import { useMemo } from "react";
import { useTable } from "react-table";

export function DataTable({ data }: { data: MarketInsight[] }) {
  const tableData = useMemo(() => data, [data]);
  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Country",
        accessor: (row: MarketInsight) => row.country
      },
      {
        Header: "Smart Home Growth (YoY)",
        accessor: (row: MarketInsight) => `${row.growthRate}%`
      },
      {
        Header: "GDP Growth 2025-26 (proj)",
        accessor: (row: MarketInsight) => `${row.metrics.gdpGrowth.toFixed(1)}%`
      },
      {
        Header: "Internet Penetration",
        accessor: (row: MarketInsight) => `${row.metrics.internetPenetration}%`
      },
      {
        Header: "Avg Household Income (USD PPP)",
        accessor: (row: MarketInsight) => currencyFormatter.format(row.metrics.avgHouseholdIncome)
      }
    ],
    [currencyFormatter]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: tableData
  });

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700">
      <table
        {...(getTableProps() as object)}
        className="min-w-full divide-y divide-slate-200 bg-white text-sm dark:divide-slate-700 dark:bg-slate-900"
      >
        <thead className="bg-slate-50 text-left uppercase tracking-wide text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...(headerGroup.getHeaderGroupProps() as object)}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...(column.getHeaderProps() as object)} className="px-4 py-3">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...(getTableBodyProps() as object)} className="divide-y divide-slate-200 dark:divide-slate-700">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...(row.getRowProps() as object)} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/60">
                {row.cells.map((cell) => (
                  <td key={cell.column.id} {...(cell.getCellProps() as object)} className="px-4 py-3 text-slate-700 dark:text-slate-200">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
