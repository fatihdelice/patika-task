import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../utils/colors';

const Loading = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "" }}>
                <ActivityIndicator size={40} color={colors.mainPink} />
            </View>
        </View>
    )
}

export default Loading