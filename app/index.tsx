import { Link } from "expo-router";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GoogleMaps } from "expo-maps";
import { useRef, useState } from "react";
import {
  locationList,
  markersGoogle,
  polylineCoordinates,
} from "../src/utils/LocationList";
import {
  GoogleMapsMapType,
  GoogleMapsMarker,
} from "expo-maps/build/google/GoogleMaps.types";
import { ILocation } from "../src/types/locationTypes";

export default function App() {
  const refMaps = useRef<GoogleMaps.MapView>(null);

  const [locationIndex, setLocationIndex] = useState(0);
  const [matchMarker, setMatchMarker] = useState<ILocation | null>(null);

  function handleChangeWithRef(direction: "next" | "prev") {
    let newIndex = locationIndex + (direction === "next" ? 1 : -1);

    if (newIndex >= locationList.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = locationList.length - 1;
    }

    const nextLocation = locationList[newIndex];

    refMaps.current?.setCameraPosition({
      coordinates: {
        latitude: nextLocation.stores[0].point[0],
        longitude: nextLocation.stores[0].point[1],
      },
      zoom: 14,
    });

    setLocationIndex(newIndex);
    setMatchMarker(locationList[newIndex]);
  }

  function handleClickMarker(e: GoogleMapsMarker) {
    const matchIndex = locationList.findIndex((l) => {
      return l.stores.some((s) => {
        return (
          s.point[0] === e.coordinates?.latitude &&
          s.point[1] === e.coordinates?.longitude
        );
      });
    });

    const matchData = locationList[matchIndex];

    setMatchMarker(matchData);
    setLocationIndex(matchIndex);
  }

  const renderMapControls = () => {
    return (
      <View>
        <Button title="Prev" onPress={() => handleChangeWithRef("prev")} />
        <Button title="Next" onPress={() => handleChangeWithRef("next")} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Prueba de app de mapa</Text>

      <Link href="/users">
        <Text>Go to users</Text>
      </Link>

      <GoogleMaps.View
        ref={refMaps}
        style={{ flex: 1 }}
        cameraPosition={{
          coordinates: {
            latitude: locationList[locationIndex].stores[0].point[0],
            longitude: locationList[locationIndex].stores[0].point[1],
          },
          zoom: 16,
        }}
        markers={markersGoogle}
        onMarkerClick={handleClickMarker}
        polylines={[
          {
            color: "red",
            width: 10,
            coordinates: polylineCoordinates,
          },
        ]}
        properties={{
          isBuildingEnabled: true,
          isIndoorEnabled: true,
          mapType: GoogleMapsMapType.NORMAL,
          selectionEnabled: true,
          isMyLocationEnabled: false, // requires location permission
          isTrafficEnabled: true,
        }}
        // eventos
        onPolylineClick={(e) => {
          Alert.alert("Polyline clicked", JSON.stringify(e, null, 2));
        }}
        onMapLoaded={() => {
          Alert.alert("Map Loaded", "The map has finished loading.");
        }}
        onMapClick={(e) => {
          Alert.alert("Map Clicked", JSON.stringify(e, null, 2));
        }}
        onMapLongClick={(e) => {
          Alert.alert("Map Long Press", JSON.stringify(e, null, 2));
        }}
        onPOIClick={(e) => {
          Alert.alert("POI Clicked", JSON.stringify(e, null, 2));
        }}
        onCameraMove={(e) => {
          console.log("Camera Moved", JSON.stringify(e, null, 2));
        }}
      />

      <SafeAreaView pointerEvents="box-none">
        {renderMapControls()}
      </SafeAreaView>

      {matchMarker && (
        <SafeAreaView pointerEvents="box-none" style={styles.marker}>
          <View style={styles.marker_content}>
            <Text style={{ color: "white" }}>{matchMarker.name}</Text>
            <Button
              title="X"
              onPress={() => setMatchMarker(null)}
              color={"orange"}
            />
          </View>
          <Text style={{ color: "white" }}>{matchMarker.description}</Text>
          <Text style={{ color: "white" }}>
            {matchMarker.stores[0].address}
          </Text>
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // marker
  marker: {
    position: "absolute",
    bottom: 86,
    left: 10,
    right: 10,
    width: "80%",
    padding: 10,
    backgroundColor: "#7161ff",
    gap: 5,
  },
  marker_content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
