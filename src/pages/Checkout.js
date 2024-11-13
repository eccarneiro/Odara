import React from 'react';

const Checkout = () => {
  const subscriptions = [
    {
      id: 1,
      name: 'Assinatura Básica',
      active: true,
      expirationDate: '2023-12-31',
      discount: '10%',
      associatedWith: 'Restaurante A',
      couponCode: 'CUPOM10',
    },
    {
      id: 2,
      name: 'Assinatura Premium',
      active: true,
      expirationDate: '2024-06-30',
      discount: '20%',
      associatedWith: 'Cachoeira B',
      couponCode: 'CUPOM20',
    },
  ];

  const handleDownloadCoupon = (couponCode) => {
    alert(`Baixando o cupom para o código: ${couponCode}`);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-dominant">Checkout</h1>
      <h2 className="text-2xl font-semibold mb-4 text-dominant">Minhas Assinaturas</h2>
      {subscriptions.length === 0 ? (
        <p className="text-gray-500">Você não possui assinaturas ativas.</p>
      ) : (
        subscriptions.map((subscription) => (
          <div key={subscription.id} className="border border-gray-300 rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-dominant">{subscription.name}</h3>
            <p><strong>Status:</strong> {subscription.active ? 'Ativa' : 'Inativa'}</p>
            <p><strong>Data de Expiração:</strong> {subscription.expirationDate}</p>
            <p><strong>Desconto:</strong> {subscription.discount}</p>
            <p><strong>Associado:</strong> {subscription.associatedWith}</p>
            <button
              onClick={() => handleDownloadCoupon(subscription.couponCode)}
              className="mt-3 bg-dominant text-white py-2 px-4 rounded"
            >
              Baixar PDF com QR Code
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Checkout;
