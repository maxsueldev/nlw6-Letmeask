// Incluir na mensagem de boas-vindas, a cidade e UF do usuário

type User = {
  name: string;
  address: {
    city: string;
    uf: string;
  }
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}

console.log(showWelcomeMessage({
  name: 'Maxsuel Fernando',
  address: {
    city: 'Maceió',
    uf: 'AL'
  }
}));

// Tudo é componente!!