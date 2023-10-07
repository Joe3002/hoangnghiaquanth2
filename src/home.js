import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import {Bar3CenterLeftIcon,MagnifyGlassIcon} from'react-native-heroicons/outline';
import {NewArrivals} from '../components/NewArrivals';


export default function home(){
    const [NewArrivals, setNewArrivals] = useState([]);
    const navigation = useNavigation();

  return (
    <View class="flex-1 bg-neutral-800">
        <SafeAreaView classname={ios?"-eb-2": 'mb-3'}>
            <StatusBar style='dark'/>
            <View classname="flex-row justify-between items-center ex-4">
                <Bar3CenterLeftIcon size='30' strokeWith={2} color="black"/>
                    <Text classname="text-black text-3xl font-bold">
                        Shopertino
                    </Text>
                <TouchableOpacity>
                    <MagnifyGlassIcon size='30' strokeWith={2} color="black"/>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
        <ScrollView
            showVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
        >
            <trend data={NewArrivals}/>
        </ScrollView>
    </View>
  );
};

