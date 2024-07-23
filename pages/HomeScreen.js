import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadFonts } from "../utils/font";
import Profil from "./../assets/icons/profil.svg";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsyncFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  let schedule = [
    {
      id: 1,
      title: "Dirimu 2 Bulan Lagi",
      detail: "Semangat Mengejak Deadline!",
    },
    { id: 2, title: "Sarapan", detail: "Semangat Mengejak Deadline!" },
    { id: 3, title: "Pergi ke Kantor", detail: "Semangat Mengejak Deadline!" },
    { id: 4, title: "Meeting", detail: "Semangat Mengejak Deadline!" },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1D1A" }}>
        <ScrollView>
          <View className="flex flex-row justify-between p-6">
            <View>
              <Text className="font-poppins-medium text-base text-accent">
                Hello,
              </Text>
              <Text className="font-poppins-semibold text-lg text-secondary">
                Hi.. Vega Anggara
              </Text>
            </View>

            <Image
              source={require("../assets/images/profileDumy.png")}
              style={{ width: 60, height: 60, resizeMode: "contain" }}
            />
          </View>

          {/* CARD */}
          <View className="rounded-2xl bg-secondary p-4 h-32 mx-6">
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row space-x-3">
                <Profil width={50} height={50} />
                <View>
                  <Text className="font-poppins-semibold text-base">
                    Vega Anggara Saputra
                  </Text>
                  <Text className="font-poppins-regular text-xs mt-0.5">
                    Programmer Amatir
                  </Text>
                </View>
              </View>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>

            <View className="bg-primary w-full h-[0.5px] my-3"></View>
          </View>

          <View className="my-5 flex flex-row space-x-1 justify-between px-6">
            <Text className="font-poppins-semibold text-base text-secondary">
              Schedule Notification
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#76E874"
            />
          </View>

          {/* SCHEDULE LIST */}
          <View className="px-6">
            {schedule.map((item) => (
              <View
                key={item.id}
                className="p-3 border border-secondary mb-4 flex flex-row rounded-xl space-x-3 overflow-hidden items-center"
              >
                <Entypo name="notification" size={30} color="#76E874" />
                <View className="w-[1px] bg-secondary h-full"></View>
                <View className="w-[80%]">
                  <Text className="text-white font-poppins-medium text-base">
                    {item.title}
                  </Text>
                  <View className="w-full h-[1px] bg-secondary my-0.5"></View>
                  <Text className="text-white font-poppins-mediums">
                    {item.detail}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
