import React, { useState } from "react";
function App() {
  const [activeInvoice, setActiveInvoice] = useState(null);
  const invoices = [
    {
      id: 1,
      details: "Delivery (customer details)",
      customer: "Invoice customer (customer details)",
      calculation: "Invoice calculation",
    },
    {
      id: 2,
      products: [
        { name: "Product 1", details: "Product 1 details for Invoice 2" },
        { name: "Product 2", details: "Product 2 details for Invoice 2" },
      ],
    },
    {
      id: 3,
      products: [
        { name: "Product 1", details: "Product 1 details for Invoice 3" },
        { name: "Product 2", details: "Product 2 details for Invoice 3" },
        { name: "Product 3", details: "Product 3 details for Invoice 3" },
      ],
    },
    {
      id: 4,
      products: [
        { name: "Product 1", details: "Product 1 details for Invoice 4" },
        { name: "Product 2", details: "Product 2 details for Invoice 4" },
      ],
    },
  ];
  const handleInvoiceClick = (id) => {
    setActiveInvoice(id);
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        {invoices.map((invoice) => (
          <button
            key={invoice.id}
            onClick={() => handleInvoiceClick(invoice.id)}
            style={{
              padding: "10px 20px",
              backgroundColor:
                activeInvoice === invoice.id ? "#007BFF" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Invoice {invoice.id}
          </button>
        ))}
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {activeInvoice === 1 && (
          <>
            <h3>Delivery</h3>
            <p>{invoices[0].details}</p>
            <h3>Invoice Customer</h3>
            <p>{invoices[0].customer}</p>
            <h3>Invoice Calculation</h3>
            <p>{invoices[0].calculation}</p>
          </>
        )}
        {activeInvoice > 1 &&
          invoices[activeInvoice - 1]?.products.map((product, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>{product.name}</h3>
              <p>{product.details}</p>
            </div>
          ))}
        {!activeInvoice && <p>Select an invoice to view details.</p>}
      </div>
    </div>
  );
}

export default App;
