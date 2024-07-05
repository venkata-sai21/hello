// src/components/Contacts.js
import React from "react";

const Contacts = () => {
  const contacts = [
    {
      name: "venkata sai mada",
      phone: "8639880045",
      email: "saivenkata615@gmail.com",
      address: "6/103,skr-nagar,madhavaram1,sidhout(m),kadapa(dist),ap(st),India",
    },
    {
      name: "sandyNo1",
      phone: "8639880045",
      email: "saivenkata615@gmail.com",
      address: "6/103,skr-nagar,madhavaram1,sidhout(m),kadapa(dist),ap(st),India",
    },
    {
      name: "sandyNO2",
      phone: "8639880045",
      email: "saivenkata615@gmail.com",
      address: "6/103,skr-nagar,madhavaram1,sidhout(m),kadapa(dist),ap(st),India",
    },
  ];

  return (
    <div className="container">
      <h2 className="my-4">Contacts</h2>
      <div className="row justify-content-center">
        {contacts.map((contact) => (
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="bg-light">
                <h5 className="card-title d-lg-none">{contact.name}</h5>
                <p className="card-text">
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {contact.email}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {contact.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
