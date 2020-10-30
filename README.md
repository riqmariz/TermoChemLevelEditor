# TermoChemLevelEditor

Este repositório é um local para subir os arquivos de level do jogo ThermoChem para poder testá-los e editá-los.
<br/>
<br/>

# Tutorial

- Como editar um Nível do ThermoChem, sendo mais específico para o contexto do ThermoChem: [link](https://drive.google.com/file/d/1K_8DbwqHgjTwB0TWyUYcDQdiWE7G1FX7/view?usp=sharing)

- Vídeo análogo ao de cima, porém para criar um Level: [link](https://drive.google.com/file/d/1K_8DbwqHgjTwB0TWyUYcDQdiWE7G1FX7/view?usp=sharing)

 - Recomendado assistir um vídeo que ensina o básico do Tiled, caso não tenha ficado claro nos outros vídeos, porém é em inglês e mais genérico: 
[link](https://www.youtube.com/watch?v=ZwaomOYGuYo)

<br/>


# Documentação/Regras

É importante mencionar que essa documentação é só uma forma de tentar manter as regras/funcionalidades por escrito dos elementos específicos do jogo ThermoChem, que virá a modificar ao longo do processo de evolução então é de bastante importância, sempre verificar a TAG da documentação para checar o versionamento de tal.
<br/>
<br/>

## • Camadas

Ao criar/editar um mapa, verifique as camadas que ficam na superior direita localização como na imagem:

<img src= "Readme Images/camadas.PNG">

Verifique se as camadas estão de acordo com os seguintes nomes(respeitando letra maiúscula e espaço) e respectiva ordem:

1. Objeto
2. Over Layer
3. Main Layer
4. Under Layer
5. Background Layer

Se estiver correto, você não terá nenhum problema com relação a definição das camadas.

Porém, é importante ficar atento para o que cada camada representa no momento de criação. Por isto, vou explicar o que cada uma significa. Antes disso, é preciso entender o conceito de ordem de renderização de camadas. Seguindo a ordem acima, significa as camadas que as camadas mais acima estão acima das outras mais abaixo, ou seja, o background fica atrás de tudo, o under layer fica acima do background, o main layer acima do under layer e background e assim por diante. Isso quer dizer que algo pintado no background pode vir a ser coberto por algo que está na camada acima. Um elemento da camada Objeto sempre estará na frente de um Tile, por exemplo.

1. Camada: Objeto

        Nessa camada é colocado os objetos do level, como por exemplo, Player, Inimigo Básico, Fogueira, entre outros. Esses objetos diferentemente de qualquer outra camada, não são dispostos em GRID, são dispostos num espaço contínuo. Ou seja, fique atento ao colocar um objeto para ver se encosta no chão ou não, pois diferentemente das outras camadas, você pode mover a posição dos objetos livremente, ao invés de Tiles.

2. Camada: Over Layer

	    É só uma camada para colocar tiles de enfeite do level, caso seja necessário colocar tiles que fiquem acima do main layer, under layer e background layer.

3. Camada: Main Layer

	    Camada por onde há as colisões com Tiles. Camada para colocar paredes e chão. Qualquer Tile colocado nessa camada, será interpretado como um tile com colisão, ou seja, se o player tentar passar, irá colidir.

4. Camada: Under Layer
	
	    Camada igual ao Over Layer porém com a ordem de renderização de camada menor, só estando acima do background.

5. Camada: Background Layer

	    Última camada, similar ao Over Layer e Under Layer, no qual, serve de enfeite, porém é a última na ordem de renderização de camada.
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

- Player (type: player)

	    É o objeto referente ao player, é onde o jogador iniciará o level. 

- Fogueira (type: heatPlace)

        É o objeto referente a uma fogueira, ou um local que emite calor para o jogador e onde ficará no level.

- Inimigo Básico (type: enemyBasic)

        É o objeto referente a um inimigo, e onde iniciará no level.

- Local de Chegada (type: finishPlace)

        É o objeto referente aonde o player deve chegar para finalizar o level.

- Plataforma Móvel (type: movingPlataform)

	    É o objeto referente a uma plataforma que se mexe para o lado e para o outro, posicionando seu local inicial do level.

- Plataforma Temporária (type: fallingPlataform)

	    É o objeto referente a uma plataforma fica que depois de algum curto tempo cai, se o player tiver pisado.

- Plataforma de Um lado (type: oneWayPlataform)

	    É o objeto referente a uma plataforma que não tem colisão de baixo para cima, ou seja, se o player estiver abaixo da plataforma e pular e tiver alcance para subir, ele não irá bater a cabeça e em seguida poderá ficar de pé nesta plataforma.

<br/>
<br/>

## • Propriedades Customizáveis dos Objetos

<br/>
Ainda não implementado. No futuro, em uma próxima versão haverão propriedades customizadas que serão adicionadas, como variáveis para modificar o objeto dentro do jogo. Exemplo, Velocidade do Player. Ou tempo de queda de uma plataforma, entre outras opções. Porém no momento não está implementado nenhum propriedade personalizada, onde está circulado em preto na imagem.
<br/>
<br/>
<img src= "Readme Images/objectType.PNG">





