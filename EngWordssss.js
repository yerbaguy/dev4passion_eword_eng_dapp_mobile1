import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import {ethers} from 'ethers';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"


import  EWordContractt  from './utils/EWordEngContract.json';


const EngWordssss = () => {

    // const [engwords, setEngwords] = useState([]);
    const [engwords, setEngwords] = useState();

    // const provider = new ethers.providers.JsonRpcProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
    const provider = new ethers.providers.getDefaultProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
    const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );




    useEffect(()=> {

        // const provider = new ethers.providers.JsonRpcProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
        const provider = new ethers.providers.getDefaultProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);

        console.log("provider", provider);

        const signer = new ethers.Wallet("d6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd", provider);

        console.log("signer", signer);

        // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, signer );
        const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );

        console.log("engwordcontract", engwordcontract);

        const engwords = engwordcontract.getEWords();
        console.log("engwords", engwords[0]);

        getewords();

        // const engwords = engwordcontract.getEWords();
        // console.log("engwords", engwords[0]);

        // (
        //     async() => {
        //         try {

        //             const provider = new ethers.providers.JsonRpcProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
        // console.log("provider", provider);

        // const signer = new ethers.Wallet("d6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd", provider);

        // console.log("signer", signer);

        // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, signer );

        // console.log("engwordcontract", engwordcontract);

        // const engwords = engwordcontract.getEWords();
        // console.log("engwords", engwords[0]);
                  
        //         } catch (error) {
        //             console.log("error", error);
        //         }

        //     }
        // )



    },[])

    const getewords = async () => {

        try {
            const engwords = await engwordcontract.getEWords();
            setEngwords(engwords);
            console.log("engwords", engwords);    
            
        } catch (error) {
            console.log("error", error);
        }
    }

    return (

        // <View>
        //     <Text>EngWordssss</Text>
        // </View>


        <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnEngWordss</Text>
        {/* <Text>{ engword }</Text> */}


        <FlatList 
        data={engwords}
        renderItem={({item}) => (
            <View style={styles.item}>
                {/* <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity> */}
                {/* <TouchableOpacity><Text>{item.id}{item.engword}</Text></TouchableOpacity> */}
                <TouchableOpacity><Text>{item.engword}</Text></TouchableOpacity>

            </View>
        )}
        />
        


    </View>
    </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    container: {
      flex: 40,
    },
    sectionContainer: {
      marginTop: 40,
      paddingHorizontal: 30,
    },
    item: {
      // f6f6f6f
      // backgroundColor: '#f9c2ff',
      backgroundColor: '#b0c4de',
      padding: 40,
      marginVertical: 20,
      marginHorizontal: 16,
    }

});

export default EngWordssss;