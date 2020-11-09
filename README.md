# TermoChemLevelEditor **v0.2.0**

Este repositório é um local para subir os arquivos de level do jogo ThermoChem para poder testá-los e editá-los. Fique atento as versões da documentação
- \* : siginifica recém modificado 
<br/>
<br/>

# Tutorial *

Relacionado* a v0.1.0 ~ v0.1.1:
- Como editar um Nível do ThermoChem, sendo mais específico para o contexto do ThermoChem: [old link](https://drive.google.com/file/d/1K_8DbwqHgjTwB0TWyUYcDQdiWE7G1FX7/view?usp=sharing)

- Vídeo análogo ao de cima, porém para criar um Level: [old link](https://drive.google.com/file/d/1nJoSF63s37F5pu0T42ZkdvoZfMlKoNum/view?usp=sharing)

 - Recomendado assistir um vídeo que ensina o básico do Tiled, caso não tenha ficado claro nos outros vídeos, porém é em inglês e mais genérico: 
[old link](https://www.youtube.com/watch?v=ZwaomOYGuYo)

Relacionado* a v0.2.0:
- Novos padrões e Novos tilesets, o que mudou para v0.2.0: [link](https://drive.google.com/file/d/1wBexMTxSD58QM1nP8fQ-17iMBIah21cl/view?usp=sharing)

<br/>


# Documentação/Regras*

É importante mencionar que essa documentação é só uma forma de tentar manter as regras/funcionalidades por escrito dos elementos específicos do jogo ThermoChem, que virá a modificar ao longo do processo de evolução então é de bastante importância, sempre verificar a TAG da documentação para checar o versionamento de tal.
<br/>
<br/>

## • Camadas*

Ao criar/editar um mapa, verifique as camadas que ficam na superior direita localização como na imagem:

<img src= "Readme Images/camadas.PNG">

Verifique se as camadas estão de acordo com os seguintes nomes(respeitando letra maiúscula e espaço) e respectiva ordem:

1. Over Objects Layer
2. Over Tile Layer
3. Main Objects Layer
4. Main Tile Layer
5. Under Tile Layer
6. Under Objects Layer
7. Over Background Objects Layer
8. Backgroound Objects Layer

Se estiver correto, você não terá nenhum problema com relação a definição das camadas.

Porém, é importante ficar atento para o que cada camada representa no momento de criação. Por isto, vou explicar o que cada uma significa. Antes disso, é preciso entender o conceito de ordem de renderização de camadas. Seguindo a ordem acima, significa as camadas que as camadas mais acima estão acima das outras mais abaixo, ou seja, o background objects layer fica atrás de tudo, o over background objects layer fica acima do background, o under objects layer acima do over background objects layer e background objects layer e assim por diante. Isso quer dizer que algo pintado no background pode vir a ser coberto por algo que está na camada acima. Um elemento da camada Objeto sempre estará na frente de um Tile, por exemplo.

É importante não confundir camadas de objetos com camadas de tiles, tiles são feitos para serem utilizados na camada de Tiles e objetos nas camadas de Objetos. Objetos são dispostos num espaço contínuo no mapa enquanto tiles são dispostos num espaço discreto por Tiles (quadradinhos base).

1. **Camada de Objetos: Over Objects Layer**

    Nessa camada é colocado objetos que ficam a frente de qualquer coisa, por enquanto não há nenhum uso, mas no futuro, será possível colocar um objeto como uma árvore e essa árvore ficar a frente na tela para parecer que o player passou por de trás da árvore, dando uma sensação do uso de camadas.

2. **Camada de Tile: Over Tile Layer**

	 É só uma camada para colocar tiles de ENFEITE do level, caso seja necessário colocar tiles que fiquem acima do Main Objects Layer, Main Tile Layer, Under Tile Layer... E assim por diante.

3. **Camada de Objetos: Main Objects Layer**

	Nessa camada é colocado os objetos do level, como por exemplo, Player, Inimigo Básico, Fogueira, entre outros. Esses objetos diferentemente de qualquer outra camada, não são dispostos em GRID, são dispostos num espaço contínuo. Ou seja, fique atento ao colocar um objeto para ver se encosta no chão ou não, pois diferentemente das outras camadas, você pode mover a posição dos objetos livremente, ao invés de Tiles.


4. **Camada de Tile: Main Tile Layer**
	
	Camada por onde há as colisões com Tiles. Camada para colocar paredes e chão. Qualquer Tile colocado nessa camada, será interpretado como um tile com colisão, ou seja, se o player tentar passar, irá colidir. Impórtante não colocar objetos nessa camada, apenas TILES.

5. **Camada de Tile: Under Tile Layer**

	 É só uma camada para colocar tiles de ENFEITE do level, caso seja necessário colocar tiles que fiquem acima do Under Objects Layer, Over Background Objects Layer... E assim por diante e fique abaixo de Main Tile Layer, Main Objects Layer e assim por diante.

	 Normalmente utilizada para Tiles que preenchem o chão e parade, mas não são interagíveis com o player.

6. **Camada de Objetos: Under Objects Layer**

	Camada de objetos utilizada para enfeitar o mapa e adicionar objetos que enfeitem o Level, mas não interferem no gameplay. Formam/Compõe o cenário do level.

7. **Camada de Objetos: Over Background Objects Layer**
	
	Camada para colocar um background, porém não é o último background. Ainda haverá um background atrás dessa camada.

8. **Camada de Objetos: Background Objects Layer**

	Última camada, background que fica atrás de tudo.
<br/>
<br/>

## • Tilesets
<br/>

Carregue os tilesets já preparados do repositório, são os arquivos .tsx que ficam dentro da pasta Tilesets e suas respectivas subpastas. Normalmente os Devs irão já configurar e deixar pronto os arquivos .tsx na pasta. É importante verificar a versão do github e se há alguma atualização, como novos .tsx ou modificações.
<br/>
<br/>
## • Exportar Level
<br/>
Ao terminar de editar/criar um Level, não confunda salvar como ou salvar, com exportar como. SEMPRE deve-se usar a opção “exportar como”. Ao selecionar e escolher a pasta, o nome do arquivo deve seguir o seguinte padrão: 
<br/>

 - Level_00.xml
 - Level_01.xml
 - Level_02.xml
 - …
 - Level_XY.xml

 Não confunda .tmx com .xml, sempre exporte como .xml, é só nomear o arquivo com .xml, pois o programa Tiled, automaticamente coloca como .tmx.

A última coisa porém, bastante importante, verifique se a preferência abaixo, está marcada, ela fica localizada em “Editar/Preferências/”, marcar a opção “Resolve object types and properties”, como na imagem abaixo:

<img src= "Readme Images/preferences.PNG">

Depois de seguir esses passos, você pode subir o arquivo na Pasta /Levels/ do repositório e o jogo Thermo Chem já automaticamente fará download dos arquivos de level do último commit feito no repositório.

<br/>
<br/>

## • Objetos (.tsx da camda de Objetos)
<br/>

Cada objeto disponível para ser utilizado na camada de objetos, tem um significado e um tipo associado. Como por exemplo, na imagem abaixo, dá para identificar o Player, pelo type: player, como na imagem, circulado em vermelho.

obs: É importante mencionar, que no momento não é suportado pelo jogo, escalar objetos, mudando o seu tamanho dentro do Tiled, pois essa informação será perdida.

<img src= "Readme Images/objectType.PNG">

- **Player (type: player)**

	É o objeto referente ao player, é onde o jogador iniciará o level. 

- **Fogueira (type: heatPlace)**

    É o objeto referente a uma fogueira, ou um local que emite calor para o jogador e onde ficará no level.

- **Inimigo Básico (type: enemyBasic)**

    É o objeto referente a um inimigo, e onde iniciará no level.

- **Local de Chegada (type: finishPlace)**

    É o objeto referente aonde o player deve chegar para finalizar o level.

- **Plataforma Móvel (type: movingPlataform)**

	É o objeto referente a uma plataforma que se mexe para o lado e para o outro, posicionando seu local inicial do level.

- **Plataforma Temporária (type: fallingPlataform)**

	 É o objeto referente a uma plataforma fica que depois de algum curto tempo cai, se o player tiver pisado.

- **Plataforma de Um lado (type: oneWayPlataform)**

	É o objeto referente a uma plataforma que não tem colisão de baixo para cima, ou seja, se o player estiver abaixo da plataforma e pular e tiver alcance para subir, ele não irá bater a cabeça e em seguida poderá ficar de pé nesta plataforma.

<br/>
<br/>

## • Propriedades Customizáveis dos Objetos

<br/>
Ainda não implementado. No futuro, em uma próxima versão haverão propriedades customizadas que serão adicionadas, como variáveis para modificar o objeto dentro do jogo. Exemplo, Velocidade do Player. Ou tempo de queda de uma plataforma, entre outras opções. Porém no momento não está implementado nenhum propriedade personalizada, onde está circulado em preto na imagem.
<br/>
<br/>
<img src= "Readme Images/objectType.PNG">





