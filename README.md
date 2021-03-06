# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instrução de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar o mailtrap para testar envios em ambiente dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em background;

**RN**

- O link enviado por e-mail para recuperar senha deve  expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetá-la;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RNF**

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongodb;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os pretadores de serviços cadastrados;
- O usuário deve poder lsitar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8, último às 17);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
-
