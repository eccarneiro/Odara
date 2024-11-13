import React, { useState } from 'react';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [email, setEmail] = useState('user@example.com'); // Exemplo de email
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar o modo de edição
  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: 1, item: 'Produto A', date: '2023-01-01' },
    { id: 2, item: 'Produto B', date: '2023-02-15' },
  ]);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    // Aqui você pode adicionar a lógica para salvar a foto e as informações do perfil
    console.log('Foto de perfil e informações salvas!');
    // Simulação de salvamento
    alert('Foto de perfil e informações salvas!');
    setIsEditing(false); // Desativa o modo de edição após salvar
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-dominant">Meu Perfil</h1>

      <div className="flex items-center mb-5">
        <div className="mr-5">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full" />
          ) : (
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Sem Foto</span>
            </div>
          )}
        </div>
        <div>
          <label className="bg-dominant text-white py-2 px-4 rounded cursor-pointer">
            Adicionar Foto
            <input type="file" accept="image/*" onChange={handlePictureChange} className="hidden" />
          </label>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-2 text-dominant">Informações de Contato</h2>
        <div className="mb-2">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border border-gray-300 rounded p-2 w-full ${isEditing ? '' : 'bg-gray-100 cursor-not-allowed'}`}
            readOnly={!isEditing} // Bloqueia o campo se não estiver em modo de edição
          />
        </div>
        <div>
          <label className="block mb-1">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border border-gray-300 rounded p-2 w-full ${isEditing ? '' : 'bg-gray-100 cursor-not-allowed'}`}
            readOnly={!isEditing} // Bloqueia o campo se não estiver em modo de edição
          />
        </div>
        <button
          onClick={isEditing ? handleSaveProfile : handleEditToggle}
          className="mt-3 bg-dominant text-white py-2 px-4 rounded"
        >
          {isEditing ? 'Salvar' : 'Editar'}
        </button>
      </div>

      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-2 text-dominant">Histórico de Compras</h2>
        <ul className="list-disc pl-5">
          {purchaseHistory.map((purchase) => (
            <li key={purchase.id} className="mb-1">
              {purchase.item} - {purchase.date}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-2 text-dominant">Configurações de Pagamento</h2>
        <p>Adicione suas informações de pagamento aqui.</p>
        {/* Você pode adicionar um formulário ou informações adicionais aqui */}
      </div>
    </div>
  );
};

export default Profile;
