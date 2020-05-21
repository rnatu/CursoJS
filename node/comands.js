/*

ls - lista os arquivos do diretório
cd - navega entre os diretórios ex: cd C:\Usuarios\Documentos\maratonaDev
pwd - mostra o diretório dos arquivos
clear - para limpar o terminal



VERIFICAR SE ESTA NA PASTA DO PROJETO NO TERMINAL

//* -- INICIANDO O NPM - Criando o package.json - /gerenciador de pacotes /
npm init -y     ira criar o arquivo package.json //gerencia os pacotes do node
#	OU
//* -- instalar dependencias automaticamente do package.json
npm i     ou    npm instal



//* -- INSTALAÇÂO DE PACOTES
npm install pacote	<- Habilitando atualização da versão se houver, pelo comando npm update
#	OU
npm install pacote --save-dev <- Para instalar em devDependencies

//* -- INSTALAR PACOTE DESABILITANDO ATUALIZAÇÂO DE VERSÃO
npm install pacote -E

//* -- INSTALANDO UMA VERSÃO ESPECIFICA DE UM PACOTE
npm install pacote@2.1.0 -E
#	OU
npm install pacote@2.1.0	<- mas o npm update irá funcionar, pois não esta travada na versão como acima




//* -- LISTANDO PACOTES INSTALADOS
npm ls --depth=0 
0 é o numero de profundidade de pastas da dependencias, 0 é o padrão mostando só as dependencias
1 mostra as dependencias das dependencias, assim por diante

//* -- LISTANDO PACOTES DESATUALIZADOS
npm outdated



//* --- ATUALIZANDO VERSÃO DE PACOTES <- Só é atualizada dependencias que no package.json estiver com o caracter ^
npm update
#	OU
npm install pacote@4.x	<- instala a ultima versão disponivel na versão da major 4, utilizando como exemplo 4.x,
^ -> atualiza somente o minor e o patch (se houver)
~ -> atualiza somente o patch (se houver)

//* -- MOVENDO DEPENDENCIA PARA DEV-DEPENDENCIES
npm install pacote --save-dev

//* -- MOVENDO DEPENDENCIA PARA DEPENDENCIES
npm install pacote --save-prod



//* --- DESINSTALANDO UM PACOTE
npm uninstall pacote

*/






