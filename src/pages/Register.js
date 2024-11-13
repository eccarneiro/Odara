import React, { useState } from 'react';

const Register = () => {
  const [userType, setUserType] = useState('cliente'); // Estado para controlar o tipo de usuário
  const [companyData, setCompanyData] = useState({
    companyName: '',
    cnpj: '',
    address: '',
    phone: '',
    contactEmail: '',
    website: '',
    description: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (userType === 'empresa') {
      setCompanyData({ ...companyData, [name]: value });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#e3cbb3]">
      <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-3/4 lg:w-1/2" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 className="text-2xl font-bold text-[#794f25] mb-4">Registrar</h2>
        
        <div className="mb-4">
          <label className="block mb-1">Tipo de Usuário:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="cliente">Cliente</option>
            <option value="empresa">Empresa Parceira</option>
          </select>
        </div>

        {userType === 'empresa' && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Nome da Empresa:</label>
              <input
                type="text"
                name="companyName"
                value={companyData.companyName}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">CNPJ:</label>
              <input
                type="text"
                name="cnpj"
                value={companyData.cnpj}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Endereço Completo:</label>
              <input
                type="text"
                name="address"
                value={companyData.address}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Telefone de Contato:</label>
              <input
                type="text"
                name="phone"
                value={companyData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">E-mail de Contato:</label>
              <input
                type="email"
                name="contactEmail"
                value={companyData.contactEmail}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Website:</label>
              <input
                type="url"
                name="website"
                value={companyData.website}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Descrição da Empresa:</label>
              <textarea
                name="description"
                value={companyData.description}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Categoria:</label>
              <input
                type="text"
                name="category"
                value={companyData.category}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block mb-1">Nome:</label>
          <input type="text" className="border border-gray-300 rounded p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input type="email" className="border border-gray-300 rounded p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Senha:</label>
          <input type="password" className="border border-gray-300 rounded p-2 w-full" />
        </div>
        <button className="bg-[#794f25] text-white py-2 px-4 rounded w-full">Registrar</button>
      </div>
    </div>
  );
};

export default Register;
