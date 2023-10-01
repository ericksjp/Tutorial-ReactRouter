import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";
import NotFound from "../../NotFound";

export default function Invoice() {
  const params = useParams();

  const invoice = getInvoice(Number(params.invoiceId));

  if (invoice !== undefined)
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total due: {invoice.due}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </main>
    );

    return <NotFound />
}
