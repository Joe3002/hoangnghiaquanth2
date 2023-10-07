import { StatusBar } from "expo-status-bar";
import { StatusBar } from "expo-status-bar";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import React, { useState } from "react";
import React, { useState } from "react";
import {
    Text, SafeAreaView,
    View, TouchableOpacity
} from "react-native";
import {
    Text, SafeAreaView,
    View, TouchableOpacity
} from "react-native";
import {
    Text, SafeAreaView,
    View, TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { Bar3CenterLeftIcon, MagnifyGlassIcon } from "react-native-heroicons/outline";
import { Bar3CenterLeftIcon, MagnifyGlassIcon } from "react-native-heroicons/outline";
import { Bar3CenterLeftIcon, MagnifyGlassIcon } from "react-native-heroicons/outline";
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppNavigation from './navigation/appNavigation';

export default function App() {
  return (
    <AppNavigation />
  );
}
export default function home() {
    const [NewArrivals, setNewArrivals] = useState([]);
    const navigation = useNavigation();

    return (
        <View class="flex-1 bg-neutral-800">
            <SafeAreaView classname={ios ? "-eb-2" : 'mb-3'}>
                <StatusBar style='dark' />
                <View classname="flex-row justify-between items-center ex-4">
                    <Bar3CenterLeftIcon size='30' strokeWith={2} color="black" />
                    <Text classname="text-black text-3xl font-bold">
                        Shopertino
                    </Text>
                    <TouchableOpacity>
                        <MagnifyGlassIcon size='30' strokeWith={2} color="black" />
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            <ScrollView
                showVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                <trend data={NewArrivals} />
            </ScrollView>
        </View>
    );
}
