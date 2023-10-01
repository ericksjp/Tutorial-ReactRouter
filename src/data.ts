
type invoice = { name: string; number: number; amount: string; due: string };

let invoicesArray: invoice[] = [
  {
    name: "New York",
    number: 12345,
    amount: "$100.00",
    due: "2023-10-15",
  },
  {
    name: "Los Angeles",
    number: 54321,
    amount: "$200.00",
    due: "2023-10-20",
  },
  {
    name: "Chicago",
    number: 98765,
    amount: "$150.00",
    due: "2023-10-25",
  },
  {
    name: "Miami",
    number: 24680,
    amount: "$75.00",
    due: "2023-11-01",
  },
  {
    name: "San Francisco",
    number: 13579,
    amount: "$300.00",
    due: "2023-11-05",
  },
  {
    name: "Seattle",
    number: 11223,
    amount: "$125.00",
    due: "2023-11-10",
  },
  {
    name: "Austin",
    number: 998877,
    amount: "$90.00",
    due: "2023-11-15",
  },
  {
    name: "Denver",
    number: 556677,
    amount: "$180.00",
    due: "2023-11-20",
  },
  {
    name: "Boston",
    number: 334455,
    amount: "$220.00",
    due: "2023-11-25",
  },
  {
    name: "Philadelphia",
    number: 112233,
    amount: "$160.00",
    due: "2023-11-30",
  },
];

export function getInvoices(): invoice[]{
    return invoicesArray;
}

export function getInvoice(number: number): invoice | undefined{
  return invoicesArray.find((invoice) => invoice.number === number) || undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deleteInvoice(number: any) {
  invoicesArray = invoicesArray.filter((invoice) => invoice.number !== number)
}