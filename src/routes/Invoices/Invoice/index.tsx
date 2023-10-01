import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data";
import NotFound from "../../NotFound";

export default function Invoice() {
  const params = useParams();
  const navigate = useNavigate();
  const invoice = getInvoice(Number(params.invoiceId));

  if (invoice !== undefined)
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total due: {invoice.due}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <button 
            onClick={() => {
                deleteInvoice(invoice.number);
                navigate('/invoices' + location.search);
            }}
            >
                Delete
        </button>
      </main>
    );

    return <NotFound />
}
