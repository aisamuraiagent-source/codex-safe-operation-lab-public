# Codex Safe Operation Lab

Laboratorio local para operacao segura com OpenAI Codex CLI no Windows, com sandbox, aprovacao humana, regras locais, painel estatico e triagem defensiva nao intrusiva.

## 1. Resumo em 30 segundos

Este projeto demonstra um fluxo local-first de operacao segura com Codex CLI no Windows.

O laboratorio organiza uma pasta isolada de trabalho, uso de sandbox `workspace-write`, aprovacao humana `on-request`, regras locais em `AGENTS.md`, um painel estatico em HTML/CSS/JavaScript puro e relatorios defensivos locais.

O objetivo nao e criar um produto de seguranca nem automatizar diagnosticos do sistema. O objetivo e mostrar um protocolo operacional simples, rastreavel e controlado para trabalhar com um agente de IA local sem perder escopo, contexto ou controle humano.

## 2. O problema

O risco inicial era operar o Codex no diretorio errado, sem regras locais, sem documentacao, sem controle claro de escopo e sem separar teste seguro de comandos intrusivos.

Esse tipo de falha pode gerar confusao operacional:

- arquivos criados fora da pasta correta;
- comandos executados sem contexto;
- alteracoes em areas nao autorizadas;
- perda de historico das decisoes tomadas;
- mistura entre experimento local, configuracao real e investigacao defensiva;
- dificuldade para explicar posteriormente o que foi feito, por que foi feito e quais limites foram respeitados.

Este repositorio organiza esse fluxo em um laboratorio unico, com duas trilhas documentadas.

## 3. O que este projeto demonstra

- Configuracao e uso seguro do Codex CLI.
- Sandbox `workspace-write`.
- Aprovacao `on-request`.
- Criacao de regras locais em `AGENTS.md`.
- Painel estatico em HTML, CSS e JavaScript puro.
- Documentacao de estudo de caso.
- Inventario defensivo local.
- Correlacao de conexoes TCP com processos.
- Revisao do processo `dotnet.exe`.
- Consolidacao da triagem defensiva.

## 4. Duas trilhas do projeto

## Trilha 1 - Codex CLI Safe Operation

Arquivos:

- `README.md`
- `CASE_STUDY.md`
- `AGENTS.md`
- `index.html`
- `styles.css`
- `app.js`

Esta trilha mostra a instalacao, debugging e padronizacao de um ambiente local para operar o Codex CLI com mais controle.

Ela documenta o uso de uma pasta segura, regras locais, sandbox, aprovacao humana, painel local e registro profissional das decisoes tomadas. O painel funciona como uma representacao visual da conferencia manual feita pelo usuario; ele nao verifica automaticamente a instalacao, o sandbox ou as permissoes do sistema operacional.

## Trilha 2 - Windows Defensive Triage

Arquivos:

- `NETWORK_INVENTORY.md`
- `NETWORK_PROCESS_CORRELATION.md`
- `DOTNET_PROCESS_REVIEW.md`
- `DEFENSIVE_TRIAGE_SUMMARY.md`

Esta trilha mostra uma triagem defensiva local e nao intrusiva no Windows, usando comandos nativos de leitura e uma versao publica sanitizada do resumo defensivo.

O escopo foi limitado de forma explicita: sem Nmap, sem internet, sem alteracao de configuracao, sem encerramento de processos, sem exploracao, sem brute force, sem fuzzing e sem varredura ativa de rede.

O foco foi coletar evidencias locais, organizar achados, correlacionar conexoes TCP com processos e classificar o que parecia normal, comum, ponto de atencao ou item que exigiria investigacao futura.

## 5. Valor operacional / ROI defensivo

O ROI do projeto esta em reduzir o tempo de uma triagem defensiva inicial, preservar contexto e transformar comandos soltos em evidencias organizadas.

Na pratica, o laboratorio ajuda a:

- acelerar coleta e organizacao de evidencias;
- reduzir perda de contexto durante a investigacao;
- transformar saidas de comandos em relatorios legiveis;
- correlacionar dados locais de rede, processos e assinaturas;
- separar achados entre normal, atencao e investigar;
- evitar acoes intrusivas fora de escopo;
- preservar aprovacao humana antes de operacoes sensiveis;
- documentar limitacoes sem prometer certeza falsa.

Este projeto nao e pentest, nao detecta ameacas automaticamente e nao prova seguranca total. Ele documenta uma triagem defensiva local inicial e um protocolo de operacao segura com IA assistiva.

## 6. Como executar o painel

Abra o arquivo `index.html` diretamente no navegador.

Depois, clique em `Registrar conferencia`.

Essa acao grava no navegador a data e hora da conferencia manual usando `localStorage`. O painel apenas registra que o usuario realizou uma conferencia; ele nao executa diagnostico automatico do Codex, do sandbox, da instalacao ou das permissoes do sistema.

Nao ha dependencias, instalacao de pacotes, build, servidor local ou acesso a internet.

## 7. Evidencias documentadas

- `CASE_STUDY.md`: documenta o contexto profissional, problemas encontrados, decisoes tecnicas, arquitetura do painel, trade-offs e aplicacao pratica.
- `AGENTS.md`: registra regras locais de operacao, limites de edicao e comportamento esperado do agente dentro do projeto.
- `index.html`: prova que existe uma interface local executavel diretamente no navegador.
- `styles.css`: concentra a camada visual responsiva do painel.
- `app.js`: implementa a interacao do painel e persistencia local via `localStorage`.
- `NETWORK_INVENTORY.md`: registra inventario local de rede, adaptadores, rotas, vizinhos, conexoes TCP, DNS e firewall.
- `NETWORK_PROCESS_CORRELATION.md`: correlaciona conexoes TCP estabelecidas com processos locais.
- `DOTNET_PROCESS_REVIEW.md`: revisa caminho, assinatura, cadeia de processo e contexto do `dotnet.exe`.
- `DEFENSIVE_TRIAGE_SUMMARY.md`: consolida os achados, classificacoes, escopo, limitacoes e conclusao defensiva.

## 8. Limitacoes reais

- Nao e pentest.
- Nao prova seguranca total.
- Nao detecta malware sozinho.
- Nao faz diagnostico automatico de sandbox ou instalacao.
- Nao substitui analise de roteador, EDR, antivirus ou logs historicos.
- Nao identifica todos os dispositivos reais da rede.
- Nao classifica IPs remotos como benignos ou maliciosos por conta propria.
- Nao executa varredura ativa, exploracao ou alteracao de configuracao.
- E uma triagem defensiva local inicial, baseada em evidencias momentaneas.

## 9. Competencias demonstradas

- PowerShell.
- Git.
- Codex CLI.
- Operacao com sandbox.
- Controle de escopo.
- Documentacao tecnica.
- HTML/CSS/JavaScript basico.
- Triagem defensiva local.
- Classificacao de achados.
- Revisao assistida por IA.
- Pensamento operacional.

## 10. Status

- Projeto local versionado em Git.
- Primeiro commit realizado.
- Pronto para publicacao futura, se desejado.


