import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function NotificationIcon() {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
      }}
    >
      <Ionicons name="notifications-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

export default function AnnouncementsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "600",
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        animation: "none",
        animationDuration: 0,
        detachInactiveScreens: true,
        freezeOnBlur: true,
        lazy: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Announcements",
          headerRight: () => <NotificationIcon />,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="AnnouncementDetail"
        options={{
          title: "Notice",
          headerRight: () => <NotificationIcon />,
          headerLeft: () => null,
        }}
      />
    </Stack>
  );
}
