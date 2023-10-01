type invoice = { name: string; number: number; amount: string; due: string };

const invoicesArray: invoice[] = [
  {
    name: "Invoice 1 - New York",
    number: 12345,
    amount: "$100.00",
    due: "2023-10-15",
  },
  {
    name: "Invoice 2 - Los Angeles",
    number: 54321,
    amount: "$200.00",
    due: "2023-10-20",
  },
  {
    name: "Invoice 3 - Chicago",
    number: 98765,
    amount: "$150.00",
    due: "2023-10-25",
  },
  {
    name: "Invoice 4 - Miami",
    number: 24680,
    amount: "$75.00",
    due: "2023-11-01",
  },
  {
    name: "Invoice 5 - San Francisco",
    number: 13579,
    amount: "$300.00",
    due: "2023-11-05",
  },
  {
    name: "Invoice 6 - Seattle",
    number: 11223,
    amount: "$125.00",
    due: "2023-11-10",
  },
  {
    name: "Invoice 7 - Austin",
    number: 998877,
    amount: "$90.00",
    due: "2023-11-15",
  },
  {
    name: "Invoice 8 - Denver",
    number: 556677,
    amount: "$180.00",
    due: "2023-11-20",
  },
  {
    name: "Invoice 9 - Boston",
    number: 334455,
    amount: "$220.00",
    due: "2023-11-25",
  },
  {
    name: "Invoice 10 - Philadelphia",
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