<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="MainObjectsCollection" tilewidth="573" tileheight="653" tilecount="7" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0" type="enemyBasic">
  <image width="380" height="404" source="enemyBasic.png"/>
 </tile>
 <tile id="1" type="fallingPlataform">
  <properties>
   <property name="_name" value="default"/>
   <property name="shouldRespawn" type="bool" value="true"/>
   <property name="timeUntilFall" type="float" value="0.5"/>
   <property name="timeUntilRespawn" type="float" value="3"/>
  </properties>
  <image width="573" height="212" source="fallingPlataform.png"/>
 </tile>
 <tile id="2" type="finishPlace">
  <image width="392" height="653" source="finishPlace.png"/>
 </tile>
 <tile id="3" type="heatPlace">
  <properties>
   <property name="_name" value="default"/>
   <property name="totalEnthalpy" type="float" value="50"/>
  </properties>
  <image width="382" height="382" source="heatPlace.png"/>
 </tile>
 <tile id="4" type="movingPlataform">
  <properties>
   <property name="_name" value="default"/>
   <property name="finalCoordX" type="float" value="-4"/>
   <property name="finalCoordY" type="float" value="0"/>
   <property name="initCoordX" type="float" value="4"/>
   <property name="initCoordY" type="float" value="0"/>
   <property name="speed" type="float" value="2"/>
   <property name="startAtInit" type="bool" value="true"/>
  </properties>
  <image width="573" height="212" source="movingPlataform.png"/>
 </tile>
 <tile id="5" type="oneWayPlataform">
  <image width="573" height="96" source="oneWayPlataform.png"/>
 </tile>
 <tile id="6" type="player">
  <image width="250" height="322" source="player.png"/>
 </tile>
</tileset>
