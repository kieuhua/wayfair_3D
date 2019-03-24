import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, ScrollView} from 'react-native'
import { encode } from 'base-64'

//import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer'

class WayFair3D extends React.Component {
    state = { data: [] }
    componentDidMount() {
        const wayfair_host = "https://www.wayfair.com/3dapi/models"
        let user_email = "kieu.hua@gmail.com"
        let password = "5c968346a5ab0"

        let headers = new Headers(
            {
                'Authorization': 'Basic '+ encode(user_email+":"+password), 
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36'
            }
        )        

        let url = wayfair_host
        console.log("hi kieu")
        //fetch(url)
        fetch(url, {method: 'GET', headers: headers})
            .then(res => 
                res.json()
            )
            .then(data => {
                this.setState({data: data})
           })
            .catch((err) => console.log('err: ', err))
    }
    render() {
        let content = null
        let {data} = this.state
        //console.log('render data.length', data);
        if (data.length) {
            content = data.map((item, index) => (
                <View key={index}>
                    <Text>{item.sku}</Text>
                    <Image source={{uri: item.thumbnail_image_url}}
                    style={{width: 400, height: 400}} />
                </View>

            ))
        } else {
            content = <Text>No Data</Text>
        }
        return (
                <ScrollView>
                    {content}
                </ScrollView>
        )
    }
}
const TextContainer = ({label, info}) => <Text style={styles.text}>{label}: {info}</Text>
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#000000', paddingTop: 20 },
    HomeWorldInfoContainer: { padding: 20},
    text: {color: '#ffe81f'},
    closeButton: { paddingTop: 20, color: 'white', fontSize: 14}
})

export default WayFair3D