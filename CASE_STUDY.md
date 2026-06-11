# Estudo de caso: Painel Codex Teste

## 1. Diagnóstico

O projeto nasceu como um painel estático local para registrar, de forma visual e manual, o fluxo de configuração segura do Codex CLI em uma pasta controlada.

Ele não executa diagnóstico real do sistema operacional, não detecta automaticamente sandbox, instalação ou permissões e não substitui testes técnicos do ambiente. Sua função é documentar e representar, em uma interface simples, o resultado de um processo de configuração que foi validado manualmente durante a instalação.

A perda principal era operacional: sem um caminho padronizado, havia risco de abrir o Codex no diretório errado, misturar arquivos pessoais com arquivos de teste, executar comandos fora da pasta autorizada ou manter uma configuração incompatível com a conta disponível.

## 2. Problemas reais encontrados

Durante a configuração do ambiente, os principais problemas foram:

- O comando `codex` não era reconhecido inicialmente no terminal.
- Houve falha de conexão com `api.github.com` durante o instalador.
- A instalação precisou ser feita via `npm`.
- A execução de scripts `.ps1` encontrou bloqueio no ambiente Windows.
- O uso de `codex.cmd` foi necessário para acionar o CLI de forma compatível.
- O modelo `gpt-5.3-codex` estava incompatível com a conta ChatGPT disponível.
- A configuração foi ajustada para usar `gpt-5.5`.
- Havia risco operacional de abrir o Codex no diretório pessoal do Windows, fora de uma pasta segura de projeto.
- Foi criada uma pasta segura no padrão `C:\Users\[usuario]\CodexProjetos\teste-codex`. No ambiente de teste, esse caminho apontava para a pasta local usada neste repositório.
- Foi criado o launcher `abrir-codex-teste.cmd` para iniciar o Codex no caminho correto.
- Foi criado e lido o `AGENTS.md`, consolidando as regras locais de operação.

Esses pontos definiram o valor real do projeto: não provar automaticamente o estado da máquina, mas organizar um fluxo seguro, repetível e documentado para operar o Codex CLI com aprovação humana.

## 3. Objetivo do projeto

Criar uma interface leve, local-first e sem dependências externas para registrar visualmente que o fluxo de configuração foi concluído e que o diretório de teste está organizado.

O painel deveria:

- abrir diretamente pelo `index.html`;
- funcionar sem instalação de pacotes;
- preservar HTML, CSS e JavaScript puro;
- registrar manualmente a última conferência feita pelo usuário;
- salvar essa conferência manual no navegador via `localStorage`;
- manter o escopo restrito à pasta local autorizada.

## 4. Estratégia

A estratégia foi manter o sistema pequeno, auditável e fácil de editar manualmente. Em vez de adicionar framework, build, backend ou dependências externas, o projeto usa uma arquitetura estática direta:

- `index.html` define a estrutura semântica da interface;
- `styles.css` concentra layout, responsividade, estados visuais e acabamento;
- `app.js` controla interação, persistência local e atualização de estado;
- `README.md` documenta o objetivo e a forma de abertura;
- `AGENTS.md` registra as regras locais de operação do Codex.

Essa decisão reduz fricção, evita custo de manutenção desnecessário e mantém o projeto adequado para registro operacional de configuração, sandbox e escrita controlada.

## 5. Execução

O painel apresenta uma tela única com três cards de status:

- Instalação OK;
- Sandbox OK;
- Escrita OK.

Esses cards não representam uma varredura automática do sistema. Eles funcionam como marcação visual de um fluxo já conferido manualmente durante a configuração.

Inicialmente, os cards aparecem como pendentes. Ao acionar o botão `Registrar conferência`, o JavaScript registra a data e hora da conferência manual no `localStorage`, altera os cards para estado `OK` e atualiza o log da interface.

Quando o usuário reabre o arquivo no mesmo navegador, o painel recupera a última conferência manual e preserva o estado, demonstrando persistência local sem servidor.

## 6. Arquitetura técnica

### HTML

O arquivo `index.html` usa estrutura semântica com `main`, `section`, `article`, títulos hierárquicos e atributos de acessibilidade como `aria-labelledby`, `aria-label`, `role="log"` e `aria-live="polite"`.

Essa escolha melhora legibilidade, navegação assistiva e clareza do documento.

### CSS

O arquivo `styles.css` define uma interface responsiva com:

- variáveis CSS em `:root`;
- layout centralizado;
- cards com estados visuais distintos;
- responsividade mobile-first via media query;
- contraste adequado entre painel, texto, cards e log;
- bordas discretas e raio de 8px, mantendo visual limpo e operacional.

### JavaScript

O arquivo `app.js` concentra a regra funcional:

- captura elementos da interface;
- aplica estado pendente ou validado;
- grava timestamp no `localStorage`;
- recupera conferência manual anterior;
- atualiza texto do botão, cards e log.

O código evita dependências e mantém uma separação simples entre estado, renderização e evento de usuário.

## 7. Decisões técnicas

A decisão central foi preservar o projeto como estático. Isso foi superior ao uso de ferramentas externas porque o objetivo era documentar e representar um fluxo operacional, não criar infraestrutura.

Principais decisões:

- Sem framework: reduz complexidade e elimina build.
- Sem backend: a persistência necessária cabe no navegador.
- Sem pacote externo: evita instalação e risco de permissão fora do escopo.
- Sem servidor local obrigatório: o arquivo pode ser aberto diretamente.
- Escopo pequeno: facilita auditoria e futuras alterações controladas.
- Aprovação humana: o painel registra uma conferência manual, sem automatizar diagnósticos que ele não executa.

## 8. Evidências de funcionamento

O funcionamento do painel pode ser validado por quatro sinais objetivos:

- `index.html` abre diretamente no navegador.
- O botão altera os cards de `Pendente` para `OK`.
- O log exibe a última data e hora de conferência manual.
- Ao reabrir a página, a última conferência manual permanece salva no navegador.

Essas evidências confirmam apenas que HTML, CSS, JavaScript e armazenamento local estão funcionando no navegador. Elas não comprovam, por si só, instalação do Codex, sandbox do sistema ou permissão de escrita no disco.

## 9. Trade-offs

O projeto privilegia simplicidade e controle. Isso traz ganhos claros, mas também limita o escopo.

Ganhos:

- execução imediata;
- manutenção simples;
- baixo risco técnico;
- fácil auditoria;
- compatibilidade com ambiente local controlado;
- documentação do fluxo real de configuração.

Limitações:

- a conferência manual não executa diagnóstico real do sistema operacional;
- o estado fica salvo apenas no navegador usado;
- não há sincronização entre dispositivos;
- não há testes automatizados;
- não há pipeline de deploy;
- os cards dependem da ação manual do usuário.

Essas limitações são aceitáveis para o objetivo atual, porque o projeto funciona como painel local de registro operacional, não como sistema de monitoramento completo.

## 10. Aprendizado

O estudo confirma que um projeto pequeno pode ser suficiente para organizar um fluxo operacional maior quando a arquitetura e o objetivo estão bem delimitados.

O principal aprendizado é que a melhor solução para este caso não era adicionar tecnologia, mas remover dependências e padronizar o caminho de execução. O painel cumpre sua função por ser direto, local, rastreável e fácil de revisar.

## 11. Corte

Foram evitados deliberadamente:

- frameworks;
- banco de dados;
- login;
- backend;
- APIs externas;
- instalação de pacotes no projeto;
- build ou bundler;
- automações prematuras;
- diagnósticos automáticos não implementados.

Esse corte preserva foco e mantém o projeto coerente com sua função: registrar visualmente um fluxo local de configuração do Codex CLI com o mínimo de superfície técnica.

## 12. Aplicação profissional

Embora o painel seja simples, o fluxo documentado demonstra competências aplicáveis a contextos profissionais de operação com IA e manutenção de projetos.

Na prática, este projeto mostra:

- automação com IA orientada por escopo, aprovação humana e rastreabilidade;
- operação segura de agentes locais em pasta isolada, com regras explícitas de execução;
- prototipagem rápida com HTML, CSS e JavaScript puro, sem infraestrutura desnecessária;
- manutenção assistida de projetos por meio de leitura de contexto, edição controlada e validação simples;
- documentação de workflows reais, incluindo falhas, decisões, restrições e próximos passos;
- controle de escopo e risco ao limitar arquivos editáveis, comandos permitidos e superfície técnica.

O valor profissional não está na complexidade visual do painel, mas no protocolo operacional: instalar, depurar, restringir, documentar, executar com aprovação e preservar o ambiente de trabalho.

## 13. Versão curta para LinkedIn

Configurei um ambiente local seguro para operar o Codex CLI no Windows.

Durante o processo, resolvi problemas reais de instalação e configuração: comando `codex` não reconhecido, falha de conexão com `api.github.com`, instalação via `npm`, bloqueio de scripts `.ps1`, uso de `codex.cmd`, ajuste de modelo para `gpt-5.5` e padronização do diretório de trabalho.

Para reduzir risco operacional, usei sandbox, aprovação humana e uma pasta isolada no padrão `C:\Users\[usuario]\CodexProjetos\teste-codex`. Também criei regras locais em `AGENTS.md` para limitar o escopo de edição e evitar execução fora do projeto.

Como registro visual do fluxo conferido, criei um painel simples em HTML, CSS e JavaScript puro. Ele não diagnostica automaticamente o sistema; apenas registra manualmente a conferência feita durante a configuração.

Documentei o processo como estudo de caso para mostrar o que considero mais importante na adoção prática de IA em desenvolvimento: protocolo de operação, controle de risco, clareza de escopo e documentação do workflow.

O valor do projeto não está na complexidade visual do painel, mas na forma segura e rastreável de operar um agente de IA local.

## 14. Próximo passo operacional

O próximo passo recomendado é evoluir o painel apenas se houver necessidade real de operação, mantendo HTML, CSS e JavaScript puro.

Melhorias possíveis:

- checklist manual de conferência;
- histórico textual das conferências;
- botão para limpar o estado local;
- exibição do caminho padrão do projeto;
- indicação visual da versão do painel.

Essas evoluções devem continuar respeitando a regra principal do projeto: simplicidade, operação local e ausência de dependências desnecessárias.
