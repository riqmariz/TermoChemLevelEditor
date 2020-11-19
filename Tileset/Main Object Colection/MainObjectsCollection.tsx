<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="MainObjectsCollection" tilewidth="890" tileheight="897" tilecount="32" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0" type="enemyBasic">
  <image width="380" height="404" source="enemyBasic.png"/>
 </tile>
 <tile id="2" type="finishPlace">
  <image width="392" height="653" source="finishPlace.png"/>
 </tile>
 <tile id="6" type="player">
  <properties>
   <property name="ambientTemperature" type="float" value="0"/>
   <property name="initialEnthalpy" type="float" value="0"/>
   <property name="maxEnthalpyOnLevel" type="float" value="100"/>
   <property name="minEnthalpyOnLevel" type="float" value="0"/>
  </properties>
  <image width="250" height="322" source="player.png"/>
 </tile>
 <tile id="7" type="stalactite">
  <image width="119" height="198" source="estalactite.png"/>
 </tile>
 <tile id="8" type="capsulaAtiva">
  <image width="337" height="678" source="capsulaAtiva.png"/>
 </tile>
 <tile id="9" type="collectableHP">
  <image width="224" height="300" source="Mask-Shard.png"/>
 </tile>
 <tile id="10" type="collectableSalt">
  <image width="264" height="288" source="_sal_modelo_brilho.png"/>
 </tile>
 <tile id="11" type="collectableFlowers">
  <image width="285" height="101" source="flores_campo.png"/>
 </tile>
 <tile id="18" type="portaoGelo">
  <image width="145" height="629" source="portaoGelo.png"/>
 </tile>
 <tile id="19" type="gradeNotSolid">
  <image width="251" height="569" source="gradeNotSolid.png"/>
 </tile>
 <tile id="29" type="fallingPlataformDeserto">
  <properties>
   <property name="_name" value="default"/>
   <property name="shouldRespawn" type="bool" value="true"/>
   <property name="timeUntilFall" type="float" value="0.5"/>
   <property name="timeUntilRespawn" type="float" value="3"/>
  </properties>
  <image width="573" height="191" source="falling_plataform_deserto.png"/>
 </tile>
 <tile id="30" type="fallingPlataform">
  <properties>
   <property name="_name" value="default"/>
   <property name="shouldRespawn" type="bool" value="true"/>
   <property name="timeUntilFall" type="float" value="0.5"/>
   <property name="timeUntilRespawn" type="float" value="3"/>
  </properties>
  <image width="573" height="191" source="falling_plataform_gelo.png"/>
 </tile>
 <tile id="31" type="fallingPlataformGelo">
  <properties>
   <property name="_name" value="default"/>
   <property name="shouldRespawn" type="bool" value="true"/>
   <property name="timeUntilFall" type="float" value="0.5"/>
   <property name="timeUntilRespawn" type="float" value="3"/>
  </properties>
  <image width="573" height="191" source="falling_plataform_pantano.png"/>
 </tile>
 <tile id="32" type="movingPlataformDeserto">
  <properties>
   <property name="_name" value="default"/>
   <property name="finalCoordX" type="float" value="-4"/>
   <property name="finalCoordY" type="float" value="0"/>
   <property name="initCoordX" type="float" value="4"/>
   <property name="initCoordY" type="float" value="0"/>
   <property name="speed" type="float" value="2"/>
   <property name="startAtInit" type="bool" value="true"/>
  </properties>
  <image width="571" height="191" source="moving_plataform_deserto.png"/>
 </tile>
 <tile id="33" type="movingPlataform">
  <properties>
   <property name="_name" value="default"/>
   <property name="finalCoordX" type="float" value="-4"/>
   <property name="finalCoordY" type="float" value="0"/>
   <property name="initCoordX" type="float" value="4"/>
   <property name="initCoordY" type="float" value="0"/>
   <property name="speed" type="float" value="2"/>
   <property name="startAtInit" type="bool" value="true"/>
  </properties>
  <image width="571" height="191" source="moving_plataform_gelo.png"/>
 </tile>
 <tile id="34" type="movingPlataformPantano">
  <properties>
   <property name="_name" value="default"/>
   <property name="finalCoordX" type="float" value="-4"/>
   <property name="finalCoordY" type="float" value="0"/>
   <property name="initCoordX" type="float" value="4"/>
   <property name="initCoordY" type="float" value="0"/>
   <property name="speed" type="float" value="2"/>
   <property name="startAtInit" type="bool" value="true"/>
  </properties>
  <image width="571" height="191" source="moving_plataform_pantano.png"/>
 </tile>
 <tile id="35" type="oneWayPlataformDeserto">
  <image width="573" height="96" source="oneWay_plataform_deserto.png"/>
 </tile>
 <tile id="36" type="oneWayPlataform">
  <image width="573" height="96" source="oneWay_plataform_gelo.png"/>
 </tile>
 <tile id="37" type="oneWayPlataformPantano">
  <image width="573" height="96" source="oneWay_plataform_pantano.png"/>
 </tile>
 <tile id="38" type="checkpoint">
  <image width="184" height="401" source="checkpoint.png"/>
 </tile>
 <tile id="39" type="collectableEgg">
  <image width="210" height="210" source="ovinho_coletavel.png"/>
 </tile>
 <tile id="40" type="collectableHP">
  <image width="227" height="146" source="vida.png"/>
 </tile>
 <tile id="41" type="heatPlace">
  <properties>
   <property name="_name" value="default"/>
   <property name="totalEnthalpy" type="float" value="50"/>
  </properties>
  <image width="505" height="897" source="fornalha_heatPlace.png"/>
 </tile>
 <tile id="42" type="player">
  <properties>
   <property name="ambientTemperature" type="float" value="0"/>
   <property name="initialEnthalpy" type="float" value="0"/>
   <property name="maxEnthalpyOnLevel" type="float" value="100"/>
   <property name="minEnthalpyOnLevel" type="float" value="0"/>
  </properties>
  <image width="266" height="254" source="axolote.png"/>
 </tile>
 <tile id="43" type="geiserMetano">
  <image width="191" height="382" source="geiserMetano.png"/>
 </tile>
 <tile id="44" type="jumpFlower">
  <image width="181" height="196" source="jumpFlower.png"/>
 </tile>
 <tile id="45" type="espinhosNotSolid">
  <image width="159" height="411" source="parede_de_espinhos.png"/>
 </tile>
 <tile id="46" type="fly">
  <image width="795" height="800" source="fly.png"/>
 </tile>
 <tile id="47" type="flyFollow">
  <image width="795" height="800" source="flyFollow.png"/>
 </tile>
 <tile id="48" type="cactoPerfurante">
  <image width="266" height="219" source="cactoPerfurante.png"/>
 </tile>
 <tile id="49" type="nuvemAreiaNotGas">
  <image width="890" height="558" source="modelo_nuvem_de_areia.png"/>
 </tile>
 <tile id="51" type="collectableNitrogen">
  <image width="237" height="151" source="nitrogenioLiquido.png"/>
 </tile>
</tileset>
