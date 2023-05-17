const { ApplicationCommandOptionType } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'cep',
  description: 'Obtém informações sobre um CEP',
  options: [
    {
      name: 'cep',
      description: 'CEP a ser pesquisado',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  
run: async (client, interaction) => {
    const cep = interaction.options.getString('cep');
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const response = await axios.get(url);

      const { cep, logradouro, complemento, bairro, localidade, uf } = response.data;

      interaction.reply({
        embeds: [
          {
            title: `Informações para o CEP ${cep}`,
            fields: [
              {
                name: 'Logradouro',
                value: logradouro,
              },
              {
                name: 'Complemento',
                value: complemento || 'N/A',
              },
              {
                name: 'Bairro',
                value: bairro,
              },
              {
                name: 'Cidade',
                value: localidade,
              },
              {
                name: 'Estado',
                value: uf,
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: 'Ocorreu um erro ao obter informações sobre o CEP. Tente novamente mais tarde.',
        ephemeral: true,
      });
    }
  },
};
                  
