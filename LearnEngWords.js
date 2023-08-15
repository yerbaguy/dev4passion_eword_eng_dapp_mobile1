import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import {ethers} from 'ethers';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"


import  EWordContractt  from './utils/EWordEngContract.json';







const LearnEngWords = () => {

    const [engword, setEngword] = useState(); 
    const [correct_engword_explained, setCorrect_engword_explained] = useState();
    const [engword_array, setEngword_array] = useState([]);

    const provider = new ethers.providers.getDefaultProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
    const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );


    useEffect(()=>{

        getewordsresult();
        engwordsRandom();

    },[])


    const getewordsresult = async () => {

           let engwords_result = 1;

           try {

            const engwords = await engwordcontract.getEWords();
            console.log("engwords", engwords.length);
            engwords_result = engwords.length;
            console.log("engwords_result", engwords_result);
            engwordsRandom(engwords_result);
            
            // return engwords_result = engwords.length;
            return engwords_result;      
            
           } catch (error) {
            console.log("error", error);
           }
    }

    // const engwordsRandom = () => {
    //     let engwordsresult = 0;
    //     engwordsresult = getewordsresult();
    //     console.log("engwordsresultRandom", engwordsresult);
    // }

    const engwordsRandom = (engwordsresult) => {
        // engwordsresult = 0;
        //engwordsresult = getewordsresult();
        let random_eword = 0;
        console.log("engwordsresultRandom", engwordsresult);
        random_eword = random_ewords(engwordsresult);
        console.log("random_eword", random_eword);
        getRandomWord(random_eword);
        getEWords1(random_eword);
       // return random_eword;
    }

    const  getRandomWord = async (random_eword) => {
        let engword = "";

        console.log("getRandomWord", random_eword);
        const geteword = await engwordcontract.getEngWordEngExplainedAndPronounciation(random_eword);
        console.log("eword", geteword);



                console.log("geteword--", geteword[0]);
                engword = geteword[0];
                setEngword(engword);

                console.log("geteword_correct_result--", geteword[2]);
                let correct_eng_explained = geteword[2];
                setCorrect_engword_explained(geteword[2])



    }

    const getEWords1 = async (random_eword) => {

        console.log("getEWords1", random_eword);

        const getewords1 = await engwordcontract.getEWords1(random_eword);
        console.log("getewords1", getewords1);
        setEngword_array(getewords1);

    }
    

    const random_ewords = (result) => {
        console.log("random_ewords_result_l--", result);

        var data = result;     
     
        const min = Math.ceil(0);
        // max = Math.floor(data.length);
      const max = Math.floor(data);
    
        // return Math.floor(Math.random() * (max - min) + min);
        const dataa =  Math.floor(Math.random() * (max - min) + min);

        console.log("random_ewords_dataa--", dataa);

       
        //eword_result(dataa);
       
        //// ewordresult(data);

        return dataa;
       // ewordresult(dataa);

    }

    const pressHandler = (item) => {

        let result

        console.log("item", item);
        // console.log("correct_engword_explained", correct_engword_explained);
         console.log(item===correct_engword_explained);
              
        if (item===correct_engword_explained) {
            console.log("OK")
            getewordsresult();
        } else {
            console.log("NO")
        }

    }



    return (

        // <View>
        //     <Text>LearnEngWords</Text>
        // </View>

        <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnEngWordss</Text>
        <Text>{ engword }</Text>


        <FlatList 
        data={engword_array}
        renderItem={({item}) => (
            <View style={styles.item}>
                {/* <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity> */}
                <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.engword_explained}</Text></TouchableOpacity>

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

export default LearnEngWords;