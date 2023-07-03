import React from 'react';
import { SafeAreaView, ScrollView } from "react-native"

export const Background = ({children}: {children: JSX.Element | JSX.Element[]}) => {

    <>
    <SafeAreaView >
        <ScrollView>
        { children }
        </ScrollView>
        
    </SafeAreaView>
    </>
        
}