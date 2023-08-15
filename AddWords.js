import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

import {ethers} from "ethers"

// import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'
// import EWordEngContract from '../artifacts/contracts/EWordEngWordContract.sol/EWordEngWordContract.json'

const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

import EWordEngContract from './utils/EWordEngWordContract.json'

import  EWordContractt  from './utils/EWordEngWordContract.json';


const AddWords = () => {

    const [engWord, setEngWord] = useState('')
    const [engWordExplained, setEngWordExplained] = useState('')
    const [engWordPronounciation, setEngWordPronounciation] = useState('')
    const [whetherTheWordExists, setWhetherTheWordExists] = useState('')

    const [plWord, setPlWord] = useState('')
    // const [engW, setEngW] = useState('')
    // const [plW, setplW] = useState('')

    // const [engW, setEngW] = useState([])
    const [engW, setEngW] = useState('')
    const [engWExplained, setEngWExplained] = useState('')
    const [plW, setplW] = useState([])

    const [englishWord, setEnglishWord] = useState('')
    const [englishWordPronounciation, setEnglishWordPronounciation] = useState('')
    const [englishWordExplained, setEnglishWordExplained] = useState('')
     const [whetherEWordExists2orNot, setwhetherEWordExists2orNot] = useState('')
     const [isdisabled, setIsDisabled] = useState(true)
    //let whetherEWordExists2orNot = ""
    

    const [engWToCheck, setEngWToCheck] = useState('')
    // const [engWToCheck, setEngWToCheck] = useState([])
    // const [data, setData] = useState('')
    //const [data, setData] = useState(1)
    const [data, setData] = useState([])

    const [ewordsCount, setEWordsCount] = useState(0)
    let ewordscount
    // let datacount = 1
    let datacount = 0;
    let countallewords_length

    const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
    const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );

    useEffect(()=>{

        // const provider = new ethers.providers.getDefaultProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
        const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
        console.log("provider", provider);

        const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );

        console.log("engwordcontract", engwordcontract);

    },[])

    const getWord = (val) => {

        console.log(val);
        setEngWord(val)

        const eword = {
            engword: engWord,
            engword_explained: engWordExplained,
            engword_pronounciation: engWordPronounciation
        };

        whetherEWordExists2(eword.engword);



    }

    const whetherEWordExists2 = async (engword) => {

        // try {
        
        //     const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
        //     console.log("provider", provider);
    
        //     const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );
    
        //     console.log("whetherEWordExists2-engwordcontract", engwordcontract);



        //     // return erc20.whetherEWordExists1(engword).then((result) => {
        //     return engwordcontract.whetherEWordExists1(engword).then((result) => {

        //         // console.log("whetherEWordExists2", result[1].engword);
        //         console.log("whetherEWordExists2", result);
        //        //console.log("whetherEWordExists2", result[0].engword);
    
               
    
        //         // let resultt = result[1].engword;
        //         // setWhetherTheWordExists(resultt);
        //         let resultt = result[0].engword;
   
        //         // setWhetherTheWordExists(resultt);
        //         // console.log("whetherTheWordExists", whetherTheWordExists)
                
        //         console.log("whetherTheWordExists", resultt)
    
        //        //
        //         // let resultt = result[1].engword;
        //         // setWhetherTheWordExists(result[1].engword);
        //         // result_engw = resultt;
        //        //
    
               
            
            
        //         //setWhetherTheWordExists(transaction);
    
        //     }).catch('error', console.error);
    



        //     // const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
        //     // console.log("whetherEWordExists2-provider", provider);

        //     // const erc20 = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider);

        //     // console.log("erc20", erc20);
    
            
        // } catch (error) {

        //     console.log("error", error);
            
        // }

        console.log("whetherEWordExists2", engword);

        const whetherwordexists = await engwordcontract.whetherEWordExists1(engword);
        console.log("whetherwordexists", whetherwordexists);


    }

    return (
        <View style={styles.container}>
            <Text>AddWords</Text>
            <Text>Enter an english word to check whether it already in the base</Text>
            <TextInput 
            style={styles.input} 
            placeholder=' i.e. important'
            // onChangeText={(val) => setEngWord(val)}/>
            onChangeText={(val) => getWord(val)}/>

            <Text>engword: {engWord}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        border: 1,
        borderColor: '777',
        padding: 8,
        margin: 10,
        width: 200,
    },
});

export default AddWords;