<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="ObjectsCollection" tilewidth="80" tileheight="60" tilecount="7" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="2" type="player">
  <image width="48" height="32" source="player.png"/>
 </tile>
 <tile id="4" type="heatPlace">
  <properties>
   <property name="_name" value="default"/>
   <property name="totalEnthalpy" type="float" value="50"/>
  </properties>
  <image width="32" height="32" source="heatPlace.png"/>
 </tile>
 <tile id="5" type="enemyBasic">
  <image width="28" height="30" source="enemyGoblin.png"/>
 </tile>
 <tile id="6" type="finishPlace">
  <image width="36" height="60" source="FinishPlace.png"/>
 </tile>
 <tile id="7" type="movingPlataform">
  <properties>
   <property name="_name" value="default"/>
   <property name="finalCoordX" type="float" value="-4"/>
   <property name="finalCoordY" type="float" value="0"/>
   <property name="initCoordX" type="float" value="4"/>
   <property name="initCoordY" type="float" value="0"/>
   <property name="speed" type="float" value="2"/>
   <property name="startAtInit" type="bool" value="true"/>
  </properties>
  <image width="80" height="32" source="movingPlataform.png"/>
 </tile>
 <tile id="10" type="fallingPlataform">
  <properties>
   <property name="name" value="default"/>
   <property name="shouldRespawn" type="bool" value="true"/>
   <property name="timeUntilFall" type="float" value="0.5"/>
   <property name="timeUntilRespawn" type="float" value="3"/>
  </properties>
  <image width="80" height="32" source="fallingPlataform.png"/>
 </tile>
 <tile id="11" type="oneWayPlataform">
  <image width="48" height="8" source="oneWayPlataform.png"/>
 </tile>
</tileset>
