interface IMailConfig {
  driver: 'ethereal' | 'ses' | 'integrator';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'contato@sharksolutions.com.br',
      name: 'Equipe de contato',
    },
  },
} as IMailConfig;
